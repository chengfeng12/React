import React, {Component} from 'react';
import TitleCss from './Title.module.css'
class Title extends Component {
    render() {
        return (
            <div className={TitleCss.title}>
                我是 Title 组件
            </div>
        );
    }
}

export default Title;