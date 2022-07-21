import { Button } from "../../../../shared/button"
import Collapse from "../../../../shared/collapse"
import { FlexBox } from "../../../../shared/flexBox"
import { Spacer, Text } from "../../../../shared/shared"
import Token from "../../../../shared/token"
import TokenPair from "../../../../shared/tokenPair"

interface UserLiquidityProps {
  token1?: string
  token2?: string
  onRemoveClick?: React.MouseEventHandler<HTMLButtonElement>
}

const UserLiquidity = (props: UserLiquidityProps) => {
  const { token1, token2, onRemoveClick } = props
  return (
    <div>
      <Collapse header={<TokenPair token1={token1} token2={token2} label />}>
        <FlexBox>
          <Text variants="h6">Pooled {token1}:</Text>{" "}
          <Token token={token1} size="1.5rem" label="0.00670362" />
        </FlexBox>
        <Spacer marginTop="1rem" />
        <FlexBox>
          <Text variants="h6">Pooled {token2}:</Text>{" "}
          <Token token={token2} size="1.5rem" label="0.185034" />
        </FlexBox>
        <Spacer marginTop="1rem" />
        <FlexBox>
          <Text variants="h6">Your pool tokens:</Text>{" "}
          <Text variants="h6">0.03434</Text>
        </FlexBox>
        <Spacer marginTop="1rem" />
        <FlexBox>
          <Text variants="h6">Your pool share:</Text>{" "}
          <Text variants="h6">9.70%</Text>
        </FlexBox>
        <Spacer marginTop="2rem" />
        <FlexBox>
          <Button width="49%">Add</Button>
          <Button width="49%" onClick={onRemoveClick}>
            Remove
          </Button>
        </FlexBox>
      </Collapse>
    </div>
  )
}

export default UserLiquidity
