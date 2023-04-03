import { ConfigProvider } from 'antd';
import appStyle, {AppMain} from './App.style';
import { Global } from '@emotion/react'
import LogList from './components/LogList'
function App() {
  return (
    <ConfigProvider>
      <AppMain className="App">
      <Global styles={appStyle()}></Global>
      <LogList ></LogList>
    </AppMain>
    </ConfigProvider>
  );
}

export default App;
