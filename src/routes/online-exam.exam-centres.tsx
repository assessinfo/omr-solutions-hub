import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SectionHead, seo } from "@/components/site/Blocks";
import { CardGrid, ModuleShowcase, NextPage } from "@/components/site/OnlineExam";
import registration from "@/assets/is10/registration.png.asset.json";
import payment from "@/assets/is10/payment.png.asset.json";
import paid from "@/assets/is10/payment-received.png.asset.json";
import admit from "@/assets/is10/admit-card.png.asset.json";
import flow from "@/assets/is10/cbt-flow.jpg.asset.json";

export const Route = createFileRoute("/online-exam/exam-centres")({
  staticData: { sitemap: true },
  head: () => seo(
    "Computer-Based Testing at Exam Centres — IS10 CBT | OMR Solutions",
    "Run centre-based CBT with IS10: online registration, fee payment and admit cards, then encrypted papers on local exam-centre servers that keep working even when the internet drops.",
    "/online-exam/exam-centres",
  ),
  component: Centres,
});

const journey = [
  ["Register", "Fill the online application."], ["Pay", "Pay the fee online, get a receipt."], ["Admit card", "Download with exam centre details."],
  ["Reach centre", "Verify identity at check-in."], ["Take exam", "Answer on a centre computer."], ["Result", "View score and rank."],
];

function Centres() {
  return (
    <>
      <PageHero eyebrow="Computer-based testing" title="From online application to result — with exams at your centres" intro="Before the exam: online. On exam day: at the centre. After the exam: online again." />
      <section className="container-x py-16">
        <SectionHead eyebrow="Candidate journey" title="Six simple steps" />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {journey.map(([t, d], i) => (
            <li key={t} className="rounded-2xl border bg-card p-5">
              <div className="font-display text-2xl font-bold text-primary">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-2 font-semibold">{t}</div><p className="text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>
      <div className="bg-secondary">
        <ModuleShowcase eyebrow="Step 1 · Registration" title="Online student registration" image={registration.url} alt="IS10 online application form" points={[
          { title: "Personal & contact", text: "Photo, name, date of birth, category, mobile numbers and address." },
          { title: "Academic", text: "Class 10 certificate details." },
          { title: "Exam centre", text: "Preferred exam cities." },
          { title: "Account & payment", text: "Email and password, then pay the application fee online." },
        ]} />
      </div>
      <section className="container-x py-16">
        <SectionHead eyebrow="Steps 2 & 3" title="Secure login, payment & admit card" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[[payment.url, "Secure login & online payment", "Log in with email or application number; the fee is paid during application."],
            [paid.url, "Payment receipt", "Receipt downloadable and payment status visible to the student."],
            [admit.url, "Admit card", "Download from the student page — carries photo and exam centre, needed for entry."]].map(([src, t, d]) => (
            <figure key={t} className="overflow-hidden rounded-2xl border bg-card">
              <img src={src} alt={t} loading="lazy" className="w-full border-b" />
              <figcaption className="p-5"><div className="font-semibold">{t}</div><p className="mt-1 text-sm text-muted-foreground">{d}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>
      <div className="bg-secondary">
        <ModuleShowcase eyebrow="CBT architecture" title="Three layers: main, local, student" image={flow.url} alt="Encrypted paper flows from the main server to local servers to student PCs, answers flow back" points={[
          { title: "Paper flows down", text: "The encrypted exam package reaches each centre's local server before exam day." },
          { title: "Exam runs on the centre network", text: "Weak internet cannot stop it — student PCs are served locally." },
          { title: "Answers flow back", text: "Encrypted answers sync to the main server after the exam." },
          { title: "Unlocks on schedule", text: "The paper stays encrypted until the exam starts; nothing is exposed at the centre." },
        ]} />
      </div>
      <section className="container-x py-16">
        <SectionHead eyebrow="Layer roles" title="What each layer does" />
        <CardGrid items={[
          { title: "Main server", text: "Central control: question bank, exam schedule, registrations, payments, admit cards, final results and reports." },
          { title: "Local server", text: "Sits inside the exam centre, receives the exam before the day and keeps it running even if the internet drops." },
          { title: "Student systems", text: "Candidates log in with roll number and password on a locked, timed screen; answers save to the local server." },
        ]} />
        <SectionHead eyebrow="Why it works" title="Built for scale and fairness" />
        <CardGrid items={[
          { title: "Works with weak internet", text: "The exam runs on the centre network." },
          { title: "Scales to many centres", text: "Add a local server per centre." },
          { title: "Secure by design", text: "Encrypted paper and encrypted answers." },
          { title: "Central control", text: "One main server manages everything." },
          { title: "Fair and monitored", text: "Lockdown and live monitoring of each centre." },
          { title: "Faster results", text: "Responses reach the main server in one sync." },
        ]} />
      </section>
      <section className="border-y bg-secondary py-16">
        <div className="container-x">
          <SectionHead eyebrow="Rollout plan" title="Suggested three-phase rollout" />
          <CardGrid items={[
            { title: "Phase 1 · Online", text: "Registration, payment and admit card — open applications and issue admit cards online." },
            { title: "Phase 2 · Pilot", text: "Local server and pilot centre — test the full exam flow at one centre." },
            { title: "Phase 3 · Scale", text: "All centres and monitoring — roll out everywhere with live dashboards." },
          ]} />
        </div>
      </section>
      <div className="pt-10"><NextPage to="/online-exam/pricing" label="Plans & pricing" /></div>
      <CtaBand title="Planning a centre-based exam?" text="Tell us your candidate numbers and cities — we'll plan the rollout with you." />
    </>
  );
}
