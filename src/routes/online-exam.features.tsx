import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, seo } from "@/components/site/Blocks";
import { ModuleShowcase, NextPage } from "@/components/site/OnlineExam";
import dashboard from "@/assets/is10/dashboard.png.asset.json";
import masters from "@/assets/is10/academic-masters.png.asset.json";
import aiq from "@/assets/is10/ai-questions.png.asset.json";
import langs from "@/assets/is10/languages.png.asset.json";
import directory from "@/assets/is10/directory.png.asset.json";
import controls from "@/assets/is10/exam-controls.png.asset.json";
import results from "@/assets/is10/results.png.asset.json";
import login from "@/assets/is10/student-login.png.asset.json";
import examUi from "@/assets/is10/exam-ui.png.asset.json";
import submission from "@/assets/is10/submission.png.asset.json";

export const Route = createFileRoute("/online-exam/features")({
  staticData: { sitemap: true },
  head: () => seo(
    "IS10 Platform Tour — AI Question Bank, Exams & Results | OMR Solutions",
    "Walk through every IS10 module: admin dashboard, academic masters, AI question generator, multilingual question bank, student onboarding, exam controls, the candidate exam screen and instant results.",
    "/online-exam/features",
  ),
  component: Features,
});

const modules = [
  { eyebrow: "Command centre", title: "Admin dashboard & live metrics", image: dashboard.url, points: [
    ["KPI cards", "Track total questions, papers and students."], ["Exam mix", "Monthly distribution of active assessments."], ["Growth trends", "Multi-month student registration curves."], ["Quick access", "Direct navigation to all core modules."]] },
  { eyebrow: "Academic masters", title: "Hierarchical class & course setup", image: masters.url, points: [
    ["4-tier hierarchy", "Class, course, section and sub-section."], ["Difficulty tagging", "Categorise from Easy to Very Hard."], ["Multilingual setup", "Support Hindi, English, Japanese and Urdu."], ["Status controls", "Instant activation and code indexing."]] },
  { eyebrow: "Content engine", title: "AI question generator & bulk import", image: aiq.url, points: [
    ["AI generation", "Create MCQs, True/False and essays by topic."], ["CSV bulk upload", "Import thousands of tagged questions fast."], ["Smart filtering", "Query by class, difficulty or language."], ["QC gatekeeping", "Audit drafts before paper assembly."]] },
  { eyebrow: "Taxonomy & localisation", title: "Multi-language & complexity indexing", image: langs.url, points: [
    ["Global languages", "Deliver exams in Hindi, English, Japanese and Urdu."], ["Custom complexity", "Tag items across Easy, Medium, Hard and Very Hard."], ["CSV schema tools", "Download sample templates for zero-error imports."], ["Centralised audit", "Search and filter the whole repository instantly."]] },
  { eyebrow: "Institution directory", title: "Centralised student & school onboarding", image: directory.url, points: [
    ["Bulk candidate upload", "Onboard student rosters with one click."], ["School mapping", "Register public and private institutions by unique code."], ["Paper assignment", "Filter candidates by language and assigned test."], ["Account controls", "Edit or manage active student profiles in real time."]] },
  { eyebrow: "Exam orchestration", title: "Granular exam & proctoring controls", image: controls.url, points: [
    ["Proctoring toggles", "Enable AI or live invigilation per assessment."], ["Shift & seat limits", "Configure multi-shift capacity and centre seats."], ["Violation thresholds", "Set custom warning limits before auto-submit."], ["Instant result toggle", "Control immediate post-exam score visibility."]] },
  { eyebrow: "Results & analytics", title: "Instant scorecards & result dispatch", image: results.url, points: [
    ["Automated grading", "Instant mark calculation and candidate ranking."], ["One-click dispatch", "Send verified results directly to students."], ["Detailed breakdown", "Inspect question-level performance."], ["Data portability", "Export complete cohort score sheets in seconds."]] },
  { eyebrow: "Candidate onboarding", title: "Secure student login & guidelines", image: login.url, points: [
    ["Credential gate", "Authenticated login before the exam."], ["System check", "Mandatory webcam, mic and network check."], ["Clear rules", "Explicit anti-cheating and window-lock rules."], ["Timed start", "One-click launch into fullscreen exam mode."]] },
  { eyebrow: "Candidate exam screen", title: "Interactive exam & live webcam feed", image: examUi.url, points: [
    ["Question palette", "Colour-coded solved, skipped and unvisited grid."], ["Live proctoring", "Embedded webcam feed monitors candidate focus."], ["Countdown timer", "Real-time clock with auto-saved responses."], ["Smart navigation", "Jump instantly across 100+ questions."]] },
  { eyebrow: "Completion", title: "Transparent submission receipt", image: submission.url, points: [
    ["Attempt breakdown", "Instant count of submitted, seen and skipped items."], ["Zero data loss", "Verified server-side response synchronisation."], ["Clean exit", "Guided session closure after final confirmation."], ["Audit ready", "Timestamped completion log for administrators."]] },
];

function Features() {
  return (
    <>
      <PageHero eyebrow="Platform tour" title="Every IS10 module, from question bank to scorecard" intro="Follow the exam lifecycle the way your team will use it: admins set up, QC approves, students take the test, and results go out instantly." />
      {modules.map((m, i) => (
        <div key={m.title} className={i % 2 ? "bg-secondary" : ""}>
          <ModuleShowcase eyebrow={m.eyebrow} title={m.title} image={m.image} alt={`IS10 screen: ${m.title}`} flip={i % 2 === 1} points={m.points.map(([title, text]) => ({ title: title!, text: text! }))} />
        </div>
      ))}
      <div className="pt-10"><NextPage to="/online-exam/security" label="Security & AI proctoring" /></div>
      <CtaBand title="Want this tour live?" text="We'll demo the full flow on IS10 with your own sample questions." />
    </>
  );
}
