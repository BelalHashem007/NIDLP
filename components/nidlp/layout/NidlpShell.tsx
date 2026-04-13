import type { ReactNode } from "react";
import { NidlpHeader } from "@/components/nidlp/layout/NidlpHeader";
import { NidlpSidebar } from "@/components/nidlp/layout/NidlpSidebar";

export function NidlpShell({ children }: { children: ReactNode }) {
  return (
    <>
      <NidlpHeader />
      <div className="flex relative">
        <NidlpSidebar />
        <main className="relative mx-4 mt-8 mb-15 min-w-0 flex-1 overflow-x-auto pt-16 lg:mr-74 lg:ml-8 lg:pt-20">
          <div className="mx-auto min-w-180 w-full lg:p-6 p-3">{children}</div>
        </main>
      </div>
    </>
  );
}
