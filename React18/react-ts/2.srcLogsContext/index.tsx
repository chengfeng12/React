import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
// 日期组件中文包
import "dayjs/locale/zh-cn";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
    <App />
  </ConfigProvider>
);
reportWebVitals();
