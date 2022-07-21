import { useNavigate } from "react-router-dom"
import { liquidityPath } from "../../../../logic/paths"
import { Button } from "../../../../shared/button"
import Card from "../../../../shared/card"
import { Spacer } from "../../../../shared/shared"
import UserLiquidity from "../userLiquidity"

const Liquidity = () => {
  const navigate = useNavigate()

  return (
    <Card title="Liquidity">
      <Button fullWidth onClick={() => navigate(`${liquidityPath}/BNB/BUSD`)}>
        Add Liquidity
      </Button>
      <Spacer marginTop="2rem" />
      <UserLiquidity
        onRemoveClick={() => navigate(`/remove/BNB/BUSD`)}
        token1="BNB"
        token2="USDC"
      />
    </Card>
  )
}
export default Liquidity
