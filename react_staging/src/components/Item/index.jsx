import React, {Component} from 'react';
import './index.css'
class Item extends Component {
    state = {
        show: false
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
            console.log(id, event.target.checked)
            this.props.updateTodo(id, event.target.checked);
        }
    }

    render() {
        let { id, name, check } = this.props;
        let { show } = this.state;
        return (
            <div className="item-box" onMouseEnter={this.mouseEvent(true)} onMouseLeave={this.mouseEvent(false)}>
                <div className="label">
                    <input type="checkbox" defaultChecked={check} onChange={this.handCheck(id)} />
                    <span>{name}</span>
                </div>
                <div className="btn" style={{
                    display: show ? "block" : 'none'
                }}>
                    删除
                </div>
            </div>
        );
    }
}

export default Item;