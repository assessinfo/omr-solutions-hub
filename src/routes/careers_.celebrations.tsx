import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarHeart, Camera, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, SectionHead, seo } from "@/components/site/Blocks";
import { CompanyUpdates } from "@/components/site/CompanyUpdates";
import { company } from "@/lib/content";
import holi from "@/assets/IMG_1385.jpeg.asset.json";
import ganpati from "@/assets/IMG_3856.JPG.asset.json";
import birthday from "@/assets/IMG_1321.jpeg.asset.json";
import teamYard from "@/assets/IMG_1364.jpeg.asset.json";
import teamOffice from "@/assets/IMG_1348.jpeg.asset.json";

export const Route = createFileRoute("/careers_/celebrations")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Life at OMR Solutions — Birthdays, Holi, Ganpati & Team Celebrations",
      "At OMR India Outsources we celebrate as a family — birthdays in the office, Holi in the yard, Ganpati in the lobby. See how our teams in New Delhi and Mumbai mark the year.",
      "/careers/celebrations",
    ),
  component: Celebrations,
});

const celebrations = [
  {
    icon: CalendarHeart,
    title: "Birthdays",
    text: "A cake on the table, balloons along the glass partition, and the whole floor stopping for twenty minutes. Nobody works through their birthday here.",
  },
  {
    icon: Palette,
    title: "Holi",
    text: "The yard outside the office turns pink, yellow and green. Powder, water, paper plates of colour, and every grey company polo gone unrecognisable by lunchtime.",
  },
  {
    icon: Sparkles,
    title: "Ganesh Chaturthi",
    text: "A Ganpati set up in the lobby with marigold garlands, coconut and prasad. Everyone comes in traditional dress, and the group photo is the one we keep on the wall.",
  },
  {
    icon: Camera,
    title: "And the rest of the year",
    text: "Team photos on the office steps, the small wins after a long exam run, and the evenings that quietly run longer than planned.",
  },
];

const photos = [
  {
    src: holi.url,
    alt: "OMR Solutions team playing Holi with coloured powder in the office yard",
    caption: "Holi in the yard — powder, water, and every polo turned colour",
  },
  {
    src: birthday.url,
    alt: "OMR Solutions team gathered around a birthday cake with balloons in the office",
    caption: "A birthday in the office — cake, balloons, the whole floor",
  },
  {
    src: ganpati.url,
    alt: "OMR Solutions team in traditional dress around a Ganesh idol and prasad in the office lobby",
    caption: "Ganpati in the lobby — garlands, prasad and the group photo",
  },
  {
    src: teamYard.url,
    alt: "OMR Solutions team cheering for a group selfie outdoors after celebrations",
    caption: "Mid-celebration, still cheering for the camera",
  },
  {
    src: teamOffice.url,
    alt: "Full OMR Solutions team photographed in rows in front of the office building",
    caption: "The full team, in front of the office",
  },
];

const reasons = [
  {
    title: "Family, not headcount",
    text: "We are a small enough team that everyone knows everyone's birthday. That is a feature, not a limitation.",
  },
  {
    title: "Everyone is included",
    text: "Software, AI, digitisation, assessments, sales and support — the photos show all of them in the same frame.",
  },
  {
    title: "Real, not staged",
    text: "Every picture on this page is a photo our own team took, not a stock image bought for a website.",
  },
  {
    title: "The work still gets done",
    text: "Exams don't wait for festivals. Celebrations happen around deadlines, and deadlines still get met.",
  },
];

function Celebrations() {
  return (
    <>
      <PageHero
        eyebrow="Life at OMR · We celebrate as a family"
        title="From birthdays to Holi to Ganpati"
        intro="Exam work is serious business. Our people aren't. Here is what the year actually looks like at OMR India Outsources."
        image={holi.url}
        imageAlt="OMR Solutions team playing Holi with coloured powder in the office yard"
      >
        <Button asChild size="lg">
          <Link to="/careers">See open roles <ArrowRight /></Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/company-policy">Read our company policy</Link>
        </Button>
      </PageHero>

      <section className="container-x py-16">
        <SectionHead
          eyebrow="What we celebrate"
          title="The festival calendar is the team calendar"
          intro="We mark the occasions that matter to the people who work here — and we make time for them together."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {celebrations.map((c) => (
            <div key={c.title} className="rounded-2xl border bg-card p-7 shadow-card">
              <c.icon className="size-6 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-secondary">
        <div className="container-x py-16">
          <SectionHead eyebrow="Photos" title="Straight from the office phone" intro="No stock photos, no staging — these are our own team on the days we stopped working." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {photos.map((p, i) => (
              <a
                key={p.src}
                href={p.src}
                target="_blank"
                rel="noopener"
                className={`group overflow-hidden rounded-2xl border bg-card shadow-card transition-shadow hover:shadow-lift ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
                />
                <p className="border-t px-4 py-3 text-sm text-muted-foreground">{p.caption}</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Photographs of the {company.legalName} team, shared with the team's knowledge.
          </p>
        </div>
      </section>

      <CompanyUpdates />

      <section className="container-x py-16">
        <SectionHead eyebrow="Why we make time for it" title="Because the year is long and the work is hard" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-xl bg-secondary p-5">
              <h3 className="font-semibold">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-secondary p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">Come and celebrate with us</h2>
            <p className="mt-1 text-sm text-muted-foreground">Open roles, and how we treat our people once you're here.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild><Link to="/careers">Careers <ArrowRight /></Link></Button>
            <Button asChild variant="outline"><Link to="/company-policy">Company policy</Link></Button>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to see the office for yourself?"
        text="Drop us a line and we'll show you around — festival day if you're lucky."
      />
    </>
  );
}
