"use client";

import { useState } from "react";

import { Table } from "@/components/shared/table/Table";

import ReassignOverlay from "./components/ReassignOverlay";
import { thData } from "./config/tableColumns";
import { tabsData } from "./config/tabs";
import { Action, OrderRow, PersonType } from "../../data/table.types";
import { useOrders } from "./useOrders";

function AllOrders() {
  type OverlayState = { type: "reassign"; row: OrderRow };

  const { data, loading, updateOrder } = useOrders();
  const [overlay, setOverlay] = useState<OverlayState | null>(null);

  const handleActionClick = (action: Action, row: OrderRow) => {
    if (action.type === "overlay" && action.overlayKey) {
      setOverlay({ type: action.overlayKey, row });
    }
  };

  const handleReassign = async (emp: {
    id: number;
    name: string;
    email: string;
    avatar: string;
  }) => {
    if (!overlay?.row.id) return;

    const newEmployee: PersonType = {
      name: emp.name,
      photo: emp.avatar ?? "/default-avatar.png",
    };

    await updateOrder(overlay.row.id, {
      assigned_employee: newEmployee,
    });

    setOverlay(null);
  };

  if (loading) return <p>جارٍ التحميل...</p>;

  return (
    <div>
      <Table
        tabsData={tabsData}
        rows={data}
        columns={thData}
        onActionClick={handleActionClick}
      />

      {overlay?.type === "reassign" && (
        <ReassignOverlay
          onClose={() => setOverlay(null)}
          onReassign={handleReassign}
        />
      )}
    </div>
  );
}

export default AllOrders;
