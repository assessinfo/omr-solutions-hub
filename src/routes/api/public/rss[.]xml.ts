import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

import { SITE_URL } from "@/lib/site";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const Route = createFileRoute("/api/public/rss.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const url = process.env["SUPABASE_URL"];
        const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
        if (!url || !key) return new Response("Feed unavailable", { status: 503 });
        const client = createClient<Database>(url, key, {
          auth: { persistSession: false, autoRefreshToken: false },
          global: {
            fetch: (input, init) => {
              const headers = new Headers(init?.headers);
              if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
              headers.set("apikey", key);
              return fetch(input, { ...init, headers });
            },
          },
        });
        const { data, error } = await client
          .from("blog_posts")
          .select("slug,title,excerpt,featured_image,published_at")
          .order("published_at", { ascending: false })
          .limit(100);
        if (error) return new Response("Feed unavailable", { status: 500 });

        const items = (data ?? [])
          .map((post) => {
            const link = `${SITE_URL}/blog/${post.slug}`;
            const pubDate = post.published_at ? new Date(post.published_at).toUTCString() : "";
            const image = post.featured_image
              ? `\n      <enclosure url="${escapeXml(post.featured_image)}" type="image/jpeg" />`
              : "";
            return `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${escapeXml(link)}</link>
    <guid isPermaLink="true">${escapeXml(link)}</guid>
    <description>${escapeXml(post.excerpt ?? "")}</description>${image}
    <pubDate>${pubDate}</pubDate>
  </item>`;
          })
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>OMR Solutions — News &amp; Articles</title>
  <link>${SITE_URL}/news</link>
  <description>Latest articles, product news and milestones from OMR Solutions (OMR India Outsources Pvt Ltd).</description>
  <language>en-in</language>
  <atom:link href="${SITE_URL}/api/public/rss.xml" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=300",
          },
        });
      },
    },
  },
});
