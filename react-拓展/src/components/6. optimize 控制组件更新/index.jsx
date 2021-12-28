import React, {PureComponent} from 'react';
import "./index.css";

// Component 普通形式 render 会随着 state 的更新跟着更新, 子组件也会重新调用 render
// 注意：如果通过 setState 传递空值 也会导致 render 重新渲染 子组件没有用到父组件的状态，也会重新 render
// PureComponent 会自动比较值是否发生变化，如果变化，则会调用 render 方法，否则不会渲染
// 注意： 采用浅比较，对比的是堆中的地址，所以不建议返回原数据，希望返回新的引用类型数据 (类似 reduces 中纯函数 )
class Parent extends PureComponent {
    state = {
        name: "小张",
        age: 18
    }

    changeAge = () => {
        this.setState(state => ({ age: state.age + 1}))
    }

    changeName = () => {
        this.setState(state => ({ name: state.name + 1}))
    }

    // 使用 shouldComponentUpdate 防止更新
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Parent ---------------------")
    //     console.log(nextProps, nextState);
    //     console.log(this.props, this.state);
    //     // 手动判断不可能手动判断所有的状态是否发生变化，所以不推荐使用
    //     return nextState.name !== this.state.name
    // }

    render() {
        console.log("Parent")
        const { age, name } = this.state;
        return (
            <div className="parent">
                <h2>这是 Parent 组件</h2>
                <p>name： {name} age： {age}</p>
                <button onClick={this.changeAge}>年龄增长</button>
                <button onClick={this.changeName}>改名</button>
                {/*<Child {...this.state} />*/}
                <Child age="18" name="Tom" />
            </div>
        );
    }
}


class Child extends PureComponent {

    // 使用 shouldComponentUpdate 防止更新
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Child ---------------------")
    //     console.log(nextProps, nextState);
    //     console.log(this.props, this.state);
    //     return nextProps.name !== this.props.name
    // }


    render() {
        console.log("Child")
        const { name, age } = this.props;
        return (
            <div className="child">
                <h2>这是 Child 组件</h2>
                <p>接收的值为 name: {name}, age: {age}</p>
            </div>
        );
    }
}

export default Parent