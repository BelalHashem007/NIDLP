"use client";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { getBreadcrumbTrail } from "./nidlp/layout/breadcrumb-config";

export function BreadCrumbComponent() {
  const pathname = usePathname();
  const trail = getBreadcrumbTrail(pathname);

  if (trail.length === 0) return null;

  const lastIndex = trail.length - 1;

  return (
    <Breadcrumb>
      <BreadcrumbList className="text-white/70 font-medium gap-0 sm:gap-0">
        {trail.map((crumb, i) => {
          const isLast = i === lastIndex;
          return (
            <Fragment key={`${crumb.href}-${i}`}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-white font-medium">
                    {crumb.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={crumb.href}
                    className="text-white/70"
                  >
                    {crumb.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator className="px-1 text-white/70">
                  <ChevronLeft className="h-4 w-4" />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
