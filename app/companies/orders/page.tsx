"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter } from "lucide-react";
import FilterDrawer from "@/components/Filter/Filters";
import OrdersTable from "@/components/Table/table";
import data from "@/data/allorders/orders.json";
import unactivedata from "@/data/allorders/unactiveorder.json";
import oldorders from "@/data/allorders/oldorders.json";
function Orders() {
  return (
    <Tabs defaultValue="orders" className="w-full flex flex-col gap-6">
      {/* Header Tabs */}
      <div className="flex flex-row-reverse justify-between pt-8">
        <TabsList className="bg-transparent border-b border-gray-200 p-0 gap-10 rounded-none flex flex-row-reverse ">
          <TabsTrigger
            value="orders"
            className="
      bg-transparent
      hover:bg-transparent
      data-[state=active]:bg-transparent
      rounded-none
      border-0
      border-b-2
      border-transparent
      pb-2
      shadow-none
      text-gray-500
      data-[state=active]:text-[#119DA9]
      data-[state=active]:border-[#119DA9]
    "
          >
            الطلبات النشطة <img src="/Check.svg" alt="" />
          </TabsTrigger>

          <TabsTrigger
            value="services"
            className="
      bg-transparent
      hover:bg-transparent
      data-[state=active]:bg-transparent
      rounded-none
      border-0
      border-b-2
      border-transparent
      pb-2
      shadow-none
      text-gray-500
      data-[state=active]:text-[#119DA9]
      data-[state=active]:border-[#119DA9]
    "
          >
            الطلبات الغير نشطة <img src="/emptyfile.svg" alt="" />
          </TabsTrigger>

          <TabsTrigger
            value="users"
            className="
      bg-transparent
      hover:bg-transparent
      data-[state=active]:bg-transparent
      rounded-none
      border-0
      border-b-2
      border-transparent
      pb-2
      shadow-none
      text-gray-500
      data-[state=active]:text-[#119DA9]
      data-[state=active]:border-[#119DA9]
    "
          >
            طلبات متجاوز تاريخ الاستحقاق
            <img src="/Oclock.svg" alt="" />
          </TabsTrigger>
        </TabsList>

        {/* Filter */}
        <div className="flex gap-2 items-center">
          <Filter className="w-4 h-4 text-gray-500" />
          <div className="bg-white">
            <FilterDrawer />
          </div>
        </div>
      </div>

      {/* Orders */}
      <TabsContent value="orders">
        <OrdersTable Data={data} />
      </TabsContent>

      {/* Services */}
      <TabsContent value="services">
        <OrdersTable Data={unactivedata} />
      </TabsContent>

      {/* Users */}
      <TabsContent value="users">
        <OrdersTable Data={oldorders} />
      </TabsContent>
    </Tabs>
  );
}

export default Orders;
