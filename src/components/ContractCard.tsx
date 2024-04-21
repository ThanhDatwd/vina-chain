import { ReactNode } from "react";

export const ContractCard = ({ title, children }: { title: String; children: ReactNode }) => {
  return (
    <div className="p-4 flex flex-col gap-5 border border-[#e9ecef] rounded-[11px] bg-white">
      <h3 className="text-[15px] text-dark900 font-semibold">{title}</h3>
      {children}
    </div>
  );
};
