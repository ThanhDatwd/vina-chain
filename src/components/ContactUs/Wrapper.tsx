import { ReactNode } from "react";

export const Wrapper = ({title, children, className} : {title: string; children: ReactNode; className?: string}) => {
    return (
        <div className={`${className} rounded-[11px] border border-[#e9ecef]`}>
            <h3 className="text-[15px] font-medium text-black200 p-4 border-b border-[#e9ecef]">{title}</h3>
            <div className="p-4">{children}</div>
        </div>
    )
}