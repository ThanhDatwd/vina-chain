"use client";
import LightIcon from "@/assets/icons/LightIcon";
import { BlockAnalytic } from "@/components/block/BlockAnalytic";
import { BlockTable } from "@/components/block/BlockTable";
import { ScanLayout } from "@/components/layouts/ScanLayout";
import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const BlocksPage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <ScanLayout containerStyle="bg-[#FAFAFA] dark:bg-[#181818] dark:bg-primaryDark font-sans-serif relative">
      <div className=" container-xxl">
        <div className="flex flex-col gap-4 md:gap-6 px-3  md:px-0 lg:px-0">
          <div>
            <div className="py-5 flex flex-col  gap-2 border-b border-b-[#e9ecef] dark:border-b-[#222]">
              <div className="flex ">
                <h1 className="text-[18.75px] font-bold mr-1 text-[#212529] dark:text-[#FAFAFA]">
                  {t("block.title")}
                </h1>
              </div>
            </div>
            <div className="text-[14.5px] text-gray550 dark:text-gray400 py-4 ">
              <b>{t("block.sponsored")}: &nbsp; </b>

              <b>Stake:&nbsp;</b>
              <span>
                200% Bonus, 75k Raffle, Best VIP Program, Instant Withdrawals -
                Provably Fair. &nbsp;
              </span>
              <Link href={"coming-soon"} className="text-[#0784C3] font-bold">
                Claim Bonus
              </Link>
            </div>
          </div>
          <BlockAnalytic />
          <BlockTable/>
          <div className="flex gap-1">
            <div>
              <LightIcon color={theme === THEME.DARK ? "#F5F5F5" : "#000000"} />
            </div>
            <span className="text-[12.56px] text-gray550 dark:text-gray400">
              {t("block.note")}
            </span>
          </div>
        </div>
      </div>
    </ScanLayout>
  );
};

export default BlocksPage;
