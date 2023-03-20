import React, { Component } from "react";
import "./index.css";
let MyContext = React.createContext();
let { Provider, Consumer } = MyContext;
class A extends Component {
  state = {
    name: "张三",
    age: 18,
  };
  growUp = () => {
    this.setState((state) => ({ age: state.age + 1 }));
  };
  growDown = () => {
    this.setState((state) => ({ age: state.age - 1 }));
  };
  render() {
    let { name, age } = this.state;
    return (
      <div className="A">
        父组件的值:
        <br />
        姓名：{name}
        年龄：{age}
        <button onClick={this.growUp}>长大 1 岁</button>
        <MyContext.Provider
          value={{
            ...this.state,
            growDown: this.growDown,
          }}
        >
          <B></B>
        </MyContext.Provider>
      </div>
    );
  }
}

class B extends Component {
  static contextType = MyContext;
  render() {
    let { name, age } = this.context;
    return (
      <div className="B">
        子组件:
        {name} - {age}
        <C name={name} age={age}></C>
      </div>
    );
  }
}

// 第一种写法 类式组件的写法
// class C extends Component {
//   static contextType = MyContext;
//   growDown = () => {
//     this.context.growDown();
//   };
//   render() {
//     let { name, age } = this.props;
//     let context = this.context;
//     return (
//       <div className="C">
//         <p>
//           1. 孙组件 父组件的值 {name} - {age}
//         </p>
//         <p>
//           2. 孙组件 父组件的值 {context.name} - {context.age}
//         </p>
//         <button onClick={this.growDown}>小了 1 岁</button>
//       </div>
//     );
//   }
// }

//第二种写法， 类式组件和函数式组件都可以使用
function C(props) {
  const growDown = (context) => {
    console.log(context, "vvv");
    context.growDown();
  };
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="C">
          <p>
            1. 孙组件 父组件的值 {props.name} - {props.age}
          </p>
          <p>
            2. 孙组件 父组件的值 {context.name} - {context.age}
          </p>
          <button
            onClick={() => {
              growDown(context);
            }}
          >
            小了 1 岁
          </button>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default A;
