import React, {memo, useCallback, useState} from 'react';
import B from './B'
import {Button, ButtonBx} from "@/pages/count.css";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

// 如果子组件使用 memo api且没有使用父组件传递的 props ，父组件重新渲染的时候，自组件不会重新渲染
const A = (props: { text: string, text2: number }) => {
  console.log('A组件渲染了')
  const [msg, setMsg] = useState('msg')
  /*
  * 第一个参数为函数，是当前要执行的函数
  * 第二个参数是个数组，跟 useEffect 用法和规则基本一致
  * */
  const onchange = useCallback(() => {
    setMsg(`${new Date().getTime()}`)
  }, [props.text2])

  return (
    <div>
      A组件
      {props.text}

      <h1>
        {msg}
      </h1>
      <ButtonBx>
        <Button className="button" onClick={onchange}>+</Button>
      </ButtonBx>
      {/*
        如果向子组件传递的是一个函数，则当前组件每次发生重新渲染的时候，子组件也会发生渲染
        无论子组件是否使用 memo，因为当前组件发生渲染的时候，会回重新生成一个函数，函数的地址不同，所以自组件设置 memo 无效
      */}
      <B change={onchange} text={msg}></B>
    </div>
  );
};

export default memo(A);
