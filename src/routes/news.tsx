import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, seo } from "@/components/site/Blocks";
import { news } from "@/lib/content";

export const Route = createFileRoute("/news")({
  head: () =>
    seo(
      "News & Milestones | OMR Solutions",
      "Product launches, exhibitions and partnerships from OMR Solutions — from Asia IT Expo to GESS Dubai and the Vision OMR launch.",
      "/news",
    ),
  component: News,
});

function News() {
  return (
    <>
      <PageHero eyebrow="Press & media" title="Milestones along the way" intro="Launches, exhibitions and partnerships from our archive.">
        <Link to="/case-studies" className="font-semibold text-primary">Read our case studies →</Link>
      </PageHero>
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
