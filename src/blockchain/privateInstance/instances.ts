import { useWeb3React } from "@web3-react/core"
import { ABI } from "../abi/Abi";

export const usePrivateInstances = () => {

    const { library } = useWeb3React()

    let BUSD, BUST, PAIR;

    if (library) {
        BUSD = new library.eth.Contract(ABI.BUSD.abi, ABI.BUSD.address)
        PAIR = new library.eth.Contract(ABI.PAIR.abi, ABI.PAIR.address)
        BUST = new library.eth.Contract(ABI.BUST.abi, ABI.BUST.address)
        
    }

    return {
        BUSD,
        PAIR,
        BUST
    }

}