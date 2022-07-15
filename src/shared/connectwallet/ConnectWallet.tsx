import React, { useEffect } from "react"
import {
  Content,
  SemiHead,
  AddressInfoWrap,
  BnbInfo,
  AddressInfo,
  OptionArea,
  WalletOption,
  WalletDetails,
  LinksFlex,
  StatusContent,
  StatusImage,
  ConnectButtonWrap,
  LinkFlex,
  ButtonWrapper,
  ConnectLink,
} from "./style"
import {
  SharedTitle,
  SharedDescription,
  SharedButton,
  SharedDetailBlock,
  SharedForum,
  Spacer,
} from "../../shared/shared"

import { WalletTypes } from "../..//blockchain/wallethelper/Constants"
import { Button } from "../button"
// import { ButtonArea } from "../styles/styled";

import { WalletConnectConnector } from "@web3-react/walletconnect-connector"
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core"
import useAuth from "../../blockchain/wallethelper/UseAuth"
import CustomModal from "../modal/modal"

const ConnectWallet = (props: any) => {
  const {
    data,
    connectWallet,
    walletAddress,
    setConnectWallet,
    walletBalance,
    checkWallet,
    showWalletModal,
    closeWalletModal,
    showWalletContent,
  } = props
  const [walletOptions, setWalletOptions] = React.useState(false)
  const [disconnectWallet, setDisconnectWallet] = React.useState(false)
  const [copy, setCopy] = React.useState(false)
  const [errorModal, setErrorModal] = React.useState(false)
  const [trustWallet, setTrustWallet] = React.useState(false)
  const [walletType, setWalletType] = React.useState(false)
  const [switchWallet, setSwitchWallet] = React.useState(false)

  const { login, logout } = useAuth()
  const { account, deactivate, library } = useWeb3React()

  const connect = async (type: any) => {
    if (account) {
      logout()
      localStorage.clear()
      setDisconnectWallet(false)
    } else {
      try {
        login(type)
        localStorage.setItem("connectorId", JSON.stringify(type))
      } catch (error) {
        console.log(error)
        setErrorModal(true)
      }
    }
  }

  useEffect(() => {
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem("connectorId"))
    //@ts-ignore
    const walletconnect = JSON.parse(localStorage.getItem("walletconnect"))
    if (account) {
      localStorage.setItem("walletConnected", JSON.stringify(true))
    } else if (walletType === 2 && walletconnect === null) {
      console.log("call again")

      logout()
      localStorage.clear()
      setDisconnectWallet(false)
    }
    setWalletOptions(false)
  }, [account])

  const WalletModalClose = () => {
    setWalletOptions(false)
    closeWalletModal()
  }

  useEffect(() => {
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem("connectorId"))
    setWalletType(walletType)
  }, [])

  return (
    <>
      <Content>
        {showWalletContent ? (
          connectWallet ? (
            <AddressInfoWrap menu={props.menu}>
              <BnbInfo menu={props.menu}> 1 ETH</BnbInfo>
              <AddressInfo
                onClick={() => {
                  setDisconnectWallet(true)
                  props.showLogout(true)
                }}>
                {walletAddress}
              </AddressInfo>
            </AddressInfoWrap>
          ) : (
            <Button
              onClick={() => {
                setWalletOptions(true)
                props.showLogout(true)
              }}>
              Connect
            </Button>
          )
        ) : null}

        <CustomModal
          show={walletOptions || showWalletModal}
          toggleModal={() => {
            WalletModalClose()
            props.showLogout(false)
          }}
          heading="Connect to a Wallet"
          // headIcon={require("../../assets/icons/money.svg").default}
        >
          <Spacer marginTop="25px" />
          <Button fullWidth onClick={() => connect(WalletTypes.metamask)}>
            <Spacer margin="1rem">Metamask</Spacer>
            {/* <img
                src={require("../../assets/image/metamask.svg").default}
                alt=""
              /> */}
          </Button>
          <Spacer marginTop="1rem" />
          <Button fullWidth onClick={() => connect(WalletTypes.walletConnect)}>
            <Spacer margin="1rem">TrustWallet</Spacer>

            {/* <img
                src={require("../../assets/icons/wallet-connect.svg").default}
                alt=""
              /> */}
          </Button>
        </CustomModal>

        {account && (
          <CustomModal
            show={disconnectWallet}
            toggleModal={() => {
              setDisconnectWallet(false)
            }}
            heading="Your Wallet"
            // headIcon={require("../../assets/icons/money.svg").default}
          >
            <WalletDetails>
              <p>{walletAddress}</p>
              <div style={{ textAlign: "center" }}>
                <Button
                  align="center"
                  onClick={() => {
                    logout()
                    setDisconnectWallet(false)
                  }}>
                  Logout
                </Button>
              </div>
            </WalletDetails>
          </CustomModal>
        )}

        <CustomModal
          show={errorModal}
          toggleModal={() => {
            setErrorModal(false)
            setWalletOptions(false)
          }}
          heading="Authorization Error"
          // headIcon={
          //   require("../../assets/icons/authorization-icon.svg").default
          // }
        >
          <StatusContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "40px 0px 100px 0",
              }}>
              <p>Please authorize to access your account</p>
            </div>

            <ButtonWrapper>
              <SharedButton>DISMISS</SharedButton>
              <SharedButton>GET A WALLET</SharedButton>
            </ButtonWrapper>
          </StatusContent>
        </CustomModal>

        <CustomModal
          // show={chainId !== 42 && connectWallet}
          toggleModal={async () => {
            setErrorModal(false)
            setWalletOptions(false)
            deactivate()
            localStorage.clear()
          }}
          heading="Wrong network"
          // headIcon={require("../../assets/icons/wrong-network.svg").default}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0 60px 0",
              textAlign: "center",
              color: "#fff",
              fontFamily: "SemiBold",
            }}>
            It looks like you need to switch your wallet’s network. Please note
            that some wallets may not support changing networks.
          </div>

          <ButtonWrapper>
            <SharedButton
              onClick={async () => {
                // setErrorModal(false);
                setWalletOptions(true)
                props.showLogout(true)
                //@ts-ignore
                localStorage.setItem("switch", JSON.stringify(true))
                deactivate()
                localStorage.removeItem("address")
                localStorage.removeItem("walletConnected")
                localStorage.removeItem("walletType")
              }}>
              SWITCH WALLET
            </SharedButton>
            <SharedButton
              onClick={async () => {
                setErrorModal(false)
                await library.disconnect()
                localStorage.clear()
              }}>
              DISMISS
            </SharedButton>
          </ButtonWrapper>
        </CustomModal>
      </Content>
    </>
  )
}
export default ConnectWallet
