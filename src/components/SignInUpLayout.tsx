import Link from "next/link";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export const SignInUpLayout = ({
  subTitle,
  title,
  children,
}: {
  subTitle: string;
  title: string;
  children: ReactNode;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center w-full bg-bgColor px-3 py-12 lg:px-10 lg:pt-20 lg:pb-32">
      <div className="flex flex-col gap-5 w-full lg:w-fit boxShadow p-6 rounded-xl bg-white">
        <div className="flex flex-col items-center gap-2 ">
          <h1 className="text-[22.5px] font-meidum text-dark900">{title}</h1>
          <div className="text-[15px] text-gray550">
            {subTitle}&nbsp;
            <Link
              className="text-[#0784c3]"
              href={title === t("vinaScan.register.title") ? "/login" : "/register"}
            >
              {title === t("vinaScan.register.title") ? t("vinaScan.register.signInHere") : t("vinaScan.register.title") }
            </Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
