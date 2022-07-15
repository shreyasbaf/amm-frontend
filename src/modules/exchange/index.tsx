import React, { useState } from "react"
import Collapse from "../../shared/collapse"
import { Spacer } from "../../shared/shared"
import TokenPair from "../../shared/tokenPair"
import Liquidity from "./components/liquidity"
import RemoveLiquidity from "./components/removeLiquidity"
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
