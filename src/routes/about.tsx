import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SectionHead, Stats, seo } from "@/components/site/Blocks";
import building from "@/assets/building.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About OMR Solutions — OMR & Outsourcing Experts Since 2004",
      "OMR India Outsources Pvt. Ltd. has delivered OMR scanning, exam processing and digitisation since 2004. Partners of Sekonic Japan and Gravic USA.",
      "/about",
    ),
  component: About,
});

const values = [
  { title: "Integrity", text: "Honest advice and strong ethics in every project." },
  { title: "Responsibility", text: "Accuracy is non-negotiable — we own every result." },
  { title: "Open-mindedness", text: "Every project gets the same care, whatever its size." },
  { title: "Role model", text: "Professional, fair handling of even the most complex jobs." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Trusted OMR partner since 2004"
        intro="We help institutions capture, scan and analyse results faster — with less effort and at lower cost."
        image={building}
      />
      <section className="container-x grid gap-12 py-20 lg:grid-cols-2">
        <SectionHead eyebrow="Who we are" title="World-class OMR technology, delivered locally" />
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            OMR India Outsources Pvt. Ltd. (OIPL) was founded in 2004 by entrepreneur Rohit Gupta and is part of the IOS Group. We deliver IT and outsourcing solutions for examination management, digital evaluation and data analytics.
          </p>
          <p>
            We partner with <strong className="text-foreground">Gravic Inc., USA</strong> for Remark Office OMR and <strong className="text-foreground">Sekonic Corporation, Japan</strong> for OMR scanners — and back them with our own in-house design, development and support teams.
          </p>
        </div>
      </section>
      <div className="container-x">
        <Stats items={[{ value: "20+", label: "Years experience" }, { value: "1,000+", label: "Projects completed" }, { value: "50+", label: "Professionals" }, { value: "98%", label: "Positive reviews" }]} />
      </div>
      <section className="container-x py-20">
        <SectionHead eyebrow="Our values" title="The principles behind every sheet we scan" center />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border bg-card p-7 shadow-card">
              <span className="block size-3 rounded-full bg-primary" />
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y bg-secondary">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-[auto_1fr]">
          <div className="grid size-28 place-items-center rounded-full bg-primary font-display text-3xl font-bold text-primary-foreground">RG</div>
          <div>
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-3 text-2xl font-bold">Rohit Gupta, Chairman & Managing Director</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              A first-generation entrepreneur and chemical engineer with experience across IT, RFID, printing and film. He believes every business follows a pattern — and once you see it, growth follows.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
