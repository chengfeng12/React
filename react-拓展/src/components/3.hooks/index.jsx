/*
 * @Author: your name
 * @Date: 2021-12-30 22:11:53
 * @LastEditTime: 2022-04-08 15:40:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
 * @FilePath: /React 框架/react-拓展/src/components/3.hooks/index.jsx
 */
import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom";

// 类似组件
class Demo1 extends Component {
  state = {
    count: 0,
  };
  add = () => {
    let { count } = this.state;
    let { value } = this.countRef;
    if (isNaN(value) || value.length === 0) {
      count += 1;
    } else count += Number(value);
    this.setState({
      count,
    });
  };
  reduce = () => {
    let { count } = this.state;
    let { value } = this.countRef;
    if (isNaN(value) || value.length === 0) {
      count -= 1;
    } else count -= Number(value);
    this.setState({
      count,
    });
  };
  show = () => {
    console.log(this.countRef.value);
  };
  countRef = React.createRef();
  componentDidMount = () => {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      this.add();
    }, 1000);
  };
  componentDidUpdate(e, e2) {
    console.log(e, e2, "componentDidUpdate");
  }
  componentWillUnmount = () => {
    console.log("componentWillUnmount");
    if (this.timer) {
      clearInterval(this.timer);
    }
  };
  unMount = () => {
    ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <input type="number" ref={this.countRef} />
        <button onClick={this.add}>+</button>
        <button onClick={this.reduce}>-</button>
        <button onClick={this.show}>show</button>
        <button onClick={this.unMount}>unMount</button>
      </div>
    );
  }
}

// 函数式组件 Hooks
function Demo() {
  let [count, setCount] = React.useState(0);
  const countRef = React.createRef();
  const add = () => {
    let { value } = countRef;
    if (isNaN(value) || value.length === 0) {
      count += 1;
    } else count += Number(value);
    setCount(count);
  };
  const reduce = () => {
    let { value } = countRef;
    if (isNaN(value) || value.length === 0) {
      count -= 1;
    } else count -= Number(value);
    setCount(count);
  };
  React.useEffect(() => {
    console.log('componentDidMount');
    console.log('再次执行 componentDidUpdate');
    let timer = setInterval(() => {
        add();
    }, 1000)
    return () => {
        if (timer) {
            clearInterval(timer)
        }
        console.log('componentWillUnmount')
    }
  }, [count])
  const show = () => {
    console.log(countRef.value);
  };
  const unMount = () => {
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
  };
  return (
    <div>
      <h1>{count}</h1>
      <input type="number" ref={countRef} />
      <button onClick={add}>+</button>
      <button onClick={reduce}>-</button>
      <button onClick={show}>show</button>
      <button onClick={unMount}>unMount</button>
    </div>
  );
}

export default Demo;
