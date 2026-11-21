import { createFileRoute } from "@tanstack/react-router";
import { PageHero, seo } from "@/components/site/Blocks";
import { company } from "@/lib/content";

export const Route = createFileRoute("/privacy-policy")({
  staticData: { sitemap: true },
  head: () => seo("Privacy Policy | OMR Solutions", "How OMR India Outsources Pvt Ltd, owner of the OMR Solutions brand, collects, uses and protects information you share through our website and enquiries.", "/privacy-policy"),
  component: Privacy,
});

const sections = [
  { h: "Who we are", p: `This website and the OMR Solutions brand are owned and operated by OMR India Outsources Pvt Ltd, with offices in New Delhi (head office) and Mumbai, India. In this policy, "we", "us" and "our" mean OMR India Outsources Pvt Ltd. For any privacy question, contact us at ${company.email}.` },
  { h: "Information we collect", p: "Details you provide in enquiries (name, email, phone, city, organisation), the products or services you ask about, basic technical data such as browser and pages visited, and any messages you send us." },
  { h: "How we use it", p: "To respond to enquiries, share product and service information, provide quotes and support, and improve our website. We do not sell your personal information." },
  { h: "Website analytics", p: "Lovable, which hosts this website, counts visits for us. It uses no cookies, stores nothing on your device, doesn't keep IP addresses and doesn't identify visitors. It records the pages visited, where visitors came from, their country, browser, operating system and device type, how long they stay, how fast pages load, and errors. It also records which buttons and links are clicked. For visitors in the EU/EEA, the UK, Switzerland and Canada, clicks are recorded only after they accept analytics; page visits, time on page, page speed and errors are recorded for every visitor, without cookies and without identifying anyone. If your browser sends Global Privacy Control, clicks are never recorded. Detailed data is kept for 90 days and daily summaries for a year. Lovable collects this data for us. Lovable's privacy policy at lovable.dev/privacy explains how it handles it." },
  { h: "Advertising and Google Ads", p: "We advertise on Google. When advertising is permitted, our site loads Google's advertising tag, which sets cookies and tells Google when someone who clicked one of our ads opens a WhatsApp chat with us, so we can measure and improve our ads and Google can optimise them. Google receives your browser and device details, the page and ad click information, and that a chat was started — not the content of your WhatsApp message. Visitors in the EU/EEA, the UK, Switzerland and Canada are asked first, and the tag loads only after they accept advertising. Elsewhere it loads unless you turn advertising off in Cookie settings (in the footer) or your browser sends Global Privacy Control. You can change or withdraw your choice at any time in Cookie settings; your choice is saved in your browser for up to 12 months. Google explains how it uses this data at business.safety.google/privacy." },
  { h: "Other services on this site", p: "Product videos are embedded from YouTube in privacy-enhanced mode; the quote form is provided by Bitrix24, which receives what you enter in it; WhatsApp (Meta) receives messages you send us there; and web fonts are loaded from Google Fonts." },
  { h: "Sharing", p: "We share information only with partners or service providers needed to fulfil your request, or when required by law." },
  { h: "Security & retention", p: "We use reasonable safeguards to protect your data and keep it only as long as needed for the purposes above." },
  { h: "Your choices", p: `You can ask us to access, correct or delete your information at any time by emailing ${company.email}.` },
];

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" intro="How OMR India Outsources Pvt Ltd, owner of the OMR Solutions brand, handles your information. Last updated November 19, 2026." />
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
