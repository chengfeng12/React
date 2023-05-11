import React, {useState} from 'react';
import {CountMain, Button, ButtonBx} from './count.css'
import A from './A'

// 默认情况下父组件设置了 setState ，自组件无论使用没有使用 state 的值，自组件都会发生变化
const Count = () => {
  console.log('父组件渲染了')
  const [count, setCount] = useState(0)
  const onAdd = () => {
    setCount(count + 1);
  }
  const onReduce = () => {
    setCount(count - 1);
  }
  return (
    <CountMain>
      {count}
      <ButtonBx>
        <Button className="button" onClick={onAdd}>+</Button>
        <Button className="button" onClick={onReduce}>-</Button>
      </ButtonBx>
      <A></A>
    </CountMain>
  );
};

export default Count;
