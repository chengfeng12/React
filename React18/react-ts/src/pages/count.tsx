import React, {useState} from 'react';
import {CountMain, Button, ButtonBx} from './count.css'

const Count = () => {
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
    </CountMain>
  );
};

export default Count;
