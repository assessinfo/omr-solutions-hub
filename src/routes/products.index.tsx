import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero, seo } from "@/components/site/Blocks";
import { productGroups, products } from "@/lib/content";

export const Route = createFileRoute("/products/")({
  head: () =>
    seo(
      "OMR Scanners, OMR Software, Sheets & Document Scanners | Products",
      "Browse Sekonic OMR scanners, Remark and Optic View OMR software, OMR sheet printing, document scanners, book scanners and document management.",
      "/products",
    ),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <>
      <PageHero eyebrow="Products" title="Scanners, software and sheets that work together" intro="Pick a complete setup or the one piece you're missing — every product comes with installation, training and support." />
      {productGroups.map((g) => (
        <section key={g} className="container-x py-12 first-of-type:pt-20">
          <h2 className="text-2xl font-bold">{g}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.filter((p) => p.group === g).map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group flex flex-col rounded-2xl border bg-card p-6 shadow-card transition-shadow hover:shadow-lift">
                <h3 className="text-lg font-semibold group-hover:text-primary">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Details <ArrowRight className="size-4" /></span>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
