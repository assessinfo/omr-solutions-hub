import { createFileRoute } from "@tanstack/react-router";
import { PageHero, seo } from "@/components/site/Blocks";
import { ModuleShowcase } from "@/components/site/OnlineExam";
import { DmsActions, DmsDemoBand, DmsNext } from "@/components/site/DocumentManagement";
import dashboard from "@/assets/isdox/dashboard.png.asset.json";
import documents from "@/assets/isdox/documents.png.asset.json";
import folders from "@/assets/isdox/folders.png.asset.json";
import metadata from "@/assets/isdox/metadata.png.asset.json";

export const Route = createFileRoute("/document-management/features")({
  staticData: { sitemap: true },
  head: () => seo(
    "ISDOX Product Tour: Dashboard, Documents, Folders & Metadata | OMR Solutions",
    "Tour the ISDOX document management modules: live dashboard, versioned document library, nested folders with breadcrumbs and reusable metadata templates.",
    "/document-management/features",
  ),
  component: Features,
});

function Features() {
  return (
    <>
      <PageHero
        eyebrow="ISDOX · Product tour"
        title="Every file organised, versioned and one click away"
        intro="Walk through the four modules your teams use every day — the dashboard, the document library, folders and metadata templates."
      >
        <DmsActions />
      </PageHero>
      <ModuleShowcase
        eyebrow="01 · Dashboard"
        title="A single-glance view of your entire document estate"
        image={dashboard.url}
        alt="ISDOX dashboard with document counts, recent activity and storage overview"
        points={[
          { title: "Live counts", text: "Total documents, storage used and daily uploads." },
          { title: "Recent activity feed", text: "See who uploaded what, and when." },
          { title: "Storage overview", text: "Visual used vs. free capacity." },
          { title: "User activity trends", text: "Monitor engagement over time." },
        ]}
      />
      <div className="border-y bg-secondary">
        <ModuleShowcase
          flip
          eyebrow="02 · Document management"
          title="Every file, organised, versioned and one click away"
          image={documents.url}
          alt="ISDOX document list with owner, version and upload date columns and action icons"
          points={[
            { title: "Centralised list", text: "All documents with owner, version and upload date." },
            { title: "Instant search", text: "Search across the entire document library." },
            { title: "One-click actions", text: "View, download, edit or delete." },
            { title: "Version tags", text: "Tags such as V1.0 keep every revision traceable." },
          ]}
        />
      </div>
      <ModuleShowcase
        eyebrow="03 · Folder management"
        title="Structure documents the way your business actually works"
        image={folders.url}
        alt="ISDOX folder tree with nested sub-folders and breadcrumb navigation"
        points={[
          { title: "Nested hierarchy", text: "Unlimited sub-folders." },
          { title: "Breadcrumb navigation", text: "Fast, intuitive browsing." },
          { title: "Searchable folder tree", text: "Shown alongside document listings." },
          { title: "Simple workflow", text: "Create, rename and organise in a few clicks." },
        ]}
      />
      <div className="border-y bg-secondary">
        <ModuleShowcase
          flip
          eyebrow="04 · Metadata templates"
          title="Consistent, structured classification for every document type"
          image={metadata.url}
          alt="ISDOX metadata templates list for Finance, Audit Reports and HR"
          points={[
            { title: "Reusable templates", text: "Finance, Audit Reports, HR and more." },
            { title: "Custom fields", text: "Department, category, owner, tags and dates." },
            { title: "Standardised tagging", text: "Consistent across teams for reliable search." },
            { title: "Governed status", text: "Active / inactive status keeps templates under control." },
          ]}
        />
      </div>
      <div className="pt-10"><DmsNext to="/document-management/users-roles" label="Users & permissions" /></div>
      <DmsDemoBand />
    </>
  );
}
