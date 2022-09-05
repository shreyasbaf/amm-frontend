import BigNumber from "bignumber.js";
import { useApprove } from "../../../../../blockchain/helperMethods/useApprove";
import { PAIR_PUBLIC, ROUTER } from "../../../../../blockchain/publicInstance/instance";


export const useAddLiquidity = () => {
    const { approve } = useApprove()
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


    const addLiquidity = async (account: string, token0: string | any, token1: string | any, token0Address: string, token1Address: string, deadLineValue: string, slippage: string, library: object) => {
        try {
            await approve(account, "BUSD", library)
            await approve(account, "BUST", library)
            const deadLine = (Math.round(new Date().getTime() / 1000) + (Number(deadLineValue) ? Number(deadLineValue) * 60 : 5 * 60)).toString()
            const token0_wei = new BigNumber(token0).times(10 ** 18)
            const token1_wei = new BigNumber(token1).times(10 ** 18)
            const minToken0 = Number(token0) - (Number(token0) * (Number(slippage) / 100))
            const minToken1 = Number(token1) - (Number(token1) * (Number(slippage) / 100))
            const minToken0_wei = new BigNumber(minToken0).times(10 ** 18)
            const minToken1_wei = new BigNumber(minToken1).times(10 ** 18)

            ROUTER.methods.addLiquidity(
                token0Address,
                token1Address,
                token0_wei.toFixed(0),
                token1_wei.toFixed(0),
                minToken0_wei.toFixed(0),
                minToken1_wei.toFixed(0),
                account,
                deadLine
            ).send({
                from: account
            }).on("transactionHash", (hash: any) => {
                alert(hash)
            }).on("receipt", (receipt: any) => {
                alert("liquidity added successfully")
            }).on("error", (error: any, receipt: any) => {
                alert("failed")
            })
        } catch (err) {
            console.error("addLiquidity", err);
        }
    }

    return {
        getBUSTAmount,
        getBUSDAmount,
        addLiquidity
    }

}

