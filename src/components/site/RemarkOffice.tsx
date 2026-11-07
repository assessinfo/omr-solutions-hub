import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { DetailPage } from "@/lib/content";
import remarkLogo from "@/assets/remark/remark-logo.jpg.asset.json";
import teacherTeamwork from "@/assets/remark/teacher-teamwork.jpg.asset.json";
import classroomTeachers from "@/assets/remark/classroom-teachers.jpg.asset.json";
import educationComputerWork from "@/assets/remark/education-computer-work.jpg.asset.json";

const educatorPhotos = [
  { image: teacherTeamwork.url, alt: "Smiling teacher sharing a high five with adult students working with a laptop and papers", caption: "Teaching & assessment", credit: "Kampus Production", source: "https://www.pexels.com/photo/multiracial-group-of-students-and-teacher-having-fun-during-teamwork-5940837/" },
  { image: classroomTeachers.url, alt: "Happy teachers and pupils celebrating together in a classroom", caption: "Classroom learning", credit: "Yan Krukau", source: "https://www.pexels.com/photo/students-and-their-teacher-talking-in-the-classroom-8617838/" },
  { image: educationComputerWork.url, alt: "Adult educator helping a learner at a library computer while others review books", caption: "Collaborative review", credit: "Yan Krukau", source: "https://www.pexels.com/photo/people-inside-the-library-8199624/" },
];

const resources = [
  {
    id: "version-12", label: "What's new in 12", title: "Remark Office OMR 12",
    intro: "Version 12 introduces new tools for form recognition, reviewing data and giving students clearer feedback.",
    items: ["AI Assistant for guidance on reports and form recognition", "Anchor (corner) marks to help align scanned forms", "Customizable flag colors during Review Exceptions", "Change tracking in the data grid, with export to Excel", "Annotated student test reports with grades on scanned images", "Import partial credit for multiple questions", "Updated menus for a clearer workflow"],
  },
  {
    id: "features", label: "Features", title: "Capture responses from your own forms",
    intro: "Create forms in a word processor or page-design application, print on ordinary paper and process them with your office scanner or copier.",
    items: ["Optical mark recognition for bubbles and checkboxes", "Barcode and printed-text recognition (OCR)", "Multipage and double-sided forms", "Review cross-outs, multiple marks and other exceptions", "Read PDF, TIFF and JPG images or use a TWAIN-compatible scanner", "Export to Excel, Access, SPSS, CSV, SQL and custom text formats"],
  },
  {
    id: "survey-analysis", label: "Survey analysis", title: "Turn survey responses into useful reports",
    intro: "Included Remark Quick Stats tools analyse surveys, evaluations and feedback forms without moving your results into another reporting application.",
    items: ["Standard survey reports and response summaries", "Compare responses across groups", "Filter results to examine selected respondents", "Cross-tabulate responses", "Export collected data for further analysis"],
  },
  {
    id: "test-grading", label: "Test grading", title: "Grade tests and understand performance",
    intro: "Remark Quick Stats reports on student, class, item and test performance, helping educators review results and identify areas for improvement.",
    items: ["Enter or scan answer keys", "Adjust an answer key and regrade results", "Support multiple versions of a test", "Customizable student and class reports", "Item analysis and test-performance reporting", "Version 12 annotated student test reports"],
  },
  {
    id: "sample-forms", label: "Sample forms", title: "Forms for tests, surveys and evaluations",
    intro: "Remark provides sample bubble sheets and form examples to evaluate with the software or its trial. You can also design your own forms on plain paper.",
    items: ["Tests, assessments, exams and quizzes", "Surveys and questionnaires", "Course and training evaluations", "Use samples to explore recognition and reporting"],
    action: { label: "View official form downloads", href: "https://remarksoftware.com/products/office-omr/sample-forms/" },
    note: "Sample files are downloaded from Remark Software's website.",
  },
  {
    id: "user-stories", label: "User stories", title: "Remark in everyday use",
    intro: "The manufacturer's published examples span education, healthcare, business, government and nonprofit organisations.",
    items: ["Universities process teacher and course evaluations", "Tutoring organisations grade diagnostic tests", "Construction companies collect safety observations", "Hospitals analyse quality-improvement and clinical-outcomes forms", "Government departments collect survey and administrative data", "Nonprofits evaluate programmes and participant feedback"],
  },
  {
    id: "free-trial", label: "Free trial", title: "Evaluate Remark Office OMR",
    intro: "Request a working trial from Remark Software to explore form processing and analysis before choosing a licence.",
    items: ["Explore recognition using sample forms", "Review test-grading and survey-analysis tools", "Discuss your scanner, forms and licensing needs with OMR Solutions"],
    action: { label: "Request the official trial", href: "https://remarksoftware.com/products/office-omr/try-remark-office-omr/" },
    note: "The trial request and software download are handled on Remark Software's website.",
  },
  {
    id: "live-demo", label: "Live demo", title: "See Remark Office OMR in action",
    intro: "Request a personalized demonstration from the Remark team. A representative will contact you to arrange a time for the online session.",
    items: ["See the form-to-data workflow", "Explore reports relevant to your tests or surveys", "Discuss your scanning and data-collection requirements"],
    action: { label: "Request an official demonstration", href: "https://remarksoftware.com/products/office-omr/schedule-roo-demonstration/" },
    note: "The demonstration request and scheduling are handled by Remark Software.",
  },
];

export function RemarkHero({ page }: { page: DetailPage }) {
  return (
    <section className="border-b bg-secondary">
      <div className="container-x py-10 md:py-14">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="eyebrow">Software · Gravic</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">Remark Office OMR 12</h1>
          </div>
          <img src={remarkLogo.url} alt="Remark Software logo" width={224} height={76} className="h-auto w-36 object-contain md:w-44" />
        </div>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{page.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contact">Enquire about Remark <ArrowRight /></Link></Button>
          <Button asChild size="lg" variant="outline"><a href="#remark-resources">Explore version 12</a></Button>
        </div>
        <img src={page.image} alt={page.imageAlt} width={1106} height={623} className="mx-auto mt-8 aspect-video w-full max-w-4xl object-contain" />
      </div>
    </section>
  );
}

export function RemarkResources() {
  return (
    <>
    <section id="remark-educators" className="border-b">
      <div className="container-x py-12 md:py-16">
        <p className="eyebrow">Education & evaluation</p>
        <h2 className="mt-4 text-2xl font-bold md:text-3xl">More time for teaching. Less time on paperwork.</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Remark Office OMR helps educators process answer sheets, course evaluations and surveys, with grading and analysis reports in one place.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {educatorPhotos.map((photo) => (
            <figure key={photo.image} className="min-w-0">
              <img src={photo.image} alt={photo.alt} width={1400} height={933} loading="lazy" className="aspect-[3/2] w-full rounded-lg object-cover" />
              <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-semibold">{photo.caption}</span>
                <a href={photo.source} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground underline underline-offset-4 hover:text-primary">{photo.credit} / Pexels</a>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted-foreground">Stock photography for illustration; people shown are not identified as Remark customers or endorsers.</p>
      </div>
    </section>
    <section id="remark-resources" className="container-x scroll-mt-28 py-12 md:py-16">
      <p className="eyebrow">Explore Remark Office OMR</p>
      <h2 className="mt-4 text-2xl font-bold md:text-3xl">Product information & resources</h2>
      <Tabs defaultValue="version-12" className="mt-7">
        <TabsList aria-label="Remark Office OMR resources" className="grid h-auto w-full grid-cols-2 gap-2 rounded-none bg-transparent p-0 sm:grid-cols-4">
          {resources.map((resource) => <TabsTrigger key={resource.id} value={resource.id} className="min-h-12 whitespace-normal rounded-md border px-3 py-3 text-center data-[state=active]:border-primary data-[state=active]:bg-primary-soft data-[state=active]:text-foreground data-[state=active]:shadow-none">{resource.label}</TabsTrigger>)}
        </TabsList>
        {resources.map((resource) => (
          <TabsContent key={resource.id} value={resource.id} className="mt-8 border-t pt-8">
            <h3 className="text-2xl font-semibold">{resource.title}</h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{resource.intro}</p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {resource.items.map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-primary" /><span>{item}</span></li>)}
            </ul>
            {resource.action && <div className="mt-7"><Button asChild variant="outline"><a href={resource.action.href} target="_blank" rel="noopener noreferrer" className="h-auto min-h-10 whitespace-normal text-left">{resource.action.label}<ExternalLink className="shrink-0" /></a></Button><p className="mt-3 text-sm text-muted-foreground">{resource.note}</p></div>}
          </TabsContent>
        ))}
      </Tabs>
    </section>
    </>
  );
}