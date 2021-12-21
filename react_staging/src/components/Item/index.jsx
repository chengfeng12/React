import React, { Component } from 'react';
import PubSub from "pubsub-js";

export default class Item extends Component {
    publish = () => {
        console.log('我发布的消息，请接收');
        PubSub.publish('my-news', {
            name: '小王',
            age: 18
        })
    }
    render() {
        return (
            <div>
                <h2>我是子组件</h2>
                <button onClick={this.publish}>点击发布消息</button>
            </div>
        )
    }
}