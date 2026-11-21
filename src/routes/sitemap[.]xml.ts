import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { products, solutions } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import {
  collectSitemapPosts, isSitemapRouteIncluded, postLastmod,
  sitemapPathForLocation, sitemapStaticPaths, sitemapXML, type SitemapEntry,
} from "@/lib/sitemap";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        try {
          const router = await getRouterInstance();
          const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({
            path: path === "/" ? path : path.replace(/\/$/, ""),
          }));
          for (const [routeId, pages] of [
            ["/products/$slug", products], ["/solutions/$slug", solutions],
          ] as const) {
            if (!isSitemapRouteIncluded(router.routesById[routeId])) continue;
            for (const page of pages) {
              const location = router.buildLocation({
                to: routeId, params: { slug: page.slug }, search: () => ({}), hash: "",
              });
              const path = sitemapPathForLocation(router, location, routeId);
              if (path) entries.push({ path });
            }
          }
          const blogRouteId = "/blog/$slug";
          if (isSitemapRouteIncluded(router.routesById[blogRouteId])) {
            const url = process.env["SUPABASE_URL"];
            const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
            if (!url || !key) throw new Error("Article storage unavailable");
            const client = createClient<Database>(url, key, {
              auth: { persistSession: false, autoRefreshToken: false },
              global: { fetch: (input, init) => {
                const headers = new Headers(init?.headers);
                if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
                headers.set("apikey", key);
                return fetch(input, { ...init, headers });
              } },
            });
            // Same public article source and visibility as News and Blog, without their display limit.
            const posts = await collectSitemapPosts(async (offset, pageSize) => {
              const { data, error } = await client.from("blog_posts")
                .select("slug,published_at").order("id", { ascending: true })
                .range(offset, offset + pageSize - 1);
              if (error || !data) throw new Error("Could not load sitemap articles");
              return data;
            });
            for (const post of posts) {
              const location = router.buildLocation({
                to: blogRouteId, params: { slug: post.slug }, search: () => ({}), hash: "",
              });
              const path = sitemapPathForLocation(router, location, blogRouteId);
              const lastmod = postLastmod(post.published_at);
              if (path) entries.push({ path, ...(lastmod ? { lastmod } : {}) });
            }
          }
          return new Response(sitemapXML(SITE_URL, entries), {
            headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=300" },
          });
        } catch {
          return new Response("Sitemap unavailable", {
            status: 503, headers: { "Cache-Control": "no-store" },
          });
        }
      },
    },
  },
});