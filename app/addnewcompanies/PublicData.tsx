"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const publicData = [
  {
    name: "اسم الشركة",
    value: "نون",
  },
  {
    name: "اسم السجل التجاري",
    value: "نون للتجارة الالكترونية",
  },
  {
    name: "الرقم الوطني الموحد",
    value: "1234567890",
  },
  {
    name: "رقم السجل التجاري",
    value: "12312345",
  },
  {
    name: "الرقم الوطني الرئيسي الموحد 1895328",
    value: "",
  },
  {
    name: "رقم السجل التجاري الرئيس",
    value: "0999167744",
  },
  {
    name: "نوع السجل التجاري",
    value: "سجل رئيس تجاري",
  },
  {
    name: "حال السجل التجاري",
    value: "قائم",
  },
  {
    name: "سبب الغاء السجل التجاري",
    value: "غير مطبق",
  },
  {
    name: "نشاطات لسجل التجاري",
    value: "التجارة الاكلترونية",
  },
  {
    name: "مدينة و موقع السجل التجاري",
    value: "الرياض و السعودية",
  },
  {
    name: "العنوان",
    value: "حي العلياو شارع الملك الفهد",
  },
  {
    name: "صندوق البريد",
    value: "1893",
  },
  {
    name: "البريد الالكتروني",
    value: "InfonNoon.com",
  },
  {
    name: "الفاكس",
    value: "124923",
  },
  {
    name: "رقم الهاتف ",
    value: "0212632615",
  },
];
const nationalAddress = [
  {
    name: "رقم المبنى",
    value: "123",
  },
  {
    name: " اسم الشارع",
    value: "شارع ملك الفهد",
  },
  {
    name: " المدينة ",
    value: "الرياض",
  },
  {
    name: " الرمز البريدي ",
    value: "12343",
  },
  {
    name: "رقم الوحدة  ",
    value: "4",
  },
  {
    name: " الحي",
    value: "العليا",
  },
];

export default function PublicData() {
  return (
    <div className="w-full min-h-screen  ">
      <div className="  space-y-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900">معلومات عامة</h1>

        {/* ===================== */}
        {/* General Info */}
        {/* ===================== */}
        <section className="   p-6 space-y-6    w-full">
          <div className="grid grid-cols-3 md:grid-cols-3 justify-center gap-10 text-sm ">
            {publicData.map((item) => (
              <div key={item.name}>
                <p className="text-[#6B7280] pb-2"> {item.name}</p>
                <p className="text-[14px] text-black  leading-[20px] font-medium text-right">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

       
        <section className="   p-6 space-y-6 border-t-2 ">
           <h1 className="text-2xl font-bold text-gray-900 pb-8">العنوان الوطني </h1>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-sm">
            {nationalAddress.map((item) => (
              <div key={item.name}>
                <p className="text-[#6B7280] pb-2"> {item.name}</p>
                <p className="text-[14px] text-black  leading-[20px] font-medium text-right">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-800">
              بيانات الملاك والمدراء
            </h2>
          </div>

          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-right">الاسم</TableHead>
                <TableHead className="text-right">نوع الهوية</TableHead>
                <TableHead className="text-right">رقم الهوية</TableHead>
                <TableHead className="text-right">الجنسية</TableHead>
                <TableHead className="text-right">علاقة الطرف</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell>أحمد محمد</TableCell>
                <TableCell>هوية وطنية</TableCell>
                <TableCell>1234567890</TableCell>
                <TableCell>سعودي</TableCell>
                <TableCell>مالك</TableCell>
              </TableRow>

              <TableRow className="hover:bg-gray-50">
                <TableCell>سارة خالد</TableCell>
                <TableCell>هوية وطنية</TableCell>
                <TableCell>9876543210</TableCell>
                <TableCell>سعودية</TableCell>
                <TableCell>شريك</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </div>
  );
}
