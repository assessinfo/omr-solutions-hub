import { createFileRoute } from "@tanstack/react-router";
import { PageHero, seo } from "@/components/site/Blocks";
import { company } from "@/lib/content";

export const Route = createFileRoute("/privacy-policy")({
  head: () => seo("Privacy Policy | OMR Solutions", "How OMR Solutions collects, uses and protects information you share through our website and enquiries.", "/privacy-policy"),
  component: Privacy,
});

const sections = [
  { h: "Information we collect", p: "Details you provide in enquiries (name, email, phone, city, organisation), the products or services you ask about, basic technical data such as browser and pages visited, and any messages you send us." },
  { h: "How we use it", p: "To respond to enquiries, share product and service information, provide quotes and support, and improve our website. We do not sell your personal information." },
  { h: "Sharing", p: "We share information only with partners or service providers needed to fulfil your request, or when required by law." },
  { h: "Security & retention", p: "We use reasonable safeguards to protect your data and keep it only as long as needed for the purposes above." },
  { h: "Your choices", p: `You can ask us to access, correct or delete your information at any time by emailing ${company.email}.` },
];

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" intro="Your privacy matters to us. Last updated October 14, 2026." />
      <section className="container-x max-w-3xl space-y-10 py-20">
        {sections.map((s, i) => (
          <div key={s.h}>
            <h2 className="text-xl font-semibold">{i + 1}. {s.h}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.p}</p>
          </div>
        ))}
      </section>
    </>
  );
}
