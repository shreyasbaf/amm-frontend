import { Link } from "react-router-dom"
import {
  HeaderContainer,
  LogoContainer,
  Navigations,
  NetworkContainer,
} from "./style"
import { rapidInnovationLogoURL } from "../../../shared/utility"
import { poolPath, rootPath } from "../../../logic/paths"
import ConnectWallet from "../../../shared/connectwallet/ConnectWallet"
import { useWeb3React } from "@web3-react/core"
import { Button } from "../../../shared/button"
import { Spacer } from "../../../shared/shared"

export const Navbar = () => {
  const { account } = useWeb3React()

  return (
    <HeaderContainer>
      <div>
        <LogoContainer>
          <img src={rapidInnovationLogoURL} alt="Rapid Innovation" />
        </LogoContainer>
      </div>
      <div>
        <Navigations>
          <Link to={rootPath}>Market</Link>
          <Link to={poolPath}>Farm</Link>
        </Navigations>
      </div>
      <div>
        <Spacer marginRight="1rem">
          <Button>BSC - Testnet</Button>
        </Spacer>
        <ConnectWallet
          connectWallet={account ? true : false}
          walletAddress={account}
          setConnectWallet={""}
          showWalletContent
          closeWalletModal={() => null}
          showLogout={(e: any) => null}
          menu={""}
        />
      </div>
    </HeaderContainer>
  )
}
