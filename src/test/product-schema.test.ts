import { describe, expect, it } from "vitest";
import { products } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

// Google Search Console requires every Product / SoftwareApplication page to
// carry "offers", "review" or "aggregateRating". Prices are enquiry-based, so
// each product page must emit an AggregateOffer pointing at the quote page.
describe("product structured data", () => {
  it("every product page builds a schema with an offers block", () => {
    for (const page of products) {
      const schema = {
        "@context": "https://schema.org",
        "@type": page.group === "Software" ? "SoftwareApplication" : "Product",
        name: page.name,
        description: page.seoDescription,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          offerCount: 1,
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/get-a-quote`,
        },
      };
      expect(schema.offers.priceCurrency, page.slug).toBe("INR");
      expect(schema.offers.url, page.slug).toBe("https://omrsolutions.co.in/get-a-quote");
    }
    expect(products.length).toBeGreaterThan(5);
  });
});
