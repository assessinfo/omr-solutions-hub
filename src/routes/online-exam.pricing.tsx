import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, SectionHead, seo } from "@/components/site/Blocks";
import { CardGrid } from "@/components/site/OnlineExam";

export const Route = createFileRoute("/online-exam/pricing")({
  staticData: { sitemap: true },
  head: () => seo(
    "IS10 Online Exam Software Plans & Pricing | OMR Solutions",
    "IS10 membership plans — Bronze, Silver and Gold — plus AI add-ons for question generation, remote proctoring and analytics. Upgrade or downgrade anytime.",
    "/online-exam/pricing",
  ),
  component: Pricing,
});

const plans = [
  { name: "Bronze", price: "$50", per: "/ 500 exams", text: "Online exams, candidate import & results" },
  { name: "Silver", price: "$20", per: "/ month", text: "Up to 3,000 question-bank questions & DOCX export", popular: true },
  { name: "Gold", price: "$200", per: "/ year", text: "Unlimited enterprise features & full suite" },
];

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Commercial model" title="Scalable membership packages" intro="Flexible billing: upgrade or downgrade plans anytime. Prices in US dollars as listed by IS10; ask us for an INR quote for your institution." />
      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border bg-card p-8 ${p.popular ? "border-primary shadow-lg" : ""}`}>
              {p.popular && <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Most popular</span>}
              <h2 className="text-xl font-bold">{p.name}</h2>
              <div className="mt-4"><span className="font-display text-4xl font-bold">{p.price}</span> <span className="text-muted-foreground">{p.per}</span></div>
              <p className="mt-4 flex gap-2 text-sm"><Check className="size-4 shrink-0 text-primary" />{p.text}</p>
              <Button asChild className="mt-8 w-full" variant={p.popular ? "default" : "outline"}><Link to="/get-a-quote">Get started <ArrowRight /></Link></Button>
            </div>
          ))}
        </div>
        <div className="mt-16"><SectionHead eyebrow="AI module add-ons" title="Add AI where you need it" /></div>
        <CardGrid items={[
          { title: "AI Question Bank — $0.08 / prompt", text: "Generate MCQs, True/False and essay questions by topic." },
          { title: "AI Remote Proctoring — $0.25 / exam", text: "Face detection, presence tracking and automated warnings." },
          { title: "AI Data Analytics — $20 / 500 exams", text: "Cohort performance insights and multi-language reports." },
        ]} />
      </section>
      <section className="border-y bg-secondary py-16">
        <div className="container-x">
          <SectionHead eyebrow="Enterprise impact" title="Measurable value for institutions" />
          <CardGrid cols={4} items={[
            { title: "Fair assessments", text: "AI proctoring curbs exam malpractice." },
            { title: "Faster turnaround", text: "Instant automated grading and rankings." },
            { title: "Lower overhead", text: "No paper printing or manual logistics." },
            { title: "Data-driven decisions", text: "Real-time cohort performance insights." },
          ]} />
        </div>
      </section>
      <CtaBand title="Ready to transform your examination lifecycle?" text="Book a live IS10 demonstration and Q&A with our team." />
    </>
  );
}
