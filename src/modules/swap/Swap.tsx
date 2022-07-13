import { useWeb3React } from "@web3-react/core"
import React, { useEffect, useState } from "react"

import { BUSD_ADDRESS } from "../../blockchain/privateInstance/busd"
import { BUST_ADDRESS } from "../../blockchain/privateInstance/bust"
import { Button } from "../../shared/button"
import Card from "../../shared/card"
import { isValid } from "../../shared/helpers/util"
import { useSwap } from "../../shared/hooks/useSwap"
import ModalList from "../../shared/modalList"
import { StyledInput } from "../../shared/styledInput"
import { PageContainer } from "../../styles/styled"
import { ArrowContainer, InputWrapper } from "./style"

const tokens = [
  { name: "BNB", value: "BNB" },
  { name: "BUSD", value: "BUSD" },
  { name: "USDC", value: "USDC" },
  { name: "USDT", value: "USDT" },
  { name: "BUST", value: "BUST" },
]

const Swap: React.FC = () => {
  const [ticker1, setTicker1] = useState(tokens[1].name)
  const [ticker2, setTicker2] = useState(tokens[4].name)
  const [rotate, setRotate] = useState<boolean>(false)
  const [token0, setToken0] = useState("")
  const [token1, setToken1] = useState("")
  const [token0Address, setToken0Address] = useState(BUSD_ADDRESS)
  const [token1Address, setToken1Address] = useState(BUST_ADDRESS)
  const { getOtherTokenPrice, swap } = useSwap()
  const { account } = useWeb3React()

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
      const res = await getOtherTokenPrice(value, token1Address, token0Address)
      if (res) setToken0(res)
      else setToken0("")
    }
  }

  useEffect(() => {
    (async () => {
      const res = await getOtherTokenPrice(token0, token0Address, token1Address)
      if (res) setToken1(res)
      else setToken1("")
    })()
  }, [token0Address, token1Address])

  const onSwapTokensPlaces = async () => {
    const tempToken1Address = token1Address
    const temp0 = ticker1
    setTicker1(ticker2)
    setTicker2(temp0)
    const tempToken1Price = token1
    setToken0(tempToken1Price)
    setToken1Address(token0Address)
    setToken0Address(tempToken1Address)
  }

  const handleSwap = async () => {
    if (Number(token0) && Number(token1)) {
      swap(account, token0, token1, token0Address, token1Address, token0Address == BUSD_ADDRESS ? "BUSD" : "BUST")
    }
  }

  return (
    <PageContainer noPadding={true}>
      <Card title="Swap">
        <InputWrapper>
          <StyledInput fullWidth value={token0} onChange={onChangeToken0} />
          <ModalList
            position="absolute"
            right={"0px"}
            value={ticker1}
            onChange={setTicker1}
            options={tokens.filter((val) => val.value !== ticker2)}
          />
        </InputWrapper>
        <ArrowContainer
          rotate={rotate}
          onClick={() => {
            setRotate(!rotate)
            onSwapTokensPlaces()
          }}
          src={require("../../assets/icons/arrow-down-icon.svg")}
        />
        <InputWrapper margin="0px 0px 2rem 0px">
          <StyledInput fullWidth value={token1} onChange={onChangeToken1} />
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
