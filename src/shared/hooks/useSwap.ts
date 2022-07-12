import BigNumber from "bignumber.js";
import { ROUTER } from "../../blockchain/publicInstance/instance";


export const useSwap = () => {

    const getBUST = async (busdPrice: any, busdAddress: any, bustAddress: any) => {
        try {
            if (Number(busdPrice)) {
                const busdPrice_wei = new BigNumber(busdPrice).times(10 ** 18)
                const BUST_Amount = await ROUTER.methods.getAmountsOut(busdPrice_wei.toFixed(0), [busdAddress, bustAddress]).call();
                let res = BUST_Amount[1]
                res = new BigNumber(res).dividedBy(10 ** 18)
                return res.toFixed(18)
            } else {
                return 0
            }

        } catch (err) {
            console.error(err)
        }
    }

    return {
        getBUST
    }
}