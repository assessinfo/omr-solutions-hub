import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, products, solutions } from "@/lib/content";
import { Logo } from "./Logo";

type NavItem = { label: string; to: string; children?: { label: string; to: string; desc?: string }[] };

const nav: NavItem[] = [
  {
    label: "Solutions",
    to: "/solutions",
    children: solutions.map((s) => ({ label: s.name, to: `/solutions/${s.slug}`, desc: s.summary })),
  },
  {
    label: "Products",
    to: "/products",
    children: products.map((p) => ({ label: p.name, to: `/products/${p.slug}` })),
  },
  { label: "Clients", to: "/clients" },
  { label: "About", to: "/about" },
  { label: "News", to: "/news" },
  { label: "Careers", to: "/careers" },
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" aria-label="OMR Solutions home" onClick={() => setMobile(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  type="button"
                  aria-expanded={open === item.label}
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                  onKeyDown={(e) => e.key === "Escape" && setOpen(null)}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                  <ChevronDown className={`size-4 transition-transform ${open === item.label ? "rotate-180" : ""}`} />
                </button>
                {open === item.label && (
                  <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3">
                    <div className="grid grid-cols-2 gap-1 rounded-2xl border bg-popover p-3 shadow-lift">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(null)}
                          className="rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                        >
                          <span className="block text-sm font-semibold">{c.label}</span>
                          {c.desc && <span className="mt-0.5 block text-xs text-muted-foreground">{c.desc}</span>}
                        </Link>
                      ))}
                      <Link
                        to={item.to}
                        onClick={() => setOpen(null)}
                        className="col-span-2 mt-1 rounded-lg border-t px-3 pt-3 pb-1 text-sm font-semibold text-primary"
                      >
                        View all {item.label.toLowerCase()} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={company.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
            <Phone className="size-4 text-primary" /> {company.phone}
          </a>
          <Button asChild>
            <Link to="/contact">Get a quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 lg:hidden"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobile && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t bg-background lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.label} className="border-b last:border-0">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={mobileSub === item.label}
                      onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between py-3.5 text-base font-semibold"
                    >
                      {item.label}
                      <ChevronDown className={`size-5 transition-transform ${mobileSub === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileSub === item.label && (
                      <div className="flex flex-col pb-3 pl-3">
                        {item.children.map((c) => (
                          <Link key={c.to} to={c.to} onClick={() => setMobile(false)} className="py-2 text-sm text-muted-foreground">
                            {c.label}
                          </Link>
                        ))}
                        <Link to={item.to} onClick={() => setMobile(false)} className="py-2 text-sm font-semibold text-primary">
                          View all
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.to} onClick={() => setMobile(false)} className="block py-3.5 text-base font-semibold">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild size="lg" className="mt-4">
              <Link to="/contact" onClick={() => setMobile(false)}>Get a quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
