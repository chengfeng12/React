import React, {Component} from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Footer from '../Footer';

class TodoList extends Component {
    state = {
        list: [
            { id: 1, name: "吃饭", check: false},
            { id: 2, name: "睡觉", check: false},
            { id: 3, name: "学习", check: false},
        ]
    }
    render() {
        let { list } = this.state
        return (
            <div className="todo-list">
                <Header></Header>
                <List list={list}></List>
                <Footer></Footer>
            </div>
        );
    }
}

export default TodoList;