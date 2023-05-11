import autoAnimate from '@formkit/auto-animate'
// 引入组件
import {MinusCircleOutlined, PlusCircleOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";
import FoodsContext from "../context/Foods.context";
import {useContext, useEffect, useRef} from "react";
import {FoodItemType} from "../Foods.type";

const Count = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  '.price': {
    margin: '0 4px',
    fontSize: '12px'
  },
  '.icon': {
    color: '#333',
    fontSize: '14px'
  }
});
export default function Counter(props: FoodItemType) {
  const counterRef = useRef(null)
  useEffect(() => {
    counterRef.current && autoAnimate(counterRef.current)
  }, [counterRef])
  const ctx = useContext(FoodsContext);
  // console.log(ctx, 'ctx');
  const addCount = () => {
    ctx.addFood(props);
  };
  const subtractCount = () => {
    ctx.removeFood(props);
  };
  return (
    <Count ref={counterRef}>
      {props.count > 0 ? (
        <Count>
          <MinusCircleOutlined className="icon" onClick={subtractCount}></MinusCircleOutlined>
          <span className="price">{props.count}</span>
        </Count>
      ) : null}
      <PlusCircleOutlined className="icon" onClick={addCount}/>
    </Count>
  );
}
