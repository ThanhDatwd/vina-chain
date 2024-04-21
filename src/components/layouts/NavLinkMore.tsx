"use client";

import classNames from "classnames";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const MORE_OPTION = [
  {
    label: "Github",
    value: "github",
  },
];
const NavLinkMore = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className=" inline-block">
      <button
        className="inline-flex h-10 items-center px-4 py-2 text-base font-medium  hover:text-sky-600 focus:outline-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {t(`vinaScan.header.more.title`)}{" "}
        <svg
          className="-mr-1 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={classNames("absolute min-w-56 z-20 left-0 flex flex-col gap-8 md:gap-6 px-4 lg:px-14 container-xxl w-full  ")}
      >
        <div
          className={`navbar-list ${
            isHovered ? "show  border-t-[4px]" : ""
          }  absolute left-0 mt-2 inset-x-0 border-sky-500 w-full rounded-b-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100`}
        >
          {MORE_OPTION.map(
            (
              option: { label: any; value: string; children?: any },
              index: number
            ) => (
              <div key={index} className="py-1 px-2 w-fit">
                {option.children ?? option.label}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NavLinkMore;
