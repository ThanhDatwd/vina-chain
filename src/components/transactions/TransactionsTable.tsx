import React, { useState } from "react";
import { DataTable } from "../tables/DataTable";
import { CellText } from "../tables/CellText";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { HeaderTable } from "../tables/HeaderTable";
import { createColumnHelper } from "@tanstack/react-table";
import { THEME, vinachainAddress } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { CopyIcon } from "@/assets/CopyIcon";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { DownloadIcon } from "@/assets/icons/DownloadIcon";
import { DropdownAddress } from "../DropdownAddress";
import { FilterIcon } from "@/assets/icons/FilterIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { TooltipCustom } from "../Tooltip";
import { formatTrxHash, formatTrxId } from "@/utils/formatTrxId";
import { handleCopy } from "@/utils";
const defaultData = [
  {
    block: 19623482,
    age: "7 second ago",
    method: "Transfer",
    txHash:
      "0xc18ec6e58aae5dc439c1c5183dc0f619b75736320cc3342668d4731edd08d1a4",
    from: {
      publicTag: "0x6000C2E81635De566644B0127C7D94746e6a51a1",
      address: "0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21",
    },
    iconMethod:'',
    to: {
      publicTag: "0x6000C2E81635De566644B0127C7D94746e6a51a1",
      address: "0x95222290DD7278Aa3Ddd389Cc1EA6sCC2BAf21",
    },
    gasUsed: {
      value: "12,690,825",
      currentPercent: 25.6,
      olderPercent: 52.21,
    },
    baseFee: 16.01,
    value: 0.05042,
    fee: 0.480286,
  },
];

export const TransactionsTable = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
          text=""
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          icon={<div className="border relative rounded p-2 cursor-pointer hover:bg-gray200 group:"><EyeIcon/>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full w-96 h-[100px] bg-[red] group-focus:hidden" >
          <div className="absolute top-2 -right-2 w-4 h-4 bg-inherit transform translate-y-1/2 rotate-45"></div>
             </div>
          </div>}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txHash, {
      id: "txHash",
      header: () => (
        <HeaderTable
          textStyle="dark:text-gray200"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
          text="Transaction hash"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <Link
              href={`txs/${getValue()}`}
              className="text-blue dark:text-[#6AB5DB] text-[14.5px]"
            >
              {formatTrxHash(getValue())}
            </Link>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.method, {
      id: "method",
      header: () => (
        <HeaderTable
          textStyle=" dark:text-gray200"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
          text="Method"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          icon={
            <Link
              href={`address/${getValue()?.address}`}
              className="border-cell-value px-2 py-1 bg-white_98 dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
            >
              {getValue()}
            </Link>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.block, {
      id: "block",
      header: () => (
        <HeaderTable
          textStyle=" dark:text-gray200"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
          text="Block"
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={
            <Link
              href={`blocks/${getValue()}`}
              className="text-blue dark:text-[#6AB5DB] text-[14.5px]"
            >
              {getValue()}
            </Link>
          }
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      header: () => (
        <HeaderTable text="Age" textStyle="text-blue dark:text-[#6AB5DB]" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
   

    columnHelper.accessor((row) => row.from, {
      id: "from",
      header: () => <HeaderTable text="From" textStyle=" dark:text-gray200" />,
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                  <TooltipCustom content={getValue()?.address}>
                    <Link
                      href={`address/${getValue()?.address}`}
                      className="text-blue dark:text-[#6AB5DB] border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                    >
                      {formatTrxId(getValue()?.publicTag)}
                    </Link>
                  </TooltipCustom>
                  <button
                    className="flex items-center justify-center"
                    onClick={() => handleCopy(getValue())}
                  >
                    <TooltipCustom content="Copy address">
                      <CopyIcon />
                    </TooltipCustom>
                  </button>
                </div>
              </div>
            }
            containerStyle="gap-1"
            // className="text-secondary dark:text-secondaryDark"
          />
        );
      },
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.iconMethod, {
      id: "iconMethod",
      header: () => (
        <HeaderTable text="" textStyle="text-blue dark:text-[#6AB5DB]" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={ <div className="w-6 h-6 bg-[#00a1861a] rounded-full text-[#00a186] border border-[#00a18640] flex items-center justify-center"><ArrowRightIcon/></div>}
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.to, {
      id: "to",
      header: () => <HeaderTable text="To" textStyle=" dark:text-gray200" />,
      cell: ({ getValue }) => {
        return (
          <CellText
            icon={
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                  <TooltipCustom content={getValue()?.address}>
                    <Link
                      href={`address/${getValue()?.address}`}
                      className="text-blue dark:text-[#6AB5DB] border-cell-value px-1 py-[2px] dark:hover:bg-[#352b15] hover:bg-[#fbf1dc]   rounded-md  duration-150 ease-in-out"
                    >
                      {formatTrxId(getValue()?.publicTag)}
                    </Link>
                  </TooltipCustom>
                  <button
                    className="flex items-center justify-center"
                    onClick={() => handleCopy(getValue())}
                  >
                    <TooltipCustom content="Copy address">
                      <CopyIcon />
                    </TooltipCustom>
                  </button>
                </div>
              </div>
            }
            containerStyle="gap-1"
            // className="text-secondary dark:text-secondaryDark"
          />
        );
      },
      footer: (props) => props.column.id,
    }),
   
    
    columnHelper.accessor((row) => row.value, {
      id: "Value",
      header: () => (
        <HeaderTable text="Value" textStyle="dark:text-gray200 " />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={<span>{getValue()} VPC</span>}
          className="text-dark900 dark:text-gray200 text-[14.5px]"
          
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.fee, {
      id: "fee",
      header: () => (
        <HeaderTable text="Txn Fee" textStyle="dark:text-gray200" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="text-[14.5px]">
              <span className="text-[12.6px] text-[#65757D]">
                {" "}
                {getValue()}
              </span>
            </div>
          }
          className="text-dark900 dark:text-gray200 text-[14.5px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div>
      <DataTable
        data={defaultData}
        // fetchData={getListFeedbacks}
        columns={columns}
        showPagination={true}
        isDownloadData
        childrenHeaderTable={
          <div>
            <div className="text-[14.5px] text-dark900 dark:text-gray200">
              {" "}
              Total of 19,673,783 blocks &nbsp;
            </div>
            <span className="text-[12.5px] text-dark900 dark:text-gray400">
              (Showing blocks between #19673758 to #19673782)
            </span>
          </div>
        }
        viewMore={
          <Link
            href={"/coming-soon"}
            className="group flex items-center justify-center bg-[#f8f9fa] rounded-b-2xl  border-t border-[#e9ecef] gap-2 text-dark900 hover:text-[#066a9c] uppercase text-[14.5px] p-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View All Transaction
            <ArrowRightIcon color={isHovered ? "#066a9c" : "#6c757d"} />
          </Link>
        }
      />
    </div>
  );
};

