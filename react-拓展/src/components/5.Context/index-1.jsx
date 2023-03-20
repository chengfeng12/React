import React, {Component} from 'react';
import "./index.css"

const MyContext = React.createContext();
const {Provider, Consumer} = MyContext;

class A extends Component {
    state = {
        name: "小张",
        age: 18
    }

    changeAge = () => {
        this.setState(state => ({ age: state.age + 1}))
    }

    render() {
        const {age, name} = this.state
        return (
            <div className="A">
                <h2>这是 A 组件</h2>
                <p>name： {name} age： {age}</p>
                <button onClick={this.changeAge}>年龄增长</button>
                <Provider value={{name, age }}>
                    <B/>
                </Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className="B">
                <h2>这是 B 组件</h2>
                <C />
            </div>
        );
    }
}

// 第一种写法 类式组件的写法
class C extends Component {
    // 先声明接收，否则无法使用 context 的值为 空对象{}
    static contextType = MyContext;
    render() {
        const { name, age } = this.context;
        return (
            <div className="C">
                <h2>这是 C 组件</h2>
                <p>接收的值为 name： {name} age： {age}</p>
            </div>
        );
    }
}

//第二种写法， 类式组件和函数式组件都可以使用
// function C() {
//     return (
//         <div className="C">
//             <h2>这是 C 组件</h2>
//             <Consumer>
//                 {
//                     value => `接收的值为：${value.name}，age：${value.age}`
//                 }
//             </Consumer>
//         </div>
//     )
// }


export default A