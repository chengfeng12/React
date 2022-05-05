/*
 * @Author: your name
 * @Date: 2021-12-30 22:11:53
 * @LastEditTime: 2022-04-08 15:40:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
 * @FilePath: /React 框架/react-拓展/src/components/3.hooks/index.jsx
 */
import React, {Component} from 'react';
import ReactDOM from "react-dom"

// 类似组件
class Demo1 extends Component {
    state = {
        count: 0
    }

    increment = (num) => {
        this.setState(state => ({ count: state.count + 1}))
    }

    // 查看输入框中的值
    showInputValue = () => {
        alert(this.inputRef.current.value)
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.increment()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // 卸载组件
    unComponent = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }

    // ref
    inputRef = React.createRef();

    render() {
        return (
            <div>
                <h2>setState 组件：{ this.state.count }</h2>
                <input placeholder="请输入一个数字" ref={this.inputRef}/>
                <button onClick={this.increment}>点击 +1</button>
                <button onClick={this.unComponent}>卸载组件</button>
                <button onClick={this.showInputValue}>查看输入框中的值</button>
            </div>
        );
    }
}

// 函数式组件 Hooks
function Demo() {

    const [{count}, setCount] = React.useState({count: 0})

    const [{name}, setName] = React.useState({name: 'test'})

    const increment = () => {
        setCount(state => ({count: state.count + 1}))
    }

    const changeName = () => {
        setName(state => ({ name: "test" + new Date().getTime()}))
    }
    // 查看输入框中的值
    const  showInputValue = () => {
        alert(inputRef.current.value)
    }

    const unComponent = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }
    // 副作用 模拟 生命h周期
    React.useEffect(() => {
        console.log('初次相当于 componentDidMount');
        console.log('再次执行 componentDidUpdate');
        // let timer = setInterval(() => {
        //     increment()
        // }, 1000)
        return () => { // 每次都会执行
            console.log('相当于 componentWillUnmount')
            // clearInterval(timer);
        }
    }, [count]) // 第二个参数相当于要监听的变量，相当于 componentDidUpdate，不传就不会执行

    // ref
    const inputRef = React.useRef();

    return (
        <div>
            <h2>setState 组件：{ count }</h2>
            <input placeholder="请输入一个数字" ref={inputRef} />
            <button onClick={increment}>点击 +1</button>
            <button onClick={changeName}>改变名字</button>
            <button onClick={unComponent}>卸载组件</button>
            <button onClick={showInputValue}>查看输入框中的值</button>

            <h1>{name}</h1>
        </div>
    )
}

export default Demo
