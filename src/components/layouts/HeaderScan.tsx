import { CloseIcon } from "@/assets/icons/CloseIcon";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import { useTheme } from "@/hooks/useTheme";
import {
  VinaScanHeader
} from "@/utils/constants";
import { isDarkTheme } from "@/utils/theme";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LogoScan } from "../LogoScan";
import { MenuDropdown } from "../MenuDropdown";
import { FixedHeader } from "./FixedHeader";
import NavLink from "./NavLink";
import NavLinkMore from "./NavLinkMore";

export default function HeaderScan() {
  const { theme, changeTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative bg-white dark:bg-gray900">
      <FixedHeader />
      <nav
        className="relative md:pt-[55px] container-xxl flex flex-wrap items-center transition-all shadow-none duration-250 ease-soft-in lg:flex-nowrap lg:justify-start"
        navbar-scroll="true"
      >
        <div
          className="flex items-center  justify-between  grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto relative pb-2"
          id="navbar"
        >
          <Link href="/scan" className="flex items-center gap-2">
            <LogoScan />
          </Link>
          <div className="flex items-center">
            <div className="lg:flex items-center hidden ">
              {VinaScanHeader.map((item, index) => (
                <NavLink
                  key={index}
                  title={t(`vinaScan.header.${item.footerItemKey}.title`)}
                  className="w-56 left-0 top-8"
                  options={item.footerList.map((option) => {
                    return {
                      label: t(option.label),
                      children: (
                        <Link
                          href={option.link}
                          className="block px-4 py-1.5 text-sm bg-theme bg-theme-hover rounded-md  w-full text-left"
                        >
                          <div className=" rounded-md w-full">
                            {t(
                              `vinaScan.header.${item.footerItemKey}.${option.label}`
                            )}
                          </div>
                        </Link>
                      ),
                      value: option.link,
                    };
                  })}
                />
              ))}
              <NavLinkMore />
              <div className="border h-3 mx-1 w-[1px] border-gray-400 " />
              <div className="flex items-center gap-4 px-4 py-2 text-base font-medium  hover:text-sky-600">
                <Link
                  href="/login"
                  className="flex items-center gap-2 cursor-pointer "
                >
                  <UserIcon className="!w-5 !h-5" /> Sign in
                </Link>
                <div className="lg:hidden" onClick={toggleMenu}>
                  <MenuIcon color={isDarkTheme(theme) ? "#fff" : "#000"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full md:w-[38%] lg:w-[28%] xl:w-auto h-full">
        <div
          className={`z-20 max-w-auto  fixed inset-y-0 top-0 px-2 left-0 flex-wrap items-center justify-between overflow-y-auto border-0 p-0 shadow-none transition-all duration-300 w-full bg-white dark:bg-black ${
            isMenuOpen
              ? "translate-x-0 shadow-soft-xl"
              : "-translate-x-[-100%] md:-translate-x-[-200%]"
          } `}
        >
          <div className="flex justify-between mt-4">
            <div className="p-4" onClick={toggleMenu}>
              <CloseIcon color={isDarkTheme(theme) ? "#fff" : "#000"} />
            </div>
          </div>

          <div className="p-4 md:p-8 my-10 flex flex-col gap-6 md:gap-6 relative z-20">
            {VinaScanHeader.map((item, index) => (
              <MenuDropdown
                key={index}
                title={`vinaScan.header.${item.footerItemKey}`}
                options={item.footerList}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
