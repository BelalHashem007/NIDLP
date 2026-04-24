"use client";

import {
  TableHead as UITableHead,
  TableHeader as UITableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  FilterConfig,
} from "@/features/NDLIP/data/table.types";

import { DateFilter } from "./filters/DateFilter";
import { InputFilter } from "./filters/InputFilter";
import { PersonFilter } from "./filters/PersonFilter";
import { SelectFilter } from "./filters/SelectFilter";

type TableHeaderProps = {
  columns: ColumnDef[];
  columnFilters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
};

const renderFilter = (
  filter: FilterConfig | undefined,
  value: string,
  onChange: (value: string) => void,
) => {
  if (!filter) {
    return null;
  }

  if (filter.type === "input") {
    return (
      <InputFilter
        placeholder={filter.placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }

  if (filter.type === "select") {
    return (
      <SelectFilter
        options={filter.options}
        value={value || "all"}
        onChange={onChange}
      />
    );
  }

  if (filter.type === "person-select") {
    return (
      <PersonFilter
        options={filter.options}
        placeholder={filter.placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }

  return <DateFilter value={value} onChange={onChange} />;
};

export function TableHeader({
  columns,
  columnFilters,
  onFilterChange,
}: TableHeaderProps) {
  return (
    <UITableHeader>
      <TableRow className="bg-blue-100/30 border-b-0!">
        {columns.map((column) => (
          <UITableHead key={column.key} className="px-1 py-3 font-bold">
            <p>{column.label}</p>
            {renderFilter(
              column.filter,
              columnFilters[String(column.accessorKey)] ?? "",
              (value) => onFilterChange(String(column.accessorKey), value),
            )}
          </UITableHead>
        ))}
      </TableRow>
    </UITableHeader>
  );
}
