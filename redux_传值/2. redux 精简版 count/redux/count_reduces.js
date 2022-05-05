
// 定义初始化的值
const initCount = 0;
export default function countReduces(previousState = initCount, action) {
  const { type, data } = action;
  switch (type) {
    case "increment":
      return previousState + data
    case "decrement":
        return previousState - data
    default:
      return previousState
  }
}