import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { PageHero, seo } from "@/components/site/Blocks";
import { BitrixInlineForm } from "@/components/site/BitrixInlineForm";
import { OfficeMaps } from "@/components/site/OfficeMaps";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { company } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Contact OMR Solutions — Delhi & Mumbai Offices | +91 85913 03477",
      "Get a quote for OMR scanners, software, sheets or exam processing. Call +91 85913 03477 or email sales@omr.co.in. Offices in New Delhi and Mumbai.",
      "/contact",
    ),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start a conversation" intro="Questions about scanners, software or a custom project? Our team replies within 24 hours." />
      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex gap-4 rounded-2xl border bg-card p-6 shadow-card hover:border-primary">
            <WhatsAppIcon className="size-6 shrink-0 text-primary" />
            <div><div className="font-semibold">WhatsApp us</div><div className="text-muted-foreground">{company.phone} · {company.phoneAlt}</div></div>
          </a>
          <a href={`mailto:${company.email}`} className="flex gap-4 rounded-2xl border bg-card p-6 shadow-card hover:border-primary">
            <Mail className="size-6 text-primary" />
            <div><div className="font-semibold">Email us</div><div className="text-muted-foreground">{company.email}</div></div>
          </a>
          {company.offices.map((o) => (
            <div key={o.city} className="flex gap-4 rounded-2xl border bg-card p-6 shadow-card">
              <MapPin className="size-6 shrink-0 text-primary" />
              <div><div className="font-semibold">{o.label} · {o.city}</div><div className="text-muted-foreground">{o.address}</div><a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"><WhatsAppIcon className="size-3.5" /> {o.phone}</a></div>
            </div>
          ))}
        </div>
        <div className="min-w-0">
          <h2 className="mb-4 text-2xl font-bold">Send us your query</h2>
          <BitrixInlineForm />
        </div>
      </section>
      <OfficeMaps />
    </>
  );
}
