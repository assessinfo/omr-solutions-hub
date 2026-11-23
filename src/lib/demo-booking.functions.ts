import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { demoBookingSchema, demoSlotQuerySchema, isBookableSlot, isDemoHost, istSlotInstant } from "./demo-booking";

/** Booking calendar (n8n) endpoints. Called only from the server so visitors never talk to it directly. */
const BOOKING_API = "https://omrios.app.n8n.cloud/webhook";
const TIMEOUT_MS = 15_000;
const UNAVAILABLE = "Online booking is unavailable right now. Please try again shortly or message us on WhatsApp.";

const salespeopleResponse = z.object({
  salespeople: z.array(
    z.object({
      id: z.coerce.string(),
      name: z.string(),
      position: z.string().nullish(),
      photo: z.string().nullish(),
    }),
  ),
});

const slotsResponse = z.object({
  ok: z.boolean().optional(),
  error: z.string().optional(),
  slots: z.array(z.object({ time: z.string(), label: z.string().optional() })).default([]),
});

export type DemoHost = { id: string; name: string; position: string; photo: string };
export type DemoSlot = { time: string; label: string };

const tidyName = (n: string) =>
  n.replace(/\s+/g, " ").trim().toLowerCase().replace(/\b\p{L}/gu, (c) => c.toUpperCase());

const safePhoto = (url: string | null | undefined) => {
  if (!url) return "";
  try {
    const u = new URL(encodeURI(url));
    return u.protocol === "https:" ? u.toString() : "";
  } catch {
    return "";
  }
};

async function fetchSlots(salespersonId: string, date: string) {
  const url = `${BOOKING_API}/omr-demo-slots?salesperson_id=${encodeURIComponent(salespersonId)}&date=${encodeURIComponent(date)}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  const parsed = slotsResponse.safeParse(await res.json().catch(() => null));
  if (!parsed.success) throw new Error(`slots: unexpected response (${res.status})`);
  const slots: DemoSlot[] = parsed.data.slots
    .filter((s) => /^\d{2}:\d{2}$/.test(s.time) && isBookableSlot(istSlotInstant(date, s.time)))
    .map((s) => ({ time: s.time, label: s.label ?? s.time }));
  return { ok: parsed.data.ok !== false, error: parsed.data.error ?? "", slots };
}

export const getDemoHosts = createServerFn({ method: "GET" }).handler(async (): Promise<{ hosts: DemoHost[]; error: string }> => {
  try {
    const res = await fetch(`${BOOKING_API}/omr-demo-salespeople`, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    const parsed = salespeopleResponse.safeParse(await res.json().catch(() => null));
    if (!res.ok || !parsed.success) throw new Error(`salespeople: unexpected response (${res.status})`);
    const hosts = parsed.data.salespeople
      .filter((p) => isDemoHost(p.id))
      .map((p) => ({ id: p.id, name: tidyName(p.name), position: (p.position ?? "").trim(), photo: safePhoto(p.photo) }));
    return { hosts, error: hosts.length ? "" : UNAVAILABLE };
  } catch (e) {
    console.error("demo hosts fetch failed", e instanceof Error ? e.message : e);
    return { hosts: [], error: UNAVAILABLE };
  }
});

export const getDemoSlots = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => demoSlotQuerySchema.parse(input))
  .handler(async ({ data }): Promise<{ slots: DemoSlot[]; error: string }> => {
    try {
      const r = await fetchSlots(data.salespersonId, data.date);
      return { slots: r.slots, error: r.ok ? "" : r.error };
    } catch (e) {
      console.error("demo slots fetch failed", e instanceof Error ? e.message : e);
      return { slots: [], error: UNAVAILABLE };
    }
  });

export const submitDemoBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => demoBookingSchema.parse(input))
  .handler(async ({ data }) => {
    // Bots fill the hidden field; pretend success without booking anything.
    if (data.website) return { ok: true as const, error: "" };

    try {
      // Re-check the time is still free right before booking.
      const free = await fetchSlots(data.salespersonId, data.date);
      if (!free.slots.some((s) => s.time === data.time)) {
        return { ok: false as const, error: "That time was just taken. Please pick another time.", taken: true };
      }

      const message = [data.product ? `Interested in: ${data.product}` : "", data.message ?? ""].filter(Boolean).join("\n");
      const res = await fetch(`${BOOKING_API}/omr-demo-book`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        body: JSON.stringify({
          name: data.name,
          email: data.email.toLowerCase(),
          phone: data.phone,
          company: data.company ?? "",
          message,
          salesperson_id: data.salespersonId,
          date: data.date,
          time: data.time,
          solution: data.solution,
        }),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || body.ok === false) {
        console.error("demo booking rejected", res.status, body.error);
        return { ok: false as const, error: body.error || UNAVAILABLE };
      }
    } catch (e) {
      console.error("demo booking failed", e instanceof Error ? e.message : e);
      return { ok: false as const, error: UNAVAILABLE };
    }

    // Keep a local copy of confirmed bookings; the calendar stays the source of truth.
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      await supabaseAdmin.from("demo_bookings").insert({
        name: data.name,
        phone: data.phone,
        email: data.email.toLowerCase(),
        product: data.solution,
        preferred_at: istSlotInstant(data.date, data.time),
        page_path: data.pagePath ?? null,
        status: "confirmed",
      });
    } catch (e) {
      console.error("demo booking local copy failed", e instanceof Error ? e.message : e);
    }
    return { ok: true as const, error: "" };
  });
