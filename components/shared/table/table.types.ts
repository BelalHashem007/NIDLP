export type ColumnDef = {
  key: string;
  accessorKey: keyof OrderRow; // ✅ مش string عشوائي، لازم يكون key من OrderRow
  label: string;
  filter?: FilterConfig; // ✅ optional
};

// table.types.ts

export type StatusKey =
  | "in_progress"
  | "delayed"
  | "updating"
  | "completed";

export type StatusType = {
  key: StatusKey;
  text: string;
  color: string;
  bgColor: string;
};

export type TabsType<T> = {
  label: string;
  value: string;
  icon: string;
  filterFn: (row: T) => boolean;
};

export type PersonType = {
  name: string;
  photo: string;
};

export type OrderRow = {
  id: number;
  order_number?: string;
  submission_date?: string;
  order_type?: string;
  applicant?: PersonType;
  assigned_employee?: PersonType;
  assignment_date?: string;
  last_update?: string;
  due_date?: string;
  status?: StatusType;
  actions?: Action[]; 
};

export type ActionType = "link" | "overlay";
export type Action = {
  id: number;
  iconName: string;
  label: string;
  type: ActionType;
  href?: string;
  overlayKey?: "reassign";
};

// table.types.ts
export type PersonOption = {
  label: string;
  value: string;
  photo?: string;
};

export type FilterConfig =
  { type: "input"; placeholder: string; filterFn: (row: OrderRow, value: string) => boolean }
  | { type: "date"; placeholder: string; filterFn: (row: OrderRow, value: string) => boolean }
  | { type: "select"; placeholder: string; options: { label: string; value: string }[]; filterFn: (row: OrderRow, value: string) => boolean }
  | { type: "person-select"; placeholder: string; options: PersonOption[]; filterFn: (row: OrderRow, value: string) => boolean };
