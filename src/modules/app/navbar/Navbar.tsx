import { Link } from "react-router-dom"
import {
  HeaderContainer,
  LogoContainer,
  Navigations,
  NetworkContainer,
  WalletContainer,
} from "./style"
import { rapidInnovationLogoURL } from "../../../shared/utility"
import { FlexBox } from "../../../shared/flexBox"
import { poolPath, rootPath } from "../../../logic/paths"
import ConnectWallet from "../../../shared/connectwallet/ConnectWallet"
import { useWeb3React } from "@web3-react/core"

export const Navbar = () => {
  const { account, deactivate, library, chainId } = useWeb3React()
  console.log(account)
  return (
    <HeaderContainer>
      <FlexBox>
        <LogoContainer>
          <img src={rapidInnovationLogoURL} alt="Rapid Innovation" />
        </LogoContainer>

        <Navigations>
          <Link to={rootPath}>Swap</Link>
          <Link to={poolPath}>Pool</Link>
          <Link to={rootPath}>Vote</Link>
          <Link to={rootPath}>Charts</Link>
        </Navigations>
        <WalletContainer>
          <NetworkContainer>BSC - Testnet</NetworkContainer>
          <ConnectWallet
            connectWallet={account ? true : false}
            walletAddress={account}
            setConnectWallet={""}
            showWalletContent
            closeWalletModal={() => null}
            showLogout={(e: any) => null}
            menu={""}
          />
        </WalletContainer>
      </FlexBox>
    </HeaderContainer>
  )
}
