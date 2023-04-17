import styled from "@emotion/styled";
import {css} from "@emotion/react";

const minHeight = '500px'
const minWidth = '300px'
export const PopupCss = (props: any) => {
  let {height = minHeight, width = minWidth} = props
  return css({
    '.popup-right': {
      top: 0,
      right: 0,
      bottom: 0,
      minWidth: width,
      width,
    },
    '.popup-left': {
      top: 0,
      left: 0,
      bottom: 0,
      minWidth: width,
      width,
    },
    '.popup-top': {
      top: 0,
      left: 0,
      right: 0,
      minHeight: height,
      height
    },
    '.popup-bottom': {
      bottom: 0,
      left: 0,
      right: 0,
      minHeight: height,
      height
    },
    '.popup': {
      ...PopupHeader(props),
    }
  })
}

export const PopupHeader = (props: any) => {
  let {height = minHeight, width = minWidth} = props
  return css({
    '.popup-header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px'
    },
    '.popup-title': {
      flex: '1'
    },
    '.popup-close': {
      cursor: 'pointer',
      color: '#666'
    }
  })
}

export const PoputMain = (props: any) => {
  let {round = true} = props
  return styled.div({
    backgroundColor: '#fff',
    borderRadius: round ? '10px' : '0px',
    position: 'absolute',
    overflowY: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  })
}

export const PopupContent = styled.div({
  backgroundColor: '#fff',
  overflowY: 'auto',
  flex: '1',
  padding: '10px'
})

export const Button = styled.button({
  flex: '1',
  lineHeight: '40px',
  textAlign: 'center',
  cursor: 'pointer',
  fontSize: '14px',
  overflow: 'hidden',
  backgroundColor: '#fff',
  border: 'none',
  padding: '0',
})

export const CancelBtn = styled(Button)({
  color: '#333',
})

export const ConfirmBtn = styled(Button)({
  color: '#1677ff',
})
