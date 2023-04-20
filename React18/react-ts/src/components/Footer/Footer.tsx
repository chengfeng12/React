import {FooterContainer} from './footerStyle';
import {ShoppingCartOutlined} from '@ant-design/icons'
import FoodsContext from '@/components/context/Foods.context'
import {useContext} from "react";

export default function Footer() {
  const foodCtx = useContext(FoodsContext);
  const getSettlementBtn = () => {
    //gary
    return <div className={`settlement ${foodCtx.totalCount === 0 ? 'gray-settlement' : ''}`}>去结算</div>
  }
  return (
    <FooterContainer>
      <div className="cart-box">
        <ShoppingCartOutlined className="cart-icon"></ShoppingCartOutlined>
        <span className="count">
          {foodCtx.totalCount}
        </span>
      </div>
      <div className="cart-info">
        <p className="price">
          {foodCtx.totalPrice}
        </p>
        {getSettlementBtn()}
      </div>
    </FooterContainer>
  )
}
