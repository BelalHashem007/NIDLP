import { useEffect, useState } from "react";

import { OrderRow } from "../../../../components/shared/table/table.types";
import { ordersService } from "./orders.service";

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong";
};

export const useOrders = () => {
  const [data, setData] = useState<OrderRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await ordersService.getAll();
      setData(res);
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async (order: OrderRow) => {
    try {
      const newOrder = await ordersService.create(order);
      setData(prev => [...prev, newOrder]);
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    }
  };

  const updateOrder = async (id: number, updated: Partial<OrderRow>) => {
    try {
      const updatedOrder = await ordersService.update(id, updated);
      setData(prev =>
        prev.map(o => (o.id === id ? updatedOrder : o))
      );
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    }
  };

  const deleteOrder = async (id: number) => {
    try {
      await ordersService.delete(id);
      setData(prev => prev.filter(o => o.id !== id));
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    data,
    loading,
    error,
    fetchOrders,
    createOrder,
    updateOrder,
    deleteOrder,
  };
};
