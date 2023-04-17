import React from "react";
import styled from "@emotion/styled";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import FilterSearchGoods from "@/components/FilterSearch/FilterSearchGoods";

const FilterSearchBox = styled.div({
  padding: "10px 20px",
  borderBottom: "1px solid #eaeaea",
  position: "fixed",
  zIndex: 99,
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fff",
});
export default function FilterSearch() {
  // : React.KeyboardEventHandler<HTMLInputElement>
  const onBlurHandler = (e: any) => {
    console.log(e.target.value);
  };
  const onFocusHandler = () => {}
  // onBlur={(e) => onBlur}
  return (
    <FilterSearchBox>
      <Input
        prefix={<SearchOutlined />}
        placeholder="请输入搜索条件"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      <FilterSearchGoods></FilterSearchGoods>
    </FilterSearchBox>
  );
}
