import BigNumber from "bignumber.js"
import { usePrivateInstances } from "../../blockchain/privateInstance/instances"



export const useGetUserBalance = () => {
     const {BUSD, BUST} = usePrivateInstances()

    const getBusdBalance = async(account: any) =>  {
      try{
          let busdBalance = await BUSD.methods.balanceOf(account).call()
          busdBalance = new BigNumber(busdBalance).dividedBy(10**18)
          return busdBalance.toFixed(2)
      }catch(err){
        console.error("getBusdBalance", err)
      }
    }

    const getBustBalance = async(account: any) =>  {
        try{
            let bustBalance = await BUST.methods.balanceOf(account).call()
            bustBalance = new BigNumber(bustBalance).dividedBy(10**18)
            return bustBalance.toFixed(2)
        }catch(err){
          console.error("getBustBalance", err)
        }
      }


      return{
        getBusdBalance,
        getBustBalance
      }
}