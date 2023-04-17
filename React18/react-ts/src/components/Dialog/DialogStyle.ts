
import styled from "@emotion/styled";
import { css } from "@emotion/react";
export const footerCss = () => {
  return css({
    '.footer': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    '.footer-base': {
      '.cancel': {
        borderRight: '1px solid #e0e0e0'
      }
    }
  })
}
export const DialogMain = styled.div({
  backgroundColor: '#fff',
  width: '320px',
  borderRadius: '10px',
  position: 'absolute',
  margin: '0 auto',
  top: '100px',
  right: '0',
  left: '0',
})

export const DialogContent = styled.div({
  backgroundColor: '#fff',
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
