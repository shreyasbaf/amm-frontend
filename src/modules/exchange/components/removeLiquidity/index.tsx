import { useState } from "react"
import { Button } from "../../../../shared/button"
import Card from "../../../../shared/card"
import { FlexBox } from "../../../../shared/flexBox"
import {
  IconButton,
  SharedDescription,
  SharedTitle,
  Spacer,
  StyledSlider,
} from "../../../../shared/shared"
import Token from "../../../../shared/token"

const RemoveLiquidity = () => {
  const [percentage, setPercentage] = useState(0)
  const buttonPercentageValues = [25, 50, 75, 100]
  return (
    <>
      <SharedTitle>{percentage}%</SharedTitle>
      <StyledSlider
        onChange={(e) => setPercentage(Number(e.target.value))}
        value={percentage}
      />
      <Spacer marginTop="2rem" />
      <FlexBox>
        {buttonPercentageValues.map((val, i) => (
          <Button key={i} width="5rem" onClick={() => setPercentage(val)}>
            {val}%
          </Button>
        ))}
      </FlexBox>
      <Spacer marginTop="2rem" marginBottom="2rem">
        <IconButton
          src={require("../../../../assets/icons/arrow-down-icon.svg")}
        />
      </Spacer>
      <FlexBox>
        <SharedDescription>12.121</SharedDescription>
        <Token token="BUSD" label="BUSD" />
      </FlexBox>
      <Spacer marginTop="1rem" />
      <FlexBox>
        <SharedDescription>12.121</SharedDescription>
        <Token token="USDC" label="USDC" />
      </FlexBox>
      <Spacer marginTop="2rem" />
      <FlexBox>
        <Button width="49%">Approve</Button>
        <Button width="49%">Remove</Button>
      </FlexBox>
    </>
  )
}

export default RemoveLiquidity
