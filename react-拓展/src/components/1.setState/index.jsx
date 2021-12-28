import React, {Component} from 'react';

export default class Demo extends Component {

    state = {
        count: 0
    }

    increment = () => {
        // 对象式的setState
        // this.setState({
        //     count: this.state.count + 1
        // })

        // 函数式的setState
        this.setState(state => ({count: state.count + 1}))
    }

    render() {
        return (
            <div>
                <h2>setState 组件：{this.state.count}</h2>
                <button onClick={this.increment}>点击 +1</button>
            </div>
        )
    }
}
