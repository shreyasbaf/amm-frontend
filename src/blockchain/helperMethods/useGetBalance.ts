import BigNumber from "bignumber.js"
import { useCreateInstance } from "./useCreateInstance"


export const useGetBalance = () => {
    const {instance} = useCreateInstance()

    const getBalance = async(account: string, typeOfToken: string, library: any) => {
        try{
            if(library){                
                const tokeninstance = await instance(typeOfToken, library)
                let tokenBalance = await tokeninstance.methods.balanceOf(account).call()
                tokenBalance = new BigNumber(tokenBalance).dividedBy(10**18)
                return tokenBalance.toFixed(2)
            }
            return 0
        }catch(err){
           console.error("getbalance", err)
        }
    }

    return{
        getBalance
    }
}