import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, seo } from "@/components/site/Blocks";
import { company } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "Contact OMR Solutions — Delhi & Mumbai Offices | +91 93191 23429",
      "Get a quote for OMR scanners, software, sheets or exam processing. Call +91 93191 23429 or email sales@omr.co.in. Offices in New Delhi and Mumbai.",
      "/contact",
    ),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nOrganisation: ${f.get("org")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start a conversation" intro="Questions about scanners, software or a custom project? Our team replies within 24 hours." />
      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <a href={company.phoneHref} className="flex gap-4 rounded-2xl border bg-card p-6 shadow-card hover:border-primary">
            <Phone className="size-6 text-primary" />
            <div><div className="font-semibold">Call us</div><div className="text-muted-foreground">{company.phone} · {company.phoneAlt}</div></div>
          </a>
          <a href={`mailto:${company.email}`} className="flex gap-4 rounded-2xl border bg-card p-6 shadow-card hover:border-primary">
            <Mail className="size-6 text-primary" />
            <div><div className="font-semibold">Email us</div><div className="text-muted-foreground">{company.email}</div></div>
          </a>
          {company.offices.map((o) => (
            <div key={o.city} className="flex gap-4 rounded-2xl border bg-card p-6 shadow-card">
              <MapPin className="size-6 shrink-0 text-primary" />
              <div><div className="font-semibold">{o.label} · {o.city}</div><div className="text-muted-foreground">{o.address}</div><div className="text-sm text-muted-foreground">{o.phone}</div></div>
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border bg-card p-8 shadow-card">
          <h2 className="text-2xl font-bold">Send us your query</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Full name" required />
            <Field id="org" label="Organisation" />
            <Field id="email" label="Email" type="email" required />
            <Field id="phone" label="Phone" type="tel" />
            <div className="sm:col-span-2">
              <Label htmlFor="message">How can we help?</Label>
              <Textarea id="message" name="message" required rows={5} className="mt-2" />
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6">Send message</Button>
          {sent && <p className="mt-4 text-sm text-muted-foreground">Your email app should now open with your message ready to send.</p>}
        </form>
      </section>
    </>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={id}>{label}{required && " *"}</Label>
      <Input id={id} name={id} type={type} required={required} className="mt-2" />
    </div>
  );
}
