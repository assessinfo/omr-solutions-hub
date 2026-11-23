import { describe, expect, it } from "vitest";
import { omrSoftwareMenu, printingMenu, products } from "@/lib/content";

describe("grouped menus", () => {
  it("lists the OMR Software tools in the requested order", () => {
    expect(omrSoftwareMenu.map((t) => t.label)).toEqual([
      "Remark Office OMR",
      "Remark Classic OMR",
      "Remark Test Grading",
      "Optic View for Sekonic",
      "Optic View for Image",
    ]);
  });

  it("lists the three Printing pages", () => {
    expect(printingMenu.map((t) => t.label)).toEqual([
      "OMR Sheet Design",
      "OMR Sheet Printing",
      "Marksheet & Certificate Printing",
    ]);
  });

  it("points every menu entry at a real catalogue page", () => {
    for (const t of [...omrSoftwareMenu, ...printingMenu]) {
      expect(products.some((p) => p.slug === t.slug), t.slug).toBe(true);
    }
  });
});
