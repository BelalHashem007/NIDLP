import type { ElementType } from "react";
import {
  Building2,
  Building,
  ChartPie,
  File,
  FileText,
  Settings,
  Users,
  Newspaper,
  MessageCircleQuestionMark,
  ClipboardList,
} from "lucide-react";

export type NavIcon = ElementType;

export type NavChild = {
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

export type NavGroupEntry = {
  kind: "group";
  id: string;
  label: string;
  icon: NavIcon;
  children: NavChild[];
};

export type NavEntry = NavLinkEntry | NavGroupEntry;

export const navConfig: NavEntry[] = [
  {
    kind: "group",
    id: "dashboard",
    label: "لوحة التحكم",
    icon: ChartPie,
    children: [
      {
        href: "/nidlp/dashboard/internal-dashboard",
        label: "لوحة التحكم الداخلية",
      },
      {
        href: "/nidlp/dashboard/external-dashboard",
        label: "لوحة التحكم الخارجية",
      },
      {
        href: "/nidlp/dashboard/surveys-dashboard",
        label: "لوحة تحكم الاستبيان",
      },
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

/** Dynamic survey detail pages under `/nidlp/dashboard/survey-details/[id]`. */
export function isSurveyDetailsPathname(pathname: string | null): boolean {
  if (!pathname) return false;
  return /^\/nidlp\/dashboard\/survey-details\/[^/]+$/.test(pathname);
}

const SURVEYS_DASHBOARD_HREF = "/nidlp/dashboard/surveys-dashboard";

/** Whether `child` should show the active nav style for `pathname` (includes survey-details under surveys). */
export function isNavChildActive(
  child: NavChild,
  pathname: string | null,
): boolean {
  if (!pathname) return false;
  if (pathname === child.href) return true;
  if (child.href === SURVEYS_DASHBOARD_HREF && isSurveyDetailsPathname(pathname)) {
    return true;
  }
  return false;
}

export function groupHasActiveChild(
  entry: NavGroupEntry,
  pathname: string | null,
) {
  if (!pathname) return false;
  return entry.children.some((c) => isNavChildActive(c, pathname));
}

/** Breadcrumb trail for survey detail (matches dashboard group → surveys dashboard → details). */
export const surveyDetailsBreadcrumb = {
  rootLabel: "لوحة التحكم",
  rootHref: "/nidlp",
  parentLabel: "لوحة تحكم الاستبيان",
  parentHref: SURVEYS_DASHBOARD_HREF,
  currentLabel: "تفاصيل الاستبيان",
} as const;

/** Label for the current route from `navConfig` (same rules as the dashboard breadcrumb). */
export function getNavLabelForPathname(pathname: string | null): string | null {
  if (!pathname) return null;
  if (isSurveyDetailsPathname(pathname)) {
    return surveyDetailsBreadcrumb.currentLabel;
  }
  const activeEntry = navConfig.find((entry) => {
    if (entry.kind === "link") {
      return entry.href === pathname;
    }
    return entry.children.some((child) => isNavChildActive(child, pathname));
  });
  if (!activeEntry) return null;
  if (activeEntry.kind === "link") {
    return activeEntry.label;
  }
  return activeEntry.children.find((c) => c.href === pathname)?.label ?? null;
}
