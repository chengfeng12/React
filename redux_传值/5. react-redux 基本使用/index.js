import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store"

ReactDOM.render(<App/>,document.getElementById('root'));

/* 如果 store 中的值发生变化，则重新渲染 render */
store.subscribe(() => {
  ReactDOM.render(<App/>,document.getElementById('root'))
});
