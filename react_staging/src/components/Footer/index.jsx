import React, {Component} from 'react';
import './index.css'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
               <div className="lable">
                   <input type="checkbox" />
                   已完成0/全部
               </div>
                <div className="btn">
                    清除已完成任务
                </div>
            </div>
        );
    }
}

export default Footer;