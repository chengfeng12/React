import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
    render() {
        /* 在 React 中靠路由链接实现切换组件---编写路由组件链接 */
        /* 新版本正在删除该 api activeclassname，必须使用默认的 active 类名， 旧版本的使用 （选中的 添加 class 名）*/
        /* <NavLink classNameProp="current-link-item" className="link-item" to="/about">About</NavLink> */
        
        /* <NavLink className="link-item" to="/about">About</NavLink>
        <NavLink className="link-item" to="/home">Home</NavLink> */
            
        return (
            /* 标签体可以通过 props.children 获取，然后写入标签属性之中 */
            <NavLink className="link-item" {...this.props} />
        )
    }
}
