import BigNumber from "bignumber.js";
import { usePrivateInstances } from "../../blockchain/privateInstance/instances";
import { ROUTER } from "../../blockchain/publicInstance/instance";

export const useSwap = () => {
    const { BUSD } = usePrivateInstances()

    const swap = async (admin: any, routerAddress: any, BUSDprice: any) => {
        try {
            let BUSDprice_wei = new BigNumber(BUSDprice).times(10**18)
            let deadLine = (Math.round(new Date().getTime() / 1000) + 900).toString()

            BUSD.methods.approve(routerAddress, BUSDprice_wei).send({
                from: admin
            }).on("transactionHash", (hash: any) => {
               alert(hash)
            }).on("receipt", (receipt: any) => {
               alert("approval successfull")
            }).on("error", (error: any, receipt: any) => {
                alert("approval failed")
            });

            //  .then(async()=>{
            //   setSwap("Swapping..");
            //     await Router_.methods
            //     .swapTokensForExactTokens(
            //       amountOutMin,
            //       amountIn,
            //       [TokenA_add, TokenB_add],
            //       admin,
            //       DeadLine
            //     )
            //     .send({ from: admin }).then(()=>{
            //       setSwap("Swap");
            //       alert("Swapped Successful");
            //       setPrice1("");
            //       setPrice2("");
            //     });
            //  })

        } catch (err) {
            console.log("swap", err);
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