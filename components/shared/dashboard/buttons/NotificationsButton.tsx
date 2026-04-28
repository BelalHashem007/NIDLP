"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Bell, File, Rocket, AlertTriangle } from "lucide-react";

export default function NotificationsButton() {
  const [notifications] = useState([
    {
      id: 1,
      type: "success",
      title: "تم قبول طلبكم",
      desc: "طلبك رقم 900-441-22 تم اعتماده وجاري التنفيذ",
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "تم إغلاق الطلب",
      desc: "تم إغلاق الطلب بسبب انتهاء المهلة",
      read: true,
    },
    {
      id: 3,
      type: "info",
      title: "تحديث بيانات",
      desc: "يرجى تحديث بياناتك خلال 12 يوم",
      read: true,
    },
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <Rocket className="w-4 h-4 text-white" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-white" />;
      case "info":
        return <File className="w-4 h-4 text-white" />;
      default:
        return <Bell className="w-4 h-4 text-white" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-[#119DA9]";
      case "warning":
        return "bg-red-500";
      case "info":
        return "bg-indigo-500";
      default:
        return "bg-[#2E1866]";
    }
  };

  return (
    <DropdownMenu dir="rtl">
      {/* BUTTON */}
      <DropdownMenuTrigger asChild>
        <Button
          className="
            relative
            w-12 h-12
            rounded-2xl
            bg-gradient-to-br from-[#2E1866] to-[#3a1f80]
            hover:scale-105
            transition
            shadow-lg
            flex items-center justify-center
          "
        >
          <Bell className="w-5 h-5 text-white" />

          {/* LIVE DOT */}
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
        </Button>
      </DropdownMenuTrigger>

      {/* CONTENT */}
      <DropdownMenuContent
        align="end"
        className="
          w-96
          p-4
          rounded-3xl
          shadow-2xl
          border border-gray-100
          bg-white/70 backdrop-blur-2xl
        "
      >
        {/* TIMELINE WRAPPER */}
        <div className="relative space-y-3">

          {/* vertical line */}
          <div className="absolute right-4 top-0 bottom-0 w-[1px] bg-gray-200" />

          {notifications.map((n, index) => (
            <div key={n.id} className="relative flex gap-3">

              {/* ICON ORB */}
              <div
                className={`
                  w-9 h-9
                  rounded-full
                  flex items-center justify-center
                  shadow-md
                  ${getColor(n.type)}
                  relative z-10
                `}
              >
                {getIcon(n.type)}
              </div>

              {/* CONTENT CARD */}
              <div
                className={`
                  flex-1
                  text-right
                  p-3
                  rounded-2xl
                  transition
                  cursor-pointer

                  bg-white/80
                  backdrop-blur-md
                  border

                  hover:scale-[1.02]
                  hover:shadow-lg

                  ${!n.read ? "border-[#119DA9]/40 shadow-[#119DA9]/10" : "border-gray-100"}
                `}
              >
                <p className="text-sm font-semibold text-gray-800">
                  {n.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {n.desc}
                </p>
              </div>

              {/* UNREAD DOT */}
              {!n.read && (
                <span className="absolute left-1 top-4 w-2 h-2 bg-[#119DA9] rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}