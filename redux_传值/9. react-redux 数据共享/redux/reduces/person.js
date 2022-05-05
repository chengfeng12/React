// 引入常量
import { ADD_PERSON } from '../constant';
const initPerson = [{ id: new Date().getTime(), name: "小李", age: 18}];

const countReduces = (previousState = initPerson, action) => {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...previousState]
    default:
      return previousState
  }
}
export default countReduces