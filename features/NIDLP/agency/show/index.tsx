"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { agenciesData } from "../../data/agency-data";
import ReusableCardComponent from "@/components/nidlp/ReusableCardComponent";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  UsersRound,
  MapPin,
  Phone,
  LockOpen,
  Mail,
  Container,
  Inbox,
  SquarePen,
} from "lucide-react";

export function AgencyShowView() {
  const searchParams = useSearchParams();
  const agencyId = searchParams.get("agency");

  const agency = agenciesData.find((a) => a.id === Number(agencyId));

  return (
    <div className="mx-auto max-w-3xl ">
      <ReusableCardComponent>
        <div className="p-8 relative">
          {/* edit Link */}
          <Link
            href={`/nidlp/agency/edit?agency=${agencyId}`}
            className="flex gap-2 text-[#119DA9] items-center absolute top-8 left-8"
          >
            <SquarePen className="size-5" />{" "}
            <span className="font-bold text-base/[24px]">تعديل</span>
          </Link>

          {/* header (image + agency name) */}
          <div className="flex flex-col gap-4 items-center pt-22 pb-8 border-b border-[#E5E7EB]">
            {agency?.logo_url ? (
              <Image
                width={144}
                height={144}
                alt={agency.entity_name + " photo"}
                src={"/assets/placeholder_agency.png"}
                className="rounded-full bg-white border border-[#E5E7EB]"
              />
            ) : (
              <div className="flex w-36 h-36 rounded-full bg-white border border-[#E5E7EB]">
                <Building2 className="flex-1" />
              </div>
            )}
            <h2 className="text-[#111827] font-bold text-xl/[28px ]">
              {agency?.entity_name}
            </h2>
          </div>

          {/* the rest of the data in a grid with 2 columns */}
          <div className="grid grid-cols-2 gap-8 pt-10 pb-6">
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <UsersRound className="size-4 text-[#6B7280]" />{" "}
                <span className="text-[#6B7280] font-bold text-sm/[16px]">
                  عدد المستخدمين المعروفين في النظام للجهة
                </span>
              </p>
              <span className="text-[#111827] text-sm/[20px]">
                {agency?.user_count}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <MapPin className="size-4 text-[#6B7280]" />{" "}
                <span className="text-[#6B7280] font-bold text-sm/[16px]">
                  الموقع
                </span>
              </p>
              <span className="text-[#111827] text-sm/[20px]">
                {agency?.city}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-10 pb-6">
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <Building2 className="size-4 text-[#6B7280]" />{" "}
                <span className="text-[#6B7280] font-bold text-sm/[16px]">
                  الوكالة
                </span>
              </p>
              <span className="text-[#111827] text-sm/[20px]">
                {agency?.agency}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <Phone className="size-4 text-[#6B7280]" />{" "}
                <span className="text-[#6B7280] font-bold text-sm/[16px]">
                  رقم الهاتف
                </span>
              </p>
              <span className="text-[#111827] text-sm/[20px] flex gap-2">
                {agency?.phone}
                <span>966+</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-10 pb-6">
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <LockOpen className="size-4 text-[#6B7280]" />{" "}
                <span className="text-[#6B7280] font-bold text-sm/[16px]">
                  الفاكس
                </span>
              </p>
              <span className="text-[#111827] text-sm/[20px]">
                {agency?.fax}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <Mail className="size-4 text-[#6B7280]" />{" "}
                <span className="text-[#6B7280] font-bold text-sm/[16px]">
                  البريد الإلكتروني للجهة
                </span>
              </p>
              <span className="text-[#111827] text-sm/[20px]">
                {agency?.email}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-10 pb-6">
            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <Container className="size-4 text-[#6B7280]" />{" "}
                <span className="text-[#6B7280] font-bold text-sm/[16px]">
                  الرمز البريدي
                </span>
              </p>
              <span className="text-[#111827] text-sm/[20px]">
                {agency?.postal}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <Inbox className="size-4 text-[#6B7280]" />{" "}
                <span className="text-[#6B7280] font-bold text-sm/[16px]">
                  صندوق البريد
                </span>
              </p>
              <span className="text-[#111827] text-sm/[20px]">
                {agency?.mail}
              </span>
            </div>
          </div>
        </div>
      </ReusableCardComponent>
    </div>
  );
}
