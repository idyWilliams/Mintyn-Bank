"use client";
import React, {
  HTMLProps,
  useReducer,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
  PaginationState,
} from "@tanstack/react-table";
import { IoIosSearch, IoMdRefresh } from "react-icons/io";

interface TableProps {
  productData: any[];
}

interface InitialsCircleProps {
  initials: string;
}

const InitialsCircle: React.FC<InitialsCircleProps> = ({ initials }) => {
  return (
    <div className="h-10 w-10 flex items-center justify-center bg-newText rounded-full">
      <span className="text-white  font-[30px]">{initials}</span>
    </div>
  );
};

const ProductTable: React.FC<TableProps> = ({ productData }) => {
  const rerender = useReducer(() => ({}), {})[1];
  const [globalFilter, setGlobalFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "product",
        header: () => <span>Item Type</span>,
        cell: ({ row, getValue }) => (
          <div>
            <div className="flex items-center gap-2 ">
              <InitialsCircle initials={"VW"} />
              <span className="text-[#414042]">{getValue() as ReactNode}</span>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "price",
        cell: (info) => (
          <span className="text-newText text-sm">
            $ {info.getValue() as ReactNode}
          </span>
        ),
        header: () => <span>Price</span>,
      },

      {
        accessorKey: "serialNumber",
        header: () => <span>Transaction No</span>,
        cell: (info) => (
          <span className="text-newText text-sm">
            {info.getValue() as ReactNode}
          </span>
        ),
      },
      {
        accessorKey: "time",
        header: () => <span>Time</span>,
        cell: (info) => (
          <span className="text-newText text-sm">
            {info.getValue() as ReactNode}
          </span>
        ),
      },
      {
        accessorKey: "status",
        header: () => <span>Status</span>,
        cell: (info) => {
          const status = info.getValue() as ReactNode;
          return (
            <span className=" text-sm">{getStatusBlock(status as string)}</span>
          );
        },
        filterFn: (row, id, value) => {
          if (value === null || value === "") return true;
          //@ts-ignore
          return row.getValue(id).toLowerCase() === value.toLowerCase();
        },
      },
    ],
    [statusFilter]
  );

  const [data, setData] = useState<any[]>([]);
  const refreshData = () => setData(productData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    globalFilterFn: (row, columnIds) => {
      const searchValue = globalFilter.toLowerCase();
      //@ts-ignore
      return columnIds.some((columnId: string) => {
        const value = row.getValue(columnId);
        return (
          value !== undefined &&
          //@ts-ignore
          value.toString().toLowerCase().includes(searchValue)
        );
      });
    },
    debugTable: true,
    state: {
      globalFilter,
      pagination,
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
  });

  useEffect(() => {
    setData(productData);
  }, [productData]);
    useEffect(() => {
    if (typeof window !== "undefined") {
      //This code is executed in the browser
      console.log(window.innerWidth);
    }
  },[])

   useEffect(() => {
     if (typeof window !== "undefined") {
       // Your client-side code that uses window goes here
     }
   }, []);

  return (
    <div className="overflow-x-auto xxs:hidden md:block">
      <div className="mt-10 mb-3">
        <h1 className="text-xl text-[#262626]">Payments</h1>
      </div>
      <div className=" flex items-center justify-between  rounded-t-md  mb-5 w-full">
        <div className="flex items-center justify-between gap-4 w-[90%]">
          <div className="flex items-center gap-8">
            <div
              // onClick={refreshData}
              className="flex items-center gap-1 text-[16px] leading-[28px] text-[#464F54] cursor-pointer  "
            >
              <div className="flex items-center gap-1 text-xs text-[#262626]w-full">
                Showing{" "}
                <select
                  value={table.getState().pagination.pageSize}
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                  className="text-blue focus:outline-none bg-[#F1F5F9]"
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-xs text-[#262626]">out of </div>
              <div className="text-xs text-[#262626]">
                {table.getPageCount()} Payments
              </div>
            </div>
            <div className="relative">
              <button className="absolute left-0 top-1/2 text-[#787878] -translate-y-1/2 text-sm">
                <IoIosSearch />
              </button>
              <DebouncedInput
                type="text"
                value={globalFilter || ""}
                //@ts-ignore
                onChange={(e) => setGlobalFilter(e.target?.value)}
                placeholder="Search payments..."
                className="border-b border-gray-[#787878]  px-2 py-1 bg-transparent pl-6 pr-4 font-light focus:outline-none placeholder:text-xs placeholder:text-[#787878] placeholder:font-extralight"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#262626]">Show</span>
            <select
              className="border border-newText text-sm text-newText px-2 py-1 focus:outline-none"
              value={statusFilter || ""}
              onChange={(e) => setStatusFilter(e.target.value || null)}
            >
              <option value="">All</option>
              <option value="reconciled">Reconciled</option>
              <option value="un-reconciled">Un-reconciled</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </div>
      <table
        className="appearance-none bg-white min-w-full  rounded-md"
        id="my-table"
      >
        <thead className="bg-[#EAEEF0] appearance-none">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="font-normal text-sm text-primary py-3 text-left whitespace-nowrap px-4 "
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center gap-2 text-sm text-newText ">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody className="mt-3 pt-3 w-full space-y-8 border-b border-slate-200">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                className="appearance-none my-4 border-t border-slate-200 "
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className="font-normal text-sm text-[#202223] py-4 px-4 text-left"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-between w-full my-4 ">
        <div>
          <span className="flex items-center gap-1 text-xs text-[#262626]">
            Showing 0{table.getState().pagination.pageIndex + 1} out of 0
            {table.getPageCount()} Payments
          </span>
        </div>
        <div className="flex items-center gap-3 ">
          <button
            className=" h-5 p-1 text-xs bg-white border flex items-center justify-center text-black cursor-pointer"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"Previous"}
          </button>

          <button
            className="  h-5 p-1 text-xs bg-white flex items-center justify-center text-black cursor-pointer border"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {"Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;

interface StatusBlockProps {
  status: "reconcilled" | "un-reconcilled" | "pending";
}

const statusStyles: Record<string, string> = {
  reconciled: "border-newText text-success border",
  "un-reconciled": "border-newText text-newText border",
  pending: "border-newText text-warning border",
};

const getStatusBlock = (statusText: string) => {
  const styleClass = statusStyles[statusText.toLowerCase()];
  if (styleClass) {
    return (
      <div
        className={`inline-flex items-center px-3 py-1 rounded-full ${styleClass}`}
      >
        <div
          className="w-2 h-2 rounded-full mr-2"
          style={{
            backgroundColor: styleClass.includes("success")
              ? "#27AE60"
              : styleClass.includes("newText")
              ? "#647787"
              : "#FDC203",
          }}
        ></div>
        <span>{statusText.charAt(0).toUpperCase() + statusText.slice(1)}</span>
      </div>
    );
  }
  return null;
};

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
