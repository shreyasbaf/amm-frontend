import React, { useState } from "react"
import { Button } from "../../../shared/button"
import { FlexBox } from "../../../shared/flexBox"
import CustomModal from "../../../shared/modal/modal"
import { Spacer } from "../../../shared/shared"
import SwapInput from "../../exchange/components/swapInput"

const RemoveLp = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <Button width="3rem" onClick={() => setOpenModal(true)}>
        -
      </Button>
      <CustomModal
        show={openModal}
        toggleModal={() => {
          setOpenModal(!openModal)
        }}
        heading="Unstake LP tokens">
        <Spacer marginTop="3rem" />
        <SwapInput ticker={`BNB-BUSD`} balance={`10.05`} />
        <Spacer marginTop="2rem" />
        <FlexBox>
          <Button width="49%">Cancel</Button>
          <Button width="49%">Confirm</Button>
        </FlexBox>
      </CustomModal>
    </div>
  )
}

export default RemoveLp
