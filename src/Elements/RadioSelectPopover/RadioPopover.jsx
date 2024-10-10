import { Button, Checkbox, Divider, Popover } from "antd";
import { useState } from "react";
import styled from "styled-components";

const RadioPopover = () => {
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ["Apple", "Pear", "Orange", "External Events"];
  const defaultCheckedList = [];

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkAll, setCheckAll] = useState(false);
  const onChange = (list) => {
    setCheckedList(list);

    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setCheckAll(e.target.checked);
  };

  const popOverContent = (
    <Wrapper>
      <Container>
        <Checkbox
          onChange={onCheckAllChange}
          checked={checkAll}
          className="select_all_checkbox"
        >
          <SelectHeading>Deselect All</SelectHeading>
        </Checkbox>
      </Container>

      <CheckboxWrapper>
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
          className="checkbox_group"
        />
      </CheckboxWrapper>
    </Wrapper>
  );

  return (
    <>
      <Popovercontent>
        <Popover
          overlayClassName="custom-popover"
          placement="bottomRight"
          content={popOverContent}
          trigger="click"
        >
          <Button>BR</Button>
        </Popover>
      </Popovercontent>
    </>
  );
};
export default RadioPopover;

const Wrapper = styled.div`
  width: 223px;
  min-height: 192px;
  max-height: 100%;
  /* height: 100%; */
  /* border: 1px solid red; */
  background: #0f2338;
  box-shadow: 0px 2px 10px rgba(10, 15, 28, 0.4);
  padding: 0 0.4rem;
`;

const CheckboxWrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;

  & .ant-checkbox-group {
    display: flex;
    flex-direction: column;
  }

  & .ant-checkbox-wrapper {
    margin: 0;
    padding-left: 0.6rem;
    margin-bottom: 4px;
    height: 36px;
    /* border: 1px solid #6d7f8e; */
    display: flex;
    align-items: center;
  }

  & .ant-checkbox-wrapper:hover {
    background: #04192e;
  }

  & .ant-checkbox + span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
  }
`;
const Container = styled.div`
  width: 215px;
  height: 36px;
  border-bottom: 1px solid #6d7f8e;
  display: flex;
  align-items: center;
  padding-left: 0.6rem;
`;

const SelectHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
`;

const Popovercontent = styled.div``;
