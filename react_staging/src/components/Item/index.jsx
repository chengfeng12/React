import React, {Component} from 'react';
import './index.css'
class Item extends Component {
    render() {
        let { name } = this.props;
        return (
            <div className="item-box">
                <div className="label">
                    <input type="checkbox" />
                    {name}
                </div>
                <div className="btn">
                    删除
                </div>
            </div>
        );
    }
}

export default Item;