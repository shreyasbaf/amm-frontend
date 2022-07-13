import { useWeb3React } from "@web3-react/core"
import { BUSD_ABI, BUSD_ADDRESS } from "./busd";
import { BUST_ABI, BUST_ADDRESS } from "./bust";
import { PAIR_ABI, PAIR_ADDRESS } from "./pair";



export const usePrivateInstances = () => {

    const { library } = useWeb3React()

    let BUSD, BUST, PAIR;

    if (library) {
        BUSD = new library.eth.Contract(BUSD_ABI, BUSD_ADDRESS)
        PAIR = new library.eth.Contract(PAIR_ABI, PAIR_ADDRESS)
        BUST = new library.eth.Contract(BUST_ABI, BUST_ADDRESS)
        
    }

    return {
        BUSD,
        PAIR,
        BUST
    }

}