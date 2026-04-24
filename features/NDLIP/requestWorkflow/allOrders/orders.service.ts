import axios from "axios";
import { OrderRow } from "../../data/table.types";

const STORAGE_KEY = "allOrders";

const buildOrderActions = (id?: number) => {
  const safe = id ?? "";

  return [
    { id: 1, iconName: "Eye", label: "عرض الطلب", type: "link", href: `/orders/${safe}` },
    { id: 2, iconName: "Repeat", label: "طلب اعادة اسناد", type: "overlay", overlayKey: "reassign" },
    { id: 3, iconName: "Sparkles", label: "معالجة الطلب", type: "link", href: `/orders/${safe}/edit` },
  ];
};

// memory (source of truth أثناء التشغيل)
let memory: OrderRow[] = [];

// helpers
const saveToStorage = (data: OrderRow[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const loadFromStorage = (): OrderRow[] | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    // لو البيانات المخزنة فيها مشكلة، امسحها وارجع null عشان نجيب الداتا من الـ JSON
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

export const ordersService = {
  async getAll(): Promise<OrderRow[]> {
    try {
      // 1) لو فيه data في localStorage
      const stored = loadFromStorage();
      if (stored && stored.length > 0) {
        memory = stored;
        return memory;
      }

      // 2) غير كده هات من JSON
      const res = await axios.get("/data/requestWorkflow/allOrders.json");

      memory = res.data.map((item: Omit<OrderRow, "actions">) => ({
        ...item,
        actions: buildOrderActions(item.id),
      }));

      saveToStorage(memory);

      return memory;
    } catch {
      throw new Error("FAILED_TO_FETCH_ORDERS");
    }
  },

  async create(order: OrderRow): Promise<OrderRow> {
    try {
      memory.push(order);
      saveToStorage(memory);
      return order;
    } catch {
      throw new Error("FAILED_TO_CREATE_ORDER");
    }
  },

  async update(
    id: number,
    updated: Partial<OrderRow>
  ): Promise<OrderRow> {
    const index = memory.findIndex(
      (o) => o.id === id
    );

    if (index === -1) {
      throw new Error("ORDER_NOT_FOUND");
    }

    const updatedOrder = {
      ...memory[index],
      ...updated,
    };

    memory[index] = updatedOrder;
    saveToStorage(memory);

    return updatedOrder;
  },

  async delete(id: number): Promise<void> {
    const exists = memory.some(
      (o) => o.id === id
    );

    if (!exists) {
      throw new Error("ORDER_NOT_FOUND");
    }

    memory = memory.filter(
      (o) => o.id !== id
    );

    saveToStorage(memory);
  },
};