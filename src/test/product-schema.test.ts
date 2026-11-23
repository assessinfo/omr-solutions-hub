import { describe, expect, it } from "vitest";
import { products } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

// Product pages are quote-only: no public prices, reviews or ratings, so they
// must NOT emit Product / SoftwareApplication / offers JSON-LD (Google's
// "Product snippets" requirement). They keep only the BreadcrumbList.
describe("product structured data", () => {
  it("product pages emit no Product, SoftwareApplication or offers schema", () => {
    for (const page of products) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Products", item: `${SITE_URL}/products` },
          { "@type": "ListItem", position: 2, name: page.name, item: `${SITE_URL}/products/${page.slug}` },
        ],
      };
      const json = JSON.stringify(schema);
      expect(json, page.slug).not.toContain('"Product"');
      expect(json, page.slug).not.toContain("SoftwareApplication");
      expect(json, page.slug).not.toContain('"offers"');
    }
    expect(products.length).toBeGreaterThan(5);
  });

  it("product pages still emit a correct BreadcrumbList", () => {
    for (const page of products) {
      const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Products", item: `${SITE_URL}/products` },
          { "@type": "ListItem", position: 2, name: page.name, item: `${SITE_URL}/products/${page.slug}` },
        ],
      };
      expect(breadcrumb["@type"], page.slug).toBe("BreadcrumbList");
      expect(breadcrumb.itemListElement, page.slug).toHaveLength(2);
      expect(breadcrumb.itemListElement[1]?.name, page.slug).toBe(page.name);
      expect(breadcrumb.itemListElement[1]?.item, page.slug).toBe(
        `https://omrsolutions.co.in/products/${page.slug}`,
      );
    }
  });
});
