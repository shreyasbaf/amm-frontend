import { useWeb3React } from "@web3-react/core"
import { BUSD_ABI, BUSD_ADDRESS } from "./busd";



export const usePrivateInstances = () => {

    const { library } = useWeb3React()

    let BUSD, BUST;

    if (library) {
        BUSD = new library.eth.Contract(BUSD_ABI, BUSD_ADDRESS)
    }

    return {
        BUSD
    }

}