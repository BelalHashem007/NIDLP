import { ColumnDef, PersonType, StatusType } from "../../../data/table.types";


export const thData: ColumnDef[] = [
  {
    key: "request_number",
    accessorKey: "order_number",
    label: "رقم الطلب",
    filter: {
      type: "input",
      placeholder: "ابحث برقم",
      filterFn: (row, value) =>
        String(row.order_number ?? "").toLowerCase().includes(value.toLowerCase()),
    },
  },
  {
    key: "request_type",
    accessorKey: "order_type",
    label: "نوع الطلب",
    filter: {
      type: "select",
      placeholder: "الكل",
      options: [
        { label: "الكل", value: "all" },
        { label: "تحدي", value: "تحدي" },
        { label: "اقتراح", value: "اقتراح" },
      ],
      filterFn: (row, value) => row.order_type === value,
    },
  },
  {
    key: "submission_date",
    accessorKey: "submission_date",
    label: "تاريخ تقديم الطلب",
    filter: {
      type: "date",
      placeholder: "حدد التاريخ",
      filterFn: (row, value) =>
        String(row.submission_date ?? "").includes(value),
    },
  },
  {
    key: "employee",
    accessorKey: "assigned_employee",
    label: "الموظف المسند",
    filter: {
      type: "person-select",
      placeholder: "الكل",
      options: [
        { label: "الكل", value: "all" },
        { label: "عبدالله محمد العتيبي", value: "عبدالله محمد العتيبي", photo: "/abdullah.png" },
        { label: "سارة خالد السعدي", value: "سارة خالد السعدي", photo: "/sarah.png" },
        { label: "احمد احمد الراشد", value: "احمد احمد الراشد", photo: "/ahmed.png" },
        { label: "ليلى احمد الزهراني", value: "ليلى احمد الزهراني", photo: "/leila.png" },
      ],
      filterFn: (row, value) =>
        (row.assigned_employee as PersonType)?.name === value,
    },
  },
  {
    key: "request_owner",
    accessorKey: "applicant",
    label: "مقدم الطلب",
    filter: {
      type: "person-select",
      placeholder: "الكل",
      options: [
        { label: "الكل", value: "all" },
        { label: "الهيئة العامة للطيران المدني", value: "الهيئة العامة للطيران المدني", photo: "/GACA.png" },
        { label: "هيئة الزكاة والضريبة والجمارك", value: "هيئة الزكاة والضريبة والجمارك", photo: "/ZTCA.png" },
        { label: "وزارة النقل والخدمات اللوجستية", value: "وزارة النقل والخدمات اللوجستية", photo: "/MTLS.png" },
        { label: "الهيئة العامة للنقل", value: "الهيئة العامة للنقل", photo: "/TGA.png" },
      ],
      filterFn: (row, value) =>
        (row.applicant as PersonType)?.name === value,
    },
  },
  {
    key: "assignment_date",
    accessorKey: "assignment_date",
    label: "تاريخ الإسناد",
    filter: {
      type: "date",
      placeholder: "حدد التاريخ",
      filterFn: (row, value) =>
        String(row.assignment_date ?? "").includes(value),
    },
  },
  {
    key: "last_update",
    accessorKey: "last_update",
    label: "آخر تحديث",
    filter: {
      type: "date",
      placeholder: "حدد التاريخ",
      filterFn: (row, value) =>
        String(row.last_update ?? "").includes(value),
    },
  },
  {
    key: "due_date",
    accessorKey: "due_date",
    label: "تاريخ الاستحقاق",
    filter: {
      type: "date",
      placeholder: "حدد التاريخ",
      filterFn: (row, value) =>
        String(row.due_date ?? "").includes(value),
    },
  },
  {
    key: "status",
    accessorKey: "status",
    label: "حالة الطلب",
    filter: {
      type: "select",
      placeholder: "الكل",
      options: [
        { label: "الكل", value: "all" },
        { label: "جديد", value: "new" },
        { label: "بانتظار اسناد الطلب لجهة حكومية", value: "بانتظار اسناد الطلب لجهة حكومية" },
        { label: "جاري العمل عليها من قبل الجهة الحكومية", value: "جاري العمل عليها من قبل الجهة الحكومية" },
        { label: "جاري العمل عليها", value: "جاري العمل عليها" },
        { label: "متأخر", value: "متأخر" },
      ],
      filterFn: (row, value) =>
        (row.status as StatusType)?.text === value,
    },
  },
  {
    key: "actions",
    label: "",
    accessorKey: "actions",
  },
];
