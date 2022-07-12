import Web3 from "web3";
import { ROUTER_ABI, ROUTER_ADDRESS } from "./router";

const web3 = new Web3(Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545/")

export const ROUTER = new web3.eth.Contract(ROUTER_ABI,ROUTER_ADDRESS)
