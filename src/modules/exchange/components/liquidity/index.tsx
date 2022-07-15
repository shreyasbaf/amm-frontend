import { useState } from "react"
import { Button } from "../../../../shared/button"
import Card from "../../../../shared/card"
import { Spacer } from "../../../../shared/shared"
import AddLiquidity from "../addLiquidity"
import RemoveLiquidity from "../removeLiquidity"
import UserLiquidity from "../userLiquidity"

const Liquidity = () => {
  const [liquidity, setLiquidity] = useState(false)
  const [removeLiquidity, setRemoveLiquidity] = useState(false)
  return (
    <Card title="Liquidity">
      {liquidity ? (
        <AddLiquidity />
      ) : (
        <>
          {removeLiquidity ? (
            <RemoveLiquidity />
          ) : (
            <>
              <Button fullWidth onClick={() => setLiquidity(true)}>
                Add Liquidity
              </Button>
              <Spacer marginTop="2rem" />
              <UserLiquidity
                setRemoveLiquidity={setRemoveLiquidity}
                token1="BNB"
                token2="USDC"
              />
            </>
          )}
        </>
      )}
    </Card>
  )
}
export default Liquidity
