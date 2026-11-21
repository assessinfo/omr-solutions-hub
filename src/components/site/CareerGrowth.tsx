import { useState } from "react";
import { SectionHead } from "@/components/site/Blocks";

const levels = ["CEO", "Vice President", "Senior Manager", "Manager", "Junior Manager", "Senior Executive", "Executive", "Intern"] as const;

type Dept = { name: string; intern: string; steps: Record<(typeof levels)[number], string> };

const departments: Dept[] = [
  {
    name: "Software",
    intern: "Software Intern",
    steps: {
      Intern: "Learn our OMR and evaluation software stack, pair with a mentor, ship small fixes to real projects.",
      Executive: "Own features end to end, write tests, and support client installations of Remark and custom tools.",
      "Senior Executive": "Design modules, review code for juniors, and lead integrations with scanners and client systems.",
      "Junior Manager": "Lead a small delivery team, plan sprints and handle first-line client technical discussions.",
      Manager: "Run software projects for universities and boards; own quality, timelines and team growth.",
      "Senior Manager": "Shape product architecture across solutions and grow technical leads.",
      "Vice President": "Set the software roadmap and engineering standards for the whole company.",
      CEO: "Company leadership — open to anyone who grows through the organisation.",
    },
  },
  {
    name: "AI",
    intern: "AI Intern",
    steps: {
      Intern: "Work on data labelling, model experiments and AI-assisted evaluation prototypes with guidance.",
      Executive: "Build and test models for handwriting, image and answer-sheet analysis.",
      "Senior Executive": "Take models to production, measure accuracy and mentor interns.",
      "Junior Manager": "Lead AI workstreams and translate client problems into model requirements.",
      Manager: "Own AI products and their accuracy, safety and delivery commitments.",
      "Senior Manager": "Drive AI strategy across digitisation and assessment services.",
      "Vice President": "Lead the company's AI vision, partnerships and research investments.",
      CEO: "Company leadership — open to anyone who grows through the organisation.",
    },
  },
  {
    name: "Operations – Digitisation",
    intern: "Business / Operations Intern",
    steps: {
      Intern: "Learn scanning, indexing and quality checks on live digitisation projects.",
      Executive: "Run scanning stations, maintain quality targets and keep project records accurate.",
      "Senior Executive": "Supervise shifts, train new staff and handle scanner setup and troubleshooting.",
      "Junior Manager": "Manage a project site, schedules and day-to-day client coordination.",
      Manager: "Deliver complete digitisation projects on time, on budget and to standard.",
      "Senior Manager": "Oversee multiple sites and improve processes and throughput.",
      "Vice President": "Lead digitisation operations nationally and grow the service line.",
      CEO: "Company leadership — open to anyone who grows through the organisation.",
    },
  },
  {
    name: "Operations – Assessments",
    intern: "Business / Operations Intern",
    steps: {
      Intern: "Assist with OMR sheet processing, result checks and exam-day logistics.",
      Executive: "Process answer sheets, verify results and maintain confidentiality procedures.",
      "Senior Executive": "Coordinate evaluation cycles and train teams on secure exam handling.",
      "Junior Manager": "Manage assessment projects for institutions and handle client reporting.",
      Manager: "Own end-to-end exam processing for boards and universities.",
      "Senior Manager": "Lead the assessments portfolio, quality and client relationships.",
      "Vice President": "Set the strategy for assessment services and major accounts.",
      CEO: "Company leadership — open to anyone who grows through the organisation.",
    },
  },
];

const ladder = [...levels].reverse().filter((l) => l !== "CEO");

export function CareerGrowth() {
  const [active, setActive] = useState(0);
  const dept = departments[active] ?? departments[0]!;
  return (
    <section className="container-x pb-16">
      <SectionHead eyebrow="Career growth and learning" title="From intern to Vice President, in every department" />
      <p className="mt-4 max-w-3xl text-muted-foreground">
        We're a growing organisation, so every level has a clear next step. Each move comes with training, a mentor
        and regular reviews — whether you join as a software or business intern.
      </p>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist">
        {departments.map((d, i) => (
          <button
            key={d.name}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${i === active ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"}`}
          >
            {d.name}
          </button>
        ))}
      </div>
      <ol className="mt-8 space-y-3">
        {ladder.map((lvl, i) => (
          <li key={lvl} className="flex gap-4 rounded-xl border bg-card p-5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{i + 1}</span>
            <div>
              <h3 className="font-semibold">{lvl === "Intern" ? dept.intern : `${lvl} — ${dept.name}`}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{dept.steps[lvl]}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function OrgChart() {
  const ranks = levels.filter((l) => l !== "CEO" && l !== "Vice President");
  return (
    <section className="container-x pb-20">
      <SectionHead eyebrow="Organisation chart" title="How our teams are structured" />
      <div className="mt-10 overflow-x-auto">
        <div className="min-w-[720px]">
          <div className="mx-auto w-56 rounded-xl bg-primary p-4 text-center font-bold text-primary-foreground">CEO</div>
          <div className="mx-auto h-6 w-px bg-border" />
          <div className="mx-[12.5%] h-px bg-border" />
          <div className="grid grid-cols-4 gap-3">
            {departments.map((d) => (
              <div key={d.name} className="flex flex-col items-center">
                <div className="h-6 w-px bg-border" />
                <div className="w-full rounded-xl border-2 border-primary bg-card p-3 text-center">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Vice President</p>
                  <p className="font-semibold">{d.name}</p>
                </div>
                {ranks.map((r) => (
                  <div key={r} className="flex w-full flex-col items-center">
                    <div className="h-4 w-px bg-border" />
                    <div className="w-full rounded-lg border bg-card p-2 text-center text-sm">{r}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
