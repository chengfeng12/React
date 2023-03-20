import React, {PureComponent} from 'react';
import "./index.css";

class Parent extends PureComponent {
    render() {
        return (
            <div className="parent">
                <h2>这是 Parent 组件</h2>
                {/* 一般写法 父子嵌套
                        A 组件内部使用 B 组件
                 */}

                {/* 第二种 children props 直接在父组件中嵌套使用，写入标签体 中 , 需要搭配 props 中的 children 属性，无法传递参数 */}
                {/* <A>
                    <B />
                </A> */}

                {/* 第三种 使用 render props 标签属性的形式，传递，且可以传递 参数，类式 vue 中的 slot */}
                <A render={(props={}) => <B {...props}></B>}></A>
            </div>
        );
    }
}


class A extends PureComponent {
    state = {
        name: "小张",
        age: 18
    }
    render() {
        return (
            <div className="A">
                <h2>我是 A 组件</h2>
                {/*<B></B>*/}

                {/* { this.props.children } */}

                { this.props.render(this.state) }
            </div>
        );
    }
}

class B extends PureComponent {
    render() {
        return (
            <div className="B">
                <h2>我是 B 组件</h2>
                接收的参数是 name: {this.props.name}
            </div>
        );
    }
}

export default Parent