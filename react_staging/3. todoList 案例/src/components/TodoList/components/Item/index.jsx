import React, {Component} from 'react';
import './index.css';
import PropTypes from "prop-types";
class Item extends Component {
    state = {
        show: false
    }
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        removeItem: PropTypes.func.isRequired,
    }
    mouseEvent = (type) => {
        return () => {
            this.setState({
                show: type
            })
        }
    }

    handCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        }
    }

    removeItem = (id) => {
        if (window.confirm('是否确认删除？')) {
            this.props.removeItem(id);
        }
    }

    render() {
        let { id, name, check } = this.props;
        let { show } = this.state;
        return (
            <div className="item-box" onMouseEnter={this.mouseEvent(true)} onMouseLeave={this.mouseEvent(false)}>
                <div className="label">
                    <input type="checkbox" checked={check} onChange={this.handCheck(id)} />
                    <span>{name}</span>
                </div>
                <div className="btn" style={{
                    display: show ? "block" : 'none'
                }} onClick={() => this.removeItem(id)}>
                    删除
                </div>
            </div>
        );
    }
}

export default Item;