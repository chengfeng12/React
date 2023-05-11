import React, {useContext} from 'react';
import Popup from "@/components/Popup/Popup";
import FoodsContext from "@/components/context/Foods.context";
import FoodItem from "@/components/FoodItem/FoodItem";

import styled from "@emotion/styled";

const ClearText = styled.div({
  fontSize: '12px',
  color: '#548fe8',
  cursor: 'pointer'
})

const CartDetail = (props: {
  visible: boolean,
  cancel: () => void,
  clearCart: () => void
}) => {
  const foodsCtx = useContext(FoodsContext);
  const popupConfig = {
    ...props,
    round: false,
    position: "bottom"
  }
  const closeNode = () => {
    return <ClearText className="clear-text" onClick={props.clearCart}>清空购物车</ClearText>
  }
  return (
    <Popup {...popupConfig} closeNode={closeNode()}>
      {foodsCtx.cartList.map(food => <FoodItem type='reduce' key={food.id} {...food}></FoodItem>)}
    </Popup>
  )
};
export default CartDetail;


