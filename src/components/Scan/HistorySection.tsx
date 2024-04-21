"use client";
import { TableType } from "@/utils/constants";
import { TableCustom } from "../table-custom/TableCustom";

export default function HistorySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 ">
      {/* BLOCK */}
      <div className="w-full bg-[#ffff] dark:bg-[#111] shadow-md rounded-xl border border-[#DCDCDC]">
        <TableCustom defaultType={TableType.LATEST_BLOCKS} />
      </div>
      {/* TRANSACTION */}
      <div className="w-full bg-[#ffff] dark:bg-[#111] shadow-md rounded-xl border border-[#DCDCDC]">
        <TableCustom defaultType={TableType.LATEST_TRANSACTIONS} />
      </div>
    </div>
  );
}
