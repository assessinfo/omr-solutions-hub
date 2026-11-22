import { describe, expect, it } from "vitest";
import { company } from "@/lib/content";
import { officeDirectionsUrl, officeMapEmbedUrl, officeSearchUrl } from "@/lib/office-maps";

const DELHI = "DLF Prime Towers, Okhla Industrial Area Phase 1, New Delhi 110020";

describe("Office Google Maps links", () => {
  it("builds a key-free embed URL so maps render on every domain", () => {
    const url = new URL(officeMapEmbedUrl(DELHI));
    expect(url.origin).toBe("https://www.google.com");
    expect(url.pathname).toBe("/maps");
    expect(url.searchParams.get("q")).toBe(DELHI);
    expect(url.searchParams.get("output")).toBe("embed");
    expect(url.searchParams.has("key")).toBe(false);
  });

  it("builds a directions URL pointing at the office, not a blank map", () => {
    const url = new URL(officeDirectionsUrl(DELHI));
    expect(url.pathname).toBe("/maps/dir/");
    expect(url.searchParams.get("api")).toBe("1");
    expect(url.searchParams.get("destination")).toBe(DELHI);
  });

  it("builds a search URL that opens the office in Google Maps", () => {
    const url = new URL(officeSearchUrl(DELHI));
    expect(url.pathname).toBe("/maps/search/");
    expect(url.searchParams.get("query")).toBe(DELHI);
  });

  it("gives every office a map query that includes its city and pin code", () => {
    expect(company.offices.length).toBe(2);
    for (const o of company.offices) {
      expect(o.mapQuery).toContain(o.city);
      expect(o.mapQuery).toMatch(/\d{6}/);
    }
    expect(company.offices.map((o) => o.city)).toEqual(["New Delhi", "Mumbai"]);
  });
});
