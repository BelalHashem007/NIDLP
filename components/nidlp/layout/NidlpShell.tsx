import type { ReactNode } from "react";
import { NidlpHeader } from "@/components/nidlp/layout/NidlpHeader";
import { NidlpSidebar } from "@/components/nidlp/layout/NidlpSidebar";

export function NidlpShell({ children }: { children: ReactNode }) {
  return (
    <>
      <NidlpHeader />
      <div className="flex relative">
        <NidlpSidebar />
        <main className="min-w-0 flex-1 pt-16">
          <div className="mx-auto w-full max-w-screen-2xl p-6">{children}</div>
        </main>
      </div>
    </>
  );
}
