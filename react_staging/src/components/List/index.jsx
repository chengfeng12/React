import React, {Component} from 'react';
import './index.css'
import Item from '../Item'
class List extends Component {
    render() {
        return (
            <div className="title">
                {
                    this.props.list.map(item => <Item key={item.id} {...item} updateTodo={this.props.updateTodo}></Item>)
                }
            </div>
        );
    }
}

export default List;