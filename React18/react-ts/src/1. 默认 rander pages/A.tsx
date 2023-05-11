import React from 'react';
import B from './B'

const A = () => {
  console.log('A组件渲染了')
  return (
    <div>
      A组件
      <B></B>
    </div>
  );
};

export default A;
