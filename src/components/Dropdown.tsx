"use client";

import { DropdownCheckIcon } from "@/assets/icons/DropdownCheckIcon";
import { CSSProperties, FC, useEffect, useRef, useState } from "react";

interface Props {
  title?: string;
  defaultValue?: { label: string; value: string };
  reverse?: boolean;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  className?: string;
  containerStyle?: CSSProperties;
}

export const Dropdown: FC<Props> = ({
  defaultValue,
  title,
  reverse = false,
  options,
  onChange,
  className,
  containerStyle,
}) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [chosen, setChosen] = useState<string>("");
  const [defaultVal, setDefaultVal] = useState<{
    label: string;
    value: string;
  }>();

  useEffect(() => {
    if (defaultValue) {
      !reverse && onChange(defaultValue?.value as string);
      setDefaultVal(defaultValue);
    }
  }, [defaultValue]);

  ClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className={`relative inline-block text-right`} style={containerStyle} ref={ref}>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className={`inline-flex w-full text-[12.5px] justify-between gap-x-1.5 bg-[#F8F9FA] dark:bg-[#151515]   border  border-[#bdc5d133] text-[#666666] rounded-md px-3 py-1  whitespace-nowrap ${className}`}
        >
          {(defaultVal?.label as string) || chosen || title || "Options"}

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
      </div>
      <div
        className={`absolute ${isOpen ? "" : "hidden"} right-0 ${
          reverse ? "bottom-[120%] w-full" : "w-80"
        }  z-10 mt-2 origin-top-right rounded-md dark:bg-[#242422]  focus:outline-none bg-[#626261] border  border-[#bdc5d133] px-1 shadow-inner `}
      >
        <div className="py-1">
          {options.map((options, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(options.value);
                setChosen(options.label);
                setIsOpen(false);
                setDefaultVal({ value: "", label: "" });
              }}
              className={`relative px-4 text-[12.5px] flex  items-center justify-center gap-1 text-left  cursor-pointer text-[#ffff] ${options.value===defaultValue?.value&&"bg-[#589beb] "} rounded-md `}
            >
              {options.value===defaultValue?.value&&<div className="absolute left-1 top-1/2 -translate-y-1/2 text-[#ffff]"><DropdownCheckIcon width={16} height={16} /></div>}
              {options.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ClickOutside = (ref: any, onClickOutside: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
