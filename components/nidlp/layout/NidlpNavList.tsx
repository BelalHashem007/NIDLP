"use client";

import type { ElementType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { ChevronLeft } from "lucide-react";
import {
  groupHasActiveChild,
  navConfig,
  type NavGroupEntry,
} from "@/components/nidlp/layout/nidlp-nav-config";

export type NidlpNavListVariant = "sidebar" | "drawer";

type NidlpNavListProps = {
  variant: NidlpNavListVariant;
  onNavigate?: () => void;
};

export function NidlpNavList({ variant, onNavigate }: NidlpNavListProps) {
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

  const afterNav = onNavigate ?? (() => {});

  if (variant === "sidebar") {
    return (
      <>
        {navConfig.map((entry) => {
          if (entry.kind === "link") {
            const Icon = entry.icon;
            const active = pathname === entry.href;
            return (
              <Link
                key={entry.href}
                href={entry.href}
                onClick={afterNav}
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
                    className={`min-w-0 flex-1 truncate ${groupActive ? "font-bold " : ""}`}
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
                        onClick={afterNav}
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
      </>
    );
  }

  // drawer variant
  return (
    <>
      {navConfig.map((entry) => {
        if (entry.kind === "link") {
          const Icon = entry.icon;
          const active = pathname === entry.href;
          return (
            <div key={entry.href} className="border-b border-white/10">
              <Link
                href={entry.href}
                onClick={afterNav}
                className={`flex items-center justify-between gap-3 py-3.5 pe-2 ps-1 text-sm ${
                  active ? "font-semibold text-[#7dd3e8]" : "text-white/95"
                }`}
              >
                <span className="min-w-0 flex-1 text-end">{entry.label}</span>
                <Icon
                  className={`h-5 w-5 shrink-0 ${active ? "text-[#7dd3e8]" : "text-white/70"}`}
                />
              </Link>
            </div>
          );
        }

        const Icon = entry.icon;
        const expanded = isGroupExpanded(entry.id);
        const groupActive = groupHasActiveChild(entry, pathname);

        return (
          <DrawerNavGroup
            key={entry.id}
            entry={entry}
            expanded={expanded}
            groupActive={groupActive}
            Icon={Icon}
            pathname={pathname}
            onToggle={() => toggleGroup(entry.id)}
            onNavigate={afterNav}
          />
        );
      })}
    </>
  );
}

function DrawerNavGroup({
  entry,
  expanded,
  groupActive,
  Icon,
  pathname,
  onToggle,
  onNavigate,
}: {
  entry: NavGroupEntry;
  expanded: boolean;
  groupActive: boolean;
  Icon: ElementType;
  pathname: string | null;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-2 py-3.5 pe-2 ps-1 text-sm text-white/95"
      >
        <span className="flex min-w-0 flex-1 items-center justify-end gap-3">
          <span
            className={`min-w-0 truncate text-end ${groupActive ? "font-semibold text-[#7dd3e8]" : ""}`}
          >
            {entry.label}
          </span>
          <Icon
            className={`h-5 w-5 shrink-0 ${groupActive ? "text-[#7dd3e8]" : "text-white/70"}`}
          />
        </span>
        <ChevronLeft
          className={`h-5 w-5 shrink-0 text-white/60 transition-transform ${
            expanded ? "-rotate-90" : ""
          }`}
        />
      </button>
      {expanded ? (
        <div className="border-t border-white/5 bg-black/15 py-1">
          {entry.children.map((child) => {
            const childActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className={`flex items-center justify-between gap-2 px-4 py-2.5 text-sm ${
                  childActive
                    ? "font-medium text-[#7dd3e8]"
                    : "text-white/85 hover:bg-white/5"
                }`}
              >
                <span className="min-w-0 flex-1 text-end">{child.label}</span>
                {child.badge != null ? (
                  <span className="shrink-0 rounded-md bg-white/10 px-1.5 py-0.5 text-xs tabular-nums text-white/80">
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
}
