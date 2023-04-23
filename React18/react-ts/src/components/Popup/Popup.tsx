/** @jsxImportSource @emotion/react */ // 解决 css css 解析问题
import React, {useRef, useState} from 'react';
import {Transition} from 'react-transition-group'
import {CloseOutlined} from '@ant-design/icons'
import {Global} from '@emotion/react'
import {PopupContent, CancelBtn, ConfirmBtn, PopupCss, PoputMain} from './PopupStyle'
import {css} from "@emotion/react";
import Modal from "@/components/Modal/Modal";

const setBodyHidden = (isHidden: boolean) => {
  let htmlDom = document.documentElement
  htmlDom.style.overflow = isHidden ? 'hidden' : 'visible'
}
const Popup = (props: any) => {
    let {
      visible = false, cancel = () => {
      }
    } = props
    setBodyHidden(visible)
    const {showFooter = false, closeIcon = true, showHeader = true, title = '', ...residue} = props;
    const config = {
      type: 'base',
      position: 'bottom',
      border: false,
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
        <div className="popup-close">
          {props.closeNode ? props.closeNode : <CloseOutlined onClick={cancelHandler}></CloseOutlined>}
        </div>

      </div>
    }
    const cretateFooter = () => {
      return <div className={`footer footer-${config.border} footer-shadow`}>
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
    const popupRef = useRef(null)
    const [open, setOpen] = useState(true)
    return (
      <>
        {
          visible &&
          <Modal {...props}>
              <Transition nodeRef={popupRef} in={open} timeout={1500}>
                  <div css={css`${
                    PopupCss(props)
                  }`}>
                      <PoputMainDom ref={popupRef} className={`popup popup-${config.position}`} onClick={clickHandle}>
                        {showHeader ? cretateHeader() : null}
                        {createContent()}
                        {showFooter ? cretateFooter() : null}
                      </PoputMainDom>
                  </div>
              </Transition>
          </Modal>
        }
      </>
    )
  }
;
export default Popup;
