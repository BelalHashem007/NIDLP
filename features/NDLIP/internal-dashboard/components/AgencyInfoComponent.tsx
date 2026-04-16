import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import Image from "next/image";
import {
  MapPin,
  Building2,
  LockOpen,
  Phone,
  Inbox,
  Mailbox,
} from "lucide-react";

type Agency = {
  agency_id: string;
  agency_name: string;
  agency_branch: string;
  location: string;
  phone: string;
  fax: string;
  email: string;
  postal_code: string;
  po_box: string;
  photo: string;
};

export function AgencyInfoComponent({ agency }: { agency: Agency }) {
  return (
    <ReusableCardComponent>
      <div className="flex gap-9.5 py-10 pr-10 pl-6.5">
        <div className="flex flex-col gap-4">
          <Image
            src={agency.photo}
            alt={agency.agency_name}
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="text-xl font-bold">{agency.agency_name}</p>
        </div>
        <div className="flex-1 py-4 pr-9 border-r border-[#E5E7EB] grid grid-cols-2">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <MapPin className="size-4" /> الموقع
            </p>
            <p className="text-base text-[#111827]">{agency.location}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <Building2 className="size-4" /> الوكالة
            </p>
            <p className="text-base text-[#111827]">{agency.agency_branch}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <Phone className="size-4" /> رقم الهاتف
            </p>
            <p className="text-base text-[#111827]">{agency.phone}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <LockOpen className="size-4" /> الفاكس
            </p>
            <p className="text-base text-[#111827]">{agency.fax}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <Inbox className="size-4" /> الرمز البريدي
            </p>
            <p className="text-base text-[#111827]">{agency.postal_code}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-[#6B7280] flex items-center gap-2">
              <Mailbox className="size-4" /> صندوق البريد
            </p>
            <p className="text-base text-[#111827]">{agency.po_box}</p>
          </div>
        </div>
      </div>
    </ReusableCardComponent>
  );
}
