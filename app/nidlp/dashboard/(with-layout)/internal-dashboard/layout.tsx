import { Suspense } from "react";
import NavComponent from "@/features/NIDLP/dashboard/internal-dashboard/components/NavComponent";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={null}>
        <NavComponent />
      </Suspense>
      {children}
    </div>
  );
}
