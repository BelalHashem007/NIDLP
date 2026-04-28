type Company = {
  id: number;
  name: string;
  crName: string;
  unifiedNumber: string;
  crNumber: string;
  crType: string;
  relation: string;
  path: string;
};

export const companies: Company[] = [
  {
    id: 1,
    name: "المجدوعي",
    path: "/Almajdouie.svg",
    crName: " المجدوعي للخدمات التجارية",
    unifiedNumber: "7001234567",
    crNumber: "1010123456",
    crType: "شركة محدودة المسؤولية",
    relation: "المفوض الرسمي",
  },
  {
    id: 2,
    name: "نون",
    path: "/nonsvg.svg",
    crName: " نون للخدمات الالكترونية",
    unifiedNumber: "4657888133",
    crNumber: "473923444",
    crType: "شركة مساهمة  سعودية",
    relation: "المالك و المشغل",
  },
  {
    id: 3,
    name: "ارامكس",
    path: "/aramex.svg",
    crName: " ارامكس للنقل و الخدمات اللوجستية ",
    unifiedNumber: "4657888133",
    crNumber: "473923444",
    crType: "شركة مساهمة  عامة",
    relation: "الشريك و المؤسس",
  },
  {
    id: 4,
    name: "سلة",
    path: "/SallaIcon.svg",
    crName: "سلة للتجارة الالكترونية ",
    unifiedNumber: "555889302",
    crNumber: "47392994",
    crType: "شركة محدودة  المسؤولية",
    relation: "الوكيل التجاري",
  },
];