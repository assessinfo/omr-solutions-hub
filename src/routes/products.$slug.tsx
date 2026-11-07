import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { DetailView, seo } from "@/components/site/Blocks";
import { company, products } from "@/lib/content";
import { RemarkHero, RemarkResources } from "@/components/site/RemarkOffice";

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
  if (page.slug === "omr-scanners") {
    const models = products.filter((p) => /^sr\d/.test(p.slug));
    return (
      <DetailView
        page={page}
        related={[]}
        afterHero={
          <section className="container-x pt-14">
            <h2 className="text-2xl font-bold">Sekonic OMR scanner models</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">Pick a model to see its full specifications, brochure and photos.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {models.map((m) => (
                <Link key={m.slug} to="/products/$slug" params={{ slug: m.slug }} className="group flex flex-col rounded-2xl border bg-card p-4 shadow-card transition-shadow hover:shadow-lift">
                  <img src={m.image} alt={m.imageAlt ?? m.name} loading="lazy" className="aspect-[4/3] w-full rounded-xl bg-secondary object-contain p-2 transition-transform duration-300 group-hover:scale-105" />
                  <h3 className="mt-3 font-semibold group-hover:text-primary">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        }
      />
    );
  }
  const related = products
    .filter((p) => page.slug === "omr-sheets"
      ? ["omr-form-design", "omr-scanners", "omr-software"].includes(p.slug)
      : p.slug !== page.slug && p.group === page.group)
    .slice(0, 3)
    .map((p) => ({ label: p.name, to: `/products/${p.slug}`, summary: p.summary }));
  return <DetailView page={page} related={related} {...(page.slug === "remark-office-omr" ? { hero: <RemarkHero page={page} />, afterHero: <RemarkResources /> } : {})} />;
}
