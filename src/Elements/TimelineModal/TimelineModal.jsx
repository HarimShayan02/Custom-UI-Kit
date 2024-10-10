import React from "react";
import styled from "styled-components";
import { ReactComponent as Time } from "./Time.svg";
import { ReactComponent as Close } from "./Close.svg";
import { ReactComponent as Scroll } from "./Icon.svg";
import { ReactComponent as Add } from "./add.svg";
import { Select, TimePicker } from "antd";

const TimelineModal = () => {
  const onChange = () => {
    console.log();
  };

  const OptionList = [
    {
      value: "GMT+0",
      label: "GMT+0",
    },
    {
      value: "GMT+1",
      label: "GMT+1",
    },
    {
      value: "GMT+3",
      label: "GMT+3",
    },
    {
      value: "GMT+4",
      label: "GMT+4",
    },
    {
      value: "GMT+5",
      label: "GM5+5",
    },
    {
      value: "GMT+6",
      label: "GMT+6",
    },
    {
      value: "GMT+7",
      label: "GMT+7",
    },
    {
      value: "GMT+8",
      label: "GMT+8",
    },
    {
      value: "GMT+9",
      label: "GMT+9",
    },
    {
      value: "GMT+10",
      label: "GMT+10",
    },
    {
      value: "GMT+11",
      label: "GMT+11",
    },
    {
      value: "GMT+12",
      label: "GMT+12",
    },
  ];

  // "GMT-1",
  //   "GMT-2",
  //   "GMT-3",
  //   "GMT-4",
  //   "GMT-5",
  //   "GMT-6",
  //   "GMT-7",
  //   "GMT-8",
  //   "GMT-9",
  //   "GMT-10",
  //   "GMT-11",
  //   "GMT-12",

  return (
    <Wrapper>
      <Content>
        <Header>
          <TimelineHeading>
            <Time />
            <Heading>Timeline settings</Heading>
          </TimelineHeading>
          <CloseButton>
            <Close />
          </CloseButton>
        </Header>

        <TimezoneWrapper>
          <TimezoneInput>
            <TimezoneHeading>Timezone </TimezoneHeading>
            <SelectInputWrapper>
              <Select
                className="timezone"
                popupClassName="timezone_dropdown"
                showSearch
                defaultValue={"GMT+4"}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={OptionList}
              />
            </SelectInputWrapper>
          </TimezoneInput>
          <TimezoneInput ismargin>
            <TimezoneHeading>Timezone </TimezoneHeading>
            <SelectInputWrapper>
              <Select
                className="timezone"
                popupClassName="timezone_dropdown"
                showSearch
                placeholder="Select additional timezone"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={OptionList}
              />
            </SelectInputWrapper>
            <Addbutton>
              <Add />
            </Addbutton>
          </TimezoneInput>
        </TimezoneWrapper>

        <Timepickerwrapper>
          {Array(5)
            .fill()
            ?.map((item) => (
              <TimeInput>
                <TimeHeading>Deep work</TimeHeading>
                <InputWrapper>
                  <TimePicker
                    className="modal_time_picker"
                    use12Hours
                    format="h:mm a"
                    onChange={onChange}
                    suffixIcon={<Scroll />}
                    style={{ marginRight: "0.7rem" }}
                  />
                  <TimePicker
                    className="modal_time_picker"
                    use12Hours
                    format="h:mm a"
                    onChange={onChange}
                    suffixIcon={<Scroll />}
                  />
                </InputWrapper>
              </TimeInput>
            ))}
        </Timepickerwrapper>

        <SaveButtonContainer>
          <SaveBtn>Save</SaveBtn>
        </SaveButtonContainer>
      </Content>
    </Wrapper>
  );
};

export default TimelineModal;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  width: 475px;
  /* height: 450px; */
  background-color: #05192e;
  box-shadow: 0px 1px 40px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 0.8rem;
`;

const Heading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: #e3e5e9;
  margin: 0;
  padding-left: 0.5rem;
`;

const Header = styled.div`
  height: 2.3rem;
  /* height: 6vh; */
  border-bottom: 1px solid #394b59;
  display: flex;
  justify-content: space-between;
`;

const TimelineHeading = styled.div`
  display: flex;
  align-items: center;
`;
const CloseButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const TimezoneWrapper = styled.div`
  /* height: 14vh; */
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #394b59;
  padding-bottom: 0.5rem;
  /* border: 1px solid green; */
  margin-top: 1.3rem;
`;

const Timepickerwrapper = styled.div`
  /* height: 40vh; */
  /* padding: 1rem; */
  margin-top: 0.7rem;
`;

const TimeInput = styled.div`
  /* border: 1px solid yellow; */
  padding: 0.5rem 0rem;
  display: flex;
  align-items: center;
`;

const TimeHeading = styled.h3`
  margin: 0;
  margin-right: 0.7rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1271a6;
`;
const InputWrapper = styled.div``;

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SaveBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 52px;
  height: 32px;
  background: #1271a6;
  border-radius: 2px;
`;

const TimezoneInput = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid green; */
  /* margin-top: 1rem; */
`;

const SelectInputWrapper = styled.div`
  /* border: 1px solid red; */

  & .ant-select-single .ant-select-selector {
    width: 222px;
    height: 36px;
    color: #fff;
    background: #192d42;
    border: 1px solid #394b59;
    border-radius: 0px;
  }
  & .ant-select .ant-select-arrow {
    color: #738a9c;
  }
  & .ant-select-single.ant-select-open .ant-select-selection-item {
    color: #fff;
  }
  & .ant-select-selection-placeholder {
    color: #738a9c;
  }
`;

const TimezoneHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #1271a6;
  margin-right: 1.5rem;
`;

const Addbutton = styled.button`
  width: 40px;
  height: 32px;
  cursor: pointer;
  background: #1271a6;
  border-radius: 2px;
  border: none;
  outline: none;
  margin-left: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
