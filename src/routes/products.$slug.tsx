import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailView, seo } from "@/components/site/Blocks";
import { company, products } from "@/lib/content";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const page = products.find((p) => p.slug === params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Product not found | OMR Solutions" }, { name: "robots", content: "noindex" }] };
    const base = seo(loaderData.seoTitle, loaderData.seoDescription, `/products/${params.slug}`, "product");
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": loaderData.group === "Software" ? "SoftwareApplication" : "Product",
            name: loaderData.name,
            description: loaderData.seoDescription,
            brand: { "@type": "Organization", name: company.name },
            ...(loaderData.group === "Software" ? { applicationCategory: "BusinessApplication" } : {}),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Products", item: "https://omr-solutions-hub.lovable.app/products" },
              { "@type": "ListItem", position: 2, name: loaderData.name, item: `https://omr-solutions-hub.lovable.app/products/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const page = Route.useLoaderData();
  const related = products
    .filter((p) => page.slug === "omr-sheets"
      ? ["omr-form-design", "omr-scanners", "omr-software"].includes(p.slug)
      : p.slug !== page.slug && p.group === page.group)
    .slice(0, 3)
    .map((p) => ({ label: p.name, to: `/products/${p.slug}`, summary: p.summary }));
  return <DetailView page={page} related={related} />;
}
