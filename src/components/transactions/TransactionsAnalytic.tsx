import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { ArrowUpRightIcon } from "@/assets/icons/ArrowUpRightIcon";
import { ArrowUpRightSquareIcon } from "@/assets/icons/ArrowUpRightSquareIcon";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import Link from "next/link";
import React from "react";

export const TransactionsAnalytic = () => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <Link href={'/coming-soon'} className="p-4 rounded-xl  bg-[#fff] dark:bg-[#111111] border border-[#bdc5d133] cursor-pointer group">
        <div className="mb-1 flex items-center justify-between">
          <h6 className=" text-[12px] text-gray550 dark:text-gray400 uppercase">
            Network Utilization (24H)
          </h6>
          <div className=" opacity-0 group-hover:opacity-80 scale-90 duration-100 ease-linear ">
          <ArrowUpRightIcon color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}/>

          </div>
        </div>
        <div className="text-[18.75px] text-[#081D35] dark:text-gray200 group-hover:text-[#086a9c] dark:group-hover:text-[#6AB5DB]">50.7%</div>
      </Link>
      <Link href={`/blocks/19672667`} className="p-4 rounded-xl  bg-[#fff] dark:bg-[#111111] border border-[#bdc5d133] cursor-pointer group">
        <div className="mb-1 flex items-center justify-between">
          <h6 className=" text-[12px] text-gray550 dark:text-gray400 uppercase">
            Last Safe Block
          </h6>
          <div className=" opacity-0 group-hover:opacity-80 scale-90 duration-100 ease-linear">
          <ArrowUpRightIcon color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}/>

          </div>
        </div>
        <div className="text-[18.75px] text-[#081D35] dark:text-gray200 group-hover:text-[#086a9c] dark:group-hover:text-[#6AB5DB]">19672667</div>
      </Link>
      <Link href={'/coming-soon'} className="p-4 rounded-xl  bg-[#fff] dark:bg-[#111111] border border-[#bdc5d133] cursor-pointer group">
        <div className="mb-1 flex items-center justify-between">
          <h6 className=" text-[12px] text-gray550 dark:text-gray400 uppercase">
            PRODUCED BY MEV BUILDERS (24H)
          </h6>
          <div className=" opacity-0 group-hover:opacity-80 scale-90 duration-100 ease-linear">
          <ArrowUpRightIcon color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}/>

          </div>
        </div>
        <div className="text-[18.75px] text-[#081D35] dark:text-gray200 group-hover:text-[#086a9c] dark:group-hover:text-[#6AB5DB]">88%</div>
      </Link>
      <Link href={'/coming-soon'} className="p-4 rounded-xl  bg-[#fff] dark:bg-[#111111] border border-[#bdc5d133] cursor-pointer group">
        <div className="mb-1 flex items-center justify-between">
          <h6 className=" text-[12px] text-gray550 dark:text-gray400 uppercase">
            Burnt Fees 🔥
          </h6>
          <div className=" opacity-0 group-hover:opacity-80 scale-90 duration-100 ease-linear">
          <ArrowUpRightSquareIcon color={theme === THEME.DARK ? "#BBBBBB" : "#6C757D"}  />

          </div>
        </div>
        <div className="text-[18.75px] text-[#081D35] dark:text-gray200 group-hover:text-[#086a9c] dark:group-hover:text-[#6AB5DB]">4,266,768.57 ETH</div>
      </Link>
    </div>
  );
};
