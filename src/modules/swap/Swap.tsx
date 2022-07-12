import { useWeb3React } from "@web3-react/core"
import React, { useState } from "react"

import { BUSD_ADDRESS } from "../../blockchain/privateInstance/busd"
import { BUST_ADDRESS } from "../../blockchain/privateInstance/bust"
import { usePrivateInstances } from "../../blockchain/privateInstance/instances"
import { ROUTER_ADDRESS } from "../../blockchain/publicInstance/router"
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
  const [rotate, setRotate] = useState(false)
  const [token0, setToken0] = useState("")
  const [token1, setToken1] = useState("")
  const { getBUST } = useSwap()
  const { getOtherTokenPrice, swap } = useSwap()
  const { BUSD } = usePrivateInstances()
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
      const res = await getOtherTokenPrice(value, BUSD_ADDRESS, BUST_ADDRESS)
      if (res) setToken1(res)
      else setToken1("")
    }
  }

  const onChangeToken1 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    var t = e.target.value
    if (isValid(t)) {
      e.target.value =
        t.indexOf(".") >= 0
          ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 19)
          : t
      let value: string = e.target.value
      setToken1(value)
      const res = await getOtherTokenPrice(value, BUST_ADDRESS, BUSD_ADDRESS)
      if (res) setToken0(res)
      else setToken0("")
    }
  }

  const handleSwap = async () => {
    swap(account, ROUTER_ADDRESS, token0)
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
          onClick={() => setRotate(!rotate)}
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
