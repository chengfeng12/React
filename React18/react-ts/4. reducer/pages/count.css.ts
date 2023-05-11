import styled from '@emotion/styled';

export const CountMain = styled.div({
  '.button +.button': {
    marginLeft: "10px"
  }
})

export const Button = styled.div({
  backgroundColor: '#f40',
  color: '#fff',
  fontSize: '16px',
  padding: '6px 16px',
  textAlign: "center",
  cursor: "pointer",
  flex: '1',
  borderRadius: '6px',
  '&:hover': {
    opacity: 0.9
  }
})

const getButtonStyle = (align = 'flex-start') => {
  return styled.div({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: align,
    padding: '10px',
  })
}
export const ButtonBx = getButtonStyle()
