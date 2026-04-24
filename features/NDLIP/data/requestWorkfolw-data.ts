
// import { ColumnDef, OrderRow } from "./table.types";

// // type OrderRowInput = Omit<OrderRow, "actions"> & {
// //   actions?: OrderRow["actions"];
// // };

// const buildOrderActions = (orderNumber?: string): OrderRow["actions"] => {
//   const safeOrderNumber = orderNumber ?? "";

//   return [
//     { id: 1, iconName: "Eye", label: "عرض الطلب", type: "link",  href: `/orders/${safeOrderNumber}` },
//     { id: 2, iconName: "Repeat", label: "طلب اعادة اسناد", type: "overlay", overlayKey: "reassign" },
//     { id: 3, iconName: "Sparkles", label: "معالجة الطلب", type: "link", href: `/orders/${safeOrderNumber}/edit` },
//   ];
// };

// // const rawTdData : OrderRow = [
// //   {
// //     order_number: "586-270-90",
// //     submission_date: "2024/05/10",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للطيران المدني",
// //       photo: "/GACA.png",
// //     },
// //     assigned_employee: { name: "سارة خالد السعدي", photo: "/sarah.png" },
// //     assignment_date: "2024/06/19",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/10",
// //     status: {
// //       text: "بانتظار اسناد الطلب لجهة حكومية",
// //       color: "#1A4D2E",
// //       bgColor: "#E5F3EB",
// //     },
// //   },
// //   {
// //     order_number: "679-763-60",
// //     submission_date: "2024/04/13",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "هيئة الزكاة والضريبة والجمارك",
// //       photo: "/ZTCA.png",
// //     },
// //     assigned_employee: { name: "عبدالله محمد العتيبي", photo: "/abdullah.png" },
// //     assignment_date: "2024/04/20",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/05",
// //     status: {
// //       text: "جاري العمل عليها من قبل الجهة الحكومية",
// //       color: "#384985",
// //       bgColor: "#E9E9F9",
// //     },
// //   },
// //   {
// //     order_number: "946-566-14",
// //     submission_date: "2024/04/19",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "وزارة النقل والخدمات اللوجستية",
// //       photo: "/MTLS.png",
// //     },
// //     assigned_employee: { name: "ليلى احمد الزهراني", photo: "/leila.png" },
// //     assignment_date: "2024/05/12",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/01",
// //     status: {
// //       text: "جاري العمل عليه",
// //       color: "#1E40AF",
// //       bgColor: "#DBEAFE",
// //     },
// //   },
// //   {
// //     order_number: "586-270-90",
// //     submission_date: "2024/05/10",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للطيران المدني",
// //       photo: "/GACA.png",
// //     },
// //     assigned_employee: { name: "سارة خالد السعدي", photo: "/sarah.png" },
// //     assignment_date: "2024/06/19",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/10",
// //     status: {
// //       text: "بانتظار اسناد الطلب لجهة حكومية",
// //       color: "#1A4D2E",
// //       bgColor: "#E5F3EB",
// //     },
// //   },
// //   {
// //     order_number: "679-763-60",
// //     submission_date: "2024/04/13",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "هيئة الزكاة والضريبة والجمارك",
// //       photo: "/ZTCA.png",
// //     },
// //     assigned_employee: { name: "عبدالله محمد العتيبي", photo: "/abdullah.png" },
// //     assignment_date: "2024/04/20",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/05",
// //     status: {
// //       text:  "متأخر",
// //       color: "#384985",
// //       bgColor: "#E9E9F9",
// //     },
// //   },
// //   {
// //     order_number: "710-994-58",
// //     submission_date: "2024/03/25",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للنقل",
// //       photo: "/TGA.png",
// //     },
// //     assigned_employee: { name: "احمد احمد الراشد", photo: "/ahmed.png" },
// //     assignment_date: "2024/03/28",
// //     last_update: "2024/06/27",
// //     due_date: "2024/06/30",
// //     status: {
// //       text: "الاسناد مرفوض من الجهة الحكومية",
// //       color: "#991B1B",
// //       bgColor: "#FEE2E2",
// //     },
// //   },
// //   {
// //     order_number: "691-826-50",
// //     submission_date: "2024/02/17",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "هيئة الزكاة والضريبة والجمارك",
// //       photo: "/ZTCA.png",
// //     },
// //     assigned_employee: { name: "ليلى الزهراني", photo: "/leila.png" },
// //     assignment_date: "2024/02/24",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/03",
// //     status: {
// //       text: "جاري العمل عليها من قبل الجهة الحكومية",
// //       color: "#384985",
// //       bgColor: "#E9E9F9",
// //     },
// //   },
// //   {
// //     order_number: "684-737-62",
// //     submission_date: "2024/03/20",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "وزارة النقل والخدمات اللوجستية",
// //       photo: "/MTLS.png",
// //     },
// //     assigned_employee: { name: "نورة محمد الشهري", photo: "/nora.png" },
// //     assignment_date: "2024/04/01",
// //     last_update: "2024/06/22",
// //     due_date: "2024/06/28",
// //     status: {
// //       text: "بانتظار مراجعة التحديث",
// //       color: "#3B5E0B",
// //       bgColor: "#EFFFD9",
// //     },
// //   },
// //   {
// //     order_number: "710-994-58",
// //     submission_date: "2024/03/25",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للنقل",
// //       photo: "/TGA.png",
// //     },
// //     assigned_employee: { name: "احمد احمد الراشد", photo: "/ahmed.png" },
// //     assignment_date: "2024/03/28",
// //     last_update: "2024/06/27",
// //     due_date: "2024/06/30",
// //     status: {
// //       text: "الاسناد مرفوض من الجهة الحكومية",
// //       color: "#991B1B",
// //       bgColor: "#FEE2E2",
// //     },
// //   },
// //   {
// //     order_number: "962-258-79",
// //     submission_date: "2024/02/26",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للنقل",
// //       photo: "/TGA.png",
// //     },
// //     assigned_employee: { name: "احمد خالد القحطاني", photo: "/ahmed.png" },
// //     assignment_date: "2024/02/28",
// //     last_update: "2024/06/24",
// //     due_date: "2024/06/20",
// //     status: {
// //       text: "متأخر",
// //       color: "#92400E",
// //       bgColor: "#FEF3C7",
// //     },
// //   },
// //   {
// //     order_number: "691-826-50",
// //     submission_date: "2024/02/17",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "هيئة الزكاة والضريبة والجمارك",
// //       photo: "/ZTCA.png",
// //     },
// //     assigned_employee: { name: "ليلى الزهراني", photo: "/leila.png" },
// //     assignment_date: "2024/02/24",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/03",
// //     status: {
// //       text: "جاري العمل عليها من قبل الجهة الحكومية",
// //       color: "#384985",
// //       bgColor: "#E9E9F9",
// //     },
// //   },
// //   {
// //     order_number: "710-994-58",
// //     submission_date: "2024/03/25",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للنقل",
// //       photo: "/TGA.png",
// //     },
// //     assigned_employee: { name: "احمد احمد الراشد", photo: "/ahmed.png" },
// //     assignment_date: "2024/03/28",
// //     last_update: "2024/06/27",
// //     due_date: "2024/06/30",
// //     status: {
// //       text: "الاسناد مرفوض من الجهة الحكومية",
// //       color: "#991B1B",
// //       bgColor: "#FEE2E2",
// //     },
// //   },
// //   {
// //     order_number: "317-807-81",
// //     submission_date: "2024/01/31",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للطيران المدني",
// //       photo: "/GACA.png",
// //     },
// //     assigned_employee: { name: "سارة خالد السعدي", photo: "/sarah.png" },
// //     assignment_date: "2024/02/06",
// //     last_update: "2024/04/14",
// //     due_date: "2024/05/01",
// //     status: {
// //       text: "بانتظار اسناد الطلب لجهة حكومية",
// //       color: "#1A4D2E",
// //       bgColor: "#E5F3EB",
// //     },
// //   },
// //   {
// //     order_number: "112-391-15",
// //     submission_date: "2024/01/20",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "هيئة الزكاة والضريبة والجمارك",
// //       photo: "/ZTCA.png",
// //     },
// //     assigned_employee: { name: "فيصل احمد الدوسري", photo: "/ahmed.png" },
// //     assignment_date: "2024/01/25",
// //     last_update: "2024/04/01",
// //     due_date: "2024/04/20",
// //     status: {
// //       text: "بانتظار تحديث البيانات",
// //       color: "#6D007E",
// //       bgColor: "#FDEEFF",
// //     },
// //   },
// //   {
// //     order_number: "946-566-14",
// //     submission_date: "2024/04/19",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "وزارة النقل والخدمات اللوجستية",
// //       photo: "/MTLS.png",
// //     },
// //     assigned_employee: { name: "ليلى احمد الزهراني", photo: "/leila.png" },
// //     assignment_date: "2024/05/12",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/01",
// //     status: {
// //       text: "جاري العمل عليه",
// //       color: "#1E40AF",
// //       bgColor: "#DBEAFE",
// //     },
// //   },
// //   {
// //     order_number: "317-807-81",
// //     submission_date: "2024/01/31",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للطيران المدني",
// //       photo: "/GACA.png",
// //     },
// //     assigned_employee: { name: "سارة خالد السعدي", photo: "/sarah.png" },
// //     assignment_date: "2024/02/06",
// //     last_update: "2024/04/14",
// //     due_date: "2024/05/01",
// //     status: {
// //       text: "متأخر ",
// //       color: "#1A4D2E",
// //       bgColor: "#E5F3EB",
// //     },
// //   },
// //   {
// //     order_number: "112-391-15",
// //     submission_date: "2024/01/20",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "هيئة الزكاة والضريبة والجمارك",
// //       photo: "/ZTCA.png",
// //     },
// //     assigned_employee: { name: "فيصل احمد الدوسري", photo: "/ahmed.png" },
// //     assignment_date: "2024/01/25",
// //     last_update: "2024/04/01",
// //     due_date: "2024/04/20",
// //     status: {
// //       text: "بانتظار تحديث البيانات",
// //       color: "#6D007E",
// //       bgColor: "#FDEEFF",
// //     },
// //   },
// //   {
// //     order_number: "317-807-81",
// //     submission_date: "2024/01/31",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للطيران المدني",
// //       photo: "/GACA.png",
// //     },
// //     assigned_employee: { name: "سارة خالد السعدي", photo: "/sarah.png" },
// //     assignment_date: "2024/02/06",
// //     last_update: "2024/04/14",
// //     due_date: "2024/05/01",
// //     status: {
// //       text: "بانتظار اسناد الطلب لجهة حكومية",
// //       color: "#1A4D2E",
// //       bgColor: "#E5F3EB",
// //     },
// //   },
// //   {
// //     order_number: "679-763-60",
// //     submission_date: "2024/04/13",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "هيئة الزكاة والضريبة والجمارك",
// //       photo: "/ZTCA.png",
// //     },
// //     assigned_employee: { name: "عبدالله محمد العتيبي", photo: "/abdullah.png" },
// //     assignment_date: "2024/04/20",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/05",
// //     status: {
// //       text: "جاري العمل عليها من قبل الجهة الحكومية",
// //       color: "#384985",
// //       bgColor: "#E9E9F9",
// //     },
// //   },
// //   {
// //     order_number: "679-763-60",
// //     submission_date: "2024/04/13",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "هيئة الزكاة والضريبة والجمارك",
// //       photo: "/ZTCA.png",
// //     },
// //     assigned_employee: { name: "عبدالله محمد العتيبي", photo: "/abdullah.png" },
// //     assignment_date: "2024/04/20",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/05",
// //     status: {
// //       text: "جاري العمل عليها من قبل الجهة الحكومية",
// //       color: "#384985",
// //       bgColor: "#E9E9F9",
// //     },
// //   },
// //   {
// //     order_number: "679-763-60",
// //     submission_date: "2024/04/13",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "هيئة الزكاة والضريبة والجمارك",
// //       photo: "/ZTCA.png",
// //     },
// //     assigned_employee: { name: "عبدالله محمد العتيبي", photo: "/abdullah.png" },
// //     assignment_date: "2024/04/20",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/05",
// //     status: {
// //       text: "جاري العمل عليها من قبل الجهة الحكومية",
// //       color: "#384985",
// //       bgColor: "#E9E9F9",
// //     },
// //   },
// //   {
// //     order_number: "317-807-81",
// //     submission_date: "2024/01/31",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للطيران المدني",
// //       photo: "/GACA.png",
// //     },
// //     assigned_employee: { name: "سارة خالد السعدي", photo: "/sarah.png" },
// //     assignment_date: "2024/02/06",
// //     last_update: "2024/04/14",
// //     due_date: "2024/05/01",
// //     status: {
// //       text: "بانتظار اسناد الطلب لجهة حكومية",
// //       color: "#1A4D2E",
// //       bgColor: "#E5F3EB",
// //     },
// //   },
// //   {
// //     order_number: "679-763-60",
// //     submission_date: "2024/04/13",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "هيئة الزكاة والضريبة والجمارك",
// //       photo: "/ZTCA.png",
// //     },
// //     assigned_employee: { name: "عبدالله محمد العتيبي", photo: "/abdullah.png" },
// //     assignment_date: "2024/04/20",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/05",
// //     status: {
// //       text: "جاري العمل عليها من قبل الجهة الحكومية",
// //       color: "#384985",
// //       bgColor: "#E9E9F9",
// //     },
// //   },
// //   {
// //     order_number: "586-270-90",
// //     submission_date: "2024/05/10",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للطيران المدني",
// //       photo: "/GACA.png",
// //     },
// //     assigned_employee: { name: "سارة خالد السعدي", photo: "/sarah.png" },
// //     assignment_date: "2024/06/19",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/10",
// //     status: {
// //       text: "بانتظار اسناد الطلب لجهة حكومية",
// //       color: "#1A4D2E",
// //       bgColor: "#E5F3EB",
// //     },
// //   },
// //   {
// //     order_number: "317-807-81",
// //     submission_date: "2024/01/31",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للطيران المدني",
// //       photo: "/GACA.png",
// //     },
// //     assigned_employee: { name: "سارة خالد السعدي", photo: "/sarah.png" },
// //     assignment_date: "2024/02/06",
// //     last_update: "2024/04/14",
// //     due_date: "2024/05/01",
// //     status: {
// //       text: "بانتظار اسناد الطلب لجهة حكومية",
// //       color: "#1A4D2E",
// //       bgColor: "#E5F3EB",
// //     },
// //   },
// //   {
// //     order_number: "962-258-79",
// //     submission_date: "2024/02/26",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للنقل",
// //       photo: "/TGA.png",
// //     },
// //     assigned_employee: { name: "احمد خالد القحطاني", photo: "/ahmed.png" },
// //     assignment_date: "2024/02/28",
// //     last_update: "2024/06/24",
// //     due_date: "2024/06/20",
// //     status: {
// //       text: "متأخر",
// //       color: "#92400E",
// //       bgColor: "#FEF3C7",
// //     },
// //   },
// //   {
// //     order_number: "586-270-90",
// //     submission_date: "2024/05/10",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للطيران المدني",
// //       photo: "/GACA.png",
// //     },
// //     assigned_employee: { name: "سارة خالد السعدي", photo: "/sarah.png" },
// //     assignment_date: "2024/06/19",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/10",
// //     status: {
// //       text: "بانتظار اسناد الطلب لجهة حكومية",
// //       color: "#1A4D2E",
// //       bgColor: "#E5F3EB",
// //     },
// //   },
// //   {
// //     order_number: "946-566-14",
// //     submission_date: "2024/04/19",
// //     order_type: "اقتراح",
// //     applicant: {
// //       name: "وزارة النقل والخدمات اللوجستية",
// //       photo: "/MTLS.png",
// //     },
// //     assigned_employee: { name: "ليلى احمد الزهراني", photo: "/leila.png" },
// //     assignment_date: "2024/05/12",
// //     last_update: "2024/06/27",
// //     due_date: "2024/07/01",
// //     status: {
// //       text: "جاري العمل عليه",
// //       color: "#1E40AF",
// //       bgColor: "#DBEAFE",
// //     },
// //   },
// //   {
// //     order_number: "317-807-81",
// //     submission_date: "2024/01/31",
// //     order_type: "تحدي",
// //     applicant: {
// //       name: "الهيئة العامة للطيران المدني",
// //       photo: "/GACA.png",
// //     },
// //     assigned_employee: { name: "سارة خالد السعدي", photo: "/sarah.png" },
// //     assignment_date: "2024/02/06",
// //     last_update: "2024/04/14",
// //     due_date: "2024/05/01",
// //     status: {
// //       text: "بانتظار اسناد الطلب لجهة حكومية",
// //       color: "#1A4D2E",
// //       bgColor: "#E5F3EB",
// //     },
// //   },
// // ];

// // export const tdData: OrderRow[] = rawTdData.map((item) => ({
// //   ...item,
// //   actions:
// //     item.actions && item.actions.length > 0
// //       ? item.actions
// //       : buildOrderActions(item.order_number),
// // }));

// //========= tabsData ===================================//

// export const tabsData = [
//   {
//     label: "تم تحت الإجراء",
//     value: "in_progress",
//     icon: "Loader",
//   },
//   {
//     label: "متأخر",
//     value: "delayed",
//     icon: "XCircle",
//   },
//   {
//     label: "تحديث مستمر",
//     value: "updating",
//     icon: "Clock",
//   },
//   {
//     label: "مكتمل",
//     value: "completed",
//     icon: "CheckCircle",
//   },
// ];

// //========== thData =========================//

// export const thData : ColumnDef[] = [
//   {
//     key: "request_number",
//     accessorKey: "order_number",
//     label: "رقم الطلب",
//     filter: {
//       type: "input",
//       placeholder: "ابحث برقم",
//     },
//   },
//   {
//     key: "request_type",
//     accessorKey: "order_type",
//     label: "نوع الطلب",
//     filter: {
//       type: "select",
//       placeholder: "الكل",
//       options: [
//         { label: "الكل", value: "all" },
//         { label: "تحدي", value: "تحدي" },
//         { label: "اقتراح", value: "اقتراح" },
//       ],
//     },
//   },
//   {
//     key: "submission_date",
//     accessorKey: "submission_date",
//     label: "تاريخ تقديم الطلب",
//     filter: {
//       type: "date",
//       placeholder: "حدد التاريخ",
//     },
//   },
//   {
//     key: "employee",
//     accessorKey: "assigned_employee",
//     label: "الموظف المسند",
//     filter: {
//       type: "select",
//       placeholder: "الكل",
//       options: [
//         { label: "الكل", value: "all" },
//         { label: "بانتظار اسناد الطلب لجهة حكومية", value: "بانتظار اسناد الطلب لجهة حكومية" },
//         { label: "جاري العمل عليها من قبل الجهة الحكومية", value: "جاري العمل عليها من قبل الجهة الحكومية" },
//         { label: "جاري العمل عليها", value: "جاري العمل عليها" },
//         { label: "متأخر", value: "متأخر" },
//     ]
//     },
//   },
//   {
//     key: "request_owner",
//     accessorKey: "applicant",
//     label: "مقدم الطلب",
//     filter: {
//       type: "select",
//       placeholder: "الكل",
//       options: [
//         { label: "الكل", value: "all" },
//         { label: "بانتظار اسناد الطلب لجهة حكومية", value: "بانتظار اسناد الطلب لجهة حكومية" },
//         { label: "جاري العمل عليها من قبل الجهة الحكومية", value: "جاري العمل عليها من قبل الجهة الحكومية" },
//         { label: "جاري العمل عليها", value: "جاري العمل عليها" },
//         { label: "متأخر", value: "متأخر" },
//     ]
//     },
//   },
//   {
//     key: "assignment_date",
//     accessorKey: "assignment_date",
//     label: "تاريخ الإسناد",
//     filter: {
//       type: "date",
//       placeholder: "حدد التاريخ",
//     },
//   },
//   {
//     key: "last_update",
//     accessorKey: "last_update",
//     label: "آخر تحديث",
//     filter: {
//       type: "date",
//       placeholder: "حدد التاريخ",
//     },
//   },
//   {
//     key: "due_date",
//     accessorKey: "due_date",
//     label: "تاريخ الاستحقاق",
//     filter: {
//       type: "date",
//       placeholder: "حدد التاريخ",
//     },
//   },
//   {
//     key: "status",
//     accessorKey: "status",
//     label: "حالة الطلب",
//     filter: {
//       type: "select",
//       placeholder: "الكل",
//       options: [
//         { label: "الكل", value: "all" },
//         { label: "بانتظار اسناد الطلب لجهة حكومية", value: "بانتظار اسناد الطلب لجهة حكومية" },
//         { label: "جاري العمل عليها من قبل الجهة الحكومية", value: "جاري العمل عليها من قبل الجهة الحكومية" },
//         { label: "جاري العمل عليها", value: "جاري العمل عليها" },
//         { label: "متأخر", value: "متأخر" },
//     ]},
//   },
// ];
