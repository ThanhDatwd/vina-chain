import React from "react";
import { PlacesType, Tooltip } from "react-tooltip";

interface IProps {
  position?: PlacesType;
  content: string;
  children: React.ReactNode;
}
const convertToClassName = (text: string) => {
  if (text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, "-")
      .replace(/0/g, "");
  }
  return undefined;
};

export const TooltipCustom = ({ position, content, children }: IProps) => {
  return (
    <>
      {convertToClassName(content) && (
        <Tooltip
          anchorSelect={"." + convertToClassName(content)}
          place={position}
          style={{
            backgroundColor: "#13293f",
            color: "#fff",
            opacity: 80,
            zIndex: 100,
            borderRadius: "8px",
            padding: "6px 8px",
          }}
          render={() => (
            <div className="max-w-xs text-center text-xs">{content}</div>
          )}
        />
      )}
      <div className={`${convertToClassName(content)} inline-block`}>
        {children}
      </div>
    </>
  );
};
