import {createPortal} from 'react-dom'
import styled from "@emotion/styled";
const ModalMain = styled.div(() => ({
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  overflow: 'hidden'
}));
export default function Modal(props: any) {
  const {show, handleClose} = props
  const { closeModal } = props
  const handleClick = () => {
    if (closeModal && handleClose) {
      handleClose(false)
    }
  }
  const Model = show ? <ModalMain onClick={handleClick}>{props.children}</ModalMain> : null
  return createPortal(Model, document.body);
}
