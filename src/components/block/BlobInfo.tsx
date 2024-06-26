import { HelpIcon } from "@/assets/icons/HelpIcon";
import React from "react";
import { THEME } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { TooltipCustom } from "../Tooltip";

export const BlobInfo = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col bg-white dark:bg-[#111111] border border-[#bdc5d133] p-5 rounded-xl ">
      <div className="flex flex-col md:flex-row mb-4">
        <div className="flex items-center  mb-2 md:mb-0 w-full md:w-1/4 gap-1 text-[#111111]  md:text-gray550  dark:text-gray400 ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.blobInfo.blobTx")}
          </p>
        </div>
        <div>
          <TooltipCustom content="Click to view Transactions">
            <Link
              href="/coming-soon"
              className="text-[#0784c3] dark:text-[#6AB5DB] break-words"
            >
              1 transaction
            </Link>
          </TooltipCustom>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-4">
        <div className="flex items-center  mb-2 md:mb-0 w-full md:w-1/4 gap-1  text-[#111111]  md:text-gray550  dark:text-gray400  ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.blobInfo.blobSize")}
          </p>
        </div>
        <div>
          <span className="text-[#212529] dark:text-gray200">
            128 KiB (1 blobs)
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-4 ">
        <div className="flex items-center  mb-2 md:mb-0 w-full md:w-1/4 gap-1  text-[#111111]  md:text-gray550  dark:text-gray400  ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.blobInfo.blobGasPrice")}
          </p>
        </div>
        <div>
          <Link
            href="/coming-soon"
            className="text-[#0784c3] dark:text-[#6AB5DB] break-words"
          >
            1 wei (0.000000001 Gwei)
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-4">
        <div className="flex items-center  mb-2 md:mb-0 w-full md:w-1/4 gap-1  text-[#111111]  md:text-gray550  dark:text-gray400  ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.blobInfo.blobGasUsed")}
          </p>
        </div>
        <div>
          <Link
            href="/coming-soon"
            className="text-[#0784c3] dark:text-[#6AB5DB] break-words"
          >
            131,072 (16.67%)
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-4">
        <div className="flex items-center  mb-2 md:mb-0 w-full md:w-1/4 gap-1  text-[#111111]  md:text-gray550  dark:text-gray400  ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.blobInfo.blobGasLimit")}
          </p>
        </div>
        <div>
          <span className="text-[#212529] dark:text-gray200">786,432</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="flex items-center  mb-2 md:mb-0 w-full md:w-1/4 gap-1  text-[#111111]  md:text-gray550  dark:text-gray400  ">
          <HelpIcon />
          <p className="text-[14.5px] text-[#081D35] dark:text-[#888888] font-semibold md:text-gray550 md:font-normal md:dark:text-gray400 ">
            {t("vinaScan.tabs.blobInfo.blobAsCalldataGas")}
          </p>
        </div>
        <div className="text-[#212529] dark:text-gray200 break-words">
          1,935,608 (14.77 times more expensive)
        </div>
      </div>
    </div>
  );
};
