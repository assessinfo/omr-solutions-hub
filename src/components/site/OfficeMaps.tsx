import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { company } from "@/lib/content";
import { officeDirectionsUrl, officeMapEmbedUrl, officeSearchUrl } from "@/lib/office-maps";

export function OfficeMaps() {
  return (
    <section className="container-x pb-20">
      <h2 className="text-2xl font-bold">Find our offices</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        {company.legalName} has two offices in India — the head office in New Delhi and a branch office in Mumbai.
        Each map below shows the exact location; tap it to open Google Maps or get directions from where you are.
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {company.offices.map((o) => (
          <div key={o.city} className="overflow-hidden rounded-2xl border bg-card shadow-card">
            <div className="aspect-[16/10] w-full bg-secondary">
              <iframe
                className="size-full"
                src={officeMapEmbedUrl(o.mapQuery)}
                title={`Google map showing ${company.legalName} ${o.label}, ${o.address}`}
                loading="lazy"
                tabIndex={-1}
              />
            </div>
            <div className="p-6">
              <div className="flex gap-3">
                <MapPin className="size-5 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold">
                    {o.label} · {o.city}
                  </div>
                  <div className="text-muted-foreground">{o.address}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{o.phone}</div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={officeDirectionsUrl(o.mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Navigation className="size-4" /> Get directions
                </a>
                <a
                  href={officeSearchUrl(o.mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary"
                >
                  <ExternalLink className="size-4" /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
