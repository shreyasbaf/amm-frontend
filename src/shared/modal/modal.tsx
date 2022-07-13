import { createPortal } from "react-dom"
import { ModalBody, ModalContent, ModelHead, Close } from "./style"

const CustomModal = (props: any) => {
  const { show, toggleModal, borderRadius, close, heading, styles, headIcon } =
    props
  // console.log(
  //   "🚀 ~ file: CustomModal.tsx ~ line 14 ~ CustomModal ~ headIcon",
  //   headIcon
  // );

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleModal()
    }
  }

  /* return (
    <ModalBody
      id="modal-local"
      show={show}
      onMouseDown={handleClickOutside}
      style={{ ...styles }}>
      <ModalContent borderRadius={borderRadius}>
        <ModelHead>
          <h2>{heading}</h2>
          <Close
            onClick={() => toggleModal(!show)}
            src={require("../../assets/icons/close-icon.svg")}
          />
        </ModelHead>
        {props.children}
      </ModalContent>
    </ModalBody>
  ) */

  if (show) {
    return createPortal(
      <ModalBody
        id="modal-local"
        show={show}
        onMouseDown={handleClickOutside}
        style={{ ...styles }}>
        <ModalContent borderRadius={borderRadius}>
          <ModelHead>
            <h2>{heading}</h2>
            <Close
              onClick={() => toggleModal(!show)}
              src={require("../../assets/icons/close-icon.svg")}
            />
          </ModelHead>
          {props.children}
        </ModalContent>
      </ModalBody>,
      document.getElementById("modal-global") || <></>
    )
  } else {
    return <></>
  }
}
export default CustomModal
