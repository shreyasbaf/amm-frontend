import BigNumber from "bignumber.js"
import { ABI } from "../abi/Abi"
import { useCreateInstance } from "./useCreateInstance"



export const useApprove = () => {
    const {instance} = useCreateInstance()
    const checkAllowance = async (account: string, tokenType: string, library: Object) => {
        try {
            const tokenInstance: any = await instance(tokenType, library)
            return await tokenInstance?.methods.allowance(account, ABI.ROUTER.address).call()
        } catch (err) {
            console.error("error alowance", err);
        }
    }

    const approve = async (account: string, tokenType: string, library: any) => {
        try {
            const allowance = await checkAllowance(account, tokenType, library);
            if(!allowance){
                const maxAllowance = new BigNumber(2).pow(256).minus(1)
                const tokenInstance: any = await instance(tokenType, library)
                await tokenInstance.methods.approve(ABI.ROUTER.address, maxAllowance).send({
                    from: account
                }).on("transactionHash", (hash: any) => {
                    alert(hash)
                }).on("receipt", (receipt: any) => {
                    alert("approve token0 successfull")
                }).on("error", (error: any, receipt: any) => {
                    alert("approve token0 failed")
                })
            }
        } catch (err) {
            console.error("approve", err)
        }
    }

     
    return {
        approve
    }
}