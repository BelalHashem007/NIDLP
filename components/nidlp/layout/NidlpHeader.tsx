import Image from "next/image";
import { Bell, ChevronLeft, Menu } from "lucide-react";
import Logo from "@/public/logo.png";
import Avatar from "@/public/avatar@2x.png";
import NotficiationHovered from "@/public/notification-hovered.png";

export function NidlpHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 bg-[#2E1866]">
      <div className=" flex h-full w-fullٍ  items-center px-4 text-white">
        {/* Right: brand block */}
        <div className="flex min-w-0 h-full items-center justify-center gap-2 w-61.25 border-l border-[#FFFFFF1F]">
          <Image src={Logo} alt="Logo" priority />
        </div>

        {/* Center: breadcrumb + title */}
        <div className="flex min-w-0 flex-1 flex-col justify-center px-4">
          <div className="flex min-w-0 items-center gap-2 text-[12px] opacity-80">
            <span className="truncate">لوحة التحكم</span>
            <span className="opacity-70">
              <ChevronLeft className="size-4" />
            </span>
            <span className="truncate">لوحة التحكم الداخلية</span>
          </div>
          <div className="min-w-0 truncate text-sm font-semibold">
            لوحة التحكم الداخلية
          </div>
        </div>

        {/* Left: user + notifications */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center transition-all  hover:*:fill-[#119DA9] hover:*:text-[#119DA9] hover:border border-[#119DA9] hover:bg-[#1a144b] hover:cursor-pointer rounded-full"
            aria-label="Notifications"
          >
            {<Bell className="h-5 w-5 transition-all " />}
          </button>
          <button
            type="button"
            aria-label="Profile"
            className="flex bg-[#FFFFFF14] py-2 px-3 rounded-[64px] items-center gap-2.25 hover:cursor-pointer hover:bg-[#FFFFFF14]/150"
          >
            <div className="size-8 ">
              <Image
                src={Avatar}
                alt="avatar"
                className="h-full w-full rounded-full bg-white"
              />
            </div>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
