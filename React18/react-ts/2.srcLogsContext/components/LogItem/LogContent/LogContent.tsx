import { useContext } from "react";
import { LogsContext } from "../../../App";
import styled from "@emotion/styled";
const Content = styled.div(() => ({
  marginLeft: "20px",
  textAlign: "left",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingRight: 10,
  "&:hover": {
    [`${RemoveIcon}`]: {
      display: "block",
      color: "#E53A40",
    },
  },
}));
const ContentLeft = styled.div(() => ({
  marginLeft: "20px",
  textAlign: "left",
  flex: "1",
  height: "100%",
}));
const ContentTitle = styled.div(() => ({
  fontSize: "16px",
  fontWeight: "bold",
  marginTop: "10px",
  marginBottom: "10px",
}));
const ContentText = styled.div(() => ({
  fontSize: "14px",
}));

const RemoveIcon = styled.span(() => ({
  fontSize: "14px",
  display: "none",
  cursor: "pointer",
}));


export default function LogContent(props: { title: string; content: string, id: number }) {
  const { title = "", content = "" } = props;
  const { removeTask }: any = useContext(LogsContext);
  const removeItem = () => {
    // let res = window.confirm('是否确认删除？')
    // if (res) {
    //   props.removeTask()
    // }
    removeTask(props.id)
  };
  
  return (
    <Content>
      <ContentLeft>
        <ContentTitle>{title}</ContentTitle>
        <ContentText>{content}</ContentText>
      </ContentLeft>
      <RemoveIcon onClick={removeItem}>X</RemoveIcon>
    </Content>
  );
}
