import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "./DemoBooking";

export const dmsPages = [
  { to: "/document-management", label: "Overview" },
  { to: "/document-management/features", label: "Product tour" },
  { to: "/document-management/users-roles", label: "Users & permissions" },
  { to: "/document-management/security", label: "Security & reliability" },
] as const;

export function DmsSubNav() {
  return (
    <nav aria-label="ISDOX document management" className="sticky top-16 z-30 border-b bg-background/95 backdrop-blur md:top-20">
      <div className="container-x flex items-center gap-1 overflow-x-auto py-2">
        {dmsPages.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            activeOptions={{ exact: true }}
            className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }}
          >
            {p.label}
          </Link>
        ))}
        <BookDemoButton product="ISDOX Document Management" size="sm" variant="ghost" className="ml-auto whitespace-nowrap font-semibold text-primary" />
      </div>
    </nav>
  );
}

export function DmsActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <BookDemoButton product="ISDOX Document Management" size="lg" />
      <Button asChild size="lg" variant="outline"><Link to="/document-management/features">Take the product tour <ArrowRight /></Link></Button>
    </div>
  );
}

export function DmsNext({ to, label }: { to: (typeof dmsPages)[number]["to"]; label: string }) {
  return (
    <div className="container-x pb-4 text-right">
      <Link to={to} className="inline-flex items-center gap-2 font-semibold text-primary">Next: {label} <ArrowRight className="size-4" /></Link>
    </div>
  );
}

/** Closing band matching the deck's final slide, with the demo pop-up as the main action. */
export function DmsDemoBand({ title = "Let's bring ISDOX to your team", text = "See your own folders, templates and permissions set up live in a 30-minute walkthrough." }: { title?: string; text?: string }) {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 md:px-14">
        <div className="absolute -right-10 -top-10 h-64 w-64 bubble-dots opacity-60" aria-hidden />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-ink-foreground md:text-4xl">{title}</h2>
            <p className="mt-3 text-ink-muted">{text}</p>
          </div>
          <BookDemoButton product="ISDOX Document Management" size="lg" />
        </div>
      </div>
    </section>
  );
}
