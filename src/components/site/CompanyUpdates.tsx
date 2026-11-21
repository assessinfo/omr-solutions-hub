import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Plane, Users, Wrench } from "lucide-react";
import { SectionHead } from "@/components/site/Blocks";
import training from "@/assets/IMG_1294.jpeg.asset.json";
import award from "@/assets/IMG_0654.JPG.asset.json";
import japanMeeting from "@/assets/IMG_1389.JPG.asset.json";
import japanGroup from "@/assets/IMG_1431.JPG.asset.json";
import welcome from "@/assets/IMG_0669.jpeg.asset.json";
import partnerTalk from "@/assets/IMG_0673.jpeg.asset.json";

type Photo = { url: string; alt: string; caption: string; portrait?: boolean };

type Update = {
  icon: typeof Award;
  title: string;
  short: string;
  text: string;
  photos: Photo[];
};

const updates: Update[] = [
  {
    icon: Wrench,
    title: "Training for our staff",
    short: "Operators learn on real answer sheets and real readers.",
    text: "New colleagues learn the work on live material, not slides. They practise on the same OMR readers and the same answer sheets that exam batches run through, so a first live processing run is never the first time they have touched the machine. That is also how our support people stay current — they have fed the sheets themselves.",
    photos: [
      {
        url: training.url,
        alt: "OMR Solutions staff member feeding OMR answer sheets through a reader at a workstation",
        caption: "Practising on real answer sheets at the reader",
        portrait: true,
      },
    ],
  },
  {
    icon: Award,
    title: "Promotions and incentives",
    short: "Good work is recognised in front of the whole team.",
    text: "When someone steps up, we do not send an email. The award is handed over in the meeting room with the team standing around the table to see it — Diwali lanterns on the ceiling, marigolds on the table. Promotions follow the same rule: the people who did the work hear it from the room first.",
    photos: [
      {
        url: award.url,
        alt: "A manager presenting an award to an OMR Solutions colleague in front of the team in a meeting room",
        caption: "Handing over an award with the team watching",
      },
    ],
  },
  {
    icon: Plane,
    title: "Visits to Japan and other countries",
    short: "Our people travel to meet the teams behind the equipment.",
    text: "The scanners and software we supply are made by teams abroad, so we go and see them. Recent trips took colleagues to Japan for meetings, floor time and long conversations over coffee — the kind that change how we spec, install and support a machine in India. We bring the learning back and pass it on to the team.",
    photos: [
      {
        url: japanMeeting.url,
        alt: "OMR Solutions colleague in discussion with hosts in a Japanese office break room",
        caption: "A working conversation in Japan",
        portrait: true,
      },
      {
        url: japanGroup.url,
        alt: "Group photograph of a visiting delegation with hosts in a Japanese corporate boardroom",
        caption: "With a visiting delegation in Japan",
      },
    ],
  },
  {
    icon: Users,
    title: "Partners visiting us in India",
    short: "Delegations come to the office and see the floor first.",
    text: "Partners and delegations come to us as well. We welcome them in the conference room, put the workflow in front of them, and walk them through the processing floor before anything is agreed. Seeing the sheets move makes the conversation shorter and the promises smaller and truer.",
    photos: [
      {
        url: welcome.url,
        alt: "OMR Solutions team standing along a conference table welcoming a visiting guest",
        caption: "Welcoming a visiting guest in the conference room",
      },
      {
        url: partnerTalk.url,
        alt: "Two professionals in conversation during a partner visit at the OMR Solutions office",
        caption: "Talking it through during a partner visit",
      },
    ],
  },
];

function UpdateCard({ update }: { update: Update }) {
  const first = update.photos[0];
  if (!first) return null;
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-card">
      <img src={first.url} alt={first.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
      <div className="p-5">
        <update.icon className="size-5 text-primary" />
        <h3 className="mt-3 font-semibold">{update.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{update.short}</p>
      </div>
    </div>
  );
}

export function CompanyUpdates({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="container-x pt-16">
        <SectionHead
          eyebrow="Company updates"
          title="What keeps the team going"
          intro="Training, recognition, travel and visits — the parts of the year that never make a press release."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {updates.map((u) => <UpdateCard key={u.title} update={u} />)}
        </div>
        <p className="mt-6 text-sm">
          <Link to="/careers/celebrations" className="font-semibold text-primary">See how we work and celebrate →</Link>
        </p>
      </section>
    );
  }

  return (
    <>
      {updates.map((u, i) => (
        <section key={u.title} className={i % 2 === 1 ? "border-y bg-secondary" : ""}>
          <div className="container-x py-16">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow flex items-center gap-2"><u.icon className="size-4" /> Company life</span>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{u.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{u.text}</p>
              </div>
              <div className={`grid gap-4 ${u.photos.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {u.photos.map((p) => (
                  <a
                    key={p.url}
                    href={p.url}
                    target="_blank"
                    rel="noopener"
                    className="group overflow-hidden rounded-2xl border bg-card shadow-card transition-shadow hover:shadow-lift"
                  >
                    <img
                      src={p.url}
                      alt={p.alt}
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] ${p.portrait ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                    />
                    <p className="border-t px-4 py-3 text-sm text-muted-foreground">{p.caption}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="container-x pb-20">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-secondary p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">Want to be part of this?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Open roles, how we treat our people, and how we mark the year.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/careers" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">
              Careers <ArrowRight className="size-4" />
            </Link>
            <Link to="/company-policy" className="inline-flex items-center rounded-full border px-6 py-3 font-semibold hover:border-primary">
              Company policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
