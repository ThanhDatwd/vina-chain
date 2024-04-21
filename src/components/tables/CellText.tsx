"use client";

import { FC, ReactNode } from "react";

export const CellText: FC<{
  text?: string|number|ReactNode;
  containerStyle?: string;
  className?: string;
  icon?: ReactNode;
}> = ({ text, containerStyle, className, icon }) => {
  return (
    <div className={containerStyle}>
      <div
        className={`flex-1 whitespace-nowrap max-w-[500px] truncate ${className}`}
      >
        {text}
      </div>
      {icon && icon}
    </div>
  );
};
