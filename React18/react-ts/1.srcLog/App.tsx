import { useState } from "react";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import zhCN from "antd/locale/zh_CN";
// 日期组件中文包
import "dayjs/locale/zh-cn";
import appStyle, { AppMain } from "./App.style";
import { Global } from "@emotion/react";
import LogList from "./components/LogList";
import AddStudy from "./components/Add/AddStudy";
import { TaskType } from "./App.type";
import ConfirmDialog from "./components/ConfirmDialog/ConfirmDialog";
function App() {
  const [dateList, setDateList] = useState([
    {
      id: 1,
      title: "day 1",
      content: "第一天学习愉快",
      date: "2020-03-02",
    },
    {
      id: 2,
      title: "day 2",
      content: "第二天学习，太简单了",
      date: "2020-03-05",
    },
    {
      id: 3,
      title: "day 3",
      content: "第三天学习，差不多学完了",
      date: "2020-03-09",
    },
  ]);
  const open = () => {
    setShowRemoveDia(true);
  };
  const close = () => {
    setShowRemoveDia(false);
  };
  const createTask = (task: TaskType) => {
    // console.log(task);
    setDateList((pre) => {
      /**
       * 这种写法不行，不能触发页面重新渲染
       * pre.push({
          ...task,
          id: new Date().getTime()
        })
        return pre
       *  */
      return [
        ...pre,
        {
          ...task,
          id: new Date().getTime(),
        },
      ];
    });
  };

  let [tempId, setTempId] = useState<number | null>(null);
  const removeTask = (id: number) => {
    setTempId(id)
    open();
    // console.log(id, 'id');
    // const index = dateList.findIndex(item => item.id === id)
    // if (index >= 0) {
    //   dateList.splice(index, 1)
    // }
    // setDateList([
    //   ...dateList
    // ])
    // console.log(dateList, 'dateList');

    // setDateList(pre => (pre.data))
  };
  const handleConfirm = () => {
    const index = dateList.findIndex((item) => item.id === tempId);
    if (index >= 0) {
      dateList.splice(index, 1);
    }
    setDateList([...dateList]);
    console.log(dateList, "dateList");
    close()
  };
  const [showRemoveDia, setShowRemoveDia] = useState(false);
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <AppMain className="App">
        <Global styles={appStyle()}></Global>
        <AddStudy createTask={createTask}></AddStudy>
        <LogList list={dateList} removeTask={removeTask}></LogList>
      </AppMain>

      <ConfirmDialog
        handleClose={close}
        show={showRemoveDia}
        handleConfirm={handleConfirm}
      ></ConfirmDialog>
    </ConfigProvider>
  );
}

export default App;
