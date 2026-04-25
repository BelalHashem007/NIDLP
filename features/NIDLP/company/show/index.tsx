import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import { companiesDataExpanded } from "../../data/company-data";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CompanyShowView({ companyId }: { companyId: string }) {
  const companyData = companiesDataExpanded.find((c) =>
    c.mainTableIds.includes(Number(companyId)),
  );
  if (!companyData) return null;

  return (
    <div>
      <ReusableCardComponent>
        <div className="p-8">
          {/* name + companylogo */}
          <div className="flex gap-4 items-center pb-8 border-b border-[#E5E7EB]">
            <Image
              src={companyData?.logo_url}
              alt={companyData?.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <h2 className="text-[#111827] font-bold text-xl/[28px]">
              {companyData.name}
            </h2>
          </div>

          {/* contact info */}
          <div className="pt-4 flex flex-col gap-8 pb-12 border-b border-[#E5E7EB]">
            <h3 className="font-bold text-[#111827] text-base/[24px]">
              معلومات التواصل
            </h3>

            <div className="grid grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  رقم الهاتف الرئيسي للشركة “الثابت”
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.contactInfo.permanentMainPhone}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  البريد الإلكتروني الرئيسي للشركة
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.contactInfo.email}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  رقم الجوال الرئيسي للشركة
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.contactInfo.mainPhone}
                </p>
              </div>
            </div>
          </div>

          {/* general info */}
          <div className="pt-8 flex flex-col gap-8 pb-12 border-b border-[#E5E7EB]">
            <h3 className="font-bold text-[#111827] text-xl/[28px]">
              معلومات عامة
            </h3>

            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  الرقم الوطني الموحد الرئيسي
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.mainNationalNumber}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  اسم السجل التجاري
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.commercialRegistryName}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  الرقم الوطني الموحد
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.nationalNumber}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  رقم السجل التجاري الرئيسي
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.mainCommercialRegistryNumber}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  نوع السجل التجاري
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.commercialRegistryType}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  رقم السجل التجاري
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.commercialRegistryNumber}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  مدينة وموقع السجل التجاري
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.commercialRegistryCity}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  حالة السجل التجاري
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.commercialRegistryStatus}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  سبب إلغاء السجل التجاري
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.reasonForCancellation}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  العنوان
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.address}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  البريد الإلكتروني
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.email}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  نشاطات السجل التجاري
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.activities}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  صندوق البريد
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.postalBox}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  الفاكس
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.fax}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  رقم الهاتف
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.generalInfo.phone}
                </p>
              </div>
            </div>
          </div>

          {/* nation address */}
          <div className="pt-8 flex flex-col gap-8 pb-12 border-b border-[#E5E7EB]">
            <h3 className="font-bold text-[#111827] text-xl/[28px]">
              العنوان الوطني
            </h3>

            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  الرمز البريدي
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.nationalAddress.postalCode}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  رقم المبنى
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.nationalAddress.buildingNumber}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  اسم الشارع
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.nationalAddress.streetName}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  رقم الوحدة
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.nationalAddress.unitNumber}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">الحي</p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.nationalAddress.district}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[#6B7280] font-bold text-sm/[16px]">
                  المدينة
                </p>
                <p className="text-[#111827] text-base/[20px]">
                  {companyData.nationalAddress.city}
                </p>
              </div>
            </div>
          </div>

          {/* owners info */}
          <div className="mt-8 flex flex-col gap-6">
            <h3 className="font-bold text-[#111827] text-xl/[28px]">
              بيانات الملاك والشركاء وأعضاء مجلس الإدارة والمدراء للسجل التجاري
            </h3>
            <div className="border border-[#D1D5DB] rounded-lg overflow-hidden">
              <Table className="table-fixed">
                <TableHeader className="[&_tr]:border-0 bg-blue-100/30">
                  <TableRow>
                    <TableHead className="py-3 px-4 w-[40%] font-bold text-[#111827]">
                      الاسم
                    </TableHead>
                    <TableHead className="py-3 px-4 w-[40%] font-bold text-[#111827]">
                      نوع الهوية
                    </TableHead>
                    <TableHead className="py-3 px-4 w-[40%] font-bold text-[#111827]">
                      رقم الهوية
                    </TableHead>
                    <TableHead className="py-3 px-4 w-[40%] font-bold text-[#111827]">
                      الجنسية
                    </TableHead>
                    <TableHead className="py-3 px-4 w-[40%] font-bold text-[#111827]">
                      علاقة الطرف بالسجل التجاري
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {companyData.owners.map((o, i) => {
                    return (
                      <TableRow key={i} className="border-[#E5E7EB]">
                        <TableCell className="p-4 text-sm/[24px]">
                          {o.name}
                        </TableCell>
                        <TableCell className="p-4 text-sm/[24px]">
                          {o.idType}
                        </TableCell>
                        <TableCell className="p-4 text-sm/[24px]">
                          {o.idNumber}
                        </TableCell>
                        <TableCell className="p-4 text-sm/[24px]">
                          {o.nationality}
                        </TableCell>
                        <TableCell className="p-4 text-sm/[24px]">
                          {o.relationship}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </ReusableCardComponent>
    </div>
  );
}
