import React, {Component} from 'react';
import './index.css';
import PropTypes from "prop-types";
class Footer extends Component {
    state = {
        idAll: false
    }
    static propTypes = {
        checkAll: PropTypes.func.isRequired,
        list: PropTypes.array.isRequired,
        handleRemoveCheck: PropTypes.func.isRequired,
    }

    checkAll = (event) => {
        this.props.checkAll(event.target.checked);
    }

    handleRemoveCheck = (count) => {
        if (Boolean(count) && window.confirm('是否确认删除选中的数据？')) {
            this.props.handleRemoveCheck();
        }
    }

    render() {
        let { list } = this.props;
        let count = list.reduce((pre, item) => pre + (item.check ? 1 : 0), 0);
        return (
            <div className="footer">
               <div className="lable">
                   <input type="checkbox" checked={ count === list.length && list.length > 0 ? true : false} onChange={this.checkAll} />
                   <span>已完成{count}/全部{list.length}个</span>
                   {this.state.isAll}
               </div>
                <div className="btn" onClick={() => this.handleRemoveCheck(count)}>
                    清除已完成任务
                </div>
            </div>
        );
    }
}

export default Footer;