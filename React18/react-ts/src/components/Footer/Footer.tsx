import {FooterContainer} from './footerStyle';
import {ShoppingCartOutlined} from '@ant-design/icons'

export default function Footer() {
  const getSettlementBtn = () => {
    return <div className="settlement">去结算</div>
  }
  return (
    <FooterContainer>
      <div className="cart-box">
        <ShoppingCartOutlined></ShoppingCartOutlined>
        <span className="count">0</span>
      </div>
      <div className="info">
        <p className="tesx"></p>
        {getSettlementBtn()}
      </div>
    </FooterContainer>
  )
}
