import {useEffect} from 'react';
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import useAuth, { injected } from './UseAuth'

export const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {
    const connectorId = localStorage.getItem('connectorId')

    if (connectorId) {
       login(JSON.parse(connectorId))
        return
      }

      login(connectorId)
  }, [login])
}
export function useInactiveListener(suppress = false) {
    const { active, error, activate } = useWeb3ReactCore() // specifically using useWeb3React because of what this hook does
  console.log('listner')
       //@ts-ignore

   const Type = JSON.parse(sessionStorage.getItem('walletId'));
  
    useEffect(() => {
      //@ts-ignore
      const { ethereum } = window
      if (ethereum && ethereum.on && !active && !error && !suppress) {
        const handleChainChanged = () => {
          // eat errors
         
          activate(injected, undefined, true).catch ((e) => {
            console.error('Failed to activate after chain changed', e)
          })
        }
        const handleAccountsChanged = (accounts: string | any[]) => {
            console.log('handleAccountsChanged',accounts)
          if (accounts.length > 0) {
            // eat errors
            activate(injected, undefined, true).catch((e) => {
              console.error('Failed to activate after accounts changed', e)
            })
          }
        }
        ethereum.on('chainChanged', handleChainChanged)
        ethereum.on('accountsChanged', handleAccountsChanged)
        return () => {
          if (ethereum.removeListener) {
            ethereum.removeListener('chainChanged', handleChainChanged)
            ethereum.removeListener('accountsChanged', handleAccountsChanged)
          }
        }
      }
      return undefined
    }, [active, error, suppress, activate])
  }