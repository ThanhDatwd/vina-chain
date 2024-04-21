import { ArrowUpRightSquareIcon } from "@/assets/icons/ArrowUpRightSquareIcon";
import { CaretDownIcon } from "@/assets/icons/CaretDownIcon";
import { CaretTopIcon } from "@/assets/icons/CaretTopIcon";
import { ChevronDownIcon } from "@/assets/icons/CheckronDownIcon";
import { CloseIcon } from "@/assets/icons/CloseIcon";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { EnthereumIcon } from "@/assets/icons/EnthereumIcon";
import { ListCheckIcon } from "@/assets/icons/ListCheckIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import { QRCodeIcon } from "@/assets/icons/QRCodeIcon";
import { StarIcon } from "@/assets/icons/StarIcon";
import { TagIcon } from "@/assets/icons/TagIcon";
import { WalletIcon } from "@/assets/icons/WalletIcon";
import { Info } from "@/components/AddressDetail/Info";
import { InternalTransaction } from "@/components/AddressDetail/InternalTransaction";
import { TokenTransfer } from "@/components/AddressDetail/TokenTransfer";
import { Transactions } from "@/components/AddressDetail/Transactions";
import { ContractCard } from "@/components/ContractCard";
import { DropdownAddress } from "@/components/DropdownAddress";
import { Tabs } from "@/components/Tabs";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import {
    BLOCK_SCAN_DATA,
    MENU_TOKEN_DATA,
    TOKEN_HOLDINGS_DATA,
    getStaticURL,
} from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AddressCtx } from "./AddressDetail/AdressDetailProvider";
import { NFTTransfer } from "./AddressDetail/NFTTransfer";

export const AddressDetail = () => {
  const { t } = useTranslation();
  const { toggleAdvanceMode, setToggleAdvanceMode } = useContext(AddressCtx);
  const router = useRouter();

  const handleAdvancedMode = () => {
    setToggleAdvanceMode(!toggleAdvanceMode);
    if(!toggleAdvanceMode) {
      router.push(`/address/id/${window.location.hash}`)
    } else {
      router.push(`/address/id/advanced/${window.location.hash}`)
    }
  }

  const datatabs = [
    {
      hash: "",
      label: t("vinaScan.address.transaction"),
      content: <Transactions />,
    },
    {
      hash: "internaltx",
      label: t("vinaScan.address.internalTransactions"),
      content: <InternalTransaction isToggle={toggleAdvanceMode} onClickAdvancedMode={handleAdvancedMode}/>,
    },
    {
      hash: "tokentxns",
      label: t("vinaScan.address.tokenTransfers"),
      content: <TokenTransfer />,
    },
    {
      hash: "nfttransfers",
      label: t("vinaScan.address.nftTransfers"),
      content: <NFTTransfer />,
    },
    {
      hash: "code",
      label: t("vinaScan.address.contract"),
      content: <></>,
    },
    {
      hash: "events",
      label: t("vinaScan.address.events"),
      content: <></>,
    },
    {
      hash: "analytics",
      label: t("vinaScan.address.analytics"),
      content: <></>,
    },
    {
      hash: "multichain-portfolio",
      label: t("vinaScan.address.multichainPortfolio"),
      content: <></>,
    },
    {
      hash: "notes",
      label: t("vinaScan.address.info"),
      content: <Info />,
    },
  ];

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-primaryDark">
      <div className="px-3 lg:px-10 lg:pb-12">
        <div className="flex flex-col lg:flex-row justify-between border-b border-[#e9ecef]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 py-5 text-[15px] text-dark900">
            <div className="flex flex-col lg:flex-row gap-2">
              <img
                src={`${getStaticURL()}/assets/images/download.png`}
                alt="Download"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-[18.75px] font-medium">Contract</span>
            </div>
            <span>0x32353A6C91143bfd6C7d363B546e62a9A2489A20</span>
            <div className="flex items-center gap-3 ml-1">
              <CopyIcon />
              <QRCodeIcon />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="button-address">
              {t("vinaScan.address.buy")}
              <ChevronDownIcon />
            </button>
            <button className="button-address">
              {t("vinaScan.address.exchange")}
              <ChevronDownIcon />
            </button>
            <button className="button-address">
              {t("vinaScan.address.play")}
              <ChevronDownIcon />
            </button>
            <button className="button-address">
              {t("vinaScan.address.gaming")}
              <ChevronDownIcon />
            </button>
          </div>
        </div>
        <div className="lg:flex lg:items-center py-4 mb-3 text-[15px] text-gray550">
          <strong>{t("vinaScan.address.sponsored")}</strong>&nbsp;
          <img src={`${getStaticURL()}/assets/images/opz_20.webp`} alt="OPZ" />
          &nbsp;
          <strong>{t("vinaScan.address.opzTokenPresale")}</strong>
          <span>{t("vinaScan.address.theFirstAIPoweredWallet")}</span>&nbsp;
          <Link href="/coming-soon" className="text-blue font-semibold">
            {t("vinaScan.address.buyBeforeListings")}
          </Link>
        </div>
        <div className="flex justify-between p-[10.4px] mb-3 bg-[#e9ecef] rounded-lg">
          <div className="text-[15px] text-[#495057]">
            {t("vinaScan.address.tokenAir")}
            <Link href={"/coming-soon"} className="text-blue">
              &nbsp;
              {t("vinaScan.address.thisAnnouncement")}
            </Link>
          </div>
          <button>
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 justify-between py-2">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-[2px] border-tag-address bg-[#f0f1f3]">
              <TagIcon />
              {t("vinaScan.address.adventureGold")}
              <ArrowUpRightSquareIcon />
            </div>
            <div className="border-tag-address text-[#00a186] border-[#00a18640] bg-[#00a1861a]">
              {t("vinaScan.address.sourceCode")}
            </div>
            <div className="border-tag-address">
              {t("vinaScan.address.tokenContract")}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="border-tag-address py-1 px-2 rounded-md ">
              <StarIcon />
            </button>
            <DropdownAddress
              defaultValue={<ListCheckIcon />}
              options={MENU_TOKEN_DATA}
              className="py-1 px-2 z-20"
              classNameDetail="p-2 left-0 lg:left-auto lg:right-0"
            />
          </div>
        </div>
        <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-3 text-xs text-gray550">
          <ContractCard title={t("vinaScan.address.overview")}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span>{t("vinaScan.address.ethBalance")}</span>
                <div className="flex gap-1">
                  <EnthereumIcon />
                  <span className="text-dark900">0 ETH</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span>{t("vinaScan.address.ethValue")}</span>
                <span className="text-dark900">$0.00</span>
              </div>
              <div className="flex flex-col gap-1">
                <span>{t("vinaScan.address.tokenHoldings")}</span>
                <div className="flex gap-2">
                  <DropdownAddress
                    defaultValue={
                      <div className="flex gap-1 items-center text-[15px] text-dark900 font-normal">
                        $3,403.12
                        <span className="text-[12.7px] text-gray550">{`4 (${t(
                          "vinaScan.address.tokens"
                        )})`}</span>
                      </div>
                    }
                    className="flex-1 justify-between z-20"
                    classNameDetail="p-0 left-0"
                  >
                    <>
                      <div className="lg:min-w-[400px] boxShadow bg-white p-2">
                        <input
                          type="text"
                          className="w-full py-[4.8px] px-[9.6px] bg-[#f8f9fa] border border-[#e9ecef] rounded-md mb-4"
                          placeholder="Search for Token Name"
                        />
                        <div className="flex justify-between items-center bg-[#f8f9fa] rounded-lg mb-1 py-[6px] px-2">
                          <span>{`ERC-20 ${t(
                            "vinaScan.address.tokens"
                          )} (3)`}</span>
                          <div className="relative flex flex-col items-center justify-center w-[26px] h-[21px] border border-[#e9ecef] rounded-md">
                            <CaretTopIcon className="absolute top-[1px]" />
                            <CaretDownIcon className="absolute bottom-0" />
                          </div>
                        </div>
                        <div>
                          {TOKEN_HOLDINGS_DATA.map((item, index) => (
                            <div key={index} className="mb-1">
                              <Link
                                href={item.link}
                                className="flex justify-between text-[12.5px] font-normal text-[#081D35] py-[4.8px] px-2 rounded-md hover:bg-[#e9ecef]"
                              >
                                <div className="flex flex-col">
                                  <div>
                                    {/* icon */}
                                    <span>{item.title}</span>
                                  </div>
                                  <span className="text-[#6C7570]">
                                    {item.amountNest}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span>{item.amount}</span>
                                  <span className="text-[#6C7570] text-[11px]">
                                    {item.fee}
                                  </span>
                                </div>
                              </Link>
                              <div className="line mt-2 mb-2 border-[0.5px]" />
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="py-[6px] px-2 rounded-md bg-[#f8f9fa]">
                            {`NFT ${t("vinaScan.address.tokens")} (1)`}
                          </div>
                          <div className="flex justify-between items-center text-[12.5px] text-[#081D35] py-[4.8px] px-2 hover:bg-[#f8f9fa] rounded-md font-normal">
                            <div className="flex items-center">
                              {/* image */}
                              <span>ERC-1155 TOKEN*</span>
                            </div>
                            <span className="text-[#6C7570]">
                              {" "}
                              [Suspicious]
                            </span>
                          </div>
                        </div>
                        <div className="line mt-2 mb-2 border-[0.5px]" />
                      </div>
                      <div className="flex gap-1 items-center justify-center py-[14px] px-3 bg-[#f8f9fa] border-t border-[#e9ecef] text-[#6C758C] text-xs uppercase">
                        <WalletIcon width={20} height={12} color="#6C758C" />
                        <span>View All Holdings</span>
                      </div>
                    </>
                  </DropdownAddress>
                  <Link
                    href={"/coming-soon"}
                    className="p-2 rounded-lg bg-[#e9ecef]"
                  >
                    <WalletIcon />
                  </Link>
                </div>
              </div>
            </div>
          </ContractCard>
          <ContractCard title={t("vinaScan.address.moreInfo")}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span>{t("vinaScan.address.privateNameTags")}</span>
                <div className="flex gap-1 items-center w-fit py-1 px-4 border-dashed border border-[#e9ecef] rounded-full text-xs text-dark900">
                  <PlusIcon width={16} height={16} color="#212529" />
                  <span>{t("vinaScan.address.add")}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span>{t("vinaScan.address.contractCreator")}</span>
                <div className="flex items-center text-[15px]">
                  <span className="text-blue">
                    {t("vinaScan.address.deployer")}&nbsp;
                  </span>
                  <CopyIcon />
                  &nbsp;
                  {t("vinaScan.address.atTxn")}&nbsp;
                  <span className="text-blue">{`${"0xcaee8675c0a877913fec541cc2321bb5176562f746cda6f0200664e26ef95b60".slice(
                    0,
                    13
                  )}...`}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span>{t("vinaScan.address.tokenTracker")}</span>
                <div className="flex items-center gap-1 text-[15px]">
                  <img
                    src={`${getStaticURL()}/assets/images/lootnft_32.webp`}
                    alt="Lootnft"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-blue">
                    {t("vinaScan.address.adventureGoldAGLD")}
                  </span>
                  (@$1.0899)
                </div>
              </div>
            </div>
          </ContractCard>
          <ContractCard title={t("vinaScan.address.multichainInfo")}>
            <div>
              <button className="flex py-1 px-2 bg-[#e9ecef] rounded-md text-xs text-[#081d35]">
                <strong>$3,498</strong>&nbsp;
                {`(${t("vinaScan.address.multichainPortfolio")})`}
              </button>
            </div>
            <div className="flex items-center gap-1 text-[15px] text-dark900">
              {t("vinaScan.address.addressFoundVia")}
              <DropdownAddress
                options={BLOCK_SCAN_DATA}
                defaultValue={
                  <span className="font-normal">
                    {t("vinaScan.address.blockscan")}
                  </span>
                }
                className="w-fit"
                classNameDetail="p-2"
              />
            </div>
          </ContractCard>
        </div>
        <Tabs
          tabs={datatabs}
          tabRightContent={
            <DropdownAddress
              defaultValue={
                <>
                  <Link
                    href={"/coming-soon"}
                    className="relative flex items-center text-[12.5px] text-dark900 font-normal pr-4"
                  >
                    <span>Advanced Filter</span>
                  </Link>
                  <div className="absolute h-full w-[1px] bg-[#e9ecef] top-0 right-[28px]" />
                </>
              }
            />
          }
          className="pt-8"
        />
      </div>
    </ScanLayout>
  );
};
