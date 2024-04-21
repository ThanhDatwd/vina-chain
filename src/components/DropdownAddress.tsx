import { ChevronDownIcon } from "@/assets/icons/CheckronDownIcon";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

interface IOptions {
  label: string;
  icon?: ReactNode;
  contentRight?: string;
  line?: boolean;
  link: string;
}

interface IDropdownAddress {
  defaultValue?: ReactNode;
  options?: IOptions[];
  children?: ReactNode;
  className?: string;
  classNameDetail?: string;
}

export const DropdownAddress = (props: IDropdownAddress) => {
  const { defaultValue, options, children, className , classNameDetail} = props;
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [heightDetail, setHeightDetail] = useState(0);
  const detailRef = useRef<any>(null);

  useEffect(() => {
    if (detailRef.current) {
      const height = detailRef.current.offsetHeight;
      setHeightDetail(height);
    }
  }, [isOpenDetail]);
  return (
    <div
      className={`relative  rounded-md cursor-pointer  h-[28.8px] flex items-center justify-center border-tag-address gap-1 hover:bg-[#e9ecef] ${className}`}
      onClick={() => setIsOpenDetail(!isOpenDetail)}
    >
      {defaultValue}
      <ChevronDownIcon color="#212529" />
      {isOpenDetail && (
        <div ref={detailRef} className={`absolute border border-[#e9ecef] bg-white boxShadow rounded-md ${classNameDetail}`} style={{bottom: `-${heightDetail + 2}px`}}>
          {children ? (
            children
          ) : (
            <div>
              {options?.map((item, index) => (
                <>
                  <Link
                    href={item.link}
                    key={index}
                    className="flex items-center gap-1 py-[6px] px-3 text-[12.5px] text-dark900 font-normal hover:bg-[#e9ecef] rounded-md"
                  >
                    {item.icon && item.icon}
                    <span className="whitespace-nowrap">{item.label}</span>
                    {item?.contentRight && (
                      <div className="px-[7px] py-[2px] bg-[#f8f9fa] text-gray550 text-[9.4px] rounded-md">
                        {item?.contentRight}
                      </div>
                    )}
                  </Link>
                  {item?.line && <div className="line my-2 border-[0.5px]" />}
                </>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
