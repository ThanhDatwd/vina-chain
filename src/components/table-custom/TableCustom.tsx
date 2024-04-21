import { TableType } from "@/utils/constants";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import { LatestBlock } from "./LatestBlock";
import { LatestTransaction } from "./LatestTransaction";
import { TopModal } from "../controls/TopModal";

interface Props {
  defaultType: TableType;
}

export const TableCustom: FC<Props> = ({ defaultType }) => {
  const { t } = useTranslation();
  const [tableType, setTableType] = useState<TableType>(defaultType);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderTitle = () => {
    switch (tableType) {
      case TableType.LATEST_BLOCKS:
        return "vinaScan.history.block.title";

      case TableType.LATEST_TRANSACTIONS:
        return "vinaScan.history.transaction.title";

      case TableType.HOT_CONTRACTS:
        return "";

      case TableType.TOP_GUZZLERS:
        return "";

      default:
        return "vinaScan.history.block.title";
    }
  };

  const renderTableData = () => {
    switch (tableType) {
      case TableType.LATEST_BLOCKS:
        return <LatestBlock />;

      case TableType.LATEST_TRANSACTIONS:
        return <LatestTransaction />;

      case TableType.HOT_CONTRACTS:
        return <LatestBlock />;

      case TableType.TOP_GUZZLERS:
        return <LatestBlock />;

      default:
        return <LatestBlock />;
    }
  };

  const toggleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const changeTableType = (tableType: TableType) => {
    setTableType(tableType);
  };

  return (
    <>
      <div className="flex justify-between items-center border-b border-[#e9ecef]">
        <div className="p-4">{t(renderTitle())}</div>
        <TopModal
          isOpen={isOpen}
          toggleOpenModal={toggleOpenModal}
          titleModal="Title Modal"
        >
          <div>
            <div className="p-4">
              <div>
                Customize this card by selecting one of the options below.
              </div>
              <div>ADVANCED FILTER</div>
              <div>
                <div className="flex items-center gap-1 border w-fit px-2 py-1 rounded-lg cursor-pointer">
                  <input type="radio" id="filter" className=" cursor-pointer" />
                  <label htmlFor="filter" className=" cursor-pointer">
                    Saved Filters
                  </label>
                </div>
              </div>
              <div>
                <div>PRESET</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex items-center gap-1 border w-full px-2 py-1 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      id="preset"
                      name="preset"
                      className=" cursor-pointer"
                    />
                    <label htmlFor="preset" className=" cursor-pointer">
                      Saved Filters
                    </label>
                  </div>
                  <div className="flex items-center gap-1 border w-full px-2 py-1 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      id="preset1"
                      name="preset"
                      className=" cursor-pointer"
                    />
                    <label htmlFor="preset1" className=" cursor-pointer">
                      Saved Filters
                    </label>
                  </div>
                  <div className="flex items-center gap-1 border w-full px-2 py-1 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      id="preset2"
                      name="preset"
                      className=" cursor-pointer"
                    />
                    <label htmlFor="preset2" className=" cursor-pointer">
                      Saved Filters
                    </label>
                  </div>
                  <div className="flex items-center gap-1 border w-full px-2 py-1 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      id="preset3"
                      name="preset"
                      className=" cursor-pointer"
                    />
                    <label htmlFor="preset3" className=" cursor-pointer">
                      Saved Filters
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 border-t">
              <div className="flex justify-end items-center gap-3 p-4">
                <button className="hover:bg-gray-300 px-3 py-1.5 duration-300 rounded-md">
                  Close
                </button>
                <button className="bg-[#0784C3] px-3 py-1.5 text-white rounded-md hover:bg-[#0870A6] duration-300">
                  Save Change
                </button>
              </div>
            </div>
          </div>
        </TopModal>
        <div className="p-4">
          <div
            onClick={toggleOpenModal}
            className="bg-white text-black flex gap-1.5 items-center border border-[#e9ecef] px-1.5 py-1 rounded text-[12.7px] cursor-pointer hover:bg-[#E9ECEF] duration-200"
          >
            <FontAwesomeIcon icon={faBorderAll} />
            {t("customize")}
          </div>
        </div>
      </div>
      <table className="w-full">{renderTableData()}</table>
    </>
  );
};
