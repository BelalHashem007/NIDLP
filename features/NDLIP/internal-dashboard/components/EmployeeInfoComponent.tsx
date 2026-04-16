import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import Image from "next/image";
import {
  SquareUser,
  Flag,
  BriefcaseBusiness,
  Phone,
  Settings,
} from "lucide-react";

type Employee = {
  name: string;
  employee_id: number;
  job_title: string;
  user_role: string;
  phone: string;
  status: string;
  photo: string;
};

export function EmployeeInfoComponent({ employee }: { employee: Employee }) {
  return (
    <ReusableCardComponent>
      <div className="flex gap-9.5 py-10 pr-10 pl-6.5">
        <div className="flex flex-col gap-4">
          <Image
            src={employee.photo}
            alt={employee.name}
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="text-xl font-bold">{employee.name}</p>
        </div>
        <div className="flex-1 py-4 pr-9 border-r border-[#E5E7EB] grid grid-cols-2">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <SquareUser className="size-4" /> الرقم الموظفي
            </p>
            <p className="text-base text-[#111827]">{employee.employee_id}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <Flag className="size-4" /> حالة التفعيل
            </p>
            <p className="text-base text-[#111827]">{employee.status}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <BriefcaseBusiness className="size-4" /> المسمى الوظيفي
            </p>
            <p className="text-base text-[#111827]">{employee.job_title}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <Phone className="size-4" /> رقم الهاتف
            </p>
            <p className="text-base text-[#111827]">{employee.phone}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <Settings className="size-4" /> دور المستخدم
            </p>
            <p className="text-base text-[#111827]">{employee.user_role}</p>
          </div>
        </div>
      </div>
    </ReusableCardComponent>
  );
}
