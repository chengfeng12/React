import React, {EventHandler, useState} from 'react';
import {CloseOutlined} from '@ant-design/icons'
import {Global} from '@emotion/react'
import {PopupContent, CancelBtn, ConfirmBtn, PopupCss, PoputMain} from './PopupStyle'
import Modal from "@/components/Modal/Modal";

const setBodyHidden = (isHidden: boolean) => {
  let htmlDom = document.documentElement
  htmlDom.style.overflow = isHidden ? 'hidden' : 'visible'
  console.log(htmlDom.style, 'isHidden')
}
const Popup = (props: any) => {
  let {visible = false, cancel} = props
  setBodyHidden(visible)
  const {showFooter = false, closeIcon = true, showHeader = true, title = '', ...residue} = props;
  const config = {
    type: 'base',
    position: 'bottom',
    ...props
  }
  const createConfirm = (text: string) => {
    return <ConfirmBtn className="confirm" onClick={confirmHandler}>
      {text}
    </ConfirmBtn>
  }
  const cretateHeader = () => {
    return <div className={`popup-header`}>
      <p className='popup-title'>
        {title}
      </p>
      <CloseOutlined className="popup-close"></CloseOutlined>
    </div>
  }
  const cretateFooter = () => {
    return <div className={`footer footer-${config.type}`}>
      {
        <>
          {config.cancel && <CancelBtn className="cancel" onClick={cancelHandler}>
              取消
          </CancelBtn>}
          {
            createConfirm('确认')
          }
        </>
      }
    </div>
  }
  const createContent = () => {
    return <PopupContent>
      {props.children}
    </PopupContent>
  }

  const cancelHandler = () => {
    cancel();
  }
  const confirmHandler = () => {
    cancel();
  }
  const PoputMainDom = PoputMain(props)
  const clickHandle = (e: any) => {
    e.stopPropagation()
  }
  return (
    <>
      <Global styles={PopupCss(props)}></Global>
      {
        visible && <Modal>
            <PoputMainDom className={`popup popup-${config.position}`} onClick={clickHandle}>
              {showHeader ? cretateHeader() : null}
              {createContent()}
              {showFooter ? cretateFooter() : null}
            </PoputMainDom>
        </Modal>
      }
    </>
  );
};
export default Popup;
