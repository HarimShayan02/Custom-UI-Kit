import React from "react";
import styled from "styled-components";
import { ReactComponent as ShortView } from "./Short View.svg";
import { ReactComponent as ArrowUp } from "./Chevron-Up.svg";
import { ReactComponent as ArrowDown } from "./Chevron-Down.svg";
import { ReactComponent as Close } from "../../Elements/SyncModal/Close.svg";
import { Checkbox, Col, Collapse, Row } from "antd";

const CustomizeModal = () => {
  const { Panel } = Collapse;

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Wrapper>
      <Content>
        <Header>
          <ShortHeadingContainer>
            <ShortView />
            <Heading>CUSTOMIZE TABLE</Heading>
          </ShortHeadingContainer>
          <CloseButton>
            <Close />
          </CloseButton>
        </Header>

        <Checkboxitem>
          <Row>
            <Col span={24}>
              <CheckallContent>
                <Checkbox className="select_all_checkbox"></Checkbox>
                <SelectallHeading>All</SelectallHeading>
              </CheckallContent>
            </Col>
            <Col span={24}>
              <CollapseContent>
                <div className="collapse-container">
                  <Collapse
                    expandIconPosition="right"
                    expandIcon={({ isActive }) =>
                      isActive ? <ArrowUp /> : <ArrowDown />
                    }
                    defaultActiveKey={[]}
                    onChange={onChange}
                    bordered={false}
                  >
                    <Panel
                      header={
                        <>
                          <Checkbox className="select_all_checkbox">
                            Time
                          </Checkbox>
                        </>
                      }
                      key="1"
                    >
                      <SubTimeContent>
                        {Array(3)
                          .fill()
                          ?.map((item) => (
                            <SubtimeItem>
                              <Checkbox className="select_all_checkbox">
                                Est.Weekly{" "}
                              </Checkbox>
                            </SubtimeItem>
                          ))}
                      </SubTimeContent>
                    </Panel>
                  </Collapse>
                </div>
              </CollapseContent>
            </Col>
            <Col span={24}>
              <CheckboxGroup>
                <Checkbox className="select_all_checkbox">Progress</Checkbox>
              </CheckboxGroup>
            </Col>
            <Col span={24}>
              <CheckboxGroup>
                <Checkbox className="select_all_checkbox">Progress</Checkbox>
              </CheckboxGroup>
            </Col>
            <Col span={24}>
              <CheckboxGroup>
                <Checkbox className="select_all_checkbox">Progress</Checkbox>
              </CheckboxGroup>
            </Col>
            <Col span={24}>
              <CollapseContent>
                <div className="collapse-container">
                  <Collapse
                    expandIconPosition="right"
                    expandIcon={({ isActive }) =>
                      isActive ? <ArrowUp /> : <ArrowDown />
                    }
                    defaultActiveKey={[]}
                    onChange={onChange}
                    bordered={false}
                  >
                    <Panel
                      header={
                        <>
                          <Checkbox className="select_all_checkbox">
                            Delegation
                          </Checkbox>
                        </>
                      }
                      key="1"
                    >
                      <SubTimeContent>
                        {Array(2)
                          .fill()
                          ?.map((item) => (
                            <SubtimeItem>
                              <Checkbox className="select_all_checkbox">
                                Est.Weekly{" "}
                              </Checkbox>
                            </SubtimeItem>
                          ))}
                      </SubTimeContent>
                    </Panel>
                  </Collapse>
                </div>
              </CollapseContent>
            </Col>
            <Col span={24}>
              <CheckboxGroup>
                <Checkbox className="select_all_checkbox">Progress</Checkbox>
              </CheckboxGroup>
            </Col>
            <Col span={24}>
              <CheckboxGroup>
                <Checkbox className="select_all_checkbox">Progress</Checkbox>
              </CheckboxGroup>
            </Col>
            <Col span={24}>
              <CheckboxGroup>
                <Checkbox className="select_all_checkbox">Progress</Checkbox>
              </CheckboxGroup>
            </Col>
            <Col span={24}>
              <CollapseContent>
                <div className="collapse-container">
                  <Collapse
                 
                    expandIconPosition="right"
                    expandIcon={({ isActive }) =>
                      isActive ? <ArrowUp /> : <ArrowDown />
                    }
                    defaultActiveKey={[]}
                    onChange={onChange}
                    bordered={false}
                  >
                    <Panel
                      header={
                        <>
                          <Checkbox className="select_all_checkbox">
                            Return
                          </Checkbox>
                        </>
                      }
                      key="1"
                    >
                      <SubTimeContent>
                        {Array(3)
                          .fill()
                          ?.map((item) => (
                            <SubtimeItem>
                              <Checkbox className="select_all_checkbox">
                                Est.Weekly{" "}
                              </Checkbox>
                            </SubtimeItem>
                          ))}
                      </SubTimeContent>
                    </Panel>
                  </Collapse>
                </div>
              </CollapseContent>
            </Col>
          </Row>
        </Checkboxitem>
        <Footar>
          <ChoiceHeading>Save Choice As Tab</ChoiceHeading>
          <Choicetab>
            <Input type="text" placeholder="Tab Name" />
            <SaveButton>Save</SaveButton>
          </Choicetab>
        </Footar>
      </Content>
    </Wrapper>
  );
};

export default CustomizeModal;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 0.2rem;
  width: 317px;
  min-height: 592px;
  max-height: 100%;
  background: #0f2338;
  /* background-color: yellow; */
  border: 1px solid #24384d;
  box-shadow: 0px 2px 10px rgba(10, 15, 28, 0.4);
`;

const Header = styled.div`
  border-bottom: 1px solid #6d7f8e;
  padding: 0.45rem 0.4rem;
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

const ShortHeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Checkboxitem = styled.div`
  /* border: 1px solid green; */
  min-height: 500px;
  max-height: 100%;
  /* height: 100%; */
  /* border-bottom: 1px solid red; */
`;

const CheckallContent = styled.div`
  border-bottom: 1px solid #6d7f8e;
  padding-left: 0.8rem;
  height: 36px;
  display: flex;
  align-items: center;
`;

const SelectallHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  margin-left: 12px;
`;

const CollapseContent = styled.div`
  /* border: 1px solid green; */
  /* height: 40px; */
`;

const SubTimeContent = styled.div`
  /* border: 1px solid red; */
  /* min-height: 130px; */
  /* height: 100%; */
  display: flex;
  flex-direction: column;
`;
const SubtimeItem = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  padding: 0.45rem;
  /* height: 32px; */

  &:hover {
    background: #04192e;
  }
`;

const CheckboxGroup = styled.div`
  height: 34px;
  padding-left: 0.8rem;
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

const Footar = styled.div`
  border-top: 1px solid #6d7f8e;
  padding: 0.25rem 0.5rem;
`;
const ChoiceHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  margin: 0;
`;

const Choicetab = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 231px;
  height: 32px;
  background: #192d42;
  border: 1px solid #394b59;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);
  outline: none;
  padding-left: 0.9rem;
  color: #fff;

  &::placeholder{
    color: #A3A3A3;
  }
`;
const SaveButton = styled.button`
  width: 52px;
  height: 32px;
  outline: none;
  border: 1px solid #1271a6;
  border-radius: 2px;
  background: transparent;
  color: #1271a6;
  margin-left: 0.3rem;
`;
