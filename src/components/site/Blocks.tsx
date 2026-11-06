import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, type DetailPage } from "@/lib/content";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b bg-secondary">
      <div className="absolute inset-0 grid-bg [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className={`container-x relative grid items-center gap-12 py-16 md:py-24 ${image ? "lg:grid-cols-2" : ""}`}>
        <div className={image ? "" : "max-w-3xl"}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-[3.4rem]">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {children ?? (
              <>
                <Button asChild size="lg">
                  <Link to="/contact">Get a quote <ArrowRight /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={company.phoneHref}><Phone /> Call {company.phone}</a>
                </Button>
              </>
            )}
          </div>
        </div>
        {image && (
          <div className="relative">
            <div className="absolute -bottom-5 -right-5 h-2/3 w-2/3 rounded-3xl bubble-dots" aria-hidden />
            <img src={image} alt="" width={1400} height={1000} className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="bg-card p-6 text-center">
          <div className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</div>
          <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function CtaBand({ title = "Let's find the right OMR setup for you", text = "Tell us about your exams, forms or archives — our team replies within 24 hours." }: { title?: string; text?: string }) {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 md:px-14">
        <div className="absolute -right-10 -top-10 h-64 w-64 bubble-dots opacity-60" aria-hidden />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-ink-foreground md:text-4xl">{title}</h2>
            <p className="mt-3 text-ink-muted">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Contact us <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-ink-foreground hover:bg-ink-border hover:text-ink-foreground">
              <a href={company.phoneHref}><Phone /> {company.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DetailView({ page, related }: { page: DetailPage; related: { label: string; to: string; summary: string }[] }) {
  return (
    <>
      <PageHero eyebrow={page.group === "Solutions" ? `Solutions · ${page.name}` : `Products · ${page.name}`} title={page.title} intro={page.intro} image={page.image} />
      {page.stats && (
        <div className="container-x -mt-px pt-12">
          <Stats items={page.stats} />
        </div>
      )}
      <section className="container-x py-20">
        <SectionHead eyebrow="What you get" title={`${page.name} at a glance`} />
        <div className={`mt-10 grid gap-5 md:grid-cols-2 ${page.highlights.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {page.highlights.map((h, i) => (
            <div key={h.title} className="rounded-2xl border bg-card p-7 shadow-card transition-shadow hover:shadow-lift">
              <span className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-semibold">{h.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>
      {page.features.length > 0 && (
        <section className="border-y bg-secondary">
          <div className={`container-x grid gap-8 py-16 ${page.features.length > 1 ? "md:grid-cols-2" : ""}`}>
            {page.features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-card p-8 shadow-card">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {f.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
      {related.length > 0 && (
        <section className="container-x pt-20">
          <h2 className="text-2xl font-bold">Related</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.to} to={r.to} className="group rounded-2xl border p-6 transition-colors hover:border-primary">
                <h3 className="font-semibold group-hover:text-primary">{r.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}

export function seo(title: string, description: string, path: string, type = "website") {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: path },
      { property: "og:type", content: type },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
