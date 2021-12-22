import React, { Component } from 'react';
import MyNavLink from '../../../components/MyNavLink';
import { Route, Routes, useParams } from 'react-router-dom';
import Info from './Info';
import "./index.css";

export default class News extends Component {
    state = {
        list: [
            {
                id: 1,
                title: "news1"
            },
            {
                id: 2,
                title: "news2"
            },
            {
                id: 3,
                title: "news3"
            },
        ]
    }
    render() {
        console.log(useParams(), "useParams");
        return (
            <ul className="link-bx">
                {
                    this.state.list.map(item => (
                        <li key={item.id}>
                            <MyNavLink className="link-name" to={`/home/news/info/${item.id}/${item.title}`}>{item.title}</MyNavLink>
                        </li>
                    ))
                }
                <Routes>
                    {/* 这种写法 必须要写一个 空页面
                    
                            <Route
                                path=":userId"
                                children={({ match }) => (
                                    match ? (
                                    <Profile match={match} animate={true} />
                                    ) : (
                                    <NotFound />
                                    )
                                )}
                            />
                    */}
                    <Route path=":id/:title" children={({ match }) => {
                        console.log(match);
                        return (
                            match ? (
                            <Info match={match} animate={true} />
                            ) : (
                            <></>
                            )
                        )
                    }}></Route>

                    {/* <Route path="/info/:id/:title" render={({routeProps}) => (routeProps ? <Info routeProps={routeProps}  /> : <></>)}></Route> */}
                </Routes>
            </ul>
        )
    }
}
