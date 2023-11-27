import {memo} from 'react';

const B = (props: {
  text: string,
  change: () => void
}) => {
  console.log('----------------------B组件渲染了')
  return (
    <div>
      B
    </div>
  );
};

// export default B;
export default memo(B);
