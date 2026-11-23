import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck, Clock, Database, Layers, Lock, ShieldCheck } from "lucide-react";
import { PageHero, SectionHead, seo } from "@/components/site/Blocks";
import { CardGrid } from "@/components/site/OnlineExam";
import { DmsActions, DmsDemoBand } from "@/components/site/DocumentManagement";

export const Route = createFileRoute("/document-management/security")({
  staticData: { sitemap: true },
  head: () => seo(
    "ISDOX Security & Reliability | Encrypted Document Storage | OMR Solutions",
    "Enterprise-grade protection in ISDOX: encrypted storage, role-based access, full audit trail, automated backups, retained version history and scalable storage.",
    "/document-management/security",
  ),
  component: Security,
});

function Security() {
  return (
    <>
      <PageHero
        eyebrow="ISDOX · Security & reliability"
        title="Enterprise-grade protection behind every document"
        intro="ISDOX is built so every document stays protected, every action is recorded and nothing is ever truly lost."
      >
        <DmsActions />
      </PageHero>
      <section className="container-x py-16">
        <SectionHead eyebrow="Protection" title="Secure by default" />
        <CardGrid items={[
          { icon: <Lock className="size-5" />, title: "Encrypted storage", text: "Each document is protected and secure." },
          { icon: <ShieldCheck className="size-5" />, title: "Role-based access", text: "Permissions enforced at folder and document level." },
          { icon: <Clock className="size-5" />, title: "Full audit trail", text: "Every upload, edit, view and deletion is logged." },
        ]} />
      </section>
      <section className="border-y bg-secondary py-16">
        <div className="container-x">
          <SectionHead eyebrow="Reliability" title="Built to keep running as you grow" />
          <CardGrid items={[
            { icon: <CircleCheck className="size-5" />, title: "Reliable by design", text: "Automated backups and high-availability infrastructure." },
            { icon: <Layers className="size-5" />, title: "Version history", text: "Nothing is ever truly lost — every revision is retained." },
            { icon: <Database className="size-5" />, title: "Scalable storage", text: "Grows with your organisation's document volume, from 100 GB+ per workspace." },
          ]} />
        </div>
      </section>
      <DmsDemoBand title="Let's bring ISDOX to your team" text="Book a live walkthrough and we'll show you encryption, permissions and audit logs on real documents." />
    </>
  );
}
