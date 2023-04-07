import LogDate from "./LogDate/LogDate";
import LogContent from "./LogContent/LogContent";

import {LogItemContainer} from './LogItem.style'
export default function LogItem(props: {
  id: number,
  title: string,
  content: string,
  date: string,
}) {
  const { title, content, date, id } = props
  return (
    <LogItemContainer>
      <LogDate date={date}></LogDate>
      <LogContent title={title} content={content} id={id}></LogContent>
    </LogItemContainer>
  );
}
