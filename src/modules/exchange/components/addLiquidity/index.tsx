import { useState } from "react"
import { tokens } from "../../../../blockchain/tokens"
import { Button } from "../../../../shared/button"
import Card from "../../../../shared/card"
import { IconButton, Spacer } from "../../../../shared/shared"
import SwapInput from "../../../../shared/swapInput"
import SwapSetting from "../swapSetting"

const AddLiquidity = () => {
  const [ticker1, setTicker1] = useState(tokens["BNB"].name)
  const [ticker2, setTicker2] = useState()
  return (
    <Card title="Liquidity" rightComponent={<SwapSetting />}>
      <SwapInput
        position="top"
        setTicker={setTicker1}
        ticker={ticker1}
        showModalList
        swapTokenList={Object.values(tokens).filter(
          (val) => val.name !== ticker2
        )}
      />
      <Spacer marginTop="1rem" marginBottom="1rem">
        <IconButton
          onClick={() => {}}
          src={require("../../../../assets/icons/add-icon.svg")}
        />
      </Spacer>
      <SwapInput
        position="bottom"
        showModalList
        ticker={ticker2}
        setTicker={setTicker2}
        swapTokenList={Object.values(tokens).filter(
          (val) => val.name !== ticker1
        )}
      />
      <Spacer marginTop="2rem" />

      <Button fullWidth align="center">
        Supply
      </Button>
    </Card>
  )
}

export default AddLiquidity
