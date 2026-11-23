import { createServerFn } from "@tanstack/react-start";
import { demoBookingSchema } from "./demo-booking";

export const submitDemoBooking = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => demoBookingSchema.parse(input))
  .handler(async ({ data }) => {
    // Bots fill the hidden field; pretend success without storing anything.
    if (data.website) return { ok: true as const, error: "" };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("demo_bookings").insert({
      name: data.name,
      phone: data.phone,
      email: data.email.toLowerCase(),
      product: data.product,
      preferred_at: data.preferredAt,
      page_path: data.pagePath ?? null,
    });
    if (error) {
      console.error("demo booking insert failed", error.message);
      return { ok: false as const, error: "We couldn't save your request. Please try again or message us on WhatsApp." };
    }
    return { ok: true as const, error: "" };
  });
