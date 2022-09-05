import { useWeb3React } from "@web3-react/core"
import { useState } from "react"
import { ABI } from "../../../../blockchain/abi/Abi"
import { tokens } from "../../../../blockchain/tokens"
import { Button } from "../../../../shared/button"
import Card from "../../../../shared/card"
import Collapse from "../../../../shared/collapse"
import { isValid, validateAndTrim } from "../../../../shared/helpers/util"
import { IconButton, Spacer, Text } from "../../../../shared/shared"
import SwapInput from "../../../../shared/swapInput"
import { FlexRow } from "../../../../styles/styled"
import SwapSetting from "../swapSetting"
import { useAddLiquidity } from "./hook/useAddLiquidity"

const AddLiquidity = () => {
  const [ticker1, setTicker1] = useState(tokens["BUSD"].name)
  const [ticker2, setTicker2] = useState(tokens["BUST"].name)
  const [token0, setToken0] = useState<string | number | undefined>("")
  const [token1, setToken1] = useState<string | number | undefined>("")
  const [slippage, setSlippage] = useState<string>("0.5")
  const [deadLine, setDeadline] = useState<string>("5")
  const { getBUSTAmount, getBUSDAmount, addLiquidity } = useAddLiquidity()
  const { active, account, library } = useWeb3React()

  const changingInputVal0 = async (val: React.ChangeEvent<HTMLInputElement>) => {
    const value: any = validateAndTrim(val)
    setToken0(value)
    const res = await getBUSTAmount(value)
    if (res) setToken1(res)
    else setToken1("")
  }


  const changingInputVal1 = async (val: React.ChangeEvent<HTMLInputElement>) => {
    const value: any = validateAndTrim(val)
    setToken1(value)
    const res = await getBUSDAmount(value)
    if (res) setToken0(res)
    else setToken0("")
  }

  const handleSlippage = (value: string) => {
    setSlippage((prev): any => {
      if (value !== prev) return value
    })
  }

  const handleDeadline = (value: string) => {
    setDeadline((prev): any => {
      if (value !== prev) return value
    })
  }

  const handleAddLiquidity = async () => {
    try {
      if (Number(token0) && Number(token1) && account && active) {
        addLiquidity(account, token0, token1, ABI.BUSD.address, ABI.BUST.address, deadLine, slippage, library)
      }
    } catch (err) {
      console.error("handleAddLiquidity", err);
    }
  }

  return (
    <Card title="Liquidity" rightComponent={<SwapSetting handleSlippage={handleSlippage} handleDeadline={handleDeadline} />}>
      <SwapInput
        position="top"
        // setTicker={setTicker1}
        token={ticker1}
        showModalList
        inputValue={token0}
        onChangeInput={changingInputVal0}
        swapTokenList={Object.values(tokens).filter(
          (val) => val.name !== ticker2
        )}
      />
      <Spacer marginTop="1rem" marginBottom="1rem">
        <IconButton
          onClick={() => { }}
          src={require("../../../../assets/icons/add-icon.svg")}
        />
      </Spacer>
      <SwapInput
        position="bottom"
        showModalList
        token={ticker2}
        // setTicker={setTicker2}
        inputValue={token1}
        onChangeInput={changingInputVal1}
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

      <Button fullWidth align="center" onClick={handleAddLiquidity}>
        Supply
      </Button>
    </Card>
  )
}

export default AddLiquidity
