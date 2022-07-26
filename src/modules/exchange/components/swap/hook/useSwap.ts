import BigNumber from "bignumber.js";

import { usePrivateInstances } from "../../../../../blockchain/privateInstance/instances";
import { ROUTER } from "../../../../../blockchain/publicInstance/instance";
import { ROUTER_ADDRESS } from "../../../../../blockchain/publicInstance/router";

export const useSwap = () => {
    const { BUSD, BUST } = usePrivateInstances()

    const checkAllowance = async (admin: string, swapType: string) => {
        try {
            return await (swapType == "BUSD" ? BUSD : BUST).methods.allowance(admin, ROUTER_ADDRESS).call()
        } catch (err) {
            console.error("error alowance", err);
        }
    }

    const swapExactTokensForTokens = async (token0Price_wei: BigNumber, token1Price_wei: BigNumber, [token0Address, token1Address]: [string, string], admin: string, deadLine: string, slippage: string) => {
        try {
            let amountOutMin: any = Number(token1Price_wei.dividedBy(10 ** 18)) - (Number(token1Price_wei.dividedBy(10 ** 18)) * (Number(slippage) / 100))
            amountOutMin = new BigNumber(amountOutMin).times(10 ** 18)
            ROUTER.methods.swapExactTokensForTokens(
                token0Price_wei.toFixed(0),
                amountOutMin.toFixed(0),
                [token0Address, token1Address],
                admin,
                deadLine).send({
                    from: admin
                })
                .on("transactionHash", (hash: any) => {
                    alert(hash)
                }).on("receipt", (receipt: any) => {
                    alert("swap successfull")
                }).on("error", (error: any, receipt: any) => {
                    alert("swap failed")
                })
        } catch (err) {
            console.error("swapExactTokensForTokens", err);
        }
    }

    const swapTokensForExactTokens = async (token0Price_wei: BigNumber, token1Price_wei: BigNumber, [token0Address, token1Address]: [string, string], admin: string, deadLine: string, slippage: string) => {
        try {
            let amountInMax: any = Number(token1Price_wei.dividedBy(10 ** 18)) + (Number(token1Price_wei.dividedBy(10 ** 18)) * (Number(slippage) / 100))
            amountInMax = new BigNumber(amountInMax).times(10 ** 18)
            ROUTER.methods.swapTokensForExactTokens(
                token0Price_wei.toFixed(0),
                amountInMax.toFixed(0),
                [token0Address, token1Address],
                admin,
                deadLine).send({
                    from: admin
                })
                .on("transactionHash", (hash: any) => {
                    alert(hash)
                }).on("receipt", (receipt: any) => {
                    alert("swap successfull")
                }).on("error", (error: any, receipt: any) => {
                    alert("swap failed")
                })
        } catch (err) {
            console.error("swapExactTokensForTokens", err);
        }
    }

    const swap = async (admin: string, token0Price: string | any, token1Price: string | any, token0Address: string, token1Address: string, swapType: string, slippage: string, deadLineValue: string) => {
        try {
            const token0Price_wei = new BigNumber(token0Price).times(10 ** 18)
            const token1Price_wei = new BigNumber(token1Price).times(10 ** 18)
            const maxAllowance = new BigNumber(2).pow(256).minus(1)
            const deadLine = (Math.round(new Date().getTime() / 1000) + (Number(deadLineValue) ? Number(deadLineValue) * 60 : 5 * 60)).toString()
            let allowance = await checkAllowance(admin, swapType)
            allowance = new BigNumber(allowance).dividedBy(10 ** 18)
            if (Number(allowance) < Number(token0Price)) {
              await (swapType == "BUSD" ? BUSD : BUST).methods.approve(ROUTER_ADDRESS, maxAllowance.toFixed(0)).send({
                    from: admin
                }).on("transactionHash", (hash: any) => {
                    alert(hash)
                }).on("receipt", (receipt: any) => {
                    alert("approval successfull")
                }).on("error", (error: any, receipt: any) => {
                    alert("approval failed")
                })
            }
                
            swapType == "BUSD" ? swapExactTokensForTokens(token0Price_wei, token1Price_wei, [token0Address, token1Address], admin, deadLine, slippage) : swapTokensForExactTokens(token0Price_wei, token1Price_wei, [token0Address, token1Address], admin, deadLine, slippage)
            
        } catch (err) {
            console.error("swap", err);
        }
    }

    const getOtherTokenPrice = async (tokenPrice: any, token0Address: any, token1Address: any) => {
        try {
            if (Number(tokenPrice)) {
                const tokenPrice_wei = new BigNumber(tokenPrice).times(10 ** 18)
                const BUST_Amount = await ROUTER.methods.getAmountsOut(tokenPrice_wei.toFixed(0), [token0Address, token1Address]).call();
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
        getOtherTokenPrice,
        swap
    }
}