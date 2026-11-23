import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DmsSubNav } from "@/components/site/DocumentManagement";

export const Route = createFileRoute("/document-management")({ staticData: { sitemap: false }, component: DmsLayout });

function DmsLayout() {
  return (<><DmsSubNav /><Outlet /></>);
}
