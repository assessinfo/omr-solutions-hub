import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, seo } from "@/components/site/Blocks";
import { news } from "@/lib/content";
import { blogQuery } from "@/lib/blog";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/news")({
  staticData: { sitemap: true },
  loader: ({ context }) => context.queryClient.ensureQueryData(blogQuery),
  head: () => {
    const base = seo(
      "News & Milestones | OMR Solutions",
      "Product launches, exhibitions and partnerships from OMR Solutions — from Asia IT Expo to GESS Dubai and the Vision OMR launch.",
      "/news",
    );
    return {
      ...base,
      links: [
        ...base.links,
        { rel: "alternate", type: "application/rss+xml", title: "OMR Solutions — News & Articles", href: "/api/public/rss.xml" },
      ],
    };
  },
  component: News,
});

function News() {
  const { data: posts } = useSuspenseQuery(blogQuery);
  return (
    <>
      <PageHero eyebrow="Press & media" title="Milestones along the way" intro="Launches, exhibitions and partnerships from our archive.">
        <span className="flex flex-wrap gap-6">
          <Link to="/case-studies" className="font-semibold text-primary">Read our case studies →</Link>
          <a href="/api/public/rss.xml" className="font-semibold text-primary">Subscribe via RSS →</a>
        </span>
      </PageHero>
      {posts.length > 0 && <section className="container-x pt-16">
        <h2 className="mb-8 text-3xl font-semibold">Latest articles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="overflow-hidden rounded-lg border bg-card">
            {post.featured_image && <img src={post.featured_image} alt={post.title} loading="lazy" className="aspect-video w-full object-cover" />}
            <div className="p-6"><h3 className="text-xl font-semibold">{post.title}</h3><p className="mt-3 text-muted-foreground">{post.excerpt}</p><span className="mt-5 inline-block font-semibold text-primary">Read article →</span></div>
          </Link>)}
        </div>
      </section>}
      <section className="container-x py-20">
        <ol className="relative space-y-6 border-l-2 border-border pl-8">
          {news.map((n) => (
            <li key={n.title} className="relative">
              <span className="absolute -left-[41px] top-2 size-4 rounded-full border-4 border-background bg-primary" />
              <div className="rounded-2xl border bg-card p-6 shadow-card">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="rounded-full bg-accent px-2.5 py-1 text-accent-foreground">{n.tag}</span>
                  <span>{n.date}</span><span>·</span><span>{n.place}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold">{n.title}</h2>
                <p className="mt-1 text-muted-foreground">{n.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  );
}
