import BottomShapeIcon from "@/assets/icons/BottomShapeIcon";
import { getStaticURL } from "@/utils/constants";
import Image from "next/image";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export const TermAndPolicyWrapper = ({title, lastedDate, children}: {title: string; lastedDate: string; children: ReactNode}) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center px-3 lg:px-10 py-16 bg-[#fbfbfd]">
            <div className="w-full lg:w-[1012px]" style={{boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)"}}>
                <div className="relative">
                    <div className="flex flex-col-reverse gap-4 lg:flex-row justify-between p-8 pb-8 lg:pt-10 lg:pb-14 bg-[#081d35] rounded-xl">
                        <div className="flex flex-col gap-2 text-sm text-white">
                            <h2 className="text-3xl text-white">{title}</h2>
                            <span>{t("vinaScan.lastUpdated")}{" "}{lastedDate}</span>
                        </div>
                        <div>
                            <Image src={`${getStaticURL()}/assets/images/logo.svg`} alt="Logo Etherscan" width={100} height={100}/>
                        </div>
                    </div>
                    <figure className="w-full absolute bottom-0">
                    <BottomShapeIcon className="w-full"/>
                    </figure>
                </div>
                {children}
            </div>
        </div>
    )
}