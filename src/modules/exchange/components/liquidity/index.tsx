import { useState } from "react"
import { Button } from "../../../../shared/button"
import Card from "../../../../shared/card"
import AddLiquidity from "../addLiquidity"

const Liquidity = () => {
  const [liquidity, setLiquidity] = useState(false)
  return (
    <Card title="Liquidity">
      {liquidity ? (
        <AddLiquidity />
      ) : (
        <Button fullWidth onClick={() => setLiquidity(true)}>
          Add Liquidity
        </Button>
      )}
    </Card>
  )
}
export default Liquidity
