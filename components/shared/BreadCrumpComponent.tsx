"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { navConfig } from "../nidlp/layout/nidlp-nav-config";

export function BreadCrumbComponent() {
  const pathName = usePathname();
  const path = pathName.split("/").filter(Boolean);
  const activeEntry = navConfig.find((entry) => {
    if (entry.kind === "link") {
      return entry.href === pathName;
    }
    return entry.children.some((child) => child.href === pathName);
  });
  if (!activeEntry) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList className="text-white/70 font-medium gap-0 sm:gap-0">
        <BreadcrumbItem>
          {activeEntry.kind === "group" ? (
            <BreadcrumbLink href={"/" + path[0]}>
              {activeEntry.label}
            </BreadcrumbLink>
          ) : (
            <BreadcrumbLink href={activeEntry.href}>
              {activeEntry.label}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {activeEntry.kind === "group" && (
          <>
            <BreadcrumbSeparator className="px-1">
              <ChevronLeft className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={
                  activeEntry.children.find((c) => c.href === pathName)?.href
                }
              >
                {activeEntry.children.find((c) => c.href === pathName)?.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
