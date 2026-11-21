import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarHeart, GraduationCap, HandHeart, HeartPulse, Home, Scale, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, SectionHead, seo } from "@/components/site/Blocks";
import { company } from "@/lib/content";

export const Route = createFileRoute("/company-policy")({
  head: () =>
    seo(
      "Company Policy — Employee-Friendly Workplace | OMR Solutions",
      "How OMR India Outsources Pvt Ltd, owner of the OMR Solutions brand, looks after its people: hybrid work, generous leave, learning support, fair treatment and an open door.",
      "/company-policy",
    ),
  component: CompanyPolicy,
});

const policies = [
  {
    icon: Home,
    title: "Flexible, hybrid work",
    text: "Where the role allows, our people split their week between home and office. We judge work by results, not by hours at a desk, and we're reasonable when life needs you elsewhere for a day.",
  },
  {
    icon: CalendarHeart,
    title: "Time off that respects life",
    text: "Paid annual leave, public holidays and sick leave come as standard. We encourage everyone to actually use their leave — rest is part of doing good work, not a favour we grant.",
  },
  {
    icon: GraduationCap,
    title: "Learning and growth",
    text: "We support training, certifications and product learning — especially on the scanner and evaluation technologies we represent. If a course helps you serve clients better, we want to hear about it.",
  },
  {
    icon: Scale,
    title: "Fairness and equal opportunity",
    text: "Hiring, pay and promotion decisions are based on merit and performance. We do not tolerate discrimination or harassment of any kind, and concerns are taken seriously and handled confidentially.",
  },
  {
    icon: HeartPulse,
    title: "Health and wellbeing",
    text: "A safe, comfortable workplace is a given. We keep workloads realistic, check in when things get heavy, and would rather adjust a deadline than burn out a colleague.",
  },
  {
    icon: Users,
    title: "An open door",
    text: "We're a small team, not a hierarchy maze. Anyone can walk up to leadership with an idea, a worry or a disagreement — and expect to be heard, not managed.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity in everything",
    text: "We expect honesty with clients, partners and each other. No one at OMR Solutions is ever asked to overpromise, mislead a customer or cut a corner to hit a number.",
  },
  {
    icon: HandHeart,
    title: "Recognition and respect",
    text: "Good work is noticed and said out loud. We celebrate wins together, share credit generously and treat every role — from field service to sales — as essential to the company.",
  },
];

const promises = [
  "Clear expectations: you'll always know what success in your role looks like.",
  "Prompt, honest feedback — no surprises at review time.",
  "Salaries paid on time, every time.",
  "Your ideas can reach a decision-maker the same day.",
];

function CompanyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Working with us"
        title="A company policy built around people"
        intro={`${company.legalName}, owner of the OMR Solutions brand, keeps its policy simple: treat people fairly, give them room to grow, and the work takes care of itself.`}
      >
        <Button asChild size="lg"><Link to="/careers">See open roles <ArrowRight /></Link></Button>
      </PageHero>

      <section className="container-x py-16">
        <SectionHead eyebrow="Our commitments" title="What every team member can count on" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {policies.map((p) => (
            <div key={p.title} className="rounded-xl border bg-card p-6">
              <p.icon className="size-6 text-primary" />
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-12 pb-20 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Why it works" title="Employee-friendly isn't a slogan here" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            We've served India's universities and government bodies since 2004, and the people who built that
            reputation are still with us. Long tenures aren't an accident — they happen when people are trusted,
            paid fairly and treated like adults.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our clients trust us with their examinations. We can only honour that trust if our own house runs on
            the same values: fairness, transparency and respect.
          </p>
        </div>
        <div className="rounded-2xl border bg-card p-8 shadow-card">
          <h2 className="text-2xl font-bold">Our promise to you</h2>
          <ul className="mt-6 space-y-4">
            {promises.map((pr) => (
              <li key={pr} className="flex gap-3">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{pr}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Questions about working here? Write to <a className="font-semibold text-primary" href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>

      <CtaBand title="Sound like your kind of workplace?" text="Take a look at our current openings — or just introduce yourself." />
    </>
  );
}
