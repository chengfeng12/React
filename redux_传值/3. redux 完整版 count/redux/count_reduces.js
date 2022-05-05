// 引入常量
import { INCREMENT, DECREMENT} from './constant';

// 定义初始化的值
const initCount = 0;
export default function countReduces(previousState = initCount, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return previousState + data
    case DECREMENT:
        return previousState - data
    default:
      return previousState
  }
}