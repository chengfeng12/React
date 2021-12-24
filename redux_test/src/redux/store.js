// 引入 createStore
import { createStore } from "redux";
// 引入 countReduces 
import countReduces from "./count_reduces";

export default createStore(countReduces)