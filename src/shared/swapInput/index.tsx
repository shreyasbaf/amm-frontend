import { useWeb3React } from "@web3-react/core"
import { useState } from "react"
import { colors } from "../../styles/theme"
import { Button } from "../button"
import CustomModal from "../modal/modal"
import { StyledInput } from "../styledInput"
import Token from "../token"
import {
  BalanceWrapper,
  InputWrapper,
  SelectorButton,
  TokenContainer,
} from "./style"

interface SwapInputProps {
  switchSwap?: boolean
  inputValue?: string | number
  onChangeInput?: React.ChangeEventHandler<HTMLInputElement>
  onMaxButtonClick?: React.MouseEventHandler<HTMLButtonElement>
  onTokenChange?: (token: string) => void
  token?: string
  balance?: string
  swapTokenList?: Array<{
    name: string
    address: string
  }>
  position?: "top" | "bottom"
  showModalList?: boolean
}

const SwapInput = (props: SwapInputProps) => {
  const {
    switchSwap,
    inputValue,
    onChangeInput,
    onMaxButtonClick,
    onTokenChange,
    token,
    balance,
    swapTokenList,
    position,
    showModalList,
  } = props

  const { account } = useWeb3React()
  const [openModal, setOpenModal] = useState(false)

  return (
    <InputWrapper
      position={position}
      switchSwap={switchSwap}
      showModalList={showModalList}>
      <StyledInput fullWidth value={inputValue} onChange={onChangeInput} />
      <div className="maxButton">
        <Button onClick={onMaxButtonClick}>Max</Button>
      </div>
      {balance && (
        <BalanceWrapper account={account ? true : false}>
          Balance: {balance} {token}
        </BalanceWrapper>
      )}

      {showModalList && (
        <>
          {token ? (
            <SelectorButton onClick={() => setOpenModal(true)}>
              <Token
                size="40px"
                token={token}
                label={token}
                labelColor={colors.black}
              />
            </SelectorButton>
          ) : (
            <SelectorButton onClick={() => setOpenModal(true)}>
              Select a token
            </SelectorButton>
          )}
          <CustomModal
            show={openModal}
            toggleModal={() => {
              setOpenModal(!openModal)
            }}
            heading="Select a token">
            {swapTokenList?.map((val, i) => (
              <TokenContainer
                key={i}
                onClick={() => {
                  onTokenChange?.(val.name)
                  setOpenModal(false)
                }}>
                <Token
                  token={val.name}
                  label={val.name}
                  labelColor={colors.lightGrey}
                />
              </TokenContainer>
            ))}
          </CustomModal>
        </>
      )}
    </InputWrapper>
  )
}

export default SwapInput
