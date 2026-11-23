import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ExamSubNav } from "@/components/site/OnlineExam";

export const Route = createFileRoute("/online-exam")({ component: OnlineExamLayout });

function OnlineExamLayout() {
  return (<><ExamSubNav /><Outlet /></>);
}
