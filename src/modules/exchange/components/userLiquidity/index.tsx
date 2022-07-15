import { Button } from "../../../../shared/button"
import Collapse from "../../../../shared/collapse"
import { FlexBox } from "../../../../shared/flexBox"
import { Spacer } from "../../../../shared/shared"
import Token from "../../../../shared/token"
import TokenPair from "../../../../shared/tokenPair"
import { Header3 } from "../../../../styles/styled"

interface UserLiquidityProps {
  token1?: string
  token2?: string
  setRemoveLiquidity?: any
}

const UserLiquidity = (props: UserLiquidityProps) => {
  const { token1, token2, setRemoveLiquidity } = props
  return (
    <div>
      <Collapse header={<TokenPair token1={token1} token2={token2} label />}>
        <FlexBox>
          <Header3>Pooled {token1}:</Header3>{" "}
          <Token token={token1} size="1.5rem" label="0.00670362" />
        </FlexBox>
        <Spacer marginTop="1rem" />
        <FlexBox>
          <Header3>Pooled {token2}:</Header3>{" "}
          <Token token={token2} size="1.5rem" label="0.185034" />
        </FlexBox>
        <Spacer marginTop="1rem" />
        <FlexBox>
          <Header3>Your pool tokens:</Header3> <Header3>0.03434</Header3>
        </FlexBox>
        <Spacer marginTop="1rem" />
        <FlexBox>
          <Header3>Your pool share:</Header3> <Header3>9.70%</Header3>
        </FlexBox>
        <Spacer marginTop="2rem" />
        <FlexBox>
          <Button width="49%">Add</Button>
          <Button width="49%" onClick={() => setRemoveLiquidity(true)}>
            Remove
          </Button>
        </FlexBox>
      </Collapse>
    </div>
  )
}

export default UserLiquidity
