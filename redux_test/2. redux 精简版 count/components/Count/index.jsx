import React, { Component } from 'react';
import store from '../../redux/store';

export default class Count extends Component {

  /* // 当 redux 中 store 的值发生变化时，触发并调用 render 函数 也可在 入口文件 中全局写入
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  } */

  increment = () => {
    const { value } = this.selectRef;
    store.dispatch({
      type: "increment",
      data: value * 1
    })
  }

  decrement = () => {
    const { value } = this.selectRef;
    store.dispatch({
      type: "decrement",
      data: value * 1
    })
  }
  incrementIfOdd = () => {
    const { value } = this.selectRef;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({
        type: "increment",
        data: value * 1
      })
    }
  }
  incrementAsync = () => {
    const { value } = this.selectRef;
    setTimeout(() => {
      store.dispatch({
        type: "increment",
        data: value * 1
      })
    }, 500)
  }

  render() {
    return (
      <div>
        <h2>结果为：{ store.getState() }</h2>
        <select ref={ current => this.selectRef = current}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数+</button>&nbsp;
        <button onClick={this.incrementAsync}>异步+</button>
      </div>
    )
  }
}
