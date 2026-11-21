import { describe, expect, it, vi } from "vitest";
import { collectSitemapPosts, postLastmod } from "@/lib/sitemap";
import { SITE_URL, DEFAULT_SHARE_IMAGE } from "@/lib/site";

describe("Production SEO URL configuration", () => {
  it("uses the requested canonical production domain", () => {
    expect(SITE_URL).toBe("https://omrsolutions.co.in");
    expect(new URL(DEFAULT_SHARE_IMAGE).origin).toBe(SITE_URL);
  });
});

describe("Sitemap article dates and complete pagination", () => {
  it("uses an article's publication date, never a generation date", () => {
    expect(postLastmod("2026-11-19T09:30:00Z")).toBe("2026-11-19T09:30:00.000Z");
    expect(postLastmod(null)).toBeUndefined();
    expect(postLastmod("invalid")).toBeUndefined();
  });
  it("continues through multiple batches to include every article", async () => {
    const fetchPage = vi.fn(async (offset: number) => offset === 0
      ? Array.from({ length: 1000 }, (_, i) => ({ slug: `article-${i}`, published_at: null }))
      : offset === 1000 ? [{ slug: "last-article", published_at: null }] : []);
    const posts = await collectSitemapPosts(fetchPage);
    expect(posts).toHaveLength(1001);
    expect(posts.at(-1)?.slug).toBe("last-article");
    expect(fetchPage.mock.calls.map(([offset]) => offset)).toEqual([0, 1000, 1001]);
  });
  it("rejects a later-batch failure instead of returning partial articles", async () => {
    const fetchPage = vi.fn(async (offset: number) => {
      if (offset > 0) throw new Error("Query failed");
      return [{ slug: "first-article", published_at: null }];
    });
    await expect(collectSitemapPosts(fetchPage)).rejects.toThrow("Query failed");
  });
});