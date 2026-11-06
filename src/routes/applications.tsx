import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, seo } from "@/components/site/Blocks";

export const Route = createFileRoute("/applications")({
  head: () =>
    seo(
      "OMR Application Areas — Exams, Surveys, Registrations & Census",
      "Where OMR is used: exams, admissions, surveys, registrations, elections, medical records and census data across education, government and business.",
      "/applications",
    ),
  component: Applications,
});

const rows = [
  { sector: "Education", exams: "Application forms, regular & trial exams, certification, ability tests", entries: "Academic registration, school preferences, student elections", admin: "Attendance, aptitude & intelligence tests", surveys: "Health check-ups, counselling" },
  { sector: "General office", exams: "Employment, training & promotion exams", entries: "Union executives, user registrations, maintenance records", admin: "Ordering, scheduling, quality & inventory control", surveys: "Employee & wage surveys" },
  { sector: "Medical care", exams: "Clinical tests, psychoanalysis", entries: "Donor registrations, blood type records", admin: "Nursing care insurance", surveys: "Interview sheets, patient records" },
  { sector: "Market research", exams: "Postcard quizzes", entries: "Prize contests, fan polls, sports scores", admin: "Product & satisfaction research", surveys: "Service feedback, opinion polls" },
  { sector: "Government", exams: "Civil service & competitive exams", entries: "Electoral votes, admission tickets", admin: "Public scheme records", surveys: "Census, e-governance capture" },
  { sector: "Others", exams: "Point rallies", entries: "Memberships, event tickets", admin: "Game records", surveys: "Field surveys, community feedback" },
];

function Applications() {
  return (
    <>
      <PageHero eyebrow="Application areas" title="If it's filled in on paper, OMR can read it" intro="From exams to census forms, OMR captures data across every sector — quickly and accurately." />
      <section className="container-x py-20">
        <div className="overflow-x-auto rounded-2xl border bg-card shadow-card">
          <table className="w-full min-w-[56rem] text-left text-sm">
            <thead className="bg-secondary">
              <tr>
                {["Sector", "Exam processing", "Entries & registration", "Administration", "Health & surveys"].map((h) => (
                  <th key={h} className="px-5 py-4 font-display font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {rows.map((r) => (
                <tr key={r.sector}>
                  <th className="px-5 py-4 font-semibold text-primary">{r.sector}</th>
                  <td className="px-5 py-4 text-muted-foreground">{r.exams}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.entries}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.admin}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r.surveys}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
