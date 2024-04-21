import { LightBulbIcon } from "@/assets/icons/LightBulbIcon";
import Link from "next/link";

export const Info = () => {
  return (
    <div>
        <div className="flex flex-col gap-4 p-5 mb-3 rounded-xl bg-white border border-[#e9ecef] boxShadow text-[14.5px] text-dark900">
        <h3 className="font-bold text-dark900">OVERVIEW</h3>
        <span className="mb-8">
            Adventure Gold is the native ERC-20 token of the Loot non-fungible token
            (NFT) project. Loot is a text-based, randomized adventure gear generated
            and stored on-chain, created by social media network Vine co-founder Dom
            Hofmann.
        </span>
        </div>
        <div className="flex item-center text-[12.5px] text-gray550">
            <LightBulbIcon />
            A contract address hosts a smart contract, which is a set of code stored on the blockchain that runs when predetermined conditions are met. Learn more about addresses in our&nbsp;
            <Link href="/coming-soon" className="text-blue">Knowledge Base.</Link>
        </div>
    </div>
  );
};
