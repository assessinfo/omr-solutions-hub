import { products, solutions, type DetailPage } from "@/lib/content";

export type SearchKind = "Page" | "Product" | "Solution" | "Article";

export type SearchEntry = {
  kind: SearchKind;
  title: string;
  href: string;
  description: string;
  /** Extra words people may type that are not in the title or description. */
  keywords?: string;
  /** Longer page text, weighted lowest. */
  body?: string;
};

export type SearchArticle = { slug: string; title: string; excerpt: string | null; text: string };

const staticPages: SearchEntry[] = [
  { kind: "Page", title: "Home", href: "/", description: "Sekonic OMR scanners, Remark OMR software, OMR sheet printing and exam result processing for schools, universities and government.", keywords: "omr solutions homepage" },
  { kind: "Page", title: "About OMR Solutions", href: "/about", description: "OMR India Outsources Pvt. Ltd. has delivered OMR scanning, exam processing and digitisation since 2004. Partners of Sekonic Japan and Gravic USA.", keywords: "company history team who we are mission" },
  { kind: "Page", title: "All products", href: "/products", description: "Sekonic OMR scanners, Remark and Optic View OMR software, OMR sheet printing, document scanners, book scanners and document management.", keywords: "catalogue range" },
  { kind: "Page", title: "Solutions by sector", href: "/solutions", description: "OMR and data capture solutions for schools, universities, government departments, corporates and NGOs, plus e-waste recycling.", keywords: "industries sectors" },
  { kind: "Page", title: "OMR application areas", href: "/applications", description: "Where OMR is used: exams, admissions, surveys, registrations, elections, medical records and census data.", keywords: "uses survey census election admission feedback" },
  { kind: "Page", title: "Our clients", href: "/clients", description: "Accenture, Infosys, L&T, BHEL, Johns Hopkins, Karnataka PSC, Career Point Kota and more trust OMR Solutions.", keywords: "customers references psc university coaching" },
  { kind: "Page", title: "Remark Office OMR case studies", href: "/case-studies", description: "How universities, coaching institutes, survey firms, hospitals and researchers use Remark Office OMR.", keywords: "success stories examples" },
  { kind: "Page", title: "Online exam software (IS10)", href: "/online-exam", description: "IS10 online exam software: AI question bank, AI and live proctoring, browser lockdown, instant results and centre-based CBT.", keywords: "online test cbt computer based testing e-exam is10live" },
  { kind: "Page", title: "IS10 platform tour", href: "/online-exam/features", description: "Admin dashboard, academic masters, AI question generator, multilingual question bank, student onboarding, exam controls and instant results.", keywords: "features screenshots question bank" },
  { kind: "Page", title: "IS10 security & proctoring", href: "/online-exam/security", description: "Fullscreen lock, copy-paste blocking, tab-switch detection, auto-termination, AI face detection and live invigilator video.", keywords: "proctor invigilation anti cheating lockdown browser" },
  { kind: "Page", title: "IS10 exam centres (CBT)", href: "/online-exam/exam-centres", description: "Online registration, fee payment and admit cards, then encrypted papers on local exam-centre servers that keep working offline.", keywords: "computer based test centre admit card registration" },
  { kind: "Page", title: "IS10 plans & pricing", href: "/online-exam/pricing", description: "IS10 membership plans — Bronze, Silver and Gold — plus AI add-ons for question generation, remote proctoring and analytics.", keywords: "price cost plan subscription membership" },
  { kind: "Page", title: "ISDOX document management", href: "/document-management", description: "Secure, AI-powered document management: upload, organise, search and control every document with folders, metadata, version control, roles and audit logs.", keywords: "dms isdox digitisation records archive" },
  { kind: "Page", title: "ISDOX product tour", href: "/document-management/features", description: "Live dashboard, versioned document library, nested folders with breadcrumbs and reusable metadata templates.", keywords: "features screenshots" },
  { kind: "Page", title: "ISDOX users & permissions", href: "/document-management/users-roles", description: "Central user directory, custom roles and granular View, Edit, Download, Print and Delete permissions.", keywords: "access control roles" },
  { kind: "Page", title: "ISDOX security & reliability", href: "/document-management/security", description: "Encrypted storage, role-based access, full audit trail, automated backups, version history and scalable storage.", keywords: "encryption backup audit" },
  { kind: "Page", title: "News & articles", href: "/news", description: "Product launches, exhibitions, partnerships, staff training and company updates from OMR Solutions.", keywords: "blog press updates exhibition events" },
  { kind: "Page", title: "Careers", href: "/careers", description: "Join OMR Solutions and bring fair, fast exam evaluation to universities and government across India.", keywords: "jobs vacancy hiring work with us business development manager" },
  { kind: "Page", title: "Life at OMR — celebrations", href: "/careers/celebrations", description: "We celebrate as a family — birthdays, Holi, Ganpati and team celebrations in New Delhi and Mumbai.", keywords: "culture fun festivals team photos diwali" },
  { kind: "Page", title: "Company policy", href: "/company-policy", description: "Hybrid work, generous leave, learning support, fair treatment, career growth and an organisation chart.", keywords: "hr policy leave employee benefits org chart career growth" },
  { kind: "Page", title: "Contact us", href: "/contact", description: "Offices in New Delhi and Mumbai with maps. WhatsApp +91 85913 03477 or email sales@omr.co.in.", keywords: "address phone email whatsapp location map office delhi mumbai" },
  { kind: "Page", title: "Get a quote", href: "/get-a-quote", description: "Share your requirements for scanners, software, answer sheets or exam processing and get a quotation.", keywords: "price enquiry quotation buy cost" },
  { kind: "Page", title: "Privacy policy", href: "/privacy-policy", description: "How OMR India Outsources Pvt Ltd collects, uses and protects information you share.", keywords: "cookies data privacy" },
];

function detailEntry(kind: "Product" | "Solution", p: DetailPage, href: string): SearchEntry {
  return {
    kind,
    title: p.name,
    href,
    description: p.summary,
    keywords: `${p.group} ${p.title}`,
    body: [p.intro, ...p.highlights.flatMap((h) => [h.title, h.text]), ...p.features.flatMap((f) => [f.title, ...f.items])].join(" "),
  };
}

/** Every page visitors can search: fixed pages, catalogue entries and published articles. */
export function buildSearchIndex(articles: SearchArticle[] = []): SearchEntry[] {
  return [
    ...staticPages,
    ...products.map((p) => detailEntry("Product", p, p.href ?? `/products/${p.slug}`)),
    ...solutions.map((s) => detailEntry("Solution", s, `/solutions/${s.slug}`)),
    ...articles.map((a) => ({ kind: "Article" as const, title: a.title, href: `/blog/${a.slug}`, description: a.excerpt ?? "", body: a.text })),
  ];
}

export function normalize(text: string): string {
  return text.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}

const compact = (s: string) => s.replace(/ /g, "");

function fieldScore(field: string, token: string, weight: number): number {
  if (!field) return 0;
  const words = field.split(" ");
  if (words.includes(token)) return weight * 3;
  if (words.some((w) => w.startsWith(token))) return weight * 2;
  if (field.includes(token) || compact(field).includes(token)) return weight;
  return 0;
}

/**
 * Ranks entries for a query. Every word typed must appear somewhere on the page;
 * title matches rank above descriptions, which rank above body text.
 * Spaces and hyphens are ignored for model numbers, so "sr8000" finds "SR-8000".
 */
export function searchSite(index: SearchEntry[], query: string, limit = 20): SearchEntry[] {
  const q = normalize(query);
  if (!q) return [];
  const tokens = q.split(" ");
  const scored: { entry: SearchEntry; score: number }[] = [];
  for (const entry of index) {
    const title = normalize(entry.title);
    const desc = normalize(entry.description);
    const keys = normalize(entry.keywords ?? "");
    const body = normalize(entry.body ?? "");
    let total = 0;
    let all = true;
    for (const t of tokens) {
      const s = fieldScore(title, t, 10) + fieldScore(keys, t, 4) + fieldScore(desc, t, 3) + fieldScore(body, t, 1);
      if (s === 0) { all = false; break; }
      total += s;
    }
    if (!all) continue;
    if (title.includes(q) || compact(title).includes(compact(q))) total += 50;
    if (title === q) total += 50;
    scored.push({ entry, score: total });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.entry);
}

/** Shown before the visitor types anything. */
export const popularSearches: { title: string; href: string }[] = [
  { title: "OMR Scanners", href: "/products/omr-scanners" },
  { title: "OMR Answer Sheets", href: "/products/omr-sheets" },
  { title: "Remark Office OMR", href: "/products/remark-office-omr" },
  { title: "Online exam software (IS10)", href: "/online-exam" },
  { title: "Document management (ISDOX)", href: "/document-management" },
  { title: "Contact us", href: "/contact" },
];
