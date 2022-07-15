import { Button } from "../../../../shared/button"
import { IconButton, Spacer } from "../../../../shared/shared"
import SwapInput from "../swapInput"

const AddLiquidity = () => {
  return (
    <>
      <SwapInput />
      <Spacer marginTop="1rem" marginBottom="1rem">
        <IconButton
          onClick={() => {}}
          src={require("../../../../assets/icons/add-icon.svg")}
        />
      </Spacer>
      <SwapInput />
      <Spacer marginTop="2rem" />

      <Button fullWidth align="center">
        Supply
      </Button>
    </>
  )
}

export default AddLiquidity
