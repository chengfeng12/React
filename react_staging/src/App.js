import React, { Component } from 'react'
import axios from "axios";
export default class App extends Component {
    // 请求数据
    getData = () => {
        // 先找本地，如果有则显示本地端口，没有则走代理
        axios.get("http://localhost:3000/student").then(res => {
            console.log(res);
        })
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.getData}>请求数据</button>
            </div>
        )
    }
}

