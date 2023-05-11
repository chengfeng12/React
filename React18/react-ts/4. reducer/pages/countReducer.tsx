import {useReducer} from 'react';
import {CountMain, Button, ButtonBx} from './count.css'

interface types {
  type: 'add' | 'reduce'
}

function reducer(state: number, action: types): number {
  /**
   * 如果为 引用类型需要返回新的引用类型数据，与state一样
   * */
  switch (action.type) {
    case 'add':
      return state + 1
    case 'reduce':
      return state - 1
    default:
      return state
  }
}

const CountReducer = () => {
  let [count, countDispatch] = useReducer(reducer, 0)
  const onAdd = () => {
    countDispatch({type: 'add'})
  }
  const onReduce = () => {
    countDispatch({type: 'reduce'})
  }
  console.log(count)
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

export default CountReducer;
