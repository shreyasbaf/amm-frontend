import { useWeb3React } from "@web3-react/core"
import React, { useEffect, useState } from "react"
import { BUSD_ADDRESS } from "../../../../blockchain/privateInstance/busd"
import { BUST_ADDRESS } from "../../../../blockchain/privateInstance/bust"
import { tokens } from "../../../../blockchain/tokens"
import { Button } from "../../../../shared/button"
import Card from "../../../../shared/card"
import Collapse from "../../../../shared/collapse"
import { isValid } from "../../../../shared/helpers/util"
import { useGetUserBalance } from "../../../../shared/hooks/useGetUserBalance"
import { useSwap } from "./hook/useSwap"
import { IconButton, Spacer, Text } from "../../../../shared/shared"
import { FlexRow } from "../../../../styles/styled"
import SwapInput from "../../../../shared/swapInput"
import SwapSetting from "../swapSetting"

const Swap: React.FC = () => {
  const [ticker1, setTicker1] = useState<string>(tokens["BUSD"].name)
  const [ticker2, setTicker2] = useState<string>(tokens["BUST"].name)
  const [switchSwap, setSwitchSwap] = useState<boolean | undefined>()
  const [token0, setToken0] = useState<string | number | undefined>("")
  const [token1, setToken1] = useState<string | number | undefined>("")
  const [token0InitalImpact, setToken0InitialImpact] = useState<string | number | undefined>("1")
  const [token1InitialImpact, setToken1InitialImpact] = useState<string | number | undefined>("1")
  const [token0Address, setToken0Address] = useState<string>(BUSD_ADDRESS)
  const [token1Address, setToken1Address] = useState<string>(BUST_ADDRESS)
  const [busdBalance, setBusdBalance] = useState<string>("0")
  const [bustBalance, setBustBalance] = useState<string>("0")
  const [swappingUI, setSwappingUI] = useState<boolean>(false)
  const [slippage, setSlippage] = useState<string>("0.5")
  const [deadLine, setDeadline] = useState<string>("5")
  const { getOtherTokenPrice, swap } = useSwap()
  const { getBusdBalance, getBustBalance } = useGetUserBalance()
  const { account } = useWeb3React()

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (account) {
          const busd = await getBusdBalance(account)
          const bust = await getBustBalance(account)
          setBusdBalance(busd)
          setBustBalance(bust)
        }
      } catch (err) {
        console.error("fetchBalance", err)
      }
    }

    if (account) {
      fetchBalance()
    }
    getOtherTokenInitialValue("BUSD")
  }, [account])

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

  const onChangeToken0 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let t = e.target.value
    if (isValid(t)) {
      e.target.value =
        t.indexOf(".") >= 0
          ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 19)
          : t
      let value: string = e.target.value
      setToken0(value)
      const res = await getOtherTokenPrice(value, token0Address, token1Address)
      if (res) setToken1(res)
      else setToken1("")
    }
  }

  const onChangeToken1 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let t = e.target.value
    if (isValid(t)) {
      e.target.value =
        t.indexOf(".") >= 0
          ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 19)
          : t
      let value: string = e.target.value
      setToken1(value)
      const res = swappingUI
        ? await getOtherTokenPrice(value, token0Address, token1Address)
        : await getOtherTokenPrice(value, token1Address, token0Address)
      if (res) setToken0(res)
      else setToken0("")
    }
  }

  const getOtherTokenInitialValue = async (tokenType: string) => {
    try {
      if (tokenType === "BUSD") {
        setToken0InitialImpact(1)
        const res = await getOtherTokenPrice(1, token0Address, token1Address)
        if (res) setToken1InitialImpact(Number(res).toFixed(2))
      } else {
        setToken1InitialImpact(1)
        const res = await getOtherTokenPrice(1, token0Address, token1Address)
        if (res) setToken0InitialImpact(Number(res).toFixed(2))
      }
    } catch (err) {
      console.error("getOtherTokenInitialValue", err)
    }
  }

  useEffect(() => {
    if (swappingUI) {
      getOtherTokenInitialValue("BUST")
    } else {
      getOtherTokenInitialValue("BUSD")
    }

    const swapValues = async () => {
      if (swappingUI) {
        const res = await getOtherTokenPrice(
          token1,
          token0Address,
          token1Address
        )
        if (res) setToken0(res)
        else setToken0("")
      } else {
        const res = await getOtherTokenPrice(
          token0,
          token0Address,
          token1Address
        )
        if (res) setToken1(res)
        else setToken1("")
      }
    }
    if (token0) swapValues()
  }, [token0Address, token1Address])

  const onSwapTokensPlaces = async () => {
    const tempToken1Address = token1Address
    setToken1Address(token0Address)
    setToken0Address(tempToken1Address)
    setSwappingUI((prev) => !prev)
  }

  const handleSwap = async () => {
    if (Number(token0) && Number(token1) && account) {
      swap(
        account,
        token0,
        token1,
        token0Address,
        token1Address,
        token0Address == BUSD_ADDRESS ? "BUSD" : "BUST",
        slippage,
        deadLine
      )
    }
  }

  return (
    <Card title="Swap" rightComponent={<SwapSetting handleSlippage={handleSlippage} handleDeadline={handleDeadline} />}>
      <SwapInput
        position="top"
        switchSwap={switchSwap}
        token={ticker1}
        inputValue={token0}
        onChangeInput={onChangeToken0}
        onTokenChange={(token) => setTicker1(token)}
        balance={busdBalance}
        swapTokenList={Object.values(tokens).filter(
          (val) => val.name !== ticker2
        )}
        onMaxButtonClick={() => setToken0(busdBalance)}
        showModalList
      />

      <Spacer marginTop="1rem" marginBottom="1rem">
        <IconButton
          switchSwap={switchSwap}
          onClick={() => {
            setSwitchSwap(!switchSwap)
            onSwapTokensPlaces()
          }}
          src={require("../../../../assets/icons/down-icon.svg")}
        />
      </Spacer>

      <SwapInput
        position="bottom"
        switchSwap={switchSwap}
        token={ticker2}
        inputValue={token1}
        onChangeInput={onChangeToken1}
        onTokenChange={(token) => setTicker2(token)}
        balance={bustBalance}
        swapTokenList={Object.values(tokens).filter(
          (val) => val.name !== ticker1
        )}
        onMaxButtonClick={() => { setToken1(bustBalance) }}
        showModalList
      />

      <Spacer marginTop="2rem" />

      <Collapse
        header={
          <Text variants="h6">
            {!swappingUI
              ? `${token0InitalImpact} ${ticker1} = ${token1InitialImpact} ${ticker2}`
              : `${token1InitialImpact} ${ticker2} = ${token0InitalImpact} ${ticker1}`}
          </Text>
        }>
        <FlexRow justifyContent={`space-between`}>
          <Text variants="normal">Expected Output </Text>
          <Text variants="normal">1{ticker2}</Text>
        </FlexRow>
        <Spacer marginTop="0.5rem" />
        <FlexRow justifyContent={`space-between`}>
          <Text variants="normal">Price Impact</Text>
          <Text variants="normal">0.03%</Text>
        </FlexRow>
      </Collapse>
      <Spacer marginTop="1rem" />

      <Button
        disabled={Number(token0) && Number(token1) ? false : true}
        fullWidth
        align="center"
        onClick={() => {
          if (account) handleSwap()
        }}>
        Swap
      </Button>
    </Card>
  )
}

export default Swap
