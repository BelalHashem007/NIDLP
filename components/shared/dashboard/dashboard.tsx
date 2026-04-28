"use client";

import Header from "./header";
import Sidebar from "./sidebar";

import { useState } from "react";
import Orders from "@/app/companies/orders/page";
import MyOrders from "@/app/companies/myorders/page";
import AddNewOrders from "@/app/companies/addneworder/page";
import AddNewOrderButton from "@/components/Buttons/AddNewOrderButton";

function Dashboard() {
  const [activePage, setActivePage] = useState("orders-all");

  return (
    <main className="h-full flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar setActivePage={setActivePage} />

        <div className="flex-1 p-6 bg-gray-100">
          <div className="">
            {/* زر إضافة */}
            <div className={`${activePage === "addneworder" && "hidden"}    `}>
              <AddNewOrderButton setActivePage={setActivePage} />
            </div>

            {/* Tabs */}

            {activePage === "orders-all" ? <Orders /> : ""}
            {activePage === "my-orders" ? <MyOrders /> : ""}
            {activePage === "addneworder" ? <AddNewOrders /> : ""}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
