import { ArrowDownWideShort } from "@/assets/icons/ArrowDownWideShortIcon";
import { HelpIcon } from "@/assets/icons/HelpIcon";
import Link from "next/link";
import { ViewMoreButton } from "../ViewMoreButton";
import { DataTable } from "../tables/DataTable";
import { useTranslation } from "react-i18next";
import { createColumnHelper } from "@tanstack/react-table";
import { HeaderTable } from "../tables/HeaderTable";
import { EyeIcon } from "@/assets/icons/EyeIcon";
import { CellText } from "../tables/CellText";
import { FileLineIcon } from "@/assets/icons/FileLineIcon";
import { CopyIcon } from "@/assets/CopyIcon";
import { NoteStickyIcon } from "@/assets/icons/NoteStickyIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";

export const InternalTransaction = ({
  isToggle,
  onClickAdvancedMode,
}: {
  isToggle: boolean;
  onClickAdvancedMode: () => void;
}) => {
  const { t } = useTranslation();
  const columnHelper = createColumnHelper<any>();

  const handleCopy = (value: string) => {};

  const columns = [
    columnHelper.accessor((row) => row.txnHash, {
      id: "parentTransactionHash",
      cell: ({ getValue }) => (
        <CellText
          containerStyle=""
          className="text-[14.9px] text-blue italic text-left"
          text={getValue()}
        />
      ),
      header: () => (
        <HeaderTable text="Parent Transaction Hash" />
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
              <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center text-[14.5px] text-dark900">
                  <FileLineIcon />
                  {`${getValue().slice(0, 8)}...${getValue().slice(
                    getValue().length - 8,
                    getValue().length
                  )}`}
                </div>
                <button onClick={() => handleCopy(getValue())}>
                  <CopyIcon />
                </button>
              </div>
              <div className="flex items-center justify-center w-6 h-6 border border-[#00a18640] bg-[#00a1861a] rounded-full">
                <ArrowRightIcon width={10.15} height={10.5} color="#00a186"/>
              </div>
            </div>
          }
          containerStyle="gap-1"
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
    columnHelper.accessor((row) => row.id, {
      id: "id",
      cell: ({ getValue }) => (
        <CellText icon={
          <button className="py-[6px] px-2 rounded-md border border-[#e9ecef] hover:bg-[#e9ecef]">
            <NoteStickyIcon />
          </button>
        } />
      ),
      header: () => <HeaderTable />,
      footer: (props) => props.column.id,
    }),
  ];
  
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-4">
        <div className="text-[14.5px] text-dark900">
          View more zero value Internal Transactions in&nbsp;
          <Link
            href={`/address/id/advanced`}
            className="text-[14.5px] text-blue font-bold"
          >
            Advanced View mode
          </Link>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray550">
          <HelpIcon color={"#727b83"} width={16} height={16} />
          <span>ADVANCED MODE:</span>
          <div
            className={`relative flex items-center justify-center w-[32px] h-[16px] rounded-full border ml-1 ${
              isToggle
                ? "bg-[#0784c3] border-[#0784c3]"
                : "bg-white border-[#ced4d9]"
            } transition-all duration-700 ease-in-out`}
            onClick={onClickAdvancedMode}
          >
            <div
              className={`absolute w-3 h-3 rounded-full ${
                isToggle ? "bg-white right-[2px]" : "bg-[#ced4d9] left-[2px]"
              } transition-all duration-700 ease-in-out`}
            />
          </div>
        </div>
      </div>
      {isToggle && (
        <div>
          <DataTable
            // fetchData={getListFeedbacks}
            columns={columns}
            defaultHeaderTable={false}
            showPagination={false}
            childrenHeaderTable={
              <div className="flex items-center gap-2 text-[15px] text-dark900 p-4">
                <ArrowDownWideShort />
                <div>
                  Latest 25 internal transactions (
                  <Link href={"/coming-soon"} className="text-[15px] text-blue">
                    106,714
                  </Link>
                  )
                </div>
              </div>
            }
            viewMore={
              <ViewMoreButton
                label="View All Internal Transactions"
                link="/coming-soon"
              />
            }
          />
        </div>
      )}
    </div>
  );
};
