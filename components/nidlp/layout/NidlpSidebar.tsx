"use client";

import Image from "next/image";
import LogoFooter from "@/public/assets/logo-footer.png";
import { NidlpNavList } from "@/components/nidlp/layout/NidlpNavList";

export {
  navConfig,
  type NavGroupEntry,
} from "@/components/nidlp/layout/nidlp-nav-config";

export function NidlpSidebar() {
  return (
    <aside className="hidden lg:block fixed top-20 h-[calc(100%-80px)] max-w-[260px] shrink-0 border-l border-[#E5E7EB] bg-white">
      <div className="flex h-full flex-col">
        <nav className="flex-1 space-y-2 overflow-y-auto px-3 pt-6">
          <NidlpNavList variant="sidebar" />
        </nav>

        <div className="mt-auto flex items-center gap-3 px-4 py-3">
          <Image
            src="/2030-VISION.png"
            alt="vision 2030"
            width={80}
            height={54}
            className="opacity-95"
          />
          <span className="inline-block h-full border-l border-[#899AA1]"></span>
          <Image src={LogoFooter} alt="Logo" />
        </div>
      </div>
    </aside>
  );
}
