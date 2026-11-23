import { describe, expect, it } from "vitest";
import { buildSearchIndex, searchSite } from "@/lib/site-search";

const index = buildSearchIndex([
  { slug: "didac-2025-new-delhi-exhibition", title: "DIDAC 2025, New Delhi", excerpt: "Our stall at Yashobhoomi", text: "We showcased the SR-55 scanner and IS10live." },
]);

describe("site search", () => {
  it("finds a scanner model whether or not the visitor types the hyphen", () => {
    expect(searchSite(index, "sr8000")[0]?.href).toBe("/products/sr8000-hybrid-scanner");
    expect(searchSite(index, "SR-8000")[0]?.href).toBe("/products/sr8000-hybrid-scanner");
  });

  it("searches article text, not only titles", () => {
    expect(searchSite(index, "yashobhoomi").map((r) => r.href)).toContain("/blog/didac-2025-new-delhi-exhibition");
  });

  it("requires every typed word to match", () => {
    expect(searchSite(index, "remark zzzqqq")).toEqual([]);
  });

  it("sends document management results to its own section", () => {
    const hrefs = searchSite(index, "isdox").map((r) => r.href);
    expect(hrefs).toContain("/document-management");
    expect(hrefs).not.toContain("/products/document-management");
  });

  it("returns nothing for an empty query", () => {
    expect(searchSite(index, "   ")).toEqual([]);
  });
});
