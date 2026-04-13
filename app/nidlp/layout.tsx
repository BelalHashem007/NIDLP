import type { ReactNode } from "react";
import { NidlpShell } from "@/components/nidlp/layout/NidlpShell";

export default function NidlpLayout({ children }: { children: ReactNode }) {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-[#f6f7fb]">
      <NidlpShell>{children}</NidlpShell>
    </div>
  );
}

