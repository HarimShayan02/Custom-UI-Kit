import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../../Elements/SyncModal/Close.svg";
import { ReactComponent as Filter } from "./filter.svg";
import { Checkbox, Tabs } from "antd";

const FilterPopup = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ["Personal", "Profesional", "Business"];
  const defaultCheckedList = [];

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkAll, setCheckAll] = useState(false);
  const onhandleChange = (list) => {
    setCheckedList(list);

    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setCheckAll(e.target.checked);
  };

  

  const items = [
    {
      key: "1",
      label: `ACTIVITY TYPE`,
      children: (
        <MainWrapper>
          <Container>
            <Checkbox
              onChange={onCheckAllChange}
              checked={checkAll}
              className="select_all_checkbox"
            >
              <SelectHeading>All</SelectHeading>
            </Checkbox>
          </Container>

          <CheckboxWrapper>
            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={onhandleChange}
              className="checkbox_group"
            />
          </CheckboxWrapper>
        </MainWrapper>
      ),
    },
    {
      key: "2",
      label: `DOMAINS`,
      children: (
        <MainWrapper>
          <Container>
            <Checkbox
              onChange={onCheckAllChange}
              checked={checkAll}
              className="select_all_checkbox"
            >
              <SelectHeading>All</SelectHeading>
            </Checkbox>
          </Container>

          <CheckboxWrapper>
            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={onhandleChange}
              className="checkbox_group"
            />
          </CheckboxWrapper>
        </MainWrapper>
      ),
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Header>
          <SyncHeading>
            <Filter />
            <Heading>Filter by</Heading>
          </SyncHeading>
          <CloseButton>
            <Close />
          </CloseButton>
        </Header>

        <TabButtoncontainer>
          <div className="custom_tabs">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </TabButtoncontainer>
      </Content>
    </Wrapper>
  );
};

export default FilterPopup;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 319px;
  max-height: 240px;
  height: 100%;
  background: #0f2338;
  border: 1px solid #24384d;
  box-shadow: 0px 2px 10px rgba(10, 15, 28, 0.4);
  padding: 0.2rem;
`;

const Header = styled.div`
  border-bottom: 1px solid #6d7f8e;
  padding: 0.35rem 0;
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  margin: 0;
  margin-left: 5px;
  text-transform: uppercase;
`;

const SyncHeading = styled.div`
  display: flex;
  align-items: center;
`;
const CloseButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const TabButtoncontainer = styled.div`
  /* border: 1px solid green; */
  /* height: 50px;
  width: 100%; */
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
`;

const MainWrapper = styled.div`
  width: auto;
  height: 100%;
  /* height: 100%; */
  /* border: 1px solid red; */
  background: #0f2338;
  box-shadow: 0px 2px 10px rgba(10, 15, 28, 0.4);
  padding: 0 0.05rem;
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
  margin-top: 0.3rem;
  width: auto;
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
