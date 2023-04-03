import { css, jsx } from '@emotion/react'

const stateStyle = () => {
  return css({
    '.Sate': {
      height: '300px',
      width: '300px',
      margin: '100px auto',
      textAlign: 'center',
      backgroundColor: '#ccc',
      padding: '20px',
      borderrRadius: '10px',
      [`& h1`]: {
        fontSize: '40px'
      },
      [`& button`]: {
        fontSize: '20px',
        marginRight: '10px'
      },
    }
  })
}
// .Sate {
//   height: 300px;
//   width: 300px;
//   margin: 100px auto;
//   text-align: center;
//   background-color: #ccc;
//   padding: 20px;
//   border-radius: 10px;
  
// }
// .Sate h1 {
//   font-size: 40px;
// }
// .Sate button {
//   margin-right: 10px;
//   font-size: 20px;
// }

export const renderStyle = () => {
  return css`
    ${stateStyle()}
  `
}