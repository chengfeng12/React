// import { AppMain } from "./App.style";
import Count from './pages/count'
import CountReducer from './pages/countReducer'
import './app.css'

function App() {
  return (
    <div className="App">
      <Count></Count>
      <CountReducer></CountReducer>
    </div>
  );
}

export default App;
