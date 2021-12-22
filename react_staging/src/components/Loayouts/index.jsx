import React, { Component } from "react";
// 一般组件
import Header from "../Header";
import MyNavLink from "../MyNavLink";
// 路由组件
import About from "../../pages/About";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";
import "./index.css";

export default class Loayouts extends Component {
  /**
   * 路由的基本使用
   *     1. 明确好界面中的导航区、展示区
   *     2. 导航区域的 a 标签改为 Link 标签
   *            <Link className="link-item" to="/about">About</Link>
   *     3. 展示区写 Route 标签进行路径的匹配
   *            <Route path="/about" component={About} />
   *            新写法 <Route path="/about" element={<div> {  <About /> } </div>} />
   *     4. <App /> 的最外层包裹 一个 <BrowserRouter> 或者 <HashRouter> (带 # 号)
   * 
   * 路由组件与一般组件
   *     1. 写法不同
   *          一般组件 <Demo />
   *           路由组件: <Route path="/demo" component={Demo} />
   *     2. 存放位置不同
   *          一般组件 components
   *          路由组件 page
   *     3. 接收到的 props 不同
   *          一般组件 传什么就就收什么
   *          路由组件 (旧版本)
   *              history：
   *                  go: f go(n)
   *                  goBack: f goBack()
   *                  goForward: f goForward()
   *                  push: f push(path, state)
   *                  replace: f replace(path, state)
   *              location:
   *                  pathname: "/about"
   *                  search: ""
   *                  state: undefined
   *              match:
   *                  params: {}
   *                  path: "/about"
   *                  url: "/about"
   *          新版本 （暂不清楚）
   *  */
  render() {
    return (
      <div className="layout">
        <Header></Header>
        <div className="view">
          <div className="tab-list">
            <MyNavLink to="/home">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
          </div>
          <div className="route-view">
            <Routes>
              {/**
               * 之前的版本是 component 17 版本之后改为 element ，用法上也发生了改变
               *     之前 component={About}
               *     现在 element={<div>
                            {
                              <About />
                            }
                          </div>} 需要 Routes 标签包裹
                */}

                {/* 注册路由 */}
              <Route path="/about" element={<div>
                {
                  <About />
                }
              </div>} />
              <Route path="/home" element={<div>
                {
                  <Home />
                }
              </div>} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
