import { describe, expect, it } from "vitest";
import { legacyRedirect } from "@/lib/legacy-redirects";

describe("legacy omr_web redirects", () => {
  it("maps old about page", () => expect(legacyRedirect("about_omr_solutions.php")).toBe("/about"));
  it("is case-insensitive (Career.php)", () => expect(legacyRedirect("Career.php")).toBe("/careers"));
  it("handles backslash paths", () => expect(legacyRedirect("contact\\contact_us.php")).toBe("/contact"));
  it("maps e-waste page", () => expect(legacyRedirect("solutions/government/new_ewaste_management.php")).toBe("/solutions/e-waste"));
  it("maps older scanner URL that ranks on Google", () =>
    expect(legacyRedirect("products/omr_scanners/index.php")).toBe("/products/omr-scanners"));
  it("maps older carbonless sheet URL", () =>
    expect(legacyRedirect("products/omr_sheets/carbonless_answer_sheet/index.php")).toBe("/products/omr-sheets"));
  it("falls back to home for unknown pages", () => expect(legacyRedirect("nope.php")).toBe("/"));
});
