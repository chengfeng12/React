// import {ReactElement} from 'react';
import LogItem from "./LogItem/LogItem";
import {LogListContainer} from './LogList.style'

function LogList() {
  const dateList = [{
    id: 1,
    title: 'day 1',
    content: '第一天学习愉快',
    date: '2020-03-02'
  }, {
    id: 2,
    title: 'day 2',
    content: '第二天学习，太简单了',
    date: '2020-03-05'
  }, {
    id: 3,
    title: 'day 2',
    content: '第三天学习，差不多学完了',
    date: '2020-03-09'
  }]
  return (
    <LogListContainer>
      {
        dateList.map(item => <LogItem {...item} key={item.id}></LogItem>)
      }
    </LogListContainer>
  );
}

export default LogList;
