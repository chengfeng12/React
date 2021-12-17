import React, {Component} from 'react';
import './index.css'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <input placeholder="请输入你的任务名称，按回车添加" />
            </div>
        );
    }
}

export default Header;