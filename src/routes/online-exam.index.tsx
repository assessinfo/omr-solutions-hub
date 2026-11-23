import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Bot, Laptop, Video } from "lucide-react";
import { CtaBand, PageHero, SectionHead, seo } from "@/components/site/Blocks";
import { CardGrid, ExamActions, NextPage } from "@/components/site/OnlineExam";
import dashboard from "@/assets/is10/dashboard.png.asset.json";

export const Route = createFileRoute("/online-exam/")({
  staticData: { sitemap: true },
  head: () => seo(
    "Online Exam Software — IS10 Hybrid Testing System | OMR Solutions",
    "IS10 online exam software: AI question bank, AI and live proctoring, browser lockdown, instant results and centre-based CBT for schools, universities and recruiters in India.",
    "/online-exam",
  ),
  component: Overview,
});

const compare = [
  { old: "Manual setup", oldText: "Slow paper printing and logistics.", now: "AI authoring", nowText: "Instant question bank generation." },
  { old: "Security gaps", oldText: "High risk of leaks and malpractice.", now: "AI proctoring", nowText: "Automated face and tab monitoring." },
  { old: "Delayed grading", oldText: "Resource-heavy manual evaluation.", now: "Instant results", nowText: "Automated objective scoring engine." },
  { old: "Blind spots", oldText: "Zero real-time exam analytics.", now: "Live telemetry", nowText: "Centralised real-time dashboards." },
];

const phases = [
  ["Onboarding", "Organisation setup", "OTP verification and plan activation."],
  ["Configuration", "Academic masters", "Map classes, centres and user roles."],
  ["Question bank", "QC approval", "AI or CSV upload with QC review."],
  ["Preparation", "Paper & scheduling", "Finalise papers and allocate student centres."],
  ["Execution", "Proctored live exam", "Auto-save testing under AI face tracking."],
  ["Submission", "Manual or auto submit", "Triggered by completion, timeout or violation."],
  ["Evaluation", "Instant scoring", "Automated ranking and performance calculation."],
  ["Notifications", "Results & alerts", "Publish scorecards via SMS and email."],
];

function Overview() {
  return (
    <>
      <PageHero
        eyebrow="Online Exam Software · IS10"
        title="IS10 Hybrid Testing System"
        intro="Intuitive Secure Testing & Evaluation Node for end-to-end digital examinations — from question creation and proctored exams to instant results, online or at exam centres."
        image={dashboard.url}
        imageAlt="IS10 admin dashboard with exam, question and student metrics"
      >
        <ExamActions />
      </PageHero>

      <section className="container-x py-16">
        <SectionHead eyebrow="Core platform pillars" title="Everything an exam needs, in one platform" />
        <CardGrid cols={4} items={[
          { icon: <Laptop className="size-5" />, title: "Hybrid delivery", text: "Online and offline exam support." },
          { icon: <Bot className="size-5" />, title: "AI question bank", text: "Prompt-driven automated question creation." },
          { icon: <Video className="size-5" />, title: "Live & AI proctoring", text: "Continuous webcam and browser invigilation." },
          { icon: <BarChart3 className="size-5" />, title: "Deep analytics", text: "Multi-language reports and online billing." },
        ]} />
      </section>

      <section className="border-y bg-secondary py-16">
        <div className="container-x">
          <SectionHead eyebrow="Transformation" title="Why modernise with IS10?" />
          <div className="mt-10 overflow-hidden rounded-2xl border bg-card">
            <div className="grid grid-cols-2 border-b bg-muted text-sm font-semibold">
              <div className="p-4">Legacy paper exams</div><div className="p-4 text-primary">IS10 hybrid ecosystem</div>
            </div>
            {compare.map((c) => (
              <div key={c.old} className="grid grid-cols-2 border-b last:border-0">
                <div className="p-4"><div className="font-medium">{c.old}</div><p className="text-sm text-muted-foreground">{c.oldText}</p></div>
                <div className="p-4"><div className="font-medium">{c.now}</div><p className="text-sm text-muted-foreground">{c.nowText}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHead eyebrow="Workflow" title="Eight phases: onboarding to results" />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {phases.map(([phase, title, text], i) => (
            <li key={phase} className="rounded-2xl border bg-card p-5">
              <div className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")} · {phase?.toUpperCase()}</div>
              <div className="mt-2 font-semibold">{title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x pb-12">
        <SectionHead eyebrow="Who uses it" title="Three dedicated portals" />
        <CardGrid items={[
          { title: "Organisation admin", text: "Manages platform settings, creates exams and user roles, and generates institutional reports." },
          { title: "QC & workflow users", text: "Review submitted question drafts, verify accuracy and taxonomy, and publish to the approved bank." },
          { title: "Students", text: "Log in with roll number, attend proctored assessments and view instant scores and ranks." },
        ]} />
      </section>
      <NextPage to="/online-exam/features" label="Take the platform tour" />
      <CtaBand title="See IS10 running on your own exam" text="Book a live product demonstration — we'll walk through setup, a proctored test and results." />
    </>
  );
}
