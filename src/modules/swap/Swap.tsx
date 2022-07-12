import React, { useState } from "react"
import { Button } from "../../shared/button"
import ModalList from "../../shared/modalList"
import { StyledInput } from "../../shared/styledInput"
import { Card, PageContainer } from "../../styles/styled"
import { InputWrapper } from "./style"

const tokens = [
  { name: "BNB", value: "BNB" },
  { name: "BUSD", value: "BUSD" },
  { name: "USDC", value: "USDC" },
  { name: "USDT", value: "USDT" },
]

const Swap: React.FC = () => {
  const [ticker1, setTicker1] = useState(tokens[0].name)
  const [ticker2, setTicker2] = useState()

  return (
    <PageContainer noPadding={true}>
      <Card>
        <InputWrapper>
          <StyledInput onChange={(e) => console.log(e.target.value)} />
          <ModalList
            value={ticker1}
            onChange={setTicker1}
            options={tokens.filter((val) => val.value !== ticker2)}
          />
        </InputWrapper>
        <InputWrapper>
          <StyledInput onChange={(e) => console.log(e.target.value)} />
          <ModalList
            value={ticker2}
            onChange={setTicker2}
            options={tokens.filter((val) => val.value !== ticker1)}
          />
        </InputWrapper>
        <Button align="center" onClick={() => {}}>
          Swap
        </Button>
      </Card>
    </PageContainer>
  )
}

export default Swap
