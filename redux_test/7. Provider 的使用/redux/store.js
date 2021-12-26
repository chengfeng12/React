// 引入 createStore
import { createStore, applyMiddleware } from "redux";
// 引入 countReduces 
import countReduces from "./count_reduces";
//引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";

// 必须为第二个参数，且 传值 thunk 中间件，异步 action 才能使用
export default createStore(countReduces, applyMiddleware(thunk))