import { useState } from "react"
import { colors } from "../../styles/theme"
import CustomModal from "../modal/modal"
import Token from "../token"
import { ModalListWrapper, SelectorButton, TokenContainer } from "./style"

interface ModalListProps {
  options?: Array<{
    name: string
    value: string
  }>
  onChange?: any
  value?: string
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
}

const ModalList = (props: ModalListProps) => {
  const { options, onChange, value, position, top, left, right, bottom } = props
  const [openModal, setOpenModal] = useState(false)

  return (
    <ModalListWrapper
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}>
      {value ? (
        <SelectorButton onClick={() => setOpenModal(true)}>
          <Token token={value} label={value} labelColor={colors.black} />
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
        {options?.map((val, i) => (
          <TokenContainer
            key={i}
            onClick={() => {
              onChange(val.name)
              setOpenModal(false)
            }}>
            <Token
              token={val.name}
              label={val.value}
              labelColor={colors.lightGrey}
            />
          </TokenContainer>
        ))}
      </CustomModal>
    </ModalListWrapper>
  )
}

export default ModalList
