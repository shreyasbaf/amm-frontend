import { useWeb3React } from "@web3-react/core"
import { Button } from "../../../../shared/button"
import ModalList from "../../../../shared/modalList"
import { SelectorButton } from "../../../../shared/modalList/style"
import { StyledInput } from "../../../../shared/styledInput"
import { BalanceWrapper, InputWrapper } from "./style"

interface SwapInputProps {
  switchSwap?: boolean
  tokenValue?: string | number
  onChangeInput?: React.ChangeEventHandler<HTMLInputElement> | undefined
  ticker?: string
  balance?: string | number
  swapTokenList?: Array<{
    name: string
    value: string
  }>
  setTicker?: any
  position?: "top" | "bottom"
  showModalList?: boolean
  setTokenValue: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >
}

const SwapInput = (props: SwapInputProps) => {
  const {
    switchSwap,
    tokenValue,
    onChangeInput,
    ticker,
    balance,
    swapTokenList,
    setTicker,
    position,
    showModalList,
    setTokenValue,
  } = props

  const { account } = useWeb3React()

  return (
    <InputWrapper position={position} switchSwap={switchSwap}>
      <StyledInput fullWidth value={tokenValue} onChange={onChangeInput} />
      <div className="maxButton">
        <Button onClick={() => setTokenValue(balance)}>Max</Button>
      </div>
      {balance && (
        <BalanceWrapper account={account ? true : false}>
          Balance: {balance} {ticker}
        </BalanceWrapper>
      )}
      {showModalList ? (
        <ModalList
          position="absolute"
          right={"0px"}
          value={ticker}
          onChange={setTicker}
          options={swapTokenList}
        />
      ) : (
        <SelectorButton>{ticker}</SelectorButton>
      )}
    </InputWrapper>
  )
}

export default SwapInput
