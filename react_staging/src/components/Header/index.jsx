import React, {Component} from 'react';
import './index.css'
class Header extends Component {
    keyDown = (event) => {
        console.log(event.target)
        if (event.keyCode !== 13) return
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