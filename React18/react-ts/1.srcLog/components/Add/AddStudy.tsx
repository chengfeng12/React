import { Button, DatePicker, Form, Input } from "antd";
import { CardDiv } from "../Card/Card.style";
import styled from "@emotion/styled";
import dayjs from 'dayjs'

const AddMain = styled(CardDiv)(() => ({
  backgroundColor: "#FBFFB9",
  marginBottom: 20,
}));

const AddStudy = (props: any) => {
  const onFinish = (values: any) => {
    const {title, date, content} = values
    values = {
      title,
      date: dayjs(date.$d).format('YYYY-MM-DD HH:mm'),
      content
    }
    props.createTask(values)
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const changeDate = (data: any) => {
    console.log(data, "changeDate");
  };
  const config = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    style: { maxWidth: 600 },
    initialValues: { remember: true },
  };

  return (
    <AddMain>
      <Form
        name="basic"
        {...config}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="日期"
          name="date"
          rules={[{ required: true, message: "请选择日期" }]}
        >
          <DatePicker onChange={changeDate}></DatePicker>
        </Form.Item>
        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: "请输入标题" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="学习内容"
          name="content"
          rules={[{ required: true, message: "请输入学习内容" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            添加
          </Button>
        </Form.Item>
      </Form>
    </AddMain>
  );
}
export default AddStudy
