// tabs.ts

import { TabsType, OrderRow } from "@/components/shared/table/table.types";

export const tabsData: TabsType<OrderRow>[] = [
  {
    label: "تم تحت الإجراء",
    value: "in_progress",
    icon: "Loader",
    filterFn: (row) => row.status?.key === "in_progress",
  },
  {
    label: "متأخر",
    value: "delayed",
    icon: "XCircle",
    filterFn: (row) => row.status?.key === "delayed",
  },
  {
    label: "تحديث مستمر",
    value: "updating",
    icon: "Clock",
    filterFn: (row) => row.status?.key === "updating",
  },
  {
    label: "مكتمل",
    value: "completed",
    icon: "CheckCircle",
    filterFn: (row) => row.status?.key === "completed",
  },
];