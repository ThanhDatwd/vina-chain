import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import Link from "next/link";
import { useState } from "react";

export const ViewMoreButton = ({
  label,
  link,
}: {
  label: string;
  link: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className="group flex items-center justify-center bg-[#f8f9fa] rounded-b-2xl  border-t border-[#e9ecef] gap-2 text-gray550 hover:text-[#066a9c] uppercase text-xs p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      <ArrowRightIcon color={isHovered ? "#066a9c" : "#6c757d"} />
    </Link>
  );
};
