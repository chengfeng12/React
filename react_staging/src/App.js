import React, { Component } from 'react';
import Loayouts from "./components/Loayouts";
import { BrowserRouter } from "react-router-dom";
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Loayouts />
                </BrowserRouter>
            </div>
        )
    }
}

