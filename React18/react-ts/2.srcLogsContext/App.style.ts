import {css} from '@emotion/react'
import styled from '@emotion/styled'
export const AppMain = styled.div(() => {
  return {
    width: '50%',
    margin: '100px auto 0'
  }
})

const appStyle = () => {
  return css({
    '.card': {
      borderRadius: '8px',
      padding: '10px',
      boxShadow: '0 0 10px #ccc'
    } 
  })
}

export default appStyle