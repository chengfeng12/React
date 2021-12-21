import React, { Component } from 'react'
export default class App extends Component {
    requestData = async () => {
        /**
         * 关注点分离
         *     关注点分离是日常生活和生产中广泛使用的解决复杂问题的一种系统思维方法。大体思路是,先将复杂问题做合理的分解,再分别仔细研究问题的不同侧面(关注点)，最后综合各方面的结果，合成整体的解决方案
         */

        // 使用 fetch 请求 （未优化）
        fetch("url").then(
            response => {
                console.log("连接服务器成功了", response);
                return response.json()
            },
            error => {
                console.log("连接服务器失败了", error);
                // 如果没有 return promise 对象 则依然会进入 数据请求成功, 添加则 不会进入 console.log("请求数据失败了", error);
                return new Promise(() => {})
            }
        ).then(
            resopnse => {
                console.log("请求数据成功了", resopnse);
            },
            error => {
                console.log("请求数据失败了", error);
            }
        )

        // 优化
        fetch("url").then(
            response => {
                console.log("连接服务器成功了", response);
                return response.json()
            }
        ).then(
            response => {
                console.log("请求数据成功了", response);
            }
        ).catch(error => {
            console.log("请求失败了", error);
        })

        // 在优化
        try {
            let response = await fetch("url");
            let data = await response.json();
            console.log("请求数据成功了", data);
        } catch (error) {
            console.log("请求失败了", error);
        }
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.requestData}>请求数据</button>
            </div>
        )
    }
}

