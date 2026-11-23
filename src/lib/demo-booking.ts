import { z } from "zod";

/** Demos run Monday–Friday, 10:00–18:00 India time, in 30-minute slots. India has no daylight saving (UTC+05:30). */
export const DEMO_TIME_ZONE = "Asia/Kolkata";
const IST_OFFSET_MIN = 330;
export const DEMO_DAYS = [1, 2, 3, 4, 5] as const; // Mon–Fri (0 = Sunday)
export const DEMO_OPEN = "10:00";
export const DEMO_CLOSE = "18:00"; // last slot starts 30 minutes before close
export const DEMO_SLOT_MIN = 30;
const MIN_NOTICE_MIN = 60;
const MAX_DAYS_AHEAD = 60;

export const demoProducts = [
  "ISDOX Document Management",
  "IS10 Online Exams",
  "OMR Scanners",
  "Remark Office OMR",
  "OMR Answer Sheets",
  "Document & Book Scanners",
  "Not sure yet",
] as const;
export type DemoProduct = (typeof demoProducts)[number];

const toMinutes = (clock: string) => Number(clock.slice(0, 2)) * 60 + Number(clock.slice(3));

/** IST calendar date (YYYY-MM-DD) of an instant. */
export function istDate(instant: Date): string {
  return new Date(instant.getTime() + IST_OFFSET_MIN * 60_000).toISOString().slice(0, 10);
}

/** Weekday (0 = Sunday) of an IST date string. */
export function istWeekday(date: string): number {
  return new Date(`${date}T00:00:00Z`).getUTCDay();
}

/** All slot start instants (ISO, UTC) for an IST date, ignoring notice rules. */
export function slotsForDate(date: string): string[] {
  if (!(DEMO_DAYS as readonly number[]).includes(istWeekday(date))) return [];
  const midnightUtc = Date.parse(`${date}T00:00:00Z`) - IST_OFFSET_MIN * 60_000;
  const out: string[] = [];
  for (let m = toMinutes(DEMO_OPEN); m + DEMO_SLOT_MIN <= toMinutes(DEMO_CLOSE); m += DEMO_SLOT_MIN) {
    out.push(new Date(midnightUtc + m * 60_000).toISOString());
  }
  return out;
}

/** Slots a visitor may still choose on a date. */
export function availableSlots(date: string, now: Date = new Date()): string[] {
  const earliest = now.getTime() + MIN_NOTICE_MIN * 60_000;
  return slotsForDate(date).filter((s) => Date.parse(s) >= earliest);
}

/** Next `count` bookable IST dates, starting today. */
export function upcomingDemoDates(now: Date = new Date(), count = 10): string[] {
  const dates: string[] = [];
  const start = Date.parse(`${istDate(now)}T00:00:00Z`);
  for (let d = 0; d <= MAX_DAYS_AHEAD && dates.length < count; d++) {
    const date = new Date(start + d * 86_400_000).toISOString().slice(0, 10);
    if (availableSlots(date, now).length > 0) dates.push(date);
  }
  return dates;
}

export function isBookableSlot(iso: string, now: Date = new Date()): boolean {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return false;
  if (t > now.getTime() + MAX_DAYS_AHEAD * 86_400_000) return false;
  const instant = new Date(t).toISOString();
  return availableSlots(istDate(new Date(t)), now).includes(instant);
}

export function formatSlotTime(iso: string): string {
  return new Intl.DateTimeFormat("en-IN", { timeZone: DEMO_TIME_ZONE, hour: "numeric", minute: "2-digit", hour12: true }).format(new Date(iso));
}

export function formatDemoDate(date: string, style: "short" | "long" = "short"): string {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "UTC",
    weekday: style === "long" ? "long" : "short",
    day: "numeric",
    month: style === "long" ? "long" : "short",
  }).format(new Date(`${date}T00:00:00Z`));
}

export const demoBookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9 ()-]{7,20}$/, "Please enter a valid phone number")
    .refine((v) => v.replace(/\D/g, "").length >= 7, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  product: z.enum(demoProducts),
  preferredAt: z.string().refine((v) => isBookableSlot(v), "Please pick an available time (Mon–Fri, 10 AM–6 PM IST)"),
  pagePath: z.string().max(300).optional(),
  /** Honeypot: real visitors never fill this in. */
  website: z.string().max(0).optional(),
});
export type DemoBookingInput = z.infer<typeof demoBookingSchema>;

/** Pick a sensible default product from the page the visitor is on. */
export function productForPath(path: string): DemoProduct {
  if (path.startsWith("/document-management") || path.includes("document-management")) return "ISDOX Document Management";
  if (path.startsWith("/online-exam")) return "IS10 Online Exams";
  if (/^\/products\/(omr-scanners|sr\d)/.test(path)) return "OMR Scanners";
  if (path.startsWith("/products/remark")) return "Remark Office OMR";
  if (path.startsWith("/products/omr-sheets")) return "OMR Answer Sheets";
  if (/^\/products\/(document-scanners|book-scanners)/.test(path)) return "Document & Book Scanners";
  return "Not sure yet";
}
