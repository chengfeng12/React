import React, {Component} from 'react';
import ReactDOM from "react-dom"

// 类似组件
class Demo1 extends Component {
    state = {
        count: 0
    }

    increment = () => {
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

    const increment = () => {
        setCount(state => ({count: state.count + 1}))
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
        console.log('相当于 componentDidMount')
        let timer = setInterval(() => {
            increment()
        }, 1000)

        return () => { // 每次都会执行
            console.log('相当于 componentWillUnmount')
            clearInterval(timer);
        }
    })

    // ref
    const inputRef = React.useRef();

    return (
        <div>
            <h2>setState 组件：{ count }</h2>
            <input placeholder="请输入一个数字" ref={inputRef} />
            <button onClick={increment}>点击 +1</button>
            <button onClick={unComponent}>卸载组件</button>
            <button onClick={showInputValue}>查看输入框中的值</button>
        </div>
    )
}

export default Demo
