import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, seo } from "@/components/site/Blocks";
import { caseStudies, company } from "@/lib/content";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    seo(
      "Remark Office OMR Case Studies — Universities, Coaching, Healthcare",
      "How universities, coaching institutes, survey firms, hospitals and researchers use Remark Office OMR. Request the full case studies.",
      "/case-studies",
    ),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <>
      <PageHero eyebrow="Case studies" title="Real results, proven on paper" intro="How organisations across five industries use Remark Office OMR." />
      <section className="container-x grid gap-5 py-20 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((c) => (
          <div key={c.industry} className="flex flex-col rounded-2xl border bg-card p-7 shadow-card">
            <FileText className="size-7 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">{c.industry}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.text}</p>
            <Button asChild variant="outline" className="mt-5 self-start">
              <a href={`mailto:${company.email}?subject=${encodeURIComponent(`Case study request: ${c.industry}`)}`}>Request PDF</a>
            </Button>
          </div>
        ))}
      </section>
      <CtaBand title="Want a case study for your industry?" text="Tell us your use case and we'll put together the right solution." />
    </>
  );
}
