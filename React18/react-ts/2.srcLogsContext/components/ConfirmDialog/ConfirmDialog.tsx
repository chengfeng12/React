import styled from "@emotion/styled";
import Modal from "../Modal/Modal";
import { Button } from "antd";
const Dialog = styled.div({
  borderRadius: "10px",
  padding: "15px 20px",
  width: "400px",
  backgroundColor: "#fff",
  margin: "200px auto",
  ".title": {
    fontSize: "18px",
  },
  ".content": {
    marginTop: 10,
  },
  ".footer": {
    marginTop: 10,
    display: "flex",
    justifyContent: "flex-end",
  },
  ".confirmBtn": {
    marginRight: "10px",
  },
});
export default function ConfirmDialog(props: any) {
  const { handleClose, handleConfirm } = props;
  return (
    <Modal
      handleClose={handleClose}
      closeModal={props.closeModal}
      show={props.show}
    >
      <Dialog>
        {props.title ? <div className="title">{props.title}</div> : null}
        <div className="content">是否确认删除？</div>
        <div className="footer">
          <Button type="primary" className="confirmBtn" onClick={handleConfirm}>
            确定
          </Button>
          <Button onClick={handleClose}>取消</Button>
        </div>
      </Dialog>
    </Modal>
  );
}
