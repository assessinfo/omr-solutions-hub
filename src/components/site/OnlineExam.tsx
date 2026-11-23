import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "./DemoBooking";

export const IS10_URL = "https://is10live.com/";

export const examPages = [
  { to: "/online-exam", label: "Overview" },
  { to: "/online-exam/features", label: "Platform tour" },
  { to: "/online-exam/security", label: "Security & proctoring" },
  { to: "/online-exam/exam-centres", label: "Exam centres (CBT)" },
  { to: "/online-exam/pricing", label: "Plans & pricing" },
] as const;

export function ExamSubNav() {
  return (
    <nav aria-label="Online exam software" className="sticky top-16 z-30 md:top-20 border-b bg-background/95 backdrop-blur">
      <div className="container-x flex gap-1 overflow-x-auto py-2">
        {examPages.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            activeOptions={{ exact: true }}
            className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }}
          >
            {p.label}
          </Link>
        ))}
        <a href={IS10_URL} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1 whitespace-nowrap px-4 py-2 text-sm font-semibold text-primary">
          is10live.com <ExternalLink className="size-3.5" />
        </a>
      </div>
    </nav>
  );
}

export function ExamActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <BookDemoButton size="lg" product="IS10 Online Exams">Book a live demo <ArrowRight /></BookDemoButton>
      <Button asChild size="lg" variant="outline"><a href={IS10_URL} target="_blank" rel="noopener noreferrer">Visit is10live.com <ExternalLink /></a></Button>
    </div>
  );
}

export type Point = { title: string; text: string };

/** Screenshot on one side, four numbered points on the other — mirrors the deck's module slides. */
export function ModuleShowcase({ eyebrow, title, image, alt, points, flip }: { eyebrow: string; title: string; image: string; alt: string; points: Point[]; flip?: boolean }) {
  return (
    <section className="container-x grid items-center gap-10 py-14 lg:grid-cols-2">
      <figure className={`overflow-hidden rounded-2xl border bg-card shadow-sm ${flip ? "lg:order-2" : ""}`}>
        <img src={image} alt={alt} loading="lazy" className="w-full" />
      </figure>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-3xl font-bold leading-tight">{title}</h2>
        <ol className="mt-6 space-y-4">
          {points.map((p, i) => (
            <li key={p.title} className="flex gap-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">{i + 1}</span>
              <div><div className="font-semibold">{p.title}</div><p className="text-sm text-muted-foreground">{p.text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CardGrid({ items, cols = 3 }: { items: (Point & { icon?: ReactNode })[]; cols?: 2 | 3 | 4 }) {
  const c = cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div className={`mt-10 grid gap-5 ${c}`}>
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl border bg-card p-6">
          {it.icon && <div className="mb-4 grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">{it.icon}</div>}
          <h3 className="font-semibold">{it.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

export function NextPage({ to, label }: { to: (typeof examPages)[number]["to"]; label: string }) {
  return (
    <div className="container-x pb-4 text-right">
      <Link to={to} className="inline-flex items-center gap-2 font-semibold text-primary">Next: {label} <ArrowRight className="size-4" /></Link>
    </div>
  );
}
