import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Briefcase, CalendarDays, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, SectionHead, seo } from "@/components/site/Blocks";
import { company } from "@/lib/content";

export const Route = createFileRoute("/careers")({
  head: () =>
    seo(
      "Careers at OMR Solutions — Business Development Manager, Mumbai",
      "Join OMR Solutions in Mumbai as a Business Development Manager and bring fair, fast exam evaluation to universities and government across India.",
      "/careers",
    ),
  component: Careers,
});

const facts = [
  { icon: MapPin, label: "Mumbai · 1 position" },
  { icon: Briefcase, label: "1–2 years B2B / B2G sales" },
  { icon: Clock, label: "Hybrid" },
  { icon: CalendarDays, label: "6 days, full time" },
];

const why = [
  { title: "Fairness", text: "Digital evaluation removes lost sheets and bias, so merit is all that counts." },
  { title: "Speed", text: "Results in days, so students don't lose a year waiting." },
  { title: "Transparency", text: "Every mark traceable and auditable." },
  { title: "Preservation", text: "Decades of paper records protected through digitisation." },
];

const mission = [
  "Find universities, institutes, government bodies and corporates who need us",
  "Lead pre-sales outreach — listening first to understand real challenges",
  "Shape proposals that answer each client's specific needs",
  "Present to vice-chancellors, exam controllers and senior officials",
];

function Careers() {
  const apply = `mailto:${company.email}?subject=${encodeURIComponent("Application: Business Development Manager")}`;
  return (
    <>
      <PageHero eyebrow="Now hiring · Mumbai" title="Business Development Manager" intro="You won't be selling software. You'll be selling trust — to the people who run India's exams.">
        <Button asChild size="lg"><a href={apply}>Apply now <ArrowRight /></a></Button>
      </PageHero>
      <section className="container-x py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex items-center gap-3 rounded-xl border bg-card p-5">
              <f.icon className="size-5 text-primary" /> <span className="font-semibold">{f.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="container-x grid gap-12 pb-20 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Why it matters" title="Every institution you sign changes outcomes for thousands of students" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {why.map((w) => (
              <div key={w.title} className="rounded-xl bg-secondary p-5">
                <h3 className="font-semibold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-8 shadow-card">
          <h2 className="text-2xl font-bold">Your mission</h2>
          <ol className="mt-6 space-y-5">
            {mission.map((m, i) => (
              <li key={m} className="flex gap-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">{i + 1}</span>
                <span className="pt-1">{m}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted-foreground">Send your CV to <a className="font-semibold text-primary" href={apply}>{company.email}</a>.</p>
        </div>
      </section>
      <CtaBand title="Not the right role?" text="We're always glad to hear from people who care about fair exams. Drop us a line." />
    </>
  );
}
