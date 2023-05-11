import styled from "@emotion/styled";

const height = '40px'
export const FooterContainer = styled.div({
  position: 'fixed',
  zIndex: '9999',
  width: '85%',
  backgroundColor: '#333',
  borderRadius: '20px',
  bottom: '30px',
  left: '50%',
  transform: 'translate(-50%, 0)',
  display: 'flex',
  alignItems: 'center',
  '.cart-box': {
    position: 'relative',
    marginLeft: '20px',
    '.cart-icon': {
      color: '#fff',
      fontSize: '40px',
    },
    '.count': {
      borderRadius: '50%',
      height: '20px',
      width: '20px',
      lineHeight: '20px',
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#f20',
      fontSize: '12px',
      position: 'absolute',
      top: '0px',
      right: '-8px',
    }
  },
  '.cart-info': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '1',
    marginLeft: '20px',
    '.price': {
      color: '#fff',
      fontSize: '16px',
      padding: '0',
      margin: '0',
      lineHeight: height,
      height: height,
      '&::before': {
        fontSize: '12px',
        marginRight: '4px',
        content: '"¥"'
      }
    },
    '.settlement': {
      backgroundColor: '#1677ff',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '0 20px',
      height: height,
      lineHeight: height,
      borderRadius: '20px',
    },
    '.gray-settlement': {
      color: '#ccc',
      backgroundColor: '#555',
    }
  }
})
