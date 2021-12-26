import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";
import { Provider } from "react-redux"

ReactDOM.render(
  // Provider 组件会把 store 传给所有的 container 组件
  <Provider store={store}>
    <App/>
  </Provider>
,document.getElementById('root'));


// 使用 react-redux 的话，可以不用自己写监听，会自动监听变化
/* 如果 store 中的值发生变化，则重新渲染 render */
/* store.subscribe(() => {
  ReactDOM.render(<App/>,document.getElementById('root'))
}); */
