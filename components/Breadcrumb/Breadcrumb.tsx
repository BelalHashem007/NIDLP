"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
 
    BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const Breadcrumb = () => {
  const pathname = usePathname();

  


 

  return (
    <BreadcrumbEllipsis>
      <BreadcrumbList className="text-sm text-slate-600">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={sectionTab.tabs[0].href}
              className="font-semibold text-slate-700"
            >
              {sectionTab.sectionLabel}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="text-slate-500">\</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold text-slate-700">
            {activeTab?.label ?? sectionTab.tabs[0].label}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbEllipsis>
  );
};

export default Breadcrumb;
