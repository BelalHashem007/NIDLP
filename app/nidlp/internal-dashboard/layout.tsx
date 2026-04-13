import NavComponent from "@/features/NDLIP/internal-dashboard/components/NavComponent";
import { ExportDataButton } from "@/features/NDLIP/internal-dashboard/components/ExportDataButton";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavComponent />
      <ExportDataButton />
      {children}
    </div>
  );
}
