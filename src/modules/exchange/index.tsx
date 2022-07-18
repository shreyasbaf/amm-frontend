import React, { useState } from "react"
import { Spacer } from "../../shared/shared"
import Liquidity from "./components/liquidity"
import Swap from "./components/swap"
import { TabButton, TabWrapper } from "./components/tab/style"

const Exchange: React.FC = () => {
  const [swapTab, setSwapTab] = useState(true)
  return (
    <>
      <TabWrapper>
        <TabButton active={swapTab} onClick={() => setSwapTab(true)}>
          Swap
        </TabButton>
        <TabButton active={!swapTab} onClick={() => setSwapTab(false)}>
          Liquidity
        </TabButton>
      </TabWrapper>
      <Spacer marginTop="56px" />
      {swapTab ? <Swap /> : <Liquidity />}
    </>
  )
}

export default Exchange
