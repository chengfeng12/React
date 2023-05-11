import React, {memo} from 'react';
import B from './B'

// 如果子组件使用 memo api且没有使用父组件传递的 props ，父组件重新渲染的时候，自组件不会重新渲染
//
const A = (props: { text: string, text2: number }) => {
  console.log('A组件渲染了')
  return (
    <div>
      A组件
      {props.text}
      <B></B>
    </div>
  );
};

export default memo(A);
