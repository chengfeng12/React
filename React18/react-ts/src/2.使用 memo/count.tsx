import React, {useState, useEffect} from 'react';
import {CountMain, Button, ButtonBx} from './count.css'
import A from './A'

// 默认情况下父组件设置了 setState ，自组件无论使用没有使用 state 的值，自组件都会发生变化
const Count = () => {
  console.log('父组件渲染了')
  const [count, setCount] = useState(0)
  const onAdd = () => {
    setCount(count + 1);
  }
  useEffect(() => {

  }, [count])
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
      {/*
        如果向子组件传递的是个静态数据，则自组件也不会发生重新渲染
        如果传递的有 state 数据，则只要 state 发生变化，自组件都会重新渲染（不论使用不使用）
      */}
      <A text='test' text2={count}></A>
    </CountMain>
  );
};

export default Count;
