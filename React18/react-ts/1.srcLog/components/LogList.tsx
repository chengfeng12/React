import LogItem from "./LogItem/LogItem";
import { LogListContainer, EmptyDiv } from "./LogList.style";
import { TaskType } from "../App.type";

function LogList(props: {
  list: TaskType[];
  removeTask: (id: number) => void;
}) {
  const { list } = props;
  const List = list.length ? (
    list.map((item: TaskType) => (
      <LogItem {...item} key={item.id} removeTask={props.removeTask}></LogItem>
    ))
  ) : (
    <EmptyDiv>暂无学习任务！</EmptyDiv>
  );
  return <LogListContainer>{List}</LogListContainer>;
}

export default LogList;
