import React, {useEffect} from 'react'
import {FooterContainer} from './footerStyle';
import {ShoppingCartOutlined} from '@ant-design/icons'
import FoodsContext from '@/components/context/Foods.context'
import {useContext, useState} from "react";
import CartDetail from "@/components/CartDetail/CartDetail";
import {initCart, initCartType} from "@/components/Foods";

export default function Footer(props: {
  //React.Dispatch<React.SetStateAction<initCartType>>
  clearCartinfo: () => void
}) {
  const foodCtx = useContext(FoodsContext);
  const getSettlementBtn = () => {
    return <div className={`settlement ${foodCtx.totalCount === 0 ? 'gray-settlement' : ''}`}
                onClick={goSettlement}>去结算</div>
  }
  const goSettlement = () => {
    if (foodCtx.totalCount > 0 && visible) {
      alert('结算成功')
      cancel()
    }
  }
  // 清空购物车
  const clearCart = () => {
    props.clearCartinfo()
  }
  const [visible, setVisible] = useState(false)
  const openCartPopup = () => {
    if (foodCtx.totalCount === 0) return
    setVisible(!visible)
  }
  const cancel = () => {
    setVisible(false)
  }
  useEffect(() => {
    if (foodCtx.totalCount === 0) {
      cancel()
    }
  }, [foodCtx])

  return (
    <>
      <FooterContainer onClick={openCartPopup}>
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
      <CartDetail visible={visible} cancel={cancel} clearCart={clearCart}></CartDetail>
    </>
  )
}
