import React, { Component } from 'react';
import News from './News';
import Message from './Message';
import MyNavLink from '../../components/MyNavLink';
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>Home</h2>
                <MyNavLink to="/home/news">News</MyNavLink>
                <MyNavLink to="/home/message">Message</MyNavLink>
                <Routes>
                    {/* V6 版本 要去掉 path 前面的父级路由的前缀，否则加上父级路由 path */}
                    <Route path="/" element={<Navigate to="/home/message" />} />
                    <Route path="/news/*" element={<News/>}></Route>
                    <Route path="/message" element={<Message/>}></Route>
                </Routes>
            </div>
        )
    }
}