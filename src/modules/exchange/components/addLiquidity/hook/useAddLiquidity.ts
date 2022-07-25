import BigNumber from "bignumber.js";
import { PAIR_PUBLIC, ROUTER } from "../../../../../blockchain/publicInstance/instance";


export const useAddLiquidity = () => {


    const getBUSTAmount = async (token0: string) => {
        try {
            if (Number(token0)) {
                const token0_wei = new BigNumber(token0).times(10 ** 18)
                const res = await PAIR_PUBLIC.methods.getReserves().call()
                let bustValue = await ROUTER.methods.quote(token0_wei.toFixed(0), res._reserve0, res._reserve1).call()
                return new BigNumber(bustValue).dividedBy(10 ** 18).toString()
            } else return ""
        } catch (err) {
            console.error("getBUSTAmount", err)
        }
    }

    const getBUSDAmount = async (token1: string) => {
        try {
            if (Number(token1)) {
                const token1_wei = new BigNumber(token1).times(10 ** 18)
                const res = await PAIR_PUBLIC.methods.getReserves().call()
                let bustValue = await ROUTER.methods.quote(token1_wei.toFixed(0), res._reserve1, res._reserve0).call()
                return new BigNumber(bustValue).dividedBy(10 ** 18).toString()
            } else return ""
        } catch (err) {
            console.error("getBUSTAmount", err)
        }
    }

    return {
        getBUSTAmount,
        getBUSDAmount
    }

}

