import { ModalBody, ModalContent, CloseButton, ModelHead, Close } from "./style"

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

  return (
    <ModalBody
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
  )
}
export default CustomModal
