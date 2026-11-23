import { createFileRoute } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { PageHero, SectionHead, seo } from "@/components/site/Blocks";
import { ModuleShowcase } from "@/components/site/OnlineExam";
import { DmsActions, DmsDemoBand, DmsNext } from "@/components/site/DocumentManagement";
import users from "@/assets/isdox/users.png.asset.json";
import roles from "@/assets/isdox/roles.png.asset.json";

export const Route = createFileRoute("/document-management/users-roles")({
  staticData: { sitemap: true },
  head: () => seo(
    "ISDOX Users, Roles & Permissions | Document Access Control | OMR Solutions",
    "Control who sees every document in ISDOX: a central user directory, custom roles and granular View, Edit, Download, Print and Delete permissions at folder or document level.",
    "/document-management/users-roles",
  ),
  component: UsersRoles,
});

const perms = ["View", "Edit", "Download", "Print", "Delete"] as const;
const example: { role: string; allowed: (typeof perms)[number][] }[] = [
  { role: "Admin", allowed: ["View", "Edit", "Download", "Print", "Delete"] },
  { role: "Editor", allowed: ["View", "Edit", "Download", "Print"] },
  { role: "User", allowed: ["View", "Download"] },
  { role: "Viewer", allowed: ["View"] },
];

function UsersRoles() {
  return (
    <>
      <PageHero
        eyebrow="ISDOX · Users & permissions"
        title="Sensitive documents, visible only to the right people"
        intro="Manage every account from one place and decide exactly what each role can do — down to a single folder or document."
      >
        <DmsActions />
      </PageHero>
      <ModuleShowcase
        eyebrow="User management"
        title="Centralised control over every account on the platform"
        image={users.url}
        alt="ISDOX user directory listing users with role, department and status"
        points={[
          { title: "Full user directory", text: "Every user with role and department." },
          { title: "Status at a glance", text: "Active / banned status shown and managed in one place." },
          { title: "Quick search & filters", text: "Find users fast with role-based filtering." },
          { title: "One-click changes", text: "Edit or remove user access in a single click." },
        ]}
      />
      <div className="border-y bg-secondary">
        <ModuleShowcase
          flip
          eyebrow="Roles & permissions"
          title="Precise, role-based access control across the system"
          image={roles.url}
          alt="ISDOX roles and permissions screen with per-role permission toggles"
          points={[
            { title: "Custom roles", text: "Admin, User and any role you define." },
            { title: "Granular scope", text: "Assign permissions at folder or document level." },
            { title: "Five controls per role", text: "View, Edit, Download, Print and Delete." },
            { title: "Need-to-know access", text: "Sensitive files stay visible only to the right people." },
          ]}
        />
      </div>
      <section className="container-x py-16">
        <SectionHead eyebrow="How it works" title="An example permission setup" intro="Roles and their rights are fully configurable — this is one way a team might set them up." />
        <div className="mt-8 overflow-x-auto rounded-2xl border bg-card">
          <table className="w-full min-w-[32rem] text-sm">
            <thead className="bg-muted">
              <tr><th className="p-4 text-left font-semibold">Role</th>{perms.map((p) => <th key={p} className="p-4 text-center font-semibold">{p}</th>)}</tr>
            </thead>
            <tbody>
              {example.map((r) => (
                <tr key={r.role} className="border-t">
                  <td className="p-4 font-medium">{r.role}</td>
                  {perms.map((p) => (
                    <td key={p} className="p-4 text-center">
                      {r.allowed.includes(p)
                        ? <Check className="mx-auto size-4 text-primary" aria-label="Allowed" />
                        : <Minus className="mx-auto size-4 text-muted-foreground" aria-label="Not allowed" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <DmsNext to="/document-management/security" label="Security & reliability" />
      <DmsDemoBand />
    </>
  );
}
