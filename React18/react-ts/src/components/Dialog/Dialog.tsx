import React from 'react';
import { Global } from  '@emotion/react'
import {DialogMain, CancelBtn, ConfirmBtn, footerCss, DialogContent} from './DialogStyle'
import Modal from "@/components/Modal/Modal";

const ConfirmDialog = (props: any) => {
  const config = {
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
    return <div className={`footer footer-${config.type}`}>
      {
        config.type === 'base' ?  (
          <>
            <CancelBtn className="cancel" onClick={cancelHandler}>
              取消
            </CancelBtn>
            {
              createConfirm('确认')
            }
          </>
        )  : createConfirm('我知道了')
      }
    </div>
  }
  const createContent = () => {
    return <DialogContent>
      {
        config.message ? config.message : props.children
      }
    </DialogContent>
  }

  const cancelHandler = () => {

  }
  const confirmHandler = () => {

  }
  return (
    <>
      <Global styles={footerCss()}></Global>
      <Modal>
        <DialogMain>
          {createContent()}
          {cretateFooter()}
        </DialogMain>
      </Modal>
    </>
  );
};
export default ConfirmDialog;
