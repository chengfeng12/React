import React, {Component} from 'react';
import './index.css';
import PropTypes from "prop-types";
class Header extends Component {
    static propTypes = {
        addItem: PropTypes.func.isRequired 
    }

    keyDown = (event) => {
        if (event.keyCode !== 13) return
        if (!event.target.value) alert("值不能为空");
        this.props.addItem({
            id: new Date().getTime(),
            name: event.target.value,
            check: false
        })
        event.target.value = "";
    }
    render() {
        return (
            <div className="header">
                <input placeholder="请输入你的任务名称，按回车添加" name="name" onKeyDown={this.keyDown} />
            </div>
        );
    }
}

export default Header;