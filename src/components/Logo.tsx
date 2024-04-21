"use client";

import { getStaticURL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="w-10 h-10 z-20" href={"/"}>
      <Image
        src={`${getStaticURL()}/assets/images/logo.svg`}
        alt="metamask"
        width={68}
        height={68}
      />
    </Link>
  );
};
