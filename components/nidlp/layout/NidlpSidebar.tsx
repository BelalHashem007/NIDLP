"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import {
  Building2,
  Building,
  ChartPie,
  ChevronLeft,
  File,
  FileText,
  Settings,
  Users,
  Newspaper,
  MessageCircleQuestionMark,
  ClipboardList,
} from "lucide-react";
import LogoFooter from "@/public/logo-footer.png";

type NavIcon = React.ElementType;

type NavChild = {
  href: string;
  label: string;
  badge?: string;
};

type NavLinkEntry = {
  kind: "link";
  href: string;
  label: string;
  icon: NavIcon;
};

type NavGroupEntry = {
  kind: "group";
  id: string;
  label: string;
  icon: NavIcon;
  children: NavChild[];
};

type NavEntry = NavLinkEntry | NavGroupEntry;

const navConfig: NavEntry[] = [
  {
    kind: "group",
    id: "dashboard",
    label: "لوحة التحكم",
    icon: ChartPie,
    children: [
      { href: "/nidlp", label: "لوحة التحكم الداخلية" },
      { href: "/nidlp/external-dashboard", label: "لوحة التحكم الخارجية" },
      { href: "/nidlp/surveys-dashboard", label: "لوحة تحكم الاستبيان" },
    ],
  },
  {
    kind: "group",
    id: "orders",
    label: "إدارة الطلبات",
    icon: FileText,
    children: [
      { href: "/nidlp/orders/all", label: "جميع الطلبات", badge: "26" },
      { href: "/nidlp/orders/my", label: "طلباتي", badge: "26" },
    ],
  },
  {
    kind: "link",
    href: "/nidlp/services",
    label: "إدارة مستوي الخدمة",
    icon: File,
  },
  {
    kind: "link",
    href: "/nidlp/agencies",
    label: "إدارة الجهات الحكومية",
    icon: Building2,
  },
  {
    kind: "link",
    href: "/nidlp/companies",
    label: "إدارة الشركات",
    icon: Building,
  },
  {
    kind: "link",
    href: "/nidlp/users",
    label: "إدارة المستخدمين",
    icon: Users,
  },
  {
    kind: "link",
    href: "/nidlp/news",
    label: "إدارة الاخبار",
    icon: Newspaper,
  },
  {
    kind: "link",
    href: "/nidlp/questions",
    label: "إدارة الاسئلة الشائعة",
    icon: MessageCircleQuestionMark,
  },
  {
    kind: "link",
    href: "/nidlp/surveys",
    label: "إدارة الاستبيانات",
    icon: ClipboardList,
  },
  {
    kind: "link",
    href: "/nidlp/settings",
    label: "إدارة إعدادات النظام",
    icon: Settings,
  },
];

function groupHasActiveChild(entry: NavGroupEntry, pathname: string | null) {
  if (!pathname) return false;
  return entry.children.some((c) => pathname === c.href);
}

export function NidlpSidebar() {
  const pathname = usePathname();
  const pathKey = pathname ?? "";

  const autoExpanded = useMemo(() => {
    const m: Record<string, boolean> = {};
    for (const item of navConfig) {
      if (item.kind === "group" && groupHasActiveChild(item, pathname)) {
        m[item.id] = true;
      }
    }
    return m;
  }, [pathname]);

  const [manualExpandedByPath, setManualExpandedByPath] = useState<
    Record<string, Record<string, boolean>>
  >({});

  const manualForPath = manualExpandedByPath[pathKey] ?? {};

  const isGroupExpanded = (id: string) => {
    if (Object.prototype.hasOwnProperty.call(manualForPath, id)) {
      return manualForPath[id];
    }
    return autoExpanded[id] === true;
  };

  const toggleGroup = (id: string) => {
    setManualExpandedByPath((prev) => {
      const manual = prev[pathKey] ?? {};
      const effective = Object.prototype.hasOwnProperty.call(manual, id)
        ? manual[id]
        : autoExpanded[id] === true;
      return {
        ...prev,
        [pathKey]: { ...manual, [id]: !effective },
      };
    });
  };

  return (
    <aside className="fixed top-20 h-[calc(100%-80px)] max-w-[260px] shrink-0 border-l border-[#E5E7EB] bg-white">
      <div className="flex h-full flex-col">
        <nav className="flex-1 space-y-2 overflow-y-auto px-3 pt-6">
          {navConfig.map((entry) => {
            if (entry.kind === "link") {
              const Icon = entry.icon;
              const active = pathname === entry.href;
              return (
                <Link
                  key={entry.href}
                  href={entry.href}
                  className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-50 ${
                    active
                      ? "bg-slate-50 font-medium text-[#2E1866]"
                      : "text-slate-700"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${active ? "text-[#2E1866]" : "text-slate-500"}`}
                  />
                  <span className="truncate">{entry.label}</span>
                </Link>
              );
            }

            const Icon = entry.icon;
            const expanded = isGroupExpanded(entry.id);
            const groupActive = groupHasActiveChild(entry, pathname);

            return (
              <div key={entry.id} className="rounded-lg">
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => toggleGroup(entry.id)}
                  className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-sm text-slate-800 hover:bg-white"
                >
                  <div className="flex gap-2">
                    <Icon
                      className={`h-4 w-4 shrink-0 ${groupActive ? "text-[#4590BF] fill-[#4590BF]" : "text-slate-500"}`}
                    />

                    <span
                      className={`min-w-0 flex-1 truncate ${groupActive && "font-bold "}`}
                    >
                      {entry.label}
                    </span>
                  </div>
                  <ChevronLeft
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${
                      expanded ? "-rotate-90" : ""
                    }`}
                  />
                </button>
                {expanded ? (
                  <div className="mt-1 space-y-1 border-s-2 border-slate-200 ps-2 ms-2">
                    {entry.children.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-center justify-between gap-2 px-2 py-2 text-sm ${
                            childActive
                              ? "font-medium bg-[#F4F7FC] text-[#4590BF] border-s-4 border-[#4590BF] -ms-[2px]"
                              : "text-slate-600 hover:bg-white"
                          }`}
                        >
                          <span className="min-w-0 flex-1 truncate">
                            {child.label}
                          </span>
                          {child.badge != null ? (
                            <span className="shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-slate-600 tabular-nums">
                              {child.badge}
                            </span>
                          ) : null}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
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
