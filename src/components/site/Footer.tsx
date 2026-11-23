import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { company, isOmrSoftwareTool, isPrintingPage, isScannerModel, omrSoftwareMenu, printingMenu, products, solutions } from "@/lib/content";
import { Logo } from "./Logo";
import { openCookieSettings } from "./CookieBanner";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1.3fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {company.legalName} — India's trusted partner for OMR scanning, exam processing and document digitisation since {company.founded}.
          </p>
          <div className="mt-5 flex gap-4 text-sm font-semibold">
            {Object.entries(company.social).map(([k, v]) => (
              <a key={k} href={v} target="_blank" rel="noreferrer" className="capitalize hover:text-primary">
                {k}
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Solutions" links={solutions.map((s) => ({ label: s.name, to: `/solutions/${s.slug}` }))} />
        <div>
          <h3 className="text-sm font-semibold text-ink-foreground">Products</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/products/$slug" params={{ slug: "omr-scanners" }} className="font-semibold text-ink-foreground hover:text-primary">
                OMR Scanners
              </Link>
              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                {products.filter((p) => isScannerModel(p.slug)).map((m) => (
                  <Link key={m.slug} to="/products/$slug" params={{ slug: m.slug }} className="hover:text-primary">
                    {m.name.replace(" Scanner", "")}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link to="/products/$slug" params={{ slug: "omr-software" }} className="font-semibold text-ink-foreground hover:text-primary">
                OMR Software
              </Link>
              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                {omrSoftwareMenu.map((t) => (
                  <Link key={t.slug} to="/products/$slug" params={{ slug: t.slug }} className="hover:text-primary">
                    {t.label}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link to="/products/$slug" params={{ slug: "omr-sheets" }} className="font-semibold text-ink-foreground hover:text-primary">
                Printing
              </Link>
              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                {printingMenu.map((t) => (
                  <Link key={t.slug} to="/products/$slug" params={{ slug: t.slug }} className="hover:text-primary">
                    {t.label}
                  </Link>
                ))}
              </div>
            </li>
            {products
              .filter((p) => !isScannerModel(p.slug) && !isOmrSoftwareTool(p.slug) && !isPrintingPage(p.slug) && p.slug !== "omr-scanners" && p.slug !== "omr-software")
              .map((p) => (
                <li key={p.slug}>
                  {p.href
                    ? <Link to={p.href} className="hover:text-primary">{p.name}</Link>
                    : <Link to="/products/$slug" params={{ slug: p.slug }} className="hover:text-primary">{p.name}</Link>}
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ink-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-primary"><WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-primary" />{company.phone}</a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex gap-2 hover:text-primary"><Mail className="mt-0.5 size-4 shrink-0 text-primary" />{company.email}</a>
            </li>
            {company.offices.map((o) => (
              <li key={o.city} className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" />{o.address}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-border">
        <div className="container-x flex flex-col justify-between gap-3 py-6 text-xs md:flex-row">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/applications" className="hover:text-primary">Application areas</Link>
            <Link to="/case-studies" className="hover:text-primary">Case studies</Link>
            <Link to="/careers/celebrations" className="hover:text-primary">Life at OMR</Link>
            <Link to="/company-policy" className="hover:text-primary">Company policy</Link>
            <Link to="/privacy-policy" className="hover:text-primary">Privacy policy</Link>
            <button type="button" onClick={openCookieSettings} className="hover:text-primary">Cookie settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-primary">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
