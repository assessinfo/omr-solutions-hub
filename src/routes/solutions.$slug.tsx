import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailView, seo } from "@/components/site/Blocks";
import { solutions } from "@/lib/content";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const page = solutions.find((s) => s.slug === params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo(loaderData.seoTitle, loaderData.seoDescription, `/solutions/${params.slug}`)
      : { meta: [{ title: "Solution not found | OMR Solutions" }, { name: "robots", content: "noindex" }] },
  component: SolutionPage,
});

function SolutionPage() {
  const page = Route.useLoaderData();
  const related = solutions
    .filter((s) => s.slug !== page.slug)
    .slice(0, 3)
    .map((s) => ({ label: s.name, to: `/solutions/${s.slug}`, summary: s.summary }));
  return <DetailView page={page} related={related} />;
}
