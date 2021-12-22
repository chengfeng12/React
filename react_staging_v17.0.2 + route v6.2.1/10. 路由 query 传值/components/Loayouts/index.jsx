import React, { Component } from "react";
// 一般组件
import Header from "../Header";
import MyNavLink from "../MyNavLink";
// 路由组件
import About from "../../pages/About";
import Home from "../../pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
// Redirect 重定向路由组件 老版本中使用 <Redirect to="/home"></Redirect>
// Swicth 匹配路由 老版本中使用  被 Routes 代替 
/**
 * // v5
  <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/profile"><Profile /></Route>
  </Switch>

  // v6
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile/*" element={<Profile />} />
  </Routes>

  component/render被element替代
  // v5 
  <Route path=":userId" component={Profile} />
  <Route
    path=":userId"
    render={routeProps => (
      <Profile routeProps={routeProps} animate={true} />
    )}
  />

  // v6
  <Route path=":userId" element={<Profile />} />
  <Route path=":userId" element={<Profile animate={true} />} />


  // v5
  history.push('/home');
  history.replace('/home');
  <Redirect to="/home"></Redirect>

  // v6
  navigate('/home');
  navigate('/home', {replace: true});
  <Navigate to="/home"></Navigate>
  <Navigate to="/home" replace state={state} />;
  ...等等
 */

import "./index.css";
export default class Loayouts extends Component {
  render() {
    return (
      <div className="layout">
        <Header></Header>
        <div className="view">
          <div className="tab-list">
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>
          </div>
          <div className="route-view">
            <Routes>
              {/* 新版本重定向 */}
              <Route path="/" element={<Navigate to="about" />} />
              <Route path="/about" element={<div>
                {
                  <About />
                }
              </div>} />
              {/* 新版父级路由 结尾要添加 /*  */}
              <Route path="/home/*" element={<div>
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
