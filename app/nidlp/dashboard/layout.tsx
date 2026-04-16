import NavComponent from "@/features/NDLIP/internal-dashboard/components/NavComponent";
import { ExportDataButton } from "@/features/NDLIP/internal-dashboard/components/ExportDataButton";
import { Suspense } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={null}>
        <NavComponent />
      </Suspense>
      <ExportDataButton />
      {children}
    </div>
  );
}
