import React, { Component } from 'react';
import Item from '../Item';
import PubSub from 'pubsub-js'
export default class List extends Component {
    componentDidMount() {
        this.token = PubSub.subscribe("my-news", (_, data) => {
            console.log("我订阅的消息", data);
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        return (
            <div>
                <h2>我是父组件</h2>
                <Item></Item>
            </div>
        )
    }
}
