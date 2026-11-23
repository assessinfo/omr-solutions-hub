import { describe, expect, it } from "vitest";
import { availableSlots, demoBookingSchema, formatSlotTime, isBookableSlot, istSlotInstant, slotsForDate, solutionForProduct, upcomingDemoDates } from "@/lib/demo-booking";

// Monday 23 Nov 2026, 08:00 IST (02:30 UTC)
const MON_MORNING = new Date("2026-11-23T02:30:00Z");

describe("demo booking hours (Mon–Fri, 10 AM–6 PM IST)", () => {
  it("offers 30-minute slots from 10:00 to 17:30 IST on weekdays", () => {
    const slots = slotsForDate("2026-11-24"); // Tuesday
    expect(slots).toHaveLength(16);
    expect(formatSlotTime(slots[0]!).toLowerCase()).toBe("10:00 am");
    expect(formatSlotTime(slots[15]!).toLowerCase()).toBe("5:30 pm");
    expect(slots[0]).toBe("2026-11-24T04:30:00.000Z");
  });

  it("offers nothing on Saturday or Sunday", () => {
    expect(slotsForDate("2026-11-28")).toEqual([]);
    expect(slotsForDate("2026-11-29")).toEqual([]);
  });

  it("never suggests weekend dates", () => {
    const dates = upcomingDemoDates(MON_MORNING, 10);
    expect(dates).toHaveLength(10);
    for (const d of dates) expect([1, 2, 3, 4, 5]).toContain(new Date(`${d}T00:00:00Z`).getUTCDay());
  });

  it("hides slots less than an hour away", () => {
    const at1015 = new Date("2026-11-23T04:45:00Z"); // 10:15 IST
    expect(availableSlots("2026-11-23", at1015)[0]).toBe("2026-11-23T06:00:00.000Z"); // 11:30 IST
  });

  it("rejects times outside hours, off the half-hour, or in the past", () => {
    expect(isBookableSlot("2026-11-24T04:30:00.000Z", MON_MORNING)).toBe(true); // Tue 10:00
    expect(isBookableSlot("2026-11-24T12:30:00.000Z", MON_MORNING)).toBe(false); // Tue 18:00
    expect(isBookableSlot("2026-11-24T04:00:00.000Z", MON_MORNING)).toBe(false); // Tue 09:30
    expect(isBookableSlot("2026-11-24T04:40:00.000Z", MON_MORNING)).toBe(false); // Tue 10:10
    expect(isBookableSlot("2026-11-28T04:30:00.000Z", MON_MORNING)).toBe(false); // Sat 10:00
    expect(isBookableSlot("2026-11-20T04:30:00.000Z", MON_MORNING)).toBe(false); // past Friday
  });

  it("requires name, phone, email and a time", () => {
    const base = { name: "Asha Rao", phone: "+91 98765 43210", email: "asha@example.com", solution: "Examination Services", salespersonId: "1", date: "2099-11-24" };
    expect(demoBookingSchema.safeParse({ ...base, time: "" }).success).toBe(false);
    expect(demoBookingSchema.safeParse({ ...base, email: "nope", time: "10:30" }).success).toBe(false);
    expect(demoBookingSchema.safeParse({ ...base, phone: "abc", time: "10:30" }).success).toBe(false);
  });
});

describe("booking calendar fields", () => {
  const nextTuesday = () => {
    const d = new Date(Date.now() + 2 * 86_400_000);
    while (d.getUTCDay() !== 2) d.setUTCDate(d.getUTCDate() + 1);
    return d.toISOString().slice(0, 10);
  };
  const valid = () => ({
    name: "Asha Rao", phone: "+91 98765 43210", email: "asha@example.com",
    solution: "Examination Services", salespersonId: "1", date: nextTuesday(), time: "10:30",
  });

  it("accepts a valid booking", () => {
    expect(demoBookingSchema.safeParse(valid()).success).toBe(true);
  });

  it("only accepts Examination Services or Digitisation Services", () => {
    expect(demoBookingSchema.safeParse({ ...valid(), solution: "Digitisation Services" }).success).toBe(true);
    expect(demoBookingSchema.safeParse({ ...valid(), solution: "OMR Scanners" }).success).toBe(false);
  });

  it("only accepts the sales staff as demo hosts", () => {
    for (const id of ["1", "12", "1466"]) expect(demoBookingSchema.safeParse({ ...valid(), salespersonId: id }).success).toBe(true);
    expect(demoBookingSchema.safeParse({ ...valid(), salespersonId: "1526" }).success).toBe(false); // Github Bot
  });

  it("rejects times outside Mon–Fri 10 AM–6 PM IST", () => {
    expect(demoBookingSchema.safeParse({ ...valid(), time: "18:00" }).success).toBe(false);
    expect(demoBookingSchema.safeParse({ ...valid(), time: "09:30" }).success).toBe(false);
  });

  it("converts an IST date and time to the right instant", () => {
    expect(istSlotInstant("2026-11-26", "10:30")).toBe("2026-11-26T05:00:00.000Z");
  });

  it("maps document products to Digitisation and the rest to Examination", () => {
    expect(solutionForProduct("ISDOX Document Management")).toBe("Digitisation Services");
    expect(solutionForProduct("Document & Book Scanners")).toBe("Digitisation Services");
    expect(solutionForProduct("IS10 Online Exams")).toBe("Examination Services");
    expect(solutionForProduct("OMR Scanners")).toBe("Examination Services");
  });
});
