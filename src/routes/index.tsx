import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Cpu, FileScan, Printer, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, SectionHead, Stats, seo } from "@/components/site/Blocks";
import { clientSectors, products, solutions } from "@/lib/content";
import hero from "@/assets/sr8000-hybrid-clean.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "OMR Scanners, OMR Software & Exam Processing in India | OMR Solutions",
      "Sekonic OMR scanners, Remark OMR software, OMR sheet printing and exam result processing for schools, universities and government. Trusted since 2004.",
      "/",
    ),
  component: Home,
});

const pillars = [
  { icon: ScanLine, title: "OMR scanners", text: "Sekonic readers from 1,800 to 11,000 sheets an hour.", to: "/products/omr-scanners" },
  { icon: Cpu, title: "OMR software", text: "Remark, Optic View and on-screen marking.", to: "/products/omr-software" },
  { icon: Printer, title: "OMR sheets & forms", text: "Security-printed sheets designed to scan clean.", to: "/products/omr-sheets" },
  { icon: FileScan, title: "Document digitisation", text: "Document and book scanners, records management.", to: "/products/document-scanners" },
];

function Home() {
  const logos = clientSectors.flatMap((s) => s.clients).slice(0, 14);
  return (
    <>
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" aria-hidden />
        <div className="container-x relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="eyebrow">Since 2004 · Partner of Sekonic Japan & Gravic USA</span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">
              Exam results you can trust, <span className="text-primary">delivered in days.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              OMR scanners, software and answer sheets that turn stacks of paper into accurate results — for schools, universities, recruiters and government.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a quote <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/products">Explore products</Link>
              </Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["99.99% read accuracy", "Installation & training", "Support across Globe,\u00a0"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-primary" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 bubble-dots" aria-hidden />
            <img src={hero} alt="Sekonic SR-8000 Hybrid OMR scanner with optional select stacker" width={1600} height={1200} className="relative aspect-[4/3] w-full rounded-3xl object-contain shadow-lift" />
            <div className="absolute -bottom-6 left-6 rounded-2xl border bg-card px-5 py-4 shadow-lift">
              <div className="font-display text-2xl font-bold text-primary">10M+</div>
              <div className="text-xs text-muted-foreground">sheets processed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-secondary py-10">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Trusted by 1,000+ organisations</p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {logos.map((l) => (
              <span key={l} className="font-display text-sm font-semibold text-foreground/50">{l}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHead eyebrow="What we do" title="Everything you need to process paper at scale" intro="Hardware, software, printing and services — from one partner who understands exams." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link key={p.title} to={p.to} className="group rounded-2xl border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
              <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground"><p.icon className="size-6" /></span>
              <h3 className="mt-5 text-lg font-semibold group-hover:text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Solutions</span>
              <h2 className="mt-4 text-3xl font-bold text-ink-foreground md:text-4xl">Built for the way your sector works</h2>
            </div>
            <Button asChild variant="outline" className="border-ink-border bg-transparent text-ink-foreground hover:bg-ink-border hover:text-ink-foreground">
              <Link to="/solutions">All solutions <ArrowRight /></Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {solutions.slice(0, 4).map((s) => (
              <Link key={s.slug} to="/solutions/$slug" params={{ slug: s.slug }} className="group overflow-hidden rounded-2xl border border-ink-border">
                <img src={s.image} alt="" loading="lazy" width={1400} height={1000} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-ink-foreground group-hover:text-primary">{s.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{s.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <Stats
          items={[
            { value: "20+", label: "Years in OMR" },
            { value: "1,000+", label: "Projects delivered" },
            { value: "99.9%", label: "Read accuracy" },
            { value: "15+", label: "States served" },
          ]}
        />
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="Popular products" title="Start with the tools institutions rely on" intro="Not sure which scanner or software fits? Tell us your volume and we'll recommend a setup." />
          <div className="divide-y rounded-2xl border bg-card">
            {products.filter((p) => ["omr-scanners", "remark-office-omr", "mark-on-screen", "omr-sheets", "document-scanners"].includes(p.slug)).map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group flex items-center justify-between gap-4 p-5">
                <div>
                  <h3 className="font-semibold group-hover:text-primary">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.summary}</p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
