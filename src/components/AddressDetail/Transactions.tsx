import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { CellText } from "../tables/CellText";
import { CopyIcon } from "@/assets/CopyIcon";
import Link from "next/link";
import { DownloadIcon } from "@/assets/icons/DownloadIcon";
import { DropdownAddress } from "../DropdownAddress";
import { FilterIcon } from "@/assets/icons/FilterIcon";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { useState } from "react";
import { ViewMoreButton } from "../ViewMoreButton";

export const Transactions = () => {
  const { t } = useTranslation();
  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = (value: string) => {

  }

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => (
        <HeaderTable
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      cell: () => (
        <CellText
          containerStyle="py-2 px-2 rounded-md border border-[#e9ecef]"
          icon={<EyeIcon color={"#333"} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnHash, {
      id: "transactionHash",
      cell: ({ getValue }) => (
        <CellText
          containerStyle=""
          className="text-[14.9px] text-blue italic text-left"
          text={getValue()}
        />
      ),
      header: () => (
        <HeaderTable text={t("vinaScan.address.transactionHash")} />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.method, {
      id: "method",
      cell: ({ getValue }) => (
        <CellText text={getValue()} containerStyle="block-custom" />
      ),
      header: () => (
        <HeaderTable
          text="Method"
          icon={<HelpIcon color={"#727b83"} width={16} height={16} />}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.block, {
      id: "block",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-blue text-[15px]" />
      ),
      header: () => <HeaderTable text="Block" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.age, {
      id: "age",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-dark900 text-[15px]" />
      ),
      header: () => <HeaderTable text="Age" textStyle="text-blue" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.from, {
      id: "from",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center cursor-pointer">
                <div className="text-blue italic">{`${getValue().slice(
                  0,
                  8
                )}...${getValue().slice(
                  getValue().length - 8,
                  getValue().length
                )}`}</div>
                <button onClick={() => handleCopy(getValue())}>
                  <CopyIcon />
                </button>
              </div>
              <div className="block-custom border-[#00a18640] text-[#00a186] bg-[#00a1861a]">
                IN
              </div>
            </div>
          }
          containerStyle="gap-1"
          className="text-secondary dark:text-secondaryDark"
        />
      ),
      header: () => <HeaderTable text="From" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.to, {
      id: "to",
      cell: ({ getValue }) => (
        <CellText
          icon={
            <div className="flex gap-2 cursor-pointer">
              <span className="text-blue italic">{getValue()}</span>
              <button onClick={() => handleCopy(getValue())}>
                <CopyIcon />
              </button>
            </div>
          }
          containerStyle="gap-[10px]"
          className="text-secondary dark:text-secondaryDark"
        />
      ),
      header: () => <HeaderTable text="To" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.value, {
      id: "value",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-[15px] text-dark900" />
      ),
      header: () => <HeaderTable text="Value" />,
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.txnFee, {
      id: "txnFee",
      cell: ({ getValue }) => (
        <CellText text={getValue()} className="text-gray550 text-xs" />
      ),
      header: () => <HeaderTable text="Txn Fee" textStyle="text-blue" />,
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div>
      <DataTable
        // fetchData={getListFeedbacks}
        columns={columns}
        defaultHeaderTable={false}
        showPagination={false}
        childrenHeaderTable={
          <div className="flex items-center justify-between p-4 md:p-5">
            <div className="text-[15px] text-dark900">
              Latest 25 from a total of &nbsp;
              <Link href={"/coming-soon"} className="text-[15px] text-blue">
                106,714
              </Link>
              &nbsp; transactions (+{" "}
              <Link href={"/coming-soon"} className="text-[15px] text-blue">
                1 Pending
              </Link>
              )
            </div>
            <div className="flex items-center gap-2">
              <button className="flex gap-2 items-center text-[12.5px] text-dark900 border border-[#e9ecef] hover:bg-[#e9ecef] py-1 px-2 rounded-md">
                <DownloadIcon />
                Download Page Data
              </button>
              <DropdownAddress defaultValue={<FilterIcon />} />
            </div>
          </div>
        }
        viewMore={
          <ViewMoreButton label="View All Transactions" link="/coming-soon"/>
        }
      />
    </div>
  );
};
