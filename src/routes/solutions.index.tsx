import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero, seo } from "@/components/site/Blocks";
import { solutions } from "@/lib/content";

export const Route = createFileRoute("/solutions/")({
  head: () =>
    seo(
      "OMR Solutions by Sector — Education, Government, Corporate & NGOs",
      "OMR and data capture solutions for schools, universities, government departments, corporates and NGOs, plus responsible e-waste recycling.",
      "/solutions",
    ),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="One technology, shaped for every sector" intro="Wherever information is collected on paper, we help you capture it accurately and act on it faster." />
      <section className="container-x grid gap-6 py-20 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => (
          <Link key={s.slug} to="/solutions/$slug" params={{ slug: s.slug }} className="group overflow-hidden rounded-2xl border bg-card shadow-card transition-shadow hover:shadow-lift">
            <img src={s.image} alt="" loading="lazy" width={1400} height={1000} className="aspect-[16/10] w-full object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold group-hover:text-primary">{s.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ArrowRight className="size-4" /></span>
            </div>
          </Link>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
