import React, { useState } from "react"

import { BUSD_ADDRESS } from "../../blockchain/publicInstance/busd"
import { BUST_ADDRESS } from "../../blockchain/publicInstance/bust"
import { Button } from "../../shared/button"
import { isValid } from "../../shared/helpers/util"
import { useSwap } from "../../shared/hooks/useSwap"
import ModalList from "../../shared/modalList"
import { StyledInput } from "../../shared/styledInput"
import { Card, PageContainer } from "../../styles/styled"
import { InputWrapper } from "./style"

const tokens = [
  { name: "BNB", value: "BNB" },
  { name: "BUSD", value: "BUSD" },
  { name: "USDC", value: "USDC" },
  { name: "USDT", value: "USDT" },
  { name: "BUST", value: "BUST" }
]

const Swap: React.FC = () => {
  const [ticker1, setTicker1] = useState(tokens[1].name)
  const [ticker2, setTicker2] = useState(tokens[4].name)
  const [token0, setToken0] = useState("")
  const [token1, setToken1] = useState("")
  const { getBUST } = useSwap()


  const onChangeToken0 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    var t = e.target.value;
    if (isValid(t)) {
      e.target.value = t.indexOf(".") >= 0 ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 19) : t;
      let value: string = e.target.value;
      setToken0(value)
      const res = await getBUST(value, BUSD_ADDRESS, BUST_ADDRESS)
      if (res) setToken1(res)
      else setToken1("")
    }
  }


  const onChangeToken1 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    var t = e.target.value;
    if (isValid(t)) {
      e.target.value = t.indexOf(".") >= 0 ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 19) : t;
      let value: string = e.target.value;
      setToken1(value)
      const res = await getBUST(value, BUST_ADDRESS, BUSD_ADDRESS)
      if (res) setToken0(res)
      else setToken0("")
    }
  }


  return (
    <PageContainer noPadding={true}>
      <Card>
        <InputWrapper>
          <StyledInput value={token0} onChange={onChangeToken0} />
          <ModalList
            value={ticker1}
            onChange={setTicker1}
            options={tokens.filter((val) => val.value !== ticker2)}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledInput value={token1} onChange={onChangeToken1} />
          <ModalList
            value={ticker2}
            onChange={setTicker2}
            options={tokens.filter((val) => val.value !== ticker1)}
          />
        </InputWrapper>
        <Button align="center" onClick={() => { }}>
          Swap
        </Button>
      </Card>
    </PageContainer>
  )
}

export default Swap
