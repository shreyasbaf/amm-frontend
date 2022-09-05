import Web3 from "web3";
import {ABI}  from "../abi/Abi"

export const web3 = new Web3(Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/")

export const ROUTER = new web3.eth.Contract(ABI.ROUTER.abi, ABI.ROUTER.address)
export const PAIR_PUBLIC = new web3.eth.Contract(ABI.PAIR.abi,ABI.PAIR.address)
