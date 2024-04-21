import Web3 from "web3";

const web3 = new Web3(process.env.NEXT_PUBLIC_VINACHAIN_URL as any);

export default web3;
