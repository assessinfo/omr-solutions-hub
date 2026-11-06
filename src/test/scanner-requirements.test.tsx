import { describe, expect, it } from "vitest";
import { scannerRequirements } from "@/lib/scanner-requirements";

describe("scanner buyer requirements", () => {
  it("accepts volume, forms and capture requirements together", () => {
    const input = { volume: "30,000 sheets in 2 days", forms: "A4 pencil answer sheets", requirements: "QR codes and double-sided images" };
    expect(scannerRequirements.parse(input)).toEqual(input);
  });
  it("rejects missing form and scanning requirements", () => {
    expect(scannerRequirements.safeParse({ volume: "30,000 sheets in 2 days" }).success).toBe(false);
  });
});