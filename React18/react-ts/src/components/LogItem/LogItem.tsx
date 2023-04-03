import LogDate from "./LogDate/LogDate";
import LogContent from "./LogContent/LogContent";

import {LogItemContainer} from './LogItem.style'
export default function LogItem(props: {
  id: number,
  title: string,
  content: string,
  date: string,
  removeTask: (id: number) => void;
}) {
  const { title, content, date, id, removeTask } = props
  return (
    <LogItemContainer>
      <LogDate date={date}></LogDate>
      <LogContent removeTask={() => removeTask(id)} title={title} content={content}></LogContent>
    </LogItemContainer>
  );
}
