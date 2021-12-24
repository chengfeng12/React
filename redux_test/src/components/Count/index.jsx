import React, { Component } from 'react';
export default class Count extends Component {

  increment = () => {
    const { value } = this.selectRef;
    this.props.increment(value * 1);
  }

  decrement = () => {
    const { value } = this.selectRef;
    this.props.decrement(value * 1);
  }
  incrementIfOdd = () => {
    const { value } = this.selectRef;
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  }
  incrementAsync = () => {
    const { value } = this.selectRef;
    // setTimeout(() => {
      this.props.increment(value * 1, 500);
    // }, 500)
  }

  render() {
    return (
      <div>
        <h2>结果为：{ this.props.count }</h2>
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
