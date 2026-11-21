import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { seo } from "@/components/site/Blocks";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { company } from "@/lib/content";
import corporate from "@/assets/corporate.jpg";

function BitrixInlineForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-b24-form", "inline/13/1t2chc");
    script.setAttribute("data-b24-form-telemetry-sign", "v1:13:site.ca9182e60b6a93f22014c77664d9bc65e294244808beec4d694067369a48b27f");
    script.setAttribute("data-skip-moving", "true");
    script.src = `https://cdn.bitrix24.in/b1291759/crm/form/loader_13.js?${Math.floor(Date.now() / 180000)}`;
    container.appendChild(script);
    return () => { container.replaceChildren(); };
  }, []);
  return <div ref={containerRef} className="min-h-[680px] w-full rounded-lg border bg-card p-2" />;
}

export const Route = createFileRoute("/get-a-quote")({
  head: () => seo("Get an OMR Quote | OMR Solutions", "Contact OMR Solutions for Sekonic scanners, Remark Office OMR, answer sheet printing and exam processing. Share your details to discuss your requirements.", "/get-a-quote"),
  component: EnquiryLanding,
});

function EnquiryLanding() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink">
        <img src={corporate} alt="" className="absolute inset-0 -z-20 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink/85" />
        <div className="container-x py-14 md:py-20">
          <p className="text-sm font-semibold text-primary">OMR India Outsources Pvt. Ltd. · Since 2004</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-normal text-ink-foreground md:text-5xl">OMR Solutions</h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-ink-foreground">The right technology for your next exam.</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">Sekonic OMR scanners, Remark Office OMR, answer sheet printing and exam processing — let's talk about what your institution needs.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#enquiry">Request a callback <ArrowDown /></a></Button>
            <Button asChild size="lg" variant="outline" className="border-ink-border bg-transparent text-ink-foreground hover:bg-ink-border hover:text-ink-foreground"><a href={company.whatsappHref} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="size-4" /> {company.phone}</a></Button>
          </div>
        </div>
      </section>
      <section id="enquiry" className="scroll-mt-24 border-b">
        <div className="container-x grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="py-4">
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-4 text-3xl font-bold tracking-normal">Let's discuss your requirements</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Share your name and phone number, and our team can contact you about your OMR requirements.</p>
            <div className="mt-8 space-y-5 border-t pt-7">
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-semibold hover:text-primary"><WhatsAppIcon className="size-5 shrink-0 text-primary" /> {company.phone}</a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 break-all font-semibold hover:text-primary"><Mail className="size-5 shrink-0 text-primary" /> {company.email}</a>
            </div>
          </div>
          <div className="min-w-0"><BitrixInlineForm /></div>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="container-x flex flex-col justify-between gap-5 py-10 sm:flex-row sm:items-center">
          <div><h2 className="text-xl font-semibold tracking-normal">Explore our OMR range</h2><p className="mt-2 text-muted-foreground">Scanners, software, printing and services.</p></div>
          <Button asChild variant="outline"><Link to="/products">View products <ArrowRight /></Link></Button>
        </div>
      </section>
    </>
  );
}