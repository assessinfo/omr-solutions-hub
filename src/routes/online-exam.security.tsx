import { createFileRoute } from "@tanstack/react-router";
import { Ban, Bell, Expand, Power, ShieldCheck, UserCheck, Video, AppWindow } from "lucide-react";
import { CtaBand, PageHero, SectionHead, seo } from "@/components/site/Blocks";
import { CardGrid, NextPage } from "@/components/site/OnlineExam";

export const Route = createFileRoute("/online-exam/security")({
  staticData: { sitemap: true },
  head: () => seo(
    "Secure Online Exams — AI Proctoring & Browser Lockdown | OMR Solutions",
    "IS10 protects every exam with fullscreen lock, copy-paste blocking, tab-switch detection, auto-termination, AI face detection and live invigilator video.",
    "/online-exam/security",
  ),
  component: Security,
});

const stack = [
  ["Frontend", "React, Tailwind CSS, Chart.js", "Responsive dashboards and interactive analytics"],
  ["Backend API", "Node.js, Express, Sequelize ORM", "Stateless REST services and role middleware"],
  ["Database & files", "MySQL, Multer, PDF.js worker", "Relational persistence and non-blocking PDF rendering"],
  ["Security & billing", "OTP auth, role-based access, payment gateway", "Token validation and automated plan subscriptions"],
];

function Security() {
  return (
    <>
      <PageHero eyebrow="Enterprise security & AI proctoring" title="Zero-tolerance integrity, enforced at the browser" intro="IS10 locks the exam screen, watches for suspicious behaviour with AI and live invigilators, and submits automatically when the rules are broken." />
      <section className="container-x py-16">
        <SectionHead eyebrow="Browser lockdown" title="Nothing leaves the exam window" />
        <CardGrid cols={4} items={[
          { icon: <Expand className="size-5" />, title: "Fullscreen lock", text: "Mandatory fullscreen mode during tests." },
          { icon: <Ban className="size-5" />, title: "Input blocking", text: "Disables copy, paste, right-click and shortcuts." },
          { icon: <AppWindow className="size-5" />, title: "Tab detection", text: "Flags browser switching in real time." },
          { icon: <Power className="size-5" />, title: "Auto-termination", text: "Submits the exam on repeated rule violations." },
        ]} />
      </section>
      <section className="border-y bg-secondary py-16">
        <div className="container-x">
          <SectionHead eyebrow="Remote invigilation" title="AI vision plus live human oversight" />
          <CardGrid items={[
            { icon: <UserCheck className="size-5" />, title: "AI face detection", text: "Continuous identity and presence tracking." },
            { icon: <Video className="size-5" />, title: "Live video streams", text: "Real-time invigilator feed monitoring." },
            { icon: <Bell className="size-5" />, title: "Instant warnings", text: "Automated alerts on suspicious movement." },
          ]} />
        </div>
      </section>
      <section className="container-x py-16">
        <SectionHead eyebrow="Technical foundation" title="Modern full-stack architecture" />
        <div className="mt-8 overflow-x-auto rounded-2xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted"><tr><th className="p-4">Layer</th><th className="p-4">Core technologies</th><th className="p-4">Role</th></tr></thead>
            <tbody>{stack.map(([a, b, c]) => <tr key={a} className="border-t"><td className="p-4 font-semibold">{a}</td><td className="p-4">{b}</td><td className="p-4 text-muted-foreground">{c}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="size-4 text-primary" /> Role-based access keeps admins, QC reviewers and students to their own portals.</p>
      </section>
      <NextPage to="/online-exam/exam-centres" label="Computer-based testing at exam centres" />
      <CtaBand title="Run exams you can trust" text="Ask us how IS10 proctoring fits your entrance, recruitment or school exams." />
    </>
  );
}
