"use client";
import { ExportDataButton } from "@/features/NIDLP/dashboard/internal-dashboard/components/ExportDataButton";
import { requestsData } from "@/features/NIDLP/data/internal-dashboard-data";
import { MOCK_SURVEYS } from "@/features/NIDLP/data/surveys-dashboard-data";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSurvey = pathname.includes("surveys-dashboard");
  const data = isSurvey ? MOCK_SURVEYS : requestsData;
  const filename = isSurvey ? "surveys.json" : "requests.json";
  return (
    <div>
      <ExportDataButton data={data} filename={filename} />
      {children}
    </div>
  );
}
