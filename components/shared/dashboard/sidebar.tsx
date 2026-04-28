"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

type Props = {
  setActivePage: (page: string) => void;
};

function Sidebar({ setActivePage }: Props) {
  const [active, setActive] = useState("orders-all");

  const handleClick = (page: string) => {
    setActive(page);
    setActivePage(page);
  };

  return (
    <aside className="border-l-2 border-l-[#E5E7EB] w-[256px] h-full bg-white">
      <section className="flex flex-col space-y-2 p-6 pt-11">
        {/* Orders Dropdown */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="orders" className="border-none">
            {/* Trigger */}
            <AccordionTrigger
              className="
                flex w-full gap-3 items-center p-2 hover:no-underline
                text-right font-bold text-[#4590BF]
              "
            >
              <div className="flex items-center gap-3 w-full">
                <img src="/files.svg" className="w-6 h-6" />
                <span className="flex-1 text-right">ادارة الطلبات</span>
              </div>
            </AccordionTrigger>

            {/* Content */}
            <AccordionContent className="relative ml-6 mt-2 flex flex-col gap-2">
              {/* vertical line */}
              <div className="absolute right-4 top-0 h-20 w-[2px] bg-gray-200" />

              {/* active line */}
              <div className="absolute right-4 top-0 h-10 w-[3px]  bg-[#4590BF] transition-all duration-300" />

              <Link href="/companies/orders">
                {" "}
                <button
                  onClick={() => handleClick("orders-all")}
                  className={`
                  relative pr-8 text-sm text-right p-2 rounded-md transition 
                  ${
                    active === "orders-all"
                      ? "text-[#4590BF] font-bold"
                      : "text-gray-600 hover:text-[#4590BF] hover:bg-gray-100"
                  }
                `}
                >
                  جميع الطلبات
                </button>
              </Link>

              <Link href="/companies/myorders">
                <button
                  onClick={() => handleClick("my-orders")}
                  className={`
                  relative pr-8 text-sm text-right p-2 rounded-md transition
                  ${
                    active === "orders-my"
                      ? "text-[#4590BF] font-bold"
                      : "text-gray-600 hover:text-[#4590BF] hover:bg-gray-100"
                  }
                `}
                >
                  طلباتي
                </button>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Services */}
        <button
          onClick={() => handleClick("services")}
          className={`
            text-right p-2 rounded-md transition
            ${
              active === "services"
                ? "text-[#4590BF] font-bold bg-gray-100"
                : "text-gray-600 hover:text-[#4590BF] hover:bg-gray-100"
            }
          `}
        >
          ادارة مستوى الخدمة
        </button>

        {/* Users */}
        <button
          onClick={() => handleClick("users")}
          className={`
            text-right p-2 rounded-md transition
            ${
              active === "users"
                ? "text-[#4590BF] font-bold bg-gray-100"
                : "text-gray-600 hover:text-[#4590BF] hover:bg-gray-100"
            }
          `}
        >
          ادارة المستخدمين
        </button>
      </section>
    </aside>
  );
}

export default Sidebar;
