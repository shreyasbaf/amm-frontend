import { useState } from "react"
import { tokens } from "../../../../blockchain/tokens"
import { Button } from "../../../../shared/button"
import Card from "../../../../shared/card"
import Collapse from "../../../../shared/collapse"
import { IconButton, Spacer, Text } from "../../../../shared/shared"
import SwapInput from "../../../../shared/swapInput"
import { FlexRow } from "../../../../styles/styled"
import SwapSetting from "../swapSetting"

const AddLiquidity = () => {
  const [ticker1, setTicker1] = useState(tokens["BNB"].name)
  const [ticker2, setTicker2] = useState()
  return (
    <Card title="Liquidity" rightComponent={<SwapSetting />}>
      <SwapInput
        position="top"
        // setTicker={setTicker1}
        token={ticker1}
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
        token={ticker2}
        // setTicker={setTicker2}
        swapTokenList={Object.values(tokens).filter(
          (val) => val.name !== ticker1
        )}
      />
      <Spacer marginTop="2rem" />

      {ticker1 && ticker2 && (
        <>
          {" "}
          <Collapse header={<Text variants="h6">Prices and pool share</Text>}>
            <FlexRow justifyContent={`space-between`}>
              <Text variants="normal">
                {ticker1} per {ticker2}
              </Text>
              <Text variants="normal">27.6021</Text>
            </FlexRow>
            <Spacer marginTop="0.5rem" />
            <FlexRow justifyContent={`space-between`}>
              <Text variants="normal">
                {ticker2} per {ticker1}
              </Text>
              <Text variants="normal">0.0362291</Text>
            </FlexRow>
            <Spacer marginTop="0.5rem" />
            <FlexRow justifyContent={`space-between`}>
              <Text variants="normal">Share of Pool</Text>
              <Text variants="normal">3.03%</Text>
            </FlexRow>
          </Collapse>
          <Spacer marginTop="2rem" />
        </>
      )}

      <Button fullWidth align="center">
        Supply
      </Button>
    </Card>
  )
}

export default AddLiquidity
