import BigNumber from "bignumber.js";
import { usePrivateInstances } from "../../blockchain/privateInstance/instances";
import { ROUTER } from "../../blockchain/publicInstance/instance";
import { ROUTER_ADDRESS } from "../../blockchain/publicInstance/router";

export const useSwap = () => {
    const { BUSD, BUST} = usePrivateInstances()

    const checkAllowance = async (admin: any, swapType: string) => {
        try {
            const allowanceValue = await (swapType == "BUSD" ? BUSD : BUST).methods.allowance(admin, ROUTER_ADDRESS).call()
            return allowanceValue
        } catch (err) {
            console.error("error alowance", err);
        }
    }

    const swapExactTokensForTokens = async (token0Price_wei: any, token1Price_wei: any, [token0Address, token1Address]: any, admin: any, deadLine: any) => {
        try {
            ROUTER.methods.swapExactTokensForTokens(
                token0Price_wei.toFixed(0),
                token1Price_wei.toFixed(0),
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

    const swapTokensForExactTokens = async (token0Price_wei: any, token1Price_wei: any, [token0Address, token1Address]: any, admin: any, deadLine: any) => {
        try {
            
            ROUTER.methods.swapTokensForExactTokens(
                token0Price_wei.toFixed(0),
                token1Price_wei.toFixed(0),
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

    const swap = async (admin: any, token0Price: any, token1Price: any, token0Address: any, token1Address: any, swapType: string) => {
        try {
            let token0Price_wei = new BigNumber(token0Price).times(10 ** 18)
            let token1Price_wei = new BigNumber(token1Price).times(10 ** 18)
            let maxAllowance = new BigNumber(2).pow(256).minus(1)
            let deadLine = (Math.round(new Date().getTime() / 1000) + 900).toString()
            let allowance = await checkAllowance(admin, swapType)
            allowance = new BigNumber(allowance).dividedBy(10 ** 18)
            if (Number(allowance) < Number(token0Price)) {
               ( swapType == "BUSD" ? BUSD : BUST).methods.approve(ROUTER_ADDRESS, maxAllowance.toFixed(0)).send({
                    from: admin
                }).on("transactionHash", (hash: any) => {
                    alert(hash)
                }).on("receipt", (receipt: any) => {
                    alert("approval successfull")
                    swapType == "BUSD" ? swapExactTokensForTokens(token0Price_wei, token1Price_wei, [token0Address, token1Address], admin, deadLine) 
                    : swapTokensForExactTokens(token0Price_wei, token1Price_wei, [token0Address, token1Address], admin, deadLine) 
                }).on("error", (error: any, receipt: any) => {
                    alert("approval failed")
                })
            } else {
                swapType == "BUSD" ? swapExactTokensForTokens(token0Price_wei, token1Price_wei, [token0Address, token1Address], admin, deadLine) : swapTokensForExactTokens(token0Price_wei, token1Price_wei, [token0Address, token1Address], admin, deadLine) 
            }
        } catch (err) {
            console.error("swap", err);
        }
    }

    const getOtherTokenPrice = async (busdPrice: any, busdAddress: any, bustAddress: any) => {
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
        getOtherTokenPrice,
        swap
    }
}