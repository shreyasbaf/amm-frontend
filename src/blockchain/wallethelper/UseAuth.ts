import { useCallback, useEffect } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";


export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 137],
});


const selectRpc = (type: number): any => {
  switch (type) {
    case 1:
      return {
        1: "https://mainnet.infura.io/v3/0fe795d7c0254f8096cdeba845d83e99",
      };
    case 56:
      return { 56: "https://bsc-dataseed.binance.org/" };
  }
};

const selecWallet = (type: number): any => {
  switch (type) {
    case 1:
      return injected;
    case 2:
      return walletconnect;
  }
};

let walletconnect = new WalletConnectConnector({
  rpc: selectRpc(1),
  qrcode: true,
  bridge: "https://bridge.walletconnect.org",
  chainId: 1
});

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();
  let walletconnect:any;

  const login = useCallback(
    (connectorID) => {
      if (true) {
        activate(selecWallet(connectorID), async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(selecWallet(connectorID));
          } else {
            if (
              error instanceof NoEthereumProviderError
            ) {
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              //@ts-ignore
              walletconnect.walletConnectProvider = null;
              console.log(error);
            } else {
              console.log(error.name, error.message);
              localStorage.clear()
            }
          }
        });
      } else {
      }
    },
    [activate]
  );

  const logout = useCallback(() => {
    console.log('logout')
    deactivate();
    localStorage.clear();

    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem("connectorId"));
    if (walletType === 2) {
      walletconnect.walletConnectProvider = null;
    }  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
