"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Bell, Building2, ChevronLeft, Menu, X } from "lucide-react";

import Logo from "@/public/assets/logo.png";
import Avatar from "@/public/assets/avatar@2x.png";
// import { BreadCrumbComponent } from "@/components/nidlp/layout/BreadCrumbComponent";
import { BreadCrumbComponent } from "@/components/shared/BreadCrumpComponent";
import { getPageTitleForPathname } from "@/components/nidlp/layout/breadcrumb-config";
import { NidlpNavList } from "@/components/nidlp/layout/NidlpNavList";
import Link from "next/link";

export function NidlpHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const pageTitle = getPageTitleForPathname(pathname);
  const drawerCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const id = window.setTimeout(() => setDrawerOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setDrawerOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    queueMicrotask(() => drawerCloseRef.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-[#2E1866] text-white">
        {/* Desktop */}
        <div className="hidden h-20 w-full items-center px-4 lg:flex">
          <div className="flex h-full w-full items-center">
            <div className="flex h-full min-w-0 w-59.5 items-center justify-center gap-2 border-l border-[#FFFFFF1F]">
              <Link href={"/"}>
              <Image src={Logo} alt="Logo" priority className="cursor-pointer" />
              </Link>
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 px-4">
              <BreadCrumbComponent />
              {pageTitle ? (
                <div className="min-w-0 truncate text-sm font-semibold">
                  {pageTitle}
                </div>
              ) : null}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-all hover:*:fill-[#119DA9] hover:*:text-[#119DA9] hover:cursor-pointer hover:border hover:border-[#119DA9] hover:bg-[#1a144b]"
                aria-label="الإشعارات"
              >
                <Bell className="h-5 w-5 transition-all" />
              </button>
              <button
                type="button"
                aria-label="الملف الشخصي"
                className="flex items-center gap-2.25 rounded-[64px] bg-[#FFFFFF14] px-3 py-2 hover:cursor-pointer hover:bg-[#FFFFFF14]/150"
              >
                <div className="size-8">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="h-full w-full rounded-full bg-white"
                  />
                </div>
                <Menu className="size-4 shrink-0 opacity-90" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: branding (inline-start / right in RTL) + hamburger (inline-end / left) */}
        <div className="flex h-16 w-full items-center justify-between gap-2 px-3 lg:hidden">
          <div className="flex min-w-0 flex-1 items-center justify-end gap-2.5">
            <div className="min-w-0 text-end">
              <p className="text-[11px] font-medium leading-tight text-white/95">
                مجلس الشراكة اللوجستي مع القطاع الخاص
              </p>
              <p className="mt-0.5 text-[9px] font-normal uppercase leading-tight tracking-wide text-white/75">
                Logistics Private Sector Engagement Council
              </p>
            </div>
            <div className="relative h-11 w-11 shrink-0">
              <Image
                src={Logo}
                alt=""
                fill
                className="object-contain"
                priority
                sizes="44px"
              />
            </div>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg hover:bg-white/10"
            aria-label="فتح القائمة"
            aria-expanded={drawerOpen}
            aria-controls="nidlp-mobile-nav"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {drawerOpen ? (
        <div className="lg:hidden">
          <div
            role="presentation"
            className="fixed inset-0 z-60 bg-black/50"
            onClick={closeDrawer}
          />
          <div
            id="nidlp-mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-labelledby="nidlp-mobile-nav-title"
            className="fixed inset-y-0 inset-s-0 z-61 flex w-[min(100%,20rem)] flex-col bg-[#1A0B3C] text-white shadow-2xl"
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-3 py-3">
              <button
                ref={drawerCloseRef}
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/10"
                aria-label="إغلاق القائمة"
                onClick={closeDrawer}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
                <span id="nidlp-mobile-nav-title" className="sr-only">
                  قائمة التنقل
                </span>
                <div className="min-w-0 text-end">
                  <p className="text-[10px] font-medium leading-snug text-white/95">
                    مجلس الشراكة اللوجستي مع القطاع الخاص
                  </p>
                  <p className="mt-0.5 text-[8px] uppercase leading-snug tracking-wide text-white/70">
                    Logistics Private Sector Engagement Council
                  </p>
                </div>
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src={Logo}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
              </div>
            </div>

            <nav
              className="min-h-0 flex-1 overflow-y-auto px-2 pt-1"
              aria-label="التنقل الرئيسي"
            >
              <NidlpNavList variant="drawer" onNavigate={closeDrawer} />
            </nav>

            <div className="shrink-0 border-t border-white/10 bg-[#150a32] px-2 py-3">
              <button
                type="button"
                className="flex w-full items-center justify-start gap-3 border-b border-white/10 py-3 text-sm text-white/95 hover:bg-white/5"
                aria-label="الإشعارات"
              >
                <Bell className="h-5 w-5 shrink-0 text-white/80" />
                <span>الإشعارات</span>
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-between gap-2 border-b border-white/10 py-3 hover:bg-white/5"
              >
                <span className="flex min-w-0 flex-1 items-center justify-end gap-3">
                  <span className="min-w-0 text-end">
                    <span className="block text-sm font-medium text-white">
                      اسم الشركة
                    </span>
                    <span className="mt-0.5 block text-xs text-white/65">
                      ممثل رئيسي
                    </span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Building2 className="h-5 w-5 text-white/85" />
                  </span>
                </span>
                <ChevronLeft className="h-5 w-5 shrink-0 text-white/50" />
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-between gap-2 py-3 hover:bg-white/5"
              >
                <span className="flex min-w-0 flex-1 items-center justify-end gap-3">
                  <span className="min-w-0 text-end">
                    <span className="block text-sm font-medium text-white">
                      المستخدم
                    </span>
                    <span className="mt-0.5 block text-xs text-white/65">
                      user@example.gov.sa
                    </span>
                  </span>
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
                    <Image
                      src={Avatar}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </span>
                </span>
                <ChevronLeft className="h-5 w-5 shrink-0 text-white/50" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
