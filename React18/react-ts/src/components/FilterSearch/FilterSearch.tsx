import React, {useState} from "react";
import styled from "@emotion/styled";
import {Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import FilterSearchFoods from "@/components/FilterSearch/FilterSearchFoods";

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
  let [searchValue, setSearchValue] = useState('')
  let [showPopup, setShowPopup] = useState(false)
  // : React.KeyboardEventHandler<HTMLInputElement>
  const onBlurHandler = (e: any) => {
    console.log(e.target.value);
    setSearchValue(e.target.value)
  };
  const onFocusHandler = () => {
    setShowPopup(true)
  }
  const onClosePopup = () => {
    setShowPopup(false)
  }
  // onBlur={(e) => onBlur}
  return (
    <FilterSearchBox>
      <Input
        prefix={<SearchOutlined/>}
        placeholder="请输入搜索条件"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      <FilterSearchFoods searchValue={searchValue} cancel={onClosePopup} visible={showPopup}></FilterSearchFoods>
    </FilterSearchBox>
  );
}
