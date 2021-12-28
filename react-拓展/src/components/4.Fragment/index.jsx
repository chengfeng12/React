import React, {Component, Fragment} from 'react';

export default class Index extends Component {
    render() {
        return (
            // Fragment 标签可以携带参数 ， react 渲染的时候会不渲染这个标签
            // 也可写写成 <></> 空表亲，但不能携带参数
            <Fragment key={1}>
                <p>这是第一段文字</p>
                <p>这是第二段文字</p>
            </Fragment>
        );
    }
}
