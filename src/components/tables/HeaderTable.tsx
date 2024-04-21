"use client";

import { FC, ReactNode } from "react";

export const HeaderTable: FC<{
  text?: string;
  icon?: ReactNode;
  textStyle?: string;
  containerStyle?: string;
}> = ({ text, icon, textStyle = "text-dark900", containerStyle }) => {
  return (
    <div className={`flex items-center gap-1 ${containerStyle}`}>
      <div className={`font-bold items-center whitespace-nowrap text-[12.5px] ${textStyle}`}>
        {text}
      </div>
      {icon && icon}
    </div>
  );
};
