import React, {Component} from 'react';
import './index.css';
import Item from '../Item';
import PropTypes from "prop-types";
class List extends Component {

    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        list: PropTypes.array.isRequired,
        removeItem: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="title">
                {
                    this.props.list.map(item => <Item key={item.id} {...item} updateTodo={this.props.updateTodo} removeItem={this.props.removeItem}></Item>)
                }
            </div>
        );
    }
}

export default List;