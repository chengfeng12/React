import './App.css';
//引入组件
import TodoList from './components/TodoList';
// 入口组件
function App() {
    return (
        <div className="App">
            <TodoList></TodoList>
        </div>
    );
}

export default App;
