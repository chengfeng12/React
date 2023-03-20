import React, { PureComponent } from "react";
import "./index.css";

class Parent extends PureComponent {
    state = {
        name: "Parent",
        age: 12
    }
  render() {
    return (
      <div className="parent">
        <h2>这是 Parent 组件</h2>
        <A>
          <B {...this.state}></B>
        </A>

        <A render={(state = {}) => <B {...state}></B>}></A>
      </div>
    );
  }
}

class A extends PureComponent {
  state = {
    name: "小张",
    age: 18,
  };
  render() {
    console.log('AAA');
    return (
      <div className="A">
        <h2>我是 A 组件</h2>
        <B {...this.state}></B>
        {this.props.children}
        {/* {console.log(this.props.render())} */}
        {this.props.render ? this.props.render(this.state) : ''}
      </div>
    );
  }
}

class B extends PureComponent {
  render() {
    return (
      <div className="B">
        <h2>我是 B 组件</h2>
        {console.log(this.props.state)}
        接收的参数是 name: {this.props.name}
      </div>
    );
  }
}

export default Parent;
