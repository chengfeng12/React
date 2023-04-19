import React, {useEffect, useState} from "react";
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
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    setShowPopup(Boolean(keyword))
  }, [keyword])
  let [showPopup, setShowPopup] = useState(false)
  const onChangeHandler = (e: any) => {
    setKeyword(e.target.value.trim());
  };
  const onClosePopup = () => {
    setShowPopup(false)
    setKeyword('')
  }
  return (
    <FilterSearchBox>
      <Input
        value={keyword}
        prefix={<SearchOutlined/>}
        placeholder="请输入搜索条件"
        onChange={onChangeHandler}
      />
      <FilterSearchFoods searchValue={keyword} cancel={onClosePopup} visible={showPopup}></FilterSearchFoods>
    </FilterSearchBox>
  );
}
