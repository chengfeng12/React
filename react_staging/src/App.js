import logo from './logo.svg';
import './App.css';
//引入组件

/**
 * 类型名相同，导致样式会被覆盖
 *
 * css 模块化
 */
import Hello from "./components/Hello/hello";
import Hi from "./components/Hi";
import Title from "./components/Title/Title";

// 入口组件
function App() {
    return (
        <div className="App">
            <Hello></Hello>
            <Hi></Hi>
            <Title></Title>
        </div>
    );
}

export default App;
