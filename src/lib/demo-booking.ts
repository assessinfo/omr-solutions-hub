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

/** The booking calendar only accepts these two solutions. */
export const demoSolutions = ["Examination Services", "Digitisation Services"] as const;
export type DemoSolution = (typeof demoSolutions)[number];

/**
 * People visitors may pick as their demo host. The staff list from the booking
 * service also contains non-sales colleagues, so only these IDs are shown and accepted.
 */
export const DEMO_HOST_IDS = ["1", "12", "1466"] as const;
export const isDemoHost = (id: string) => (DEMO_HOST_IDS as readonly string[]).includes(id);

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

/** UTC instant (ISO) of an IST calendar date + "HH:MM" clock time. */
export function istSlotInstant(date: string, time: string): string {
  const midnightUtc = Date.parse(`${date}T00:00:00Z`) - IST_OFFSET_MIN * 60_000;
  return new Date(midnightUtc + toMinutes(time) * 60_000).toISOString();
}

export const demoSlotQuerySchema = z.object({
  salespersonId: z.string().regex(/^\d{1,10}$/).refine(isDemoHost, "Please choose who should run your demo"),
  date: z.string().regex(DATE_RE),
});

export const demoBookingSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
    phone: z
      .string()
      .trim()
      .regex(/^\+?[0-9 ()-]{7,20}$/, "Please enter a valid phone number")
      .refine((v) => v.replace(/\D/g, "").length >= 7, "Please enter a valid phone number"),
    email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
    company: z.string().trim().max(150, "Company name is too long").optional(),
    message: z.string().trim().max(1000, "Message is too long").optional(),
    solution: z.enum(demoSolutions, { message: "Please choose a solution" }),
    salespersonId: z.string().refine(isDemoHost, "Please choose who should run your demo"),
    date: z.string().regex(DATE_RE, "Please pick a date"),
    time: z.string().regex(TIME_RE, "Please pick a time"),
    product: z.enum(demoProducts).optional(),
    pagePath: z.string().max(300).optional(),
    /** Honeypot: real visitors never fill this in. */
    website: z.string().max(0).optional(),
  })
  .refine((v) => !DATE_RE.test(v.date) || !TIME_RE.test(v.time) || isBookableSlot(istSlotInstant(v.date, v.time)), {
    message: "Please pick an available time (Mon–Fri, 10 AM–6 PM IST)",
    path: ["time"],
  });
export type DemoBookingInput = z.infer<typeof demoBookingSchema>;

/** Which of the two bookable solutions a product belongs to. */
export function solutionForProduct(product: DemoProduct): DemoSolution {
  return product === "ISDOX Document Management" || product === "Document & Book Scanners"
    ? "Digitisation Services"
    : "Examination Services";
}

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
