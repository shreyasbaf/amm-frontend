import { useWeb3React } from "@web3-react/core"
import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { liquidityPath } from "../../logic/paths"
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
  tokenValue?: string | number
  onChangeInput?: React.ChangeEventHandler<HTMLInputElement> | undefined
  ticker?: string
  balance?: string
  swapTokenList?: Array<{
    name: string
    address: string
  }>
  setTicker?: any
  position?: "top" | "bottom"
  showModalList?: boolean
  setTokenValue?: React.Dispatch<React.SetStateAction<any>>
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
  const navigate = useNavigate()
  const { token1, token2 } = useParams()
  const { pathname } = useLocation()
  const { account } = useWeb3React()
  const [openModal, setOpenModal] = useState(false)

  return (
    <InputWrapper position={position} switchSwap={switchSwap}>
      <StyledInput fullWidth value={tokenValue} onChange={onChangeInput} />
      <div className="maxButton">
        <Button onClick={() => setTokenValue && setTokenValue(balance)}>
          Max
        </Button>
      </div>
      {balance && (
        <BalanceWrapper account={account ? true : false}>
          Balance: {balance} {ticker}
        </BalanceWrapper>
      )}

      {ticker ? (
        <SelectorButton onClick={() => setOpenModal(true)}>
          <Token
            size="40px"
            token={ticker}
            label={ticker}
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
              setTicker(val.name)
              setOpenModal(false)

              const path = pathname.replace("/", "").split("/")

              console.log(pathname)
              console.log(path)

              if (position === "top") {
                navigate(`/${path[0]}/${val.name}/${token2}`)
              } else {
                // console.log(path[1])
                // console.log(`${path[1]}/${token1}/${val.name}`)
                navigate(`/${path[0]}/${token1}/${val.name}`)
              }
            }}>
            <Token
              token={val.name}
              label={val.name}
              labelColor={colors.lightGrey}
            />
          </TokenContainer>
        ))}
      </CustomModal>
    </InputWrapper>
  )
}

export default SwapInput
