import styled from '@emotion/styled';
import React from 'react';
import {createPortal} from 'react-dom'

const createModalMain = (props: {
  backgroundColor?: string,
  zIndex?: string,
  cancel?: () => void
}) => {
  let {backgroundColor = 'rgba(0,0,0,.3)', zIndex = '999'} = props;
  return styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: zIndex,
    backgroundColor: backgroundColor,
    overflow: 'hidden'
  })
}

const Modal = (props: any) => {
  const ModalMain = createModalMain(props)
  const clickHandler = () => {
    console.log('点击了')
    props.cancel && props.cancel()
  }
  const Model = (
    <ModalMain className={props.className} onClick={clickHandler}>
      {props.children}
    </ModalMain>
  )
  const modalDom = document.getElementById('modal-container') as Element;
  return createPortal(Model, modalDom)
};
export default Modal;
