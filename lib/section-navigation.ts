export type SectionKey = "resources" | "manufacturing" | "machines";

type SectionTab = {
  label: string;
  href: string;
};

type SectionConfig = {
  sectionLabel: string;
  tabs: SectionTab[];
};

export const SECTION_NAVIGATION: Record<SectionKey, SectionConfig> = {
  resources: {
    sectionLabel: "Resources",
    tabs: [
      { label: "TIME LINE", href: "/resources" },
      { label: "SUPPLY", href: "/resources/supply" },
      { label: "WEIGHT", href: "/resources/weight" },
      { label: "CONSUMPTION", href: "/resources/consumption" },
      { label: "PRODUCT & SCRAP", href: "/resources/product-scrap" },
    ],
  },
  manufacturing: {
    sectionLabel: "Manufacturing",
    tabs: [
      { label: "FLOW CHART", href: "/manufacturing" },
      { label: "JOB ORDERS", href: "/manufacturing/joborders" },
      { label: "ROUTES", href: "/manufacturing/routes" },
      { label: "PROCESS", href: "/manufacturing/process" },
      { label: "OUTPUT", href: "/manufacturing/output" },
    ],
  },
  machines: {
    sectionLabel: "Machines",
    tabs: [
      { label: "INFORMATION", href: "/machines" },
      { label: "STATISTICS", href: "/machines/statistics" },
      { label: "HISTORY", href: "/machines/history" },
      { label: "DIGITAL TWIN", href: "/machines/digitaltwin" },
    ],
  },
};

export const getSectionKeyFromPathname = (
  pathname: string,
): SectionKey | null => {
  if (pathname.startsWith("/resources")) return "resources";

  if (pathname.startsWith("/manufacturing")) return "manufacturing";

  if (pathname.startsWith("/machines")) return "machines";

  return null;
};

export const getActiveTabFromPathname = (pathname: string) => {
  const sectionKey = getSectionKeyFromPathname(pathname);

  if (!sectionKey) {
    return null;
  }

  const tabs = SECTION_NAVIGATION[sectionKey].tabs;

  const activeTab = tabs
    .filter((tab) => pathname.startsWith(tab.href))
    .sort((a, b) => b.href.length - a.href.length)[0];

  return activeTab || null;
};
