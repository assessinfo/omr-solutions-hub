import { createFileRoute } from "@tanstack/react-router";
import { Clock, FolderTree, Layers, Search, ShieldCheck, Tags, Upload, Users } from "lucide-react";
import { PageHero, SectionHead, Stats, seo } from "@/components/site/Blocks";
import { CardGrid } from "@/components/site/OnlineExam";
import { DmsActions, DmsDemoBand, DmsNext } from "@/components/site/DocumentManagement";
import dashboard from "@/assets/isdox/dashboard.png.asset.json";

export const Route = createFileRoute("/document-management/")({
  staticData: { sitemap: true },
  head: () => seo(
    "ISDOX Document Management System | AI-Powered DMS | OMR Solutions",
    "ISDOX is a secure, AI-powered document management system: upload, organise, search and control every document with folders, metadata templates, version control, roles and audit logs.",
    "/document-management",
  ),
  component: Overview,
});

const problems = [
  { old: "Files scattered everywhere", oldText: "Shared drives, email and desk drawers.", now: "One central home", nowText: "Every document in a single secure workspace." },
  { old: "Hard to find", oldText: "Minutes lost hunting for the right file.", now: "Powerful search", nowText: "Find by name, tag, owner or department." },
  { old: "Overwritten copies", oldText: "Nobody knows which version is final.", now: "Version control", nowText: "Automatic versions with full history." },
  { old: "No accountability", oldText: "No record of who opened or changed what.", now: "Audit logs", nowText: "Every upload, edit, view and deletion is logged." },
];

const agenda = [
  ["Dashboard", "Real-time visibility into your document estate."],
  ["Document management", "Upload, version and organise with ease."],
  ["Folder structure", "Flexible, hierarchical organisation."],
  ["Metadata templates", "Structured, searchable classification."],
  ["User & role management", "Fine-grained access control."],
  ["Security & reliability", "Enterprise-grade protection."],
];

function Overview() {
  return (
    <>
      <PageHero
        eyebrow="Document Management · ISDOX"
        title="A centralised home for every document"
        intro="ISDOX is a secure, web-based, AI-powered Document Management System that gives your organisation one place to upload, organise, search and control every document — with full visibility into who did what, and when."
        image={dashboard.url}
        imageAlt="ISDOX dashboard showing total documents, storage used, recent activity and storage overview"
        imageFit="contain"
      >
        <DmsActions />
      </PageHero>

      <div className="container-x pt-12">
        <Stats items={[
          { value: "100 GB+", label: "Scalable storage per workspace" },
          { value: "Role-based", label: "Access control down to the folder" },
          { value: "Real-time", label: "Search, activity & audit tracking" },
          { value: "AI", label: "Powered platform" },
        ]} />
      </div>

      <section className="container-x py-16">
        <SectionHead eyebrow="Key capabilities" title="Everything your teams need to manage documents end-to-end" />
        <CardGrid cols={4} items={[
          { icon: <Upload className="size-5" />, title: "Document upload", text: "Fast, validated upload of PDFs, Office files and images." },
          { icon: <FolderTree className="size-5" />, title: "Folder organisation", text: "Hierarchical folders for a clean, logical structure." },
          { icon: <Tags className="size-5" />, title: "Metadata templates", text: "Custom fields for consistent classification." },
          { icon: <Search className="size-5" />, title: "Powerful search", text: "Find documents by name, tag, owner or department." },
          { icon: <Layers className="size-5" />, title: "Version control", text: "Automatic versioning with full history." },
          { icon: <Users className="size-5" />, title: "User management", text: "Centralised control of accounts and departments." },
          { icon: <ShieldCheck className="size-5" />, title: "Roles & permissions", text: "Granular, role-based access at every level." },
          { icon: <Clock className="size-5" />, title: "Audit logs", text: "A complete trail of every action, by every user." },
        ]} />
      </section>

      <section className="border-y bg-secondary py-16">
        <div className="container-x">
          <SectionHead eyebrow="The problem it solves" title="From scattered files to one controlled library" />
          <div className="mt-10 overflow-hidden rounded-2xl border bg-card">
            <div className="grid grid-cols-2 border-b bg-muted text-sm font-semibold">
              <div className="p-4">Without a DMS</div><div className="p-4 text-primary">With ISDOX</div>
            </div>
            {problems.map((c) => (
              <div key={c.old} className="grid grid-cols-2 border-b last:border-0">
                <div className="p-4"><div className="font-medium">{c.old}</div><p className="text-sm text-muted-foreground">{c.oldText}</p></div>
                <div className="p-4"><div className="font-medium">{c.now}</div><p className="text-sm text-muted-foreground">{c.nowText}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHead eyebrow="What a demo covers" title="A quick tour of the core modules" />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agenda.map(([title, text], i) => (
            <li key={title} className="rounded-2xl border bg-card p-5">
              <div className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-2 font-semibold">{title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </section>
      <DmsNext to="/document-management/features" label="Take the product tour" />
      <DmsDemoBand />
    </>
  );
}
