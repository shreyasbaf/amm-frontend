import { useState } from "react"
import { colors } from "../../styles/theme"
import { Button } from "../button"
import CustomModal from "../modal/modal"
import Token from "../token"
import { TokenContainer } from "./style"

interface ModalListProps {
  options?: Array<{
    name: string
    value: string
  }>
  onChange?: any
  value?: string
}

const ModalList = (props: ModalListProps) => {
  const { options, onChange, value } = props
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      {value ? (
        <Button onClick={() => setOpenModal(true)}>
          <Token token={value} label={value} labelColor={colors.black} />
        </Button>
      ) : (
        <Button onClick={() => setOpenModal(true)}>Select a token</Button>
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
            <Token token={val.name} label={val.value} />
          </TokenContainer>
        ))}
      </CustomModal>
    </div>
  )
}

export default ModalList
