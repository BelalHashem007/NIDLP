"use client";

import { LucideIcon } from "lucide-react";

import {
  TableBody as UITableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Action,
  ColumnDef,
  OrderRow,
  PersonType,
  StatusType,
} from "@/components/shared/table/table.types";

import { ActionsCell } from "./cells/ActionsCell";
import { DefaultCell } from "./cells/DefaultCell";
import { PersonCell } from "./cells/PersonCell";
import { StatusCell } from "./cells/StatusCell";

type TableBodyProps = {
  columns: ColumnDef[];
  rows: OrderRow[];
  iconMap: Record<string, LucideIcon>;
  onActionClick?: (action: Action, row: OrderRow) => void;
};

export function TableBody({
  columns,
  rows,
  iconMap,
  onActionClick,
}: TableBodyProps) {
  return (
    <UITableBody className="bg-white">
      {rows.length === 0 ? (
        <TableRow>
          <TableCell
            colSpan={columns.length}
            className="py-12 text-center text-gray-400"
          >
            لا توجد نتائج
          </TableCell>
        </TableRow>
      ) : (
        rows.map((row) => (
          <TableRow key={row.id} className="border-b-gray-200">
            {columns.map((column) => {
              const value = row[column.accessorKey];

              return (
                <TableCell key={column.key} className="py-4 text-center">
                  {column.accessorKey === "assigned_employee" ||
                  column.accessorKey === "applicant" ? (
                    <PersonCell value={value as PersonType | undefined} />
                  ) : column.accessorKey === "status" ? (
                    <StatusCell value={value as StatusType | undefined} />
                  ) : column.accessorKey === "actions" ? (
                    <ActionsCell
                      row={row}
                      iconMap={iconMap}
                      onActionClick={onActionClick}
                    />
                  ) : (
                    <DefaultCell value={value as string | number | undefined} />
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        ))
      )}
    </UITableBody>
  );
}
