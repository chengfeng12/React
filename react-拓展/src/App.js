/*
 * @Author: your name
 * @Date: 2021-12-30 22:11:53
 * @LastEditTime: 2022-04-08 09:37:58
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /React 框架/react-拓展/src/App.js
 */
// import Demo from "./components/7. props Render 父子组件写法";
// import Demo from "./components/2.lazyLoad";
import route from "./routers/route";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Demo></Demo> */}
        {renderRoutes(route)}
      </BrowserRouter>
    </div>
  );
}

export default App;
