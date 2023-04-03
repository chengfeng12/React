import styled from '@emotion/styled'
import {CardDiv} from '../Card/Card.style'
export const LogItemContainer = styled(CardDiv)({
  'textAlign': 'center',
  marginBottom: '10px',
  backgroundColor: '#FDD692',
  display: 'flex',
  padding: '5px',
  overflow: 'hidden',
  [`&:last-child`]: {
    marginBottom: '0',
  }
})
