import { useLocation, useParams } from "react-router-dom"
import { liquidityPath, rootPath } from "../../logic/paths"
import { Spacer, TabButton } from "../../shared/shared"
import { FlexRow } from "../../styles/styled"
import AddLiquidity from "./components/addLiquidity"
import Liquidity from "./components/liquidity"
import RemoveLiquidity from "./components/removeLiquidity"
import Swap from "./components/swap"

const Exchange: React.FC = () => {
  const { pathname } = useLocation()
  const { token1, token2 } = useParams()

  return (
    <>
      <FlexRow justifyContent={`center`}>
        <TabButton to={rootPath} active={pathname === rootPath}>
          Swap
        </TabButton>
        <TabButton to={liquidityPath} active={pathname.includes(liquidityPath)}>
          Liquidity
        </TabButton>
      </FlexRow>
      <Spacer marginTop="56px" />
      {pathname === rootPath && <Swap />}
      {pathname.includes(liquidityPath) && (token1 || token2) && (
        <AddLiquidity />
      )}

      {pathname.includes("remove") && (token1 || token2) && <RemoveLiquidity />}

      {pathname === liquidityPath && <Liquidity />}
    </>
  )
}

export default Exchange
