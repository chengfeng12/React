// 引入 createStore
import { createStore, applyMiddleware, combineReducers } from "redux";
//引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";
// 引入 countReduces 
import countReduce from "./reduces/count";
// 引入 countReduces 
import personReduce from "./reduces/person";
// 合并 reduces
const reduces = combineReducers({
  countState: countReduce,
  personState: personReduce,
})


// 必须为第二个参数，且 传值 thunk 中间件，异步 action 才能使用
export default createStore(reduces, applyMiddleware(thunk))