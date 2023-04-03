import appStyle, {AppMain} from './App.style';
import { Global } from '@emotion/react'
import LogList from './components/LogList'
function App() {
  return (
    <AppMain className="App">
      <Global styles={appStyle()}></Global>
      <LogList ></LogList>
    </AppMain>
  );
}

export default App;
