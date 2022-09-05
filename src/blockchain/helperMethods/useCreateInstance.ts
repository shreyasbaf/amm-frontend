import { ABI } from "../abi/Abi"


export const useCreateInstance = () => {

    const instance = async(tokenType: string, library: any) => {
      try{
        if(library) return new library.eth.Contract(ABI[tokenType].abi, ABI[tokenType].address)      
      }catch(err){
        console.error("instanceCreation", err)
      }
    }

    return {
        instance
    }
}