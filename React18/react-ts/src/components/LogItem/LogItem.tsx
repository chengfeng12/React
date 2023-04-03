import LogDate from "./LogDate/LogDate";
import LogContent from "./LogContent/LogContent";

import {LogItemContainer} from './LogItem.style'
export default function LogItem(props: {
  title: string,
  content: string,
  date: string
}) {
  const { title, content, date } = props
  return (
    <LogItemContainer>
      <LogDate date={date}></LogDate>
      <LogContent title={title} content={content}></LogContent>
    </LogItemContainer>
  );
}
