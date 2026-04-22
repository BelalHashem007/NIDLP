export type BreadcrumbNode = {
  href: string;
  label: string;
  /** Optional regex matcher; when provided it replaces exact `href` matching. */
  match?: RegExp;
  children?: BreadcrumbNode[];
};

export type BreadcrumbCrumb = {
  href: string;
  label: string;
};

export const breadcrumbConfig: BreadcrumbNode[] = [
  {
    href: "/nidlp/dashboard",
    label: "لوحة التحكم",
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
        children: [
          {
            href: "/nidlp/dashboard/survey-details",
            label: "تفاصيل الاستبيان",
            match: /^\/nidlp\/dashboard\/survey-details\/[^/]+$/,
          },
        ],
      },
    ],
  },
  {
    href: "/nidlp/orders",
    label: "إدارة الطلبات",
    children: [
      { href: "/nidlp/orders/all", label: "جميع الطلبات" },
      { href: "/nidlp/orders/my", label: "طلباتي" },
    ],
  },
  { href: "/nidlp/services", label: "إدارة مستوي الخدمة" },
  {
    href: "/nidlp/agency",
    label: "إدارة الجهات الحكومية",
    children: [
      { href: "/nidlp/agency/add", label: "إضافة جهة حكومية" },
      { href: "/nidlp/agency/show", label: "عرض الجهة" },
    ],
  },
  { href: "/nidlp/companies", label: "إدارة الشركات" },
  { href: "/nidlp/users", label: "إدارة المستخدمين" },
  { href: "/nidlp/news", label: "إدارة الاخبار" },
  { href: "/nidlp/questions", label: "إدارة الاسئلة الشائعة" },
  { href: "/nidlp/surveys", label: "إدارة الاستبيانات" },
  { href: "/nidlp/settings", label: "إدارة إعدادات النظام" },
];

function matchesNode(node: BreadcrumbNode, pathname: string): boolean {
  if (node.match) return node.match.test(pathname);
  return node.href === pathname;
}

/**
 * Depth-first search for `pathname` in the breadcrumb tree.
 * When a node matches, the trail is built by bubbling each ancestor's
 * `{ href, label }` back up the stack.
 */
function findTrail(
  nodes: BreadcrumbNode[],
  pathname: string,
): BreadcrumbCrumb[] | null {
  for (const node of nodes) {
    if (matchesNode(node, pathname)) {
      return [{ href: node.href, label: node.label }];
    }
    if (node.children) {
      const childTrail = findTrail(node.children, pathname);
      if (childTrail) {
        return [{ href: node.href, label: node.label }, ...childTrail];
      }
    }
  }
  return null;
}

export function getBreadcrumbTrail(pathname: string | null): BreadcrumbCrumb[] {
  if (!pathname) return [];
  return findTrail(breadcrumbConfig, pathname) ?? [];
}

/** Convenience helper: the deepest crumb's label (used as the page title). */
export function getPageTitleForPathname(
  pathname: string | null,
): string | null {
  const trail = getBreadcrumbTrail(pathname);
  return trail.length > 0 ? trail[trail.length - 1].label : null;
}
