import React, {Component} from 'react';
import './index.css'
class Footer extends Component {
    state = {
        idAll: false
    }

    checkAll = (event) => {
        console.log(event.target.checked);
        this.props.checkAll(event.target.checked)
    }

    render() {
        let { list } = this.props;
        let count = 0;
        list.forEach((item) => {
            if (item.check) {
                count += 1
            }
        });
        /* if (count === list.length) this.setState({
            isAll: true  
        }) */
        return (
            <div className="footer">
               <div className="lable">
                   <input type="checkbox" checked={this.state.isAll} onChange={this.checkAll} />
                   <span>已完成{count}/全部{list.length}个</span>
                   {this.state.isAll}
               </div>
                <div className="btn">
                    清除已完成任务
                </div>
            </div>
        );
    }
}

export default Footer;