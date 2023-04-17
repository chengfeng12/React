import React from 'react';
import { Global } from  '@emotion/react'
import {PopupContent, CancelBtn, ConfirmBtn, PopupCss, PoputMain} from './DialogStyle'
import Modal from "@/components/Modal/Modal";

const Popup = (props: any) => {
  const confirg = {
    type: 'base',
    message: '',
    ...props
  }
  const createConfirm = (text: string) => {
    return <ConfirmBtn className="confirm" onClick={confirmHandler}>
      {text}
    </ConfirmBtn>
  }
  const  cretateFooter = () => {
    return <div className={`footer footer-${confirg.type}`}>
      {
        <>
          { config.cancel && <CancelBtn className="cancel" onClick={cancelHandler}>
              取消
          </CancelBtn> }
          {
            createConfirm('确认')
          }
        </>
      }
    </div>
  }
  const createContent = () => {
    return <PopupContent>
      {
        confirg.message ? confirg.message : props.children
      }
    </PopupContent>
  }

  const cancelHandler = () => {

  }
  const confirmHandler = () => {

  }
  return (
    <>
      <Global styles={PopupCss()}></Global>
      <Modal>
        <PoputMain>
          {createContent()}
          {cretateFooter()}
        </PoputMain>
      </Modal>
    </>
  );
};
export default Popup;
