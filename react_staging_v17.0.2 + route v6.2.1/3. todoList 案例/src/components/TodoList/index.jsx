import React, {Component} from 'react';
import './index.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
class TodoList extends Component {
    state = {
        list: [
            { id: 1, name: "吃饭", check: false},
            { id: 2, name: "睡觉", check: true},
            { id: 3, name: "学习", check: false},
        ]
    }
    // 添加 todoList
    addItem = (item) => {
        let { list } = this.state;
        this.setState({
            list: [
                ...list,
                item,
            ]
        })
    }
    // 更新 todoList 中某一个 check 的值
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
    // 全选和全不选
    checkAll = (check) => {
        let { list } = this.state;
        this.setState({
            list: list.map(item => {
                return  { ...item, check: check }
            })
        })
    }
    // 删除 todoList
    removeItem = (id) => {
        let { list } = this.state;
        const newList = list.filter((item) => item.id !== id);
        this.setState({
            list: newList
        })
    }
    // 删除选中的
    handleRemoveCheck = () => {
        let { list } = this.state;
        const newList = list.filter((item) => !item.check);
        this.setState({
            list: newList
        })
    }

    render() {
        let { list } = this.state
        return (
            <div className="todo-list">
                <Header addItem={this.addItem}></Header>
                <List list={list} updateTodo={this.updateTodo} removeItem={this.removeItem}></List>
                <Footer list={list} checkAll={this.checkAll} handleRemoveCheck={this.handleRemoveCheck}></Footer>
            </div>
        );
    }
}

export default TodoList;