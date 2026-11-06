import heroScanner from "@/assets/hero-scanner.jpg";
import sr8000 from "@/assets/sr8000-hybrid-clean.jpg";
import software from "@/assets/software.jpg";
import education from "@/assets/education.jpg";
import government from "@/assets/government.jpg";
import ngo from "@/assets/ngo.jpg";
import corporate from "@/assets/corporate.jpg";
import ewaste from "@/assets/ewaste.jpg";
import documents from "@/assets/documents.jpg";
import img11000 from "@/assets/scanners/sr11000.jpg.asset.json";
import img6500h from "@/assets/scanners/sr6500h.jpg.asset.json";
import img6500 from "@/assets/scanners/sr6500.jpg.asset.json";
import img3500h from "@/assets/scanners/sr3500h.jpg.asset.json";
import img3500 from "@/assets/scanners/sr3500.jpg.asset.json";
import pdf11000 from "@/assets/brochures/sr11000.pdf.asset.json";
import pdfHybrid from "@/assets/brochures/hybrid.pdf.asset.json";
import pdf35006500 from "@/assets/brochures/sr3500-6500.pdf.asset.json";
import pdf3500h from "@/assets/brochures/sr3500h.pdf.asset.json";
import g8_0 from "@/assets/sr8000/main-body-stacker-1.jpg.asset.json";
import g8_1 from "@/assets/sr8000/main-body-stacker-2.jpg.asset.json";
import g8_2 from "@/assets/sr8000/main-body.jpg.asset.json";
import g8_3 from "@/assets/sr8000/control-panel.jpg.asset.json";
import g8_4 from "@/assets/sr8000/hopper.jpg.asset.json";
import g8_5 from "@/assets/sr8000/sensor.jpg.asset.json";
import g8_6 from "@/assets/sr8000/model-name-label-1.jpg.asset.json";
import g8_7 from "@/assets/sr8000/model-name-label-2.jpg.asset.json";
import img6500photo from "@/assets/scanners/sr6500-photo.jpg.asset.json";
import img6000 from "@/assets/scanners/sr6000-photo.jpg.asset.json";
import pdf6000 from "@/assets/brochures/sr6000.pdf.asset.json";
import pdf8000 from "@/assets/brochures/sr8000.pdf.asset.json";

export const company = {
  name: "OMR Solutions",
  legalName: "OMR India Outsources Pvt. Ltd.",
  phone: "+91 93191 23429",
  phoneHref: "tel:+919319123429",
  phoneAlt: "+91 89548 00532",
  email: "sales@omr.co.in",
  founded: 2004,
  offices: [
    {
      label: "Head office",
      city: "New Delhi",
      address: "503, DLF Prime Towers, Okhla Industrial Area Phase 1, New Delhi 110020",
      phone: "+91 93191 23429",
    },
    {
      label: "Branch office",
      city: "Mumbai",
      address: "#1609, Arc One by Lotus, 16th Floor, Off Link Road, Andheri (W), Mumbai 400053",
      phone: "044-48517750",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/IndiaOutsources",
    youtube: "https://www.youtube.com/@omrsolutions",
    instagram: "https://www.instagram.com/omrindiaoutsources/",
    linkedin: "https://www.linkedin.com/company/omr-india-outsources-pvt-ltd/",
  },
};

export type Highlight = { title: string; text: string };
export type FeatureGroup = { title: string; items: string[] };

export type DetailPage = {
  slug: string;
  name: string;
  group: string;
  title: string;
  intro: string;
  image: string;
  summary: string;
  stats?: { value: string; label: string }[];
  highlights: Highlight[];
  features: FeatureGroup[];
  seoTitle: string;
  seoDescription: string;
  brochure?: string;
  video?: string;
  imageAlt?: string;
  gallery?: { src: string; alt: string }[];
};

export const solutions: DetailPage[] = [
  {
    slug: "education",
    name: "Education",
    group: "Solutions",
    title: "Faster, fairer exams for schools and universities",
    intro:
      "Scan answer sheets, grade tests and publish results in days instead of weeks — for entrance exams, board-style tests and everyday classroom assessments.",
    summary: "Exam processing, admissions and student surveys.",
    image: education,
    stats: [
      { value: "500+", label: "Institutions" },
      { value: "99.9%", label: "Read accuracy" },
      { value: "Days", label: "Not months, to results" },
    ],
    highlights: [
      { title: "Exam processing", text: "Regular, trial and certification exams, ability tests and sports tests." },
      { title: "Admissions & registration", text: "Application forms, academic registration and preferred-school choices." },
      { title: "Student administration", text: "Attendance, aptitude and intelligence tests, health and fitness records." },
    ],
    features: [
      { title: "Who uses it", items: ["Universities", "High schools", "Vocational schools", "Preparatory & coaching institutes"] },
      { title: "Typical forms", items: ["MCQ answer sheets", "Application forms", "Student elections", "Counselling & feedback surveys"] },
    ],
    seoTitle: "OMR Solutions for Schools & Universities | Exam Processing",
    seoDescription:
      "OMR scanning, test grading and result processing for universities, schools and coaching institutes across India. Accurate results in days.",
  },
  {
    slug: "government",
    name: "Government",
    group: "Solutions",
    title: "Reliable data capture for government departments",
    intro:
      "From recruitment exams to census forms and public scheme records, we help departments capture paper data accurately, securely and at scale.",
    summary: "Recruitment exams, records and e-governance capture.",
    image: government,
    highlights: [
      { title: "Recruitment & promotion exams", text: "Civil service, competitive and departmental exams processed with audit-ready accuracy." },
      { title: "Records & inventory", text: "Store house, manpower and maintenance registers converted into searchable data." },
      { title: "Surveys & feedback", text: "Employee satisfaction, wage and welfare surveys tabulated in hours." },
    ],
    features: [
      { title: "Application areas", items: ["Employment & promotion exams", "Recruit training assessments", "Man-hour & quality control", "Daily business reports"] },
      { title: "Trusted by", items: ["Karnataka Public Service Commission", "Rajasthan Public Service Commission", "Election bodies & municipalities"] },
    ],
    seoTitle: "OMR & Data Capture for Government Departments | OMR Solutions",
    seoDescription:
      "Secure OMR, ICR and OCR processing for recruitment exams, census forms and government records. Trusted by public service commissions in India.",
  },
  {
    slug: "corporate",
    name: "Corporate",
    group: "Solutions",
    title: "Turn HR and marketing paperwork into decisions",
    intro:
      "Run recruitment drives, employee surveys and market research on paper — and get clean, analysed data back without manual entry.",
    summary: "Recruitment drives, HR and marketing surveys.",
    image: corporate,
    highlights: [
      { title: "Campus recruitment", text: "Screen thousands of candidates with printed aptitude tests graded in minutes." },
      { title: "HR surveys", text: "Engagement, wage and training feedback captured and reported automatically." },
      { title: "Marketing surveys", text: "Customer satisfaction and product research tabulated straight into reports." },
    ],
    features: [
      { title: "Application areas", items: ["Employment & promotion exams", "Inventory & quality control", "Intra-company communication", "Business daily reports"] },
      { title: "Trusted by", items: ["Accenture", "Boeing", "Citibank", "Larsen & Toubro", "Infosys", "BHEL"] },
    ],
    seoTitle: "OMR Solutions for Corporates | Recruitment & HR Surveys",
    seoDescription:
      "OMR software and scanning for campus recruitment, HR surveys and market research. Used by Accenture, L&T, Infosys and BHEL.",
  },
  {
    slug: "ngos",
    name: "NGOs",
    group: "Solutions",
    title: "Turn every field survey into real social impact",
    intro:
      "Collect responses on paper in the field, scan them back at base and make faster, evidence-based decisions about programmes and outreach.",
    summary: "Field surveys, CSR and outreach programmes.",
    image: ngo,
    stats: [
      { value: "1000+", label: "Surveys processed" },
      { value: "99.9%", label: "Data accuracy" },
    ],
    highlights: [
      { title: "Collect", text: "Simple bubble forms work anywhere — no devices or connectivity needed." },
      { title: "Scan & process", text: "Thousands of forms read and validated in hours, not weeks of data entry." },
      { title: "Decide & act", text: "Clear reports for sponsors, campaigns, medical and CSR programmes." },
    ],
    features: [
      { title: "Why NGOs choose us", items: ["Structured feedback from every respondent", "Faster decisions on social causes", "Track sponsorships and campaigns", "Reliable data for CSR reporting"] },
    ],
    seoTitle: "OMR Survey Processing for NGOs | OMR Solutions",
    seoDescription:
      "Paper-based field surveys scanned and analysed fast. OMR solutions for NGOs, CSR programmes and community outreach in India.",
  },
  {
    slug: "e-waste",
    name: "E-Waste Management",
    group: "Solutions",
    title: "Responsible recycling for your old electronics",
    intro:
      "We take back old scanners, computers and electronic equipment and route them to authorised recyclers, in line with India's E-Waste Management Rules.",
    summary: "Safe take-back and recycling of old equipment.",
    image: ewaste,
    stats: [
      { value: "100%", label: "Safe recycling" },
      { value: "21+", label: "Product categories" },
      { value: "1800-102-5679", label: "Toll-free number" },
    ],
    highlights: [
      { title: "What is e-waste?", text: "Discarded electrical and electronic equipment — from scanners and PCs to cables and batteries." },
      { title: "Why it matters", text: "E-waste contains lead, mercury and other hazards that damage soil, water and health if dumped." },
      { title: "How we help", text: "Collection, safe storage and hand-over to authorised dismantlers and recyclers." },
    ],
    features: [
      { title: "Do", items: ["Return old equipment to an authorised collection point", "Remove personal data before disposal", "Call our toll-free number for pickup"] },
      { title: "Don't", items: ["Throw electronics in household waste", "Sell to informal scrap dealers", "Break open batteries or screens"] },
    ],
    seoTitle: "E-Waste Management & Recycling | OMR Solutions",
    seoDescription:
      "Safe take-back and recycling of old scanners and electronics under India's E-Waste Management Rules. Toll free 1800-102-5679.",
  },
];

export const products: DetailPage[] = [
  {
    slug: "sr8000-hybrid-scanner",
    name: "SR-8000 Hybrid Scanner",
    group: "Hardware",
    title: "Sekonic SR-8000 Hybrid Scanner",
    intro: "Read OMR marks and capture document images in one pass, with optional barcode reading and sorting for high-volume exam and form processing.",
    summary: "OMR and image capture at up to 8,000 sheets/hour.",
    image: sr8000,
    gallery: [{ src: g8_0.url, alt: "SR-8000 Hybrid with select stacker" }, { src: g8_1.url, alt: "SR-8000 Hybrid with select stacker, side view" }, { src: g8_2.url, alt: "SR-8000 Hybrid main body" }, { src: g8_3.url, alt: "Control panel" }, { src: g8_4.url, alt: "Paper hopper" }, { src: g8_5.url, alt: "Reading sensor" }, { src: g8_6.url, alt: "Model label" }, { src: g8_7.url, alt: "Model label close-up" }],
        highlights: [
      { title: "Marks and images in one pass", text: "Photo-reflector mark sensing combines with double-sided CIS image capture in colour or greyscale." },
      { title: "High-volume paper handling", text: "A 500-sheet hopper and receiver support large batches. The optional select stacker offers a 500-sheet main tray and 150-sheet select tray." },
      { title: "Flexible reading options", text: "Single-sided OMR reading is standard; double-sided OMR reading, pen recognition, 1D/QR barcode reading and inkjet printing are optional." },
      { title: "Throughput depends on your workflow", text: "The catalogue specifies up to 8,000 sheets/hour for marks alone or marks plus images. Actual speed depends on software, PC specifications and settings." },
    ],
    features: [
      { title: "Scanning specifications", items: ["OMR or OMR + images: up to 8,000 sheets/hour", "Image resolution: 100, 150, 200, 300 or 600 dpi", "Double-sided image capture: colour / greyscale", "Image output: BMP or JPEG (continuous feed: JPEG only)", "16-level mark discrimination", "USB 3.0 connection"] },
      { title: "Paper handling & installation", items: ["Paper length: 110–355.6 mm", "Paper weight: 84–157 gsm", "OCR or woodfree paper", "Hopper / paper receiver: 500 sheets", "Main body: 947 × 227 × 365 mm (W × H × D)", "Main body weight: 19.7 kg", "Power: 100–240 V AC, 50–60 Hz", "Operating temperature: 5–35°C; humidity: 30–80%"] },
    ],
    seoTitle: "Sekonic SR-8000 Hybrid Scanner Specifications | OMR Solutions",
    seoDescription: "Explore the Sekonic SR-8000 Hybrid OMR scanner: up to 8,000 sheets/hour, double-sided image capture, 500-sheet hopper and optional barcode reading and sorting.",
    brochure: pdf8000.url,
    video: "BkepHPKUe7c",
  },
  {
    slug: "sr11000-scanner",
    name: "SR-11000 Scanner",
    group: "Hardware",
    title: "Sekonic SR-11000 OMR Scanner",
    intro: "Sekonic's flagship desktop OMR reader — up to 11,000 sheets per hour with 99.99% reading accuracy, a select stacker and built-in ink-jet printer as standard.",
    summary: "Flagship OMR reader at up to 11,000 sheets/hour.",
    image: img11000.url,
    stats: [
      { value: "11,000", label: "Sheets per hour" },
      { value: "99.99%", label: "Reading accuracy*" },
      { value: "500", label: "Sheet hopper" },
      { value: "37 kg", label: "Unit weight" },
    ],
    highlights: [
      { title: "World's fastest desktop OMR", text: "Feeds around 183 forms per minute (A4, Letter and Legal), for national-level exams and recruitment drives." },
      { title: "Advanced paper handling", text: "Double-function feed rollers and double-feed prevention rollers keep sheets aligned without damaging them or smudging marks." },
      { title: "11 position sensors", text: "New Prism Position Sensors watch every sheet; feeding stops instantly if an error is detected." },
      { title: "Suction system against read errors", text: "Removes eraser shavings, sheet dust and dirt before the reading sensor, cutting cleaning cycles and maintenance." },
      { title: "Reverse discharge & stacker sensors", text: "Sheets come out in their original order, and sensors in both trays warn if processed sheets are left behind." },
      { title: "Built-in ink-jet printer", text: "Prints sequence numbers, dates or fixed text on each sheet. Multi Layout reads mixed sheet types in one batch." },
    ],
    features: [
      { title: "Reading & scanning", items: ["Read head: 1 (single side) or 2 (dual sides)", "Mark discrimination: 16 steps (256 degrees)", "Light source: infra-red (940 nm) or visible red (660 nm)", "Infra-red: pencil only; visible red: pencil + blue/black pen", "Channels: 48 (1/6\"), 40 (0.2\"), 33 (0.25\") or 27 (0.3\")", "Feed speed: up to 11,000 sheets/hour", "Error detection: double feed, timing mark, skew, sheet left in tray", "Interface: USB 2.0 (High Speed)"] },
      { title: "Sheets, printer & installation", items: ["Sheet sizes: card (IBM card), B5, A4, 8.5\" × 9\"", "Width 82.55–228.6 mm; length 187–304.8 mm", "Up to 80 rows; thickness 83.8–157 g/m²", "Hopper 500 sheets; exit tray 500 main / 150 select", "Ink-jet printer: up to 28 characters, sequence numbers, date/time", "Power: AC 100–240 V, 50–60 Hz", "Dimensions: 800 × 490 × 365 mm (W × H × D)", "Weight: 37 kg; MarkView software included"] },
    ],
    seoTitle: "Sekonic SR-11000 OMR Scanner – 11,000 Sheets/Hour | OMR Solutions",
    seoDescription: "Sekonic SR-11000 OMR scanner specifications: up to 11,000 sheets/hour, 99.99% accuracy, 500-sheet hopper, select stacker and ink-jet printer. Buy in India.",
    brochure: pdf11000.url,
    video: "p3oUsCMYejM",
  },
  {
    slug: "sr6500-hybrid-scanner",
    name: "SR-6500 Hybrid Scanner",
    group: "Hardware",
    title: "Sekonic SR-6500 Hybrid Scanner",
    intro: "High-speed two-in-one scanner: reads OMR marks and captures colour, grey or black-and-white images of both sides in a single pass.",
    summary: "OMR + image capture at up to 5,000 sheets/hour.",
    image: img6500h.url,
    stats: [
      { value: "5,300", label: "OMR sheets/hour" },
      { value: "5,000", label: "OMR + image sheets/hour" },
      { value: "99.99%", label: "Reading accuracy*" },
      { value: "300 dpi", label: "Colour image capture" },
    ],
    highlights: [
      { title: "Twin-head sensors", text: "A photo-reflection OMR sensor and contact image sensor capture marks and images at the same time." },
      { title: "Dual-side images as standard", text: "Colour, grey or black-and-white images up to 300 dpi — useful for handwritten answers and digital archives." },
      { title: "Select stacker & printer included", text: "Rejected sheets go to a separate 150-sheet tray; the built-in printer marks each sheet." },
      { title: "Barcode option", text: "Choose a vertical or horizontal barcode reader to capture student or form IDs with the mark data." },
    ],
    features: [
      { title: "Reading specifications", items: ["OMR: up to 5,300 sheets/hour", "OMR + image: up to 5,000 sheets/hour", "OMR side: single (standard), dual (option)", "Light: infra-red (standard), visible red (option)", "Pencil (standard), pencil + pen (option)", "Channels: 48 (1/6\") or 40 (0.2\"); 140 rows", "Image: dual side, up to 300 dpi; JPEG, BMP, TIFF, PNG, GIF", "USB 2.0"] },
      { title: "Paper handling & installation", items: ["Hopper: up to 500 sheets", "Output: 500 accept / 150 reject", "Form width 63.5–228.6 mm; length 110–355.6 mm", "Paper: 84–157 g/m²", "Power: AC 100–240 V, 50–60 Hz", "Dimensions: 365 × 490 × 800 mm (W × H × D)", "Weight: 38 kg"] },
    ],
    seoTitle: "Sekonic SR-6500 Hybrid OMR + Image Scanner | OMR Solutions",
    seoDescription: "Sekonic SR-6500 Hybrid specifications: OMR up to 5,300 sheets/hour, dual-side image capture up to 300 dpi, select stacker and printer standard. Buy in India.",
    brochure: pdfHybrid.url,
  },
  {
    slug: "sr6500-scanner",
    name: "SR-6500 Scanner",
    group: "Hardware",
    title: "Sekonic SR-6500 OMR Scanner",
    intro: "High-spec OMR reader for higher-volume users, with select stacker and in-line printer as standard and 99.99% reading accuracy.",
    summary: "OMR reader at approx. 5,500 sheets/hour with stacker.",
    image: img6500photo.url,
    imageAlt: "Sekonic SR-6500 OMR scanner with select stacker on its stand",
    gallery: [{ src: img6500photo.url, alt: "Sekonic SR-6500 OMR scanner with select stacker on its stand" }],
    stats: [
      { value: "5,500", label: "Sheets per hour" },
      { value: "99.99%", label: "Reading accuracy*" },
      { value: "500", label: "Sheet hopper" },
      { value: "USB 2.0", label: "Or RS-232C" },
    ],
    highlights: [
      { title: "Stacker and printer as standard", text: "Reverse discharge keeps sheets in their original order; the ink-jet printer adds numbers or dates to each sheet." },
      { title: "Accurate mark detection", text: "256-level density detection (16 steps in software) plus double-feed and no-feed checks." },
      { title: "Easy upgrade", text: "Replaces older Sekonic SR-9000 (RS-232C) or SR-5500 (USB) readers without changing software." },
      { title: "Barcode and pen options", text: "Read printed or stuck-on barcodes, and accept black or blue ball-point pen marks." },
    ],
    features: [
      { title: "Reading specifications", items: ["Speed: approx. 5,500 sheets/hour", "ADF or hand feed", "Pencil (infra-red); pen & pencil option (visible red)", "Read head: 1 (standard) or 2 (option)", "256 levels (16 steps of discrimination)", "5,232 mark positions per page; scan area 48 × 109", "USB 2.0 / RS-232C"] },
      { title: "Paper handling & installation", items: ["Input: 500 forms; output 500 accept / 150 reject", "Paper size: 63.5 × 110 to 228.6 × 355.6 mm", "Paper: 84–157 g/m²", "Power: 100–220 V AC, 50/60 Hz", "Dimensions: 365 × 490 × 800 mm with stacker", "Weight: 36 kg; noise 65 dB", "FCC, UL, BSMI, BIS approved; CE / RoHS"] },
    ],
    seoTitle: "Sekonic SR-6500 OMR Scanner Specifications | OMR Solutions",
    seoDescription: "Sekonic SR-6500 OMR scanner: approx. 5,500 sheets/hour, 99.99% accuracy, select stacker and printer standard, USB/RS-232C. Price and support in India.",
    brochure: pdf35006500.url,
  },
  {
    slug: "sr6000-scanner",
    name: "SR-6000 Scanner",
    group: "Hardware",
    title: "Sekonic SR-6000 OMR Scanner",
    intro: "Fast mark-only OMR reader that processes over 100 sheets a minute from a 500-sheet hopper, with 99.99% reading accuracy and USB or RS-232C connection.",
    summary: "OMR reader at approx. 6,000 sheets/hour.",
    image: img6000.url,
    imageAlt: "Sekonic SR-6000 OMR scanner with OMR answer sheets loaded in the hopper",
    gallery: [{ src: img6000.url, alt: "Sekonic SR-6000 OMR scanner with OMR answer sheets loaded in the hopper" }],
    stats: [
      { value: "6,000", label: "Sheets per hour" },
      { value: "99.99%", label: "Reading accuracy*" },
      { value: "500", label: "Sheet hopper" },
      { value: "USB 2.0", label: "Or RS-232C" },
    ],
    highlights: [
      { title: "Fastest without a stacker", text: "A step up from the SR-3500, reading cards up to A4, Letter and Legal forms at over 100 sheets per minute." },
      { title: "Accurate mark detection", text: "256-level density detection (16 steps in software) plus double-feed and no-feed checks." },
      { title: "Easy upgrade", text: "Works in place of older Sekonic SR-900 (RS-232C), SR-2300 or SR-3500 (USB) readers without changing software." },
      { title: "Valuable options", text: "Add dual-side reading, black or blue ball-point pen reading, a barcode reader, or a select stacker with ink-jet printer." },
    ],
    features: [
      { title: "Reading specifications", items: ["Speed: approx. 6,000 sheets/hour", "Mark sensing: photo-reflector", "Pencil (infra-red); pen & pencil option (visible red)", "Read head: 1 (standard) or 2 (option)", "256 levels (16 steps of discrimination)", "LCD panel: 20 characters × 2 lines, 5 buttons", "USB 2.0 / RS-232C"] },
      { title: "Paper handling & installation", items: ["Hopper: up to 500 sheets", "Forms: JIS card to A4 (up to 9\")", "Dimensions: 365 × 227 × 575 mm", "Select stacker and printer: option", "FCC, UL, BSMI, KC, BIS approved; CE / RoHS"] },
    ],
    seoTitle: "Sekonic SR-6000 OMR Scanner Specifications | OMR Solutions",
    seoDescription: "Sekonic SR-6000 OMR scanner: approx. 6,000 sheets/hour, 99.99% accuracy, 500-sheet hopper, USB/RS-232C. Price, installation and support in India.",
    brochure: pdf6000.url,
  },
  {
    slug: "sr3500-hybrid-scanner",
    name: "SR-3500 Hybrid Scanner",
    group: "Hardware",
    title: "Sekonic SR-3500 Hybrid Scanner",
    intro: "Compact two-in-one scanner that reads OMR marks and captures colour or grey images of both sides — connect it to any laptop over USB.",
    summary: "OMR + image capture in a compact desktop unit.",
    image: img3500h.url,
    stats: [
      { value: "3,500", label: "OMR sheets/hour" },
      { value: "2,200", label: "Image sheets/hour" },
      { value: "99.99%", label: "Reading accuracy*" },
      { value: "18.3 kg", label: "Compact desktop" },
    ],
    highlights: [
      { title: "Twin-head sensors", text: "Photo reflector and contact image sensor capture marks and images at the same time." },
      { title: "Save storage space", text: "Scanned images replace paper files — no need to keep large stacks of original OMR forms." },
      { title: "Plug into any PC", text: "USB connection to laptops and desktops; MarkView software outputs CSV or TXT on Windows 11." },
      { title: "Room to grow", text: "Optional double-side OMR reading, pen recognition, select stacker, printer and barcode reader." },
    ],
    features: [
      { title: "Reading specifications", items: ["OMR only: 3,500 sheets/hour", "Colour / grey (100 dpi): 2,200 sheets/hour", "OMR side: single (standard), double (option)", "Pencil (standard), pencil + pen (option)", "Channels: 48 (1/6\") or 40 (0.2\"); up to 107 rows", "Up to 5,136 mark positions (48 columns)", "Image: double side, up to 300 dpi; JPEG, BMP, TIFF, PNG, GIF", "USB 2.0 and RS-232C"] },
      { title: "Paper handling & installation", items: ["Hopper and exit bin: up to 500 sheets", "Form width 63.5–228.6 mm; length 110–355.6 mm", "Paper: OMR 84–157 g/m²; image 64–157 g/m²", "Power: AC 100–240 V, 50–60 Hz", "Dimensions: 365 × 227 × 575 mm (W × H × D)", "Weight: 18.3 kg", "Compatible with SR-601/607, SR-2300, SR-3500"] },
    ],
    seoTitle: "Sekonic SR-3500 Hybrid OMR + Image Scanner | OMR Solutions",
    seoDescription: "Sekonic SR-3500 Hybrid specifications: 3,500 OMR sheets/hour, double-sided colour image capture, 500-sheet hopper, USB. Affordable OMR scanner in India.",
    brochure: pdf3500h.url,
  },
  {
    slug: "sr3500-scanner",
    name: "SR-3500 Scanner",
    group: "Hardware",
    title: "Sekonic SR-3500 OMR Scanner",
    intro: "Sekonic's cost-effective standard OMR reader for small cards up to A4, Letter and Legal sheets, with a 500-sheet hopper and 99.99% accuracy.",
    summary: "Standard OMR reader at approx. 3,500 sheets/hour.",
    image: img3500.url,
    stats: [
      { value: "3,500", label: "Sheets per hour" },
      { value: "99.99%", label: "Reading accuracy*" },
      { value: "17 kg", label: "Compact desktop" },
      { value: "500", label: "Sheet hopper" },
    ],
    highlights: [
      { title: "High cost-effectiveness", text: "Reliable mark reading for schools, coaching institutes and survey teams." },
      { title: "Accurate mark detection", text: "256-level density detection (16 steps in software) and protection against double-feeding and no-feeding." },
      { title: "USB or RS-232C", text: "Connects to almost any computer; an LCD shows settings and the total scan count." },
      { title: "Valuable options", text: "Add a select stacker with printer, a barcode reader, back-side reading or pen-mark reading." },
    ],
    features: [
      { title: "Reading specifications", items: ["Speed: approx. 3,500 sheets/hour", "ADF or hand feed", "Pencil (infra-red); pen & pencil option (visible red)", "Read head: 1 (standard) or 2 (option)", "256 levels (16 steps of discrimination)", "5,232 mark positions per page; scan area 48 × 109", "USB 2.0 / RS-232C"] },
      { title: "Paper handling & installation", items: ["Input: 500 forms; output 500 forms", "Paper size: 63.5 × 110 to 228.6 × 355.6 mm", "Paper: 84–157 g/m²", "Power: 100–220 V AC, 50/60 Hz", "Dimensions: 365 × 227 × 575 mm (W × H × D)", "Weight: 17 kg; noise 60 dB", "FCC, UL, BSMI, KC, BIS approved; CE / RoHS"] },
    ],
    seoTitle: "Sekonic SR-3500 OMR Scanner Specifications & Price | OMR Solutions",
    seoDescription: "Sekonic SR-3500 OMR scanner: approx. 3,500 sheets/hour, 99.99% accuracy, 500-sheet hopper, USB/RS-232C, optional stacker and barcode. Buy in India.",
    brochure: pdf35006500.url,
  },
  {
    slug: "omr-scanners",
    name: "OMR Scanners",
    group: "Hardware",
    title: "Sekonic OMR scanners built for exam season",
    intro:
      "Japanese-engineered OMR readers from Sekonic — from compact desktop units to high-volume hybrid scanners that read bubbles, barcodes and images in one pass.",
    summary: "Sekonic SR series, from 1,800 to 11,000 sheets/hour.",
    image: heroScanner,
    highlights: [
      { title: "Sekonic SR-11000", text: "Our fastest reader for large exams and national-level recruitment drives." },
      { title: "SR-8000 & SR-6500 Hybrid", text: "Read OMR marks plus images, barcodes, photos and handwriting in one pass." },
      { title: "SR-6500, SR-6000 & SR-3500", text: "Dedicated OMR readers for steady mid-volume answer sheet processing." },
      { title: "SR-3500 Hybrid & SR-1800 EX", text: "Compact, affordable models for schools and coaching institutes." },
    ],
    features: [
      { title: "Why Sekonic", items: ["Official partner of Sekonic Corporation, Japan", "Low maintenance, built for Indian conditions", "Works with Remark and Optic View software", "Installation, training and service support"] },
    ],
    seoTitle: "OMR Scanner & OMR Checking Machine in India | Sekonic SR Series",
    seoDescription:
      "OMR scanner machines for checking answer sheets — ask for the OMR machine price. Buy Sekonic OMR scanners in India — SR-11000, SR-8000 Hybrid, SR-6500, SR-3500 and SR-1800 EX. Authorised partner with installation and support.",
  },
  {
    slug: "omr-software",
    name: "OMR Software",
    group: "Software",
    title: "Turn filled bubbles into instant, accurate results",
    intro:
      "Six tools for every way you process paper — from scanning with any office scanner to dedicated OMR readers and full on-screen evaluation.",
    summary: "Remark, Optic View and Mark On Screen.",
    image: software,
    stats: [
      { value: "6", label: "Software tools" },
      { value: "1000+", label: "Institutions" },
      { value: "24/7", label: "Support" },
    ],
    highlights: [
      { title: "Remark Office OMR", text: "Design forms in Word, scan on any image scanner, analyse instantly." },
      { title: "Remark Test Grading", text: "Cloud-hosted test grading that syncs with your LMS." },
      { title: "Remark Classic OMR", text: "Fast data collection with traditional OMR readers." },
      { title: "Optic View for Sekonic", text: "Grading and analytics built for Sekonic readers." },
      { title: "Optic View for Image", text: "Image-based OMR with smart bubble detection." },
      { title: "Mark On Screen", text: "Secure digital evaluation of descriptive answer booklets." },
    ],
    features: [],
    seoTitle: "OMR Software | Remark Office OMR, Optic View & Mark On Screen",
    seoDescription:
      "Compare OMR software: Remark Office OMR, Remark Test Grading, Remark Classic, Optic View and Mark On Screen digital evaluation.",
  },
  {
    slug: "remark-office-omr",
    name: "Remark Office OMR",
    group: "Software",
    title: "Remark Office OMR — turn paper forms into data in minutes",
    intro:
      "The world's most popular OMR software, from our partner Gravic Inc. (USA). Create your own forms, print them on plain paper and scan them with any image scanner or copier.",
    summary: "The world's most popular OMR software for Windows.",
    image: software,
    stats: [
      { value: "100,000+", label: "Customers worldwide" },
      { value: "130+", label: "Countries" },
      { value: "1991", label: "Serving users since" },
      { value: "Billions", label: "Forms processed" },
    ],
    highlights: [
      { title: "Plain-paper forms", text: "Design forms in any word processor and print them on ordinary paper — no special forms or pencils needed." },
      { title: "Any scanner or copier", text: "Works with TWAIN-compatible scanners, or reads PDF, TIFF and JPG files from network copiers." },
      { title: "Smart recognition", text: "Handles cross-outs, multiple marks and damaged forms, and reads barcodes and typed text (OCR)." },
      { title: "Built-in reports", text: "Remark Quick Stats gives test grading and survey analysis reports straight away." },
    ],
    features: [
      { title: "Recognition features", items: ["Award-winning OMR (Optical Mark Recognition)", "Handles cross-outs, multiple marks and damaged forms", "Barcode and OCR (typed text) reading", "Handwriting (ICR) via a Microsoft Computer Vision account (your own subscription)", "Form, page and respondent identifiers for complex forms", "Mix different form types in one batch", "Data validation, exception flags and corrections"] },
      { title: "Benefits", items: ["Use your existing office scanner or copier", "Respondents can use pen, pencil or marker", "Test grading and survey analysis reports built in", "Export to Excel, Access, SPSS, CSV, SQL and custom text formats", "Windows application", "Used for exams, surveys, evaluations, ballots, assessments and safety forms"] },
    ],
    seoTitle: "Remark Office OMR Software in India | Authorised Partner",
    seoDescription:
      "Remark Office OMR by Gravic, USA: plain-paper OMR forms, any scanner or copier, test grading, survey reports and export to Excel/SPSS. Licences and support in India.",
  },
  {
    slug: "remark-test-grading",
    name: "Remark Test Grading",
    group: "Software",
    title: "Grade tests automatically and get results in minutes",
    intro:
      "A hosted test grading service — nothing to install. Print tests on office equipment, scan them and get class, student and question-level reports from any browser.",
    summary: "Cloud test grading with LMS sync.",
    image: software,
    highlights: [
      { title: "Nothing to install", text: "Hosted service with updates handled for you — works on PC, Mac or tablet." },
      { title: "Your own equipment", text: "Print and scan tests on the copiers and scanners you already have." },
      { title: "Instant reports", text: "Detailed results at class, student, test and question level." },
    ],
    features: [
      { title: "Build your assessments", items: ["Customisable answer sheets", "Multiple-choice, math grids and open response", "Preprinted names or bubbled IDs", "Paper or online delivery"] },
      { title: "Works with your LMS", items: ["Canvas", "Blackboard", "Brightspace D2L", "Moodle", "Google Classroom", "FACTS LMS"] },
    ],
    seoTitle: "Remark Test Grading | Online Test Grading Software",
    seoDescription:
      "Grade multiple-choice tests in minutes with Remark Test Grading. Cloud-hosted, works with your scanner and syncs with Canvas, Moodle and Google Classroom.",
  },
  {
    slug: "remark-classic-omr",
    name: "Remark Classic OMR",
    group: "Software",
    title: "The quickest way to collect data from OMR readers",
    intro:
      "Remark Classic OMR works with the forms you already use on traditional OMR machines. Train your own templates and start capturing data the same day.",
    summary: "Data collection for traditional OMR machines.",
    image: software,
    highlights: [
      { title: "Define your forms", text: "Built-in template editor to map every data area on your sheets." },
      { title: "Read and validate", text: "Recognises filled bubbles and flags incorrectly marked forms." },
      { title: "Use the data", text: "Export clean results to your grading or analysis tools." },
    ],
    features: [
      { title: "Features", items: ["Works with most traditional OMR forms", "Create and train your own templates", "Exception handling for problem sheets", "Optional barcode reader and transport printer"] },
    ],
    seoTitle: "Remark Classic OMR Software | OMR Data Collection",
    seoDescription:
      "Remark Classic OMR collects data from traditional OMR readers. Train templates for your forms and export clean results fast.",
  },
  {
    slug: "optic-view-sekonic",
    name: "Optic View OMR for Sekonic",
    group: "Software",
    title: "Grading and analytics built for Sekonic readers",
    intro:
      "A complete processing platform for Sekonic OMR scanners — with 99.9% accuracy, template management, hardware tuning and a live analytics dashboard.",
    summary: "Platform for Sekonic OMR scanners.",
    image: software,
    stats: [{ value: "99.9%", label: "Accuracy" }],
    highlights: [
      { title: "Central dashboard", text: "Track scan volumes, users, assigned jobs and pending tasks at a glance." },
      { title: "Template manager", text: "Define rows, bubble shapes and reading direction to match each sheet." },
      { title: "Hardware tuning", text: "Adjust sensitivity for pencil or ink, enable image capture and barcodes." },
    ],
    features: [
      { title: "Platform", items: ["Supports multiple OMR formats", "Secure, role-based access", "Real-time analytics", "Visual field mapping"] },
    ],
    seoTitle: "Optic View OMR for Sekonic | OMR Grading Software",
    seoDescription:
      "Optic View OMR for Sekonic scanners: 99.9% accuracy, template management, scanner tuning and real-time analytics.",
  },
  {
    slug: "optic-view-image",
    name: "Optic View for Image",
    group: "Software",
    title: "Read OMR sheets from images — no special scanner needed",
    intro:
      "Upload scanned images of your sheets and let smart bubble detection do the rest, with template design, task management and offline working built in.",
    summary: "Image-based OMR with smart detection.",
    image: software,
    highlights: [
      { title: "Design", text: "Build sheet templates with the visual template designer." },
      { title: "Upload & detect", text: "Smart bubble detection reads marks from ordinary scanned images." },
      { title: "Manage", text: "Assign tasks, control access by role and work offline when needed." },
    ],
    features: [
      { title: "Features", items: ["Image-based OMR", "Smart bubble detection", "Template designer", "Task management", "Role-based access", "Offline capability"] },
    ],
    seoTitle: "Optic View for Image | Image-Based OMR Software",
    seoDescription:
      "Image-based OMR software: read answer sheets from scanned images with smart bubble detection, templates and offline mode.",
  },
  {
    slug: "mark-on-screen",
    name: "Mark On Screen (MOS)",
    group: "Software",
    title: "Secure, scalable digital evaluation",
    intro:
      "Scan descriptive answer booklets and let evaluators mark them on screen — with schemas, review workflows and live progress monitoring.",
    summary: "On-screen marking for answer booklets.",
    image: software,
    highlights: [
      { title: "End-to-end evaluation", text: "Booklet upload, schema rules, task assignment, review and verification." },
      { title: "Live monitoring", text: "See every script as not started, in progress or completed." },
      { title: "Role-based access", text: "Separate admin, evaluator and reviewer permissions." },
    ],
    features: [
      { title: "Tracking", items: ["Evaluator performance", "Pending evaluations", "Overall progress", "Fully auditable marks"] },
    ],
    seoTitle: "Mark On Screen | On-Screen Marking & Digital Evaluation",
    seoDescription:
      "Digital evaluation system for descriptive answer booklets: on-screen marking, review workflows, role-based access and live monitoring.",
  },
  {
    slug: "omr-sheets",
    name: "OMR Answer Sheets",
    group: "Printing",
    title: "OMR Answer Sheets",
    intro:
      "Custom OMR sheet design and printing for exams, surveys and feedback forms in India. Match your answer layout, candidate fields and printing requirements to the reader or software you use.",
    summary: "Custom OMR answer sheet design and security printing.",
    image: education,
    highlights: [
      { title: "What is an OMR sheet?", text: "An OMR sheet is a paper form with predefined response areas, usually bubbles, that people fill to record answers or information. OMR stands for Optical Mark Recognition: a reader or compatible software detects those marks and turns them into data for grading or analysis. An OMR answer sheet records multiple-choice responses separately from the question paper." },
      { title: "OMR answer sheets for exams", text: "Schools, coaching institutes, universities and recruitment teams use OMR sheets to collect multiple-choice answers in a consistent format. A layout can include question numbers, answer options and candidate identification fields. The question count, number of options and marking instructions should be agreed before the form is printed." },
      { title: "Custom OMR sheet design", text: "A suitable sheet starts with the test and scanning workflow, not just a blank bubble template. We design exam sheets, surveys, questionnaires and registration forms around the required questions, ID fields and reader. Tell us whether you use a dedicated Sekonic OMR reader or image-based OMR software so the layout can be reviewed for that workflow." },
      { title: "OMR sheet printing & security", text: "OMR Solutions supplies custom printed answer sheets and forms, including security printing. Print positioning and consistent cutting matter because the reader expects marks in defined locations. Our sheet printing service includes precision cutting; discuss sheet dimensions and required security features with the team before ordering." },
      { title: "How to fill an OMR sheet", text: "Read the instructions on the specific exam sheet first. Use only the permitted pen or pencil, fill the intended bubble clearly and keep marks inside its boundary. Check candidate details and question numbers before answering. For a single-answer question, mark only one option. Follow the exam's correction rules rather than assuming erasers, overwriting or correction fluid are allowed." },
      { title: "OMR scanning & result processing", text: "The completed sheet must match the reader or software template used to process it. Dedicated OMR readers and image-based OMR software use different workflows; a form that works with one setup is not automatically suitable for every other setup. Review a sample sheet, test scanning and confirm the answer key and exception-handling process before producing the full batch." },
    ],
    features: [
      { title: "Plan your OMR answer sheet order", items: ["Question count and answer options", "Candidate ID and registration fields", "Sheet dimensions and layout", "Reader model or OMR software", "Required quantity and delivery date", "Security printing requirements", "Permitted pen or pencil instructions", "Sample-form review and scan testing"] },
      { title: "OMR sheet questions", items: ["What affects price? Quantity, layout, dimensions and printing requirements. Request a quote for your specification.", "Can I use an OMR sheet PDF? A PDF is a layout file, not proof of compatibility. Confirm print scale, paper and the scanning template before use.", "Are all exam sheets interchangeable? No. Use the form and marking instructions approved for your particular exam.", "Can sheets be used for surveys? Yes. We also design questionnaires, registrations and feedback forms.", "Can I print on ordinary paper? Paper and print requirements depend on your reader or software; confirm them before printing.", "Do you supply official NEET or board exam sheets? This page describes custom institutional forms, not an official examination body's answer sheet."] },
    ],
    seoTitle: "OMR Sheet & OMR Answer Sheet Printing in India | OMR Solutions",
    seoDescription:
      "Explore OMR answer sheets for exams and surveys: what an OMR sheet is, how to fill it, and custom sheet design and security printing in India.",
  },
  {
    slug: "omr-form-design",
    name: "OMR Form Design",
    group: "Printing",
    title: "Forms designed to be scanned right the first time",
    intro:
      "We design exam sheets, surveys and questionnaires that read accurately — using Remark Office OMR, Flips form printing and Magenta data tools.",
    summary: "Custom exam and survey form design.",
    image: software,
    highlights: [
      { title: "Design", text: "Layouts tuned for your questions, ID fields and scanner." },
      { title: "Print", text: "Laser-printed forms with Flips, or security-printed sheets." },
      { title: "Analyse", text: "Data collection and reporting ready from day one." },
    ],
    features: [
      { title: "We design", items: ["Exam answer sheets", "Survey questionnaires", "Registration forms", "Feedback cards"] },
    ],
    seoTitle: "OMR Form Design Services | Exam & Survey Forms",
    seoDescription:
      "Professional OMR form design for exams, surveys and registrations. Forms built for accurate scanning with Remark and Sekonic.",
  },
  {
    slug: "document-scanners",
    name: "Document Scanners",
    group: "Hardware",
    title: "Turn paper into searchable digital records",
    intro:
      "High-speed document scanners from trusted brands — the first step to a paperless office, faster retrieval and safer archives.",
    summary: "Latest Ricoh Scanners.",
    image: documents,
    stats: [
      { value: "60 ppm", label: "Scan speed" },
      { value: "6+", label: "Brands" },
      { value: "24/7", label: "Support" },
    ],
    highlights: [
      { title: "Capture", text: "Automatic feeders and duplex scanning for high-volume work." },
      { title: "Search", text: "Scan straight to searchable PDF." },
      { title: "Integrate", text: "TWAIN & WIA compatible, with network and cloud scanning." },
    ],
    features: [
      { title: "Brands", items: ["Miru", "Plustek SmartOffice", "IRIS / Readiris Pro", "Kodak", "Mustek ScanExpress", "DRS"] },
      { title: "Ideal for", items: ["Banking & insurance forms", "Government records", "Hospital records", "Legal archives"] },
    ],
    seoTitle: "Document Scanners in India | Plustek, Kodak, IRIS, DRS",
    seoDescription:
      "High-speed document scanners up to 60 ppm from Plustek, Kodak, IRIS, Miru and DRS. Sales, installation and support across India.",
  },
  {
    slug: "book-scanners",
    name: "Book Scanners",
    group: "Hardware",
    title: "Distortion-free digitisation of bound material",
    intro:
      "Camera-based book scanners for libraries and archives — up to 2,500 pages an hour, gentle on fragile spines, sharp right to the fold.",
    summary: "Up to 2,500 pages/hour, gentle on books.",
    image: documents,
    highlights: [
      { title: "Three scanning modes", text: "Automatic, semi-automatic for fragile books, and manual for covers and fold-outs." },
      { title: "Constant quality", text: "Even lighting independent of the room, from the first page to the last." },
      { title: "No distortion", text: "Patented prism optics capture flat, clean images up to the book fold." },
    ],
    features: [
      { title: "Ideal for", items: ["Libraries", "University archives", "Government record rooms", "Publishers"] },
    ],
    seoTitle: "Book Scanners for Libraries & Archives | OMR Solutions",
    seoDescription:
      "Overhead book scanners up to 2,500 pages per hour with distortion-free prism optics. For libraries, archives and record rooms in India.",
  },
  {
    slug: "document-management",
    name: "Document Management",
    group: "Software",
    title: "Make your documents digital, secure and searchable",
    intro:
      "Scan, organise and retrieve every file in seconds — with version control and retention policies that keep records audit-ready.",
    summary: "Paperless records with version control.",
    image: documents,
    highlights: [
      { title: "Scan", text: "Supports over 300 scanner types." },
      { title: "Organise", text: "Check-in/check-out version control prevents overwrites." },
      { title: "Retain", text: "Retention and disposition policies for paper and digital records." },
    ],
    features: [
      { title: "Benefits", items: ["Free up office space", "Find any document in seconds", "Secure, backed-up records", "Access from any device"] },
      { title: "Related", items: ["ICR software for handwritten forms", "OCR for printed text", "Built-in data validation"] },
    ],
    seoTitle: "Document Management Software | Paperless Office | OMR Solutions",
    seoDescription:
      "Document management software with scanning, version control and records retention. Go paperless and find files in seconds.",
  },
];

export const productGroups = ["Hardware", "Software", "Printing"] as const;

export const clientSectors = [
  {
    name: "Corporates & MNCs",
    clients: ["Accenture", "Boeing", "Citibank", "Larsen & Toubro", "L&T Infotech", "Honeywell India", "Infosys", "BHEL Trichy"],
    quote: { text: "Our forms were printed and supplied within two days, with great software support.", by: "BHEL" },
  },
  {
    name: "Universities & Commissions",
    clients: ["Johns Hopkins University", "University of Hong Kong", "Jiwaji University", "Madurai University", "Karnataka PSC", "Rajasthan PSC", "MDSU Ajmer"],
    quote: { text: "How quickly they understand what is needed and deliver it within budget is the best of any vendor.", by: "Jiwaji University" },
  },
  {
    name: "Schools & Coaching",
    clients: ["Delhi Public School, R K Puram", "City Montessori School", "Resonance, Kota", "Career Point, Kota", "Brilliant Tutorials", "Mission PMT"],
    quote: { text: "High speed, accurate and low maintenance. Japanese machine, Indian conditions.", by: "Career Point, Kota" },
  },
  {
    name: "Healthcare & Marketing",
    clients: ["Indian Orthopaedic Association", "Hyundai Motors", "Health Research Associates, USA"],
  },
  {
    name: "Printers & Publishers",
    clients: ["Manipal Press", "Aadarsh Printers", "Ruchi Printers", "Autoprint, Coimbatore"],
  },
];

export const news = [
  { date: "Mar 2009", place: "Dubai", tag: "Exhibition", title: "GESS Education Exhibition 2009", text: "Showcased OMR solutions to education ministries and international schools across the Gulf region." },
  { date: "Oct 2008", place: "Agra", tag: "Visit", title: "Plustek sales manager visits", text: "Plustek's sales leadership visited our Agra development office." },
  { date: "Aug 2008", place: "Mumbai", tag: "Exhibition", title: "Asia IT Expo 2008", text: "Launched a new OMR + OCR scanner with Sekonic Corporation, Japan." },
  { date: "May 2008", place: "Agra", tag: "Visit", title: "Education Minister visits", text: "The Education Minister toured our Agra office." },
  { date: "Apr 2008", place: "Agra", tag: "Partnership", title: "Tie-up with DRS, UK", text: "Partnership announced with DRS, UK for document and OMR scanners." },
  { date: "Mar 2007", place: "New Delhi", tag: "Exhibition", title: "15th Convergence IT Fair", text: "Demonstrated OMR for surveys, recruitment and employee exams at Pragati Maidan." },
  { date: "Oct 2006", place: "Lucknow", tag: "Exhibition", title: "Global TIE 2006", text: "Demonstrated Sekonic SR2300, Avision and Fujitsu scanners with Remark software." },
  { date: "Apr 2006", place: "New Delhi", tag: "Launch", title: "Vision OMR launched", text: "Our in-house grading and analysis tool for Sekonic readers went live." },
  { date: "Feb 2006", place: "Agra", tag: "Case study", title: "Chamber of Commerce election on OMR", text: "Ballots for the National Chamber of Industries & Commerce, UP were counted in one hour." },
];

export const caseStudies = [
  { industry: "Universities & entrance exams", text: "How exam boards cut result declaration time with Remark Office OMR." },
  { industry: "Coaching institutes", text: "Fast, dependable test evaluation across large student batches." },
  { industry: "Survey research", text: "Capturing and tabulating large volumes of response data." },
  { industry: "Healthcare", text: "Medical assessments, certifications and health data collection." },
  { industry: "Social sciences", text: "Processing questionnaires and study data at research scale." },
];
