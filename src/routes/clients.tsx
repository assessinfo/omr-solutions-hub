import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { CtaBand, PageHero, Stats, seo } from "@/components/site/Blocks";
import { clientSectors } from "@/lib/content";

export const Route = createFileRoute("/clients")({
  head: () =>
    seo(
      "Our Clients — Universities, PSCs, Corporates & Schools | OMR Solutions",
      "Accenture, Infosys, L&T, BHEL, Johns Hopkins, Karnataka PSC, Career Point Kota and more trust OMR Solutions for OMR scanning and software.",
      "/clients",
    ),
  component: Clients,
});

function Clients() {
  return (
    <>
      <PageHero eyebrow="Clients" title="Trusted by institutions that can't afford mistakes" intro="Schools, universities, commissions, corporates and hospitals rely on us to turn paper into accurate data — on time." />
      <div className="container-x pt-12">
        <Stats items={[{ value: "1,000+", label: "Clients" }, { value: "5", label: "Sectors" }, { value: "Pan-India", label: "Reach" }, { value: "Global", label: "Universities" }]} />
      </div>
      <section className="container-x space-y-6 py-20">
        {clientSectors.map((s, i) => (
          <div key={s.name} className="grid gap-8 rounded-2xl border bg-card p-8 shadow-card lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="font-display text-sm font-bold text-primary">Sector {String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-2xl font-bold">{s.name}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.clients.map((c) => (
                  <span key={c} className="rounded-full border bg-secondary px-3 py-1 text-sm">{c}</span>
                ))}
              </div>
            </div>
            {s.quote && (
              <blockquote className="flex flex-col justify-center rounded-xl bg-accent p-7">
                <Quote className="size-6 text-primary" />
                <p className="mt-3 text-lg font-medium leading-relaxed">"{s.quote.text}"</p>
                <footer className="mt-3 text-sm font-semibold text-accent-foreground">— {s.quote.by}</footer>
              </blockquote>
            )}
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
