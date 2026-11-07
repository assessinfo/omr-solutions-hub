import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Check, Download, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, type DetailPage } from "@/lib/content";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
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
            <img src={image} alt={imageAlt ?? ""} width={1400} height={1000} className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
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

export function DetailView({ page, related, relatedTitle = "Related", afterHero }: { page: DetailPage; related: { label: string; to: string; summary: string }[]; relatedTitle?: string; afterHero?: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={page.group === "Solutions" ? `Solutions · ${page.name}` : `Products · ${page.name}`} title={page.title} intro={page.intro} image={page.image} imageAlt={page.imageAlt ?? page.title} />
      {afterHero}
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
      {page.gallery && page.gallery.length > 0 && (
        <section className="container-x pb-20">
          <h2 className="text-2xl font-bold">{page.name} photos</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {page.gallery.map((g) => (
              <a key={g.src} href={g.src} target="_blank" rel="noopener" className="group overflow-hidden rounded-2xl border bg-card shadow-card">
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-square w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105" />
                <p className="border-t px-3 py-2 text-xs text-muted-foreground">{g.alt}</p>
              </a>
            ))}
          </div>
        </section>
      )}
      {(page.brochure || page.video) && (
        <section className="container-x pb-20">
          <div className={`grid items-center gap-10 ${page.video ? "lg:grid-cols-2" : ""}`}>
            {page.video && (
              <div className="aspect-video overflow-hidden rounded-2xl border shadow-card">
                <iframe
                  className="size-full"
                  src={`https://www.youtube-nocookie.com/embed/${page.video}`}
                  title={`${page.name} video`}
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <div className="rounded-2xl border bg-card p-8 shadow-card">
              <h2 className="text-2xl font-bold">{page.name} brochure</h2>
              <p className="mt-2 text-muted-foreground">Full manufacturer specifications from Sekonic, in PDF.</p>
              {page.brochure && (
                <a
                  href={page.brochure}
                  target="_blank"
                  rel="noopener"
                  download
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="size-4" /> Download brochure (PDF)
                </a>
              )}
            </div>
          </div>
        </section>
      )}
      {page.links && page.links.length > 0 && (
        <section className="container-x pb-20">
          <h2 className="text-2xl font-bold">Learn more about {page.name}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener" className="group flex items-start justify-between gap-3 rounded-2xl border bg-card p-5 shadow-card transition-colors hover:border-primary">
                <span>
                  <span className="block font-semibold">{l.label}</span>
                  {l.text && <span className="mt-1 block text-sm text-muted-foreground">{l.text}</span>}
                </span>
                <ExternalLink className="size-4 shrink-0 text-primary" />
              </a>
            ))}
          </div>
        </section>
      )}
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
          <h2 className="text-2xl font-bold">{relatedTitle}</h2>
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
  const pageUrl = new URL(path, "https://omr-solutions-hub.lovable.app").href;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: pageUrl },
      { property: "og:type", content: type },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  };
}
