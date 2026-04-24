import { ColumnDef, PersonType, StatusType } from "../../../../../components/shared/table/table.types";


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
        { label: "عبدالله فهد العتيبى", value: "عبدالله فهد العتيبى", photo: "/abdullah2.png" },
        { label: "سارة خالد السعدى", value: "سارة خالد السعدى", photo: "/sarah.png" },
        { label: "احمد احمد الراشد", value: "احمد احمد الراشد", photo: "/ahmed2.png" },
        { label: "فيصل احمد الدوسرى", value: "فيصل احمد الدوسرى", photo: "/anonymous.png" },
        { label: "نورة محمد الشهرى", value: "نورة محمد الشهرى", photo: "/noura2.png" },
        { label: "احمد خالد القحطاني", value: "احمد خالد القحطاني", photo: "/ahmed.png" },
        { label: "نورة سلطان احمد", value: "نورة سلطان احمد", photo: "/nora.png" },
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
        { label: "سلة", value: "سلة", photo: "/company-13.png" },
        { label: "مجلس الشراكة اللوجستى", value: "مجلس الشراكة اللوجستى", photo: "/company-14.png" },
        { label: "زاجل", value: "زاجل", photo: "/company-12.png" },
        { label: "مراحل", value: "مراحل", photo: "/company-15.png" },
        { label: "المجدوعى", value: "المجدوعى", photo: "/company-10.png" },
        { label: "ارامكس", value: "ارامكس", photo: "/company-8.png" },
        { label: "امازون", value: "امازون", photo: "/company-1.png" },
        { label: "نون", value: "نون", photo: "/company-11.png" },
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
        { label: "جديد", value: "جديد" },
        { label: "بانتظار اسناد الطلب لجهة حكومية", value: "بانتظار اسناد الطلب لجهة حكومية" },
        { label: "جاري العمل عليها من قبل الجهة الحكومية", value: "جاري العمل عليها من قبل الجهة الحكومية" },
        { label: "جاري العمل عليه", value: "جاري العمل عليه" },
        { label: "الاسناد مرفوض من الجهة الحكومية", value: "الاسناد مرفوض من الجهة الحكومية" },
        { label: "بانتظار مراجعة التحديث", value: "بانتظار مراجعة التحديث" },
        { label: "بانتظار تحديث البيانات	", value: "بانتظار تحديث البيانات	" },
        { label: "تم اكتمال الحل", value: "تم اكتمال الحل" },
        { label: "تم تسليم الحل", value: "تم تسليم الحل" },
        { label: "مرفوض", value: "مرفوض" },
        { label: "ملغى", value: "ملغى" },
        { label: "مغلق", value: "مغلق" },
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
