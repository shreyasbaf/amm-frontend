import { useWeb3React } from "@web3-react/core"
import React, { useEffect, useState } from "react"

import { BUSD_ADDRESS } from "../../blockchain/privateInstance/busd"
import { BUST_ADDRESS } from "../../blockchain/privateInstance/bust"
import { Button } from "../../shared/button"
import Card from "../../shared/card"
import { isValid } from "../../shared/helpers/util"
import { useGetUserBalance } from "../../shared/hooks/useGetUserBalance"
import { useSwap } from "../../shared/hooks/useSwap"
import ModalList from "../../shared/modalList"
import { StyledInput } from "../../shared/styledInput"
import { PageContainer } from "../../styles/styled"
import { ArrowContainer, BalanceWrapper, InputWrapper, Position } from "./style"

const tokens = [
  { name: "BNB", value: "BNB" },
  { name: "BUSD", value: "BUSD" },
  { name: "USDC", value: "USDC" },
  { name: "USDT", value: "USDT" },
  { name: "BUST", value: "BUST" },
]

const Swap: React.FC = () => {
  const [ticker1, setTicker1] = useState<string>(tokens[1].name)
  const [ticker2, setTicker2] = useState<string>(tokens[4].name)
  const [switchSwap, setSwitchSwap] = useState<boolean | undefined>()
  const [token0, setToken0] = useState<string>("")
  const [token1, setToken1] = useState<string>("")
  const [token0Address, setToken0Address] = useState<string>(BUSD_ADDRESS)
  const [token1Address, setToken1Address] = useState<string>(BUST_ADDRESS)
  const [busdBalance, setBusdBalance] = useState<string>('0')
  const [bustBalance, setBustBalance] = useState<string>('0')
  const [swappingUI, setSwappingUI] = useState<boolean>(false)
  const [walletConnected, setWalletConnected] = useState(localStorage.getItem("walletConnected"))
  const { getOtherTokenPrice, swap } = useSwap()
  const { getBusdBalance, getBustBalance } = useGetUserBalance()
  const { account } = useWeb3React()
  
  useEffect(() => {
    setWalletConnected(localStorage.getItem("walletConnected"))
  }, [account])

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

    if (account) fetchBalance()

  }, [account])

  const onChangeToken0 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    var t = e.target.value
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
      const res = await getOtherTokenPrice(value, token0Address, token1Address)
      if (res) setToken0(res)
      else setToken0("")
    }
  }

  useEffect(() => {
    const swapValues = async () => {
      if (swappingUI) {
        const res = await getOtherTokenPrice(token1, token0Address, token1Address)
        if (res) setToken0(res)
        else setToken0("")
      } else {
        const res = await getOtherTokenPrice(token0, token0Address, token1Address)
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
    if (Number(token0) && Number(token1)) {
      swap(
        account,
        token0,
        token1,
        token0Address,
        token1Address,
        token0Address == BUSD_ADDRESS ? "BUSD" : "BUST"
      )
    }
  }

  return (
    <PageContainer noPadding={true}>
      <Card title="Swap">
        <InputWrapper position={Position.top} switchSwap={switchSwap}>
          <StyledInput fullWidth value={token0} onChange={onChangeToken0} />
          <BalanceWrapper
            walletConnected={walletConnected === "true" ? true : false}
            account={account ? true : false}>
            Balance:{busdBalance} {ticker1}
          </BalanceWrapper>
          <ModalList
            position="absolute"
            right={"0px"}
            value={ticker1}
            onChange={setTicker1}
            options={tokens.filter((val) => val.value !== ticker2)}
          />
        </InputWrapper>
        <ArrowContainer
          switchSwap={switchSwap}
          onClick={() => {
            setSwitchSwap(!switchSwap)
            onSwapTokensPlaces()
          }}
          src={require("../../assets/icons/arrow-down-icon.svg")}
        />

        <InputWrapper
          position={Position.bottom}
          switchSwap={switchSwap}
          margin="0px 0px 2rem 0px">
          <StyledInput fullWidth value={token1} onChange={onChangeToken1} />
          <BalanceWrapper
            walletConnected={walletConnected === "true" ? true : false}
            account={account ? true : false}>
            Balance: {bustBalance} {ticker2}
          </BalanceWrapper>
          <ModalList
            position="absolute"
            right={"0px"}
            value={ticker2}
            onChange={setTicker2}
            options={tokens.filter((val) => val.value !== ticker1)}
          />
        </InputWrapper>

        <Button
          align="center"
          width="12rem"
          onClick={() => {
            if (account) handleSwap()
          }}>
          Swap
        </Button>
      </Card>
    </PageContainer>
  )
}

export default Swap
