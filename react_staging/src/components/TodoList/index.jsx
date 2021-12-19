import React, {Component} from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Footer from '../Footer';

class TodoList extends Component {
    state = {
        list: [
            { id: 1, name: "吃饭", check: false},
            { id: 2, name: "睡觉", check: true},
            { id: 3, name: "学习", check: false},
        ]
    }
    addItem = (item) => {
        let { list } = this.state;
        this.setState({
            list: [
                ...list,
                item,
            ]
        })
    }

    updateTodo = (id, check) => {
        let { list } = this.state;
        let newList = list.map((item) => {
            if (item.id === id) {
                item = {...item, check: check}
            }
            return item
        });
        this.setState({
            list: newList
        })
    }

    uodateList = (check) => {
        let { list } = this.state;
        let newList = list.map((item) => {
            return {...item, check: check}
        });
        this.setState({
            list: newList
        })
    }

    checkAll = (check) => {
        let { list } = this.state;
        console.log(list.map(item => {
            return  { ...item, check: check }
        }));
        this.setState({
            list: list.map(item => {
                return  { ...item, check: check }
            })
        })
    }

    render() {
        let { list } = this.state
        return (
            <div className="todo-list">
                <Header addItem={this.addItem}></Header>
                <List list={list} updateTodo={this.updateTodo}></List>
                <Footer list={list} checkAll={this.checkAll}></Footer>
            </div>
        );
    }
}

export default TodoList;