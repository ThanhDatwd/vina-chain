import { ArrowNextIcon } from "@/assets/icons/ArrowNextIcon";
import { DocIcon } from "@/assets/icons/DocIcon";
import { useTheme } from "@/hooks/useTheme";
import {
  formatTrxHash,
  formatTrxId,
  generateRandomEthereumAddress,
  generateRandomHash,
} from "@/utils/formatTrxId";
import { isDarkTheme } from "@/utils/theme";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import { LoadingSpinner } from "../LoadingSpinner";

export const LatestTransaction = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [loadingTransaction, setLoadingTransaction] = useState<boolean>(false);
  const [listTransaction, setListTransaction] = useState<any>([]);

  const generateRandomTransaction = () => ({
    hash: generateRandomHash(),
    timestamp: `${Math.floor(Math.random() * 60)} seconds ago`,
    from: generateRandomEthereumAddress(),
    to: generateRandomEthereumAddress(),
    amount: `${(Math.random() * 0.2 + 0.05).toFixed(4)} USDV`,
  });

  const handleFetchData = async () => {
    const dataTransaction = Array.from(
      { length: 7 },
      generateRandomTransaction
    );

    setListTransaction(dataTransaction);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <tbody className="">
        {loadingTransaction ? (
          <tr>
            <td colSpan={3} rowSpan={7}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-20 h-20">
                  <LoadingSpinner />
                </div>
              </div>
            </td>
          </tr>
        ) : (
          listTransaction?.map((item: any, index: number) => (
            <tr
              key={index}
              className={`p-4 border-b ${
                index === listTransaction.length - 1 ? "" : "border-[#DCDCDC]"
              }`}
            >
              <td className="px-4 pl-4 md:pr-2 py-4">
                <div className=" flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                  <Link
                    href="/coming-soon"
                    className="hidden md:block cursor-pointer"
                  >
                    {/* Assuming DocIcon is a component */}
                    <DocIcon
                      bg={isDarkTheme(theme) ? "#1E1E22" : "#F6F6F6"}
                      color={isDarkTheme(theme) ? "#FFF" : "#333"}
                    />
                  </Link>
                  <div className="flex md:flex-col">
                    <Link
                      href={"/coming-soon"}
                      className="text-[14px] hover:underline text-blue dark:text-[#DA6C1D] mr-1"
                    >
                      {formatTrxHash(item.hash)}
                    </Link>
                    <div className="text-[12px]">{item.timestamp}</div>
                  </div>
                  <div className="flex flex-col gap-0 md:hidden">
                    <div className="text-[14px]">
                      From{" "}
                      <Link
                        href={"/coming-soon"}
                        className="hover:underline text-blue dark:text-[#DA6C1D]"
                      >
                        {formatTrxId(item.from)}
                      </Link>
                    </div>
                    <div className="text-[14px]">
                      To{" "}
                      <Link
                        href={"/coming-soon"}
                        className="hover:underline text-blue dark:text-[#DA6C1D]"
                      >
                        {formatTrxId(item.to)}
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-2 pr-4 py-4 hidden md:table-cell" align="left">
                <div>
                  <div className="text-[14.5px]">
                    From{" "}
                    <Link
                      href={"/coming-soon"}
                      className="hover:underline text-blue dark:text-[#DA6C1D]"
                    >
                      {formatTrxId(item.from)}
                    </Link>
                  </div>
                  <div className="text-[14.5px]">
                    To{" "}
                    <Link
                      href={"/coming-soon"}
                      className="hover:underline text-blue dark:text-[#DA6C1D]"
                    >
                      {formatTrxId(item.to)}
                    </Link>{" "}
                  </div>
                </div>
              </td>
              <td className="px-2 pr-4 py-4 hidden md:table-cell" align="right">
                <div className="p-1 border w-fit border-[#DCDCDC] text-[11px] rounded-lg ">
                  {item.amount}
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={3}
            align="center"
            className="border-t border-[#DCDCDC] p-4"
          >
            <Link
              href={"/txs"}
              className="w-full flex items-center justify-center gap-2 hover:underline hover:text-blue dark:hover:text-[#DA6C1D]"
            >
              <span className="mb-1">
                {t("vinaScan.history.transaction.viewAll")}
              </span>{" "}
              <ArrowNextIcon color={isDarkTheme(theme) ? "#FFF" : "#333"} />
            </Link>
          </td>
        </tr>
      </tfoot>
    </>
  );
};
