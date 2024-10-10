import React from "react";
import styled from "styled-components";
import { MdOutlineSync } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import { ReactComponent as Close } from "./Close.svg";
import { ReactComponent as GoogleCalender } from "./icons8-google-calendar.svg";
import { ReactComponent as Apple } from "./Apple_Calendar_(iOS) 1.svg";
import { ReactComponent as Outlook } from "./icons8-outlook.svg";
import { ReactComponent as Popover } from "./popover.svg";
import { Input, Tooltip } from "antd";

const SyncModal = () => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <SyncHeading>
            <MdOutlineSync style={{ color: "fff", fontSize: "1.5rem" }} />
            <Heading>SYNC WITH YOUR CALENDAR</Heading>
          </SyncHeading>
          <CloseButton>
            <Close />
          </CloseButton>
        </Header>

        <AppButtonContainer>
          <ButtonItem>
            <GoogleCalender />
            <BtnTitle>Google</BtnTitle>
          </ButtonItem>
          <ButtonItem>
            <Apple />
            <BtnTitle>Apple</BtnTitle>
          </ButtonItem>
          <ButtonItem>
            <Outlook />
            <BtnTitle>Outlook</BtnTitle>
          </ButtonItem>
        </AppButtonContainer>

        <FootarContent>
          <Input placeholder="Basic usage" />
          <CopyLinkButton>
            Copy Link
            <BsLink45Deg />
          </CopyLinkButton>
        </FootarContent>

        <Instruction>
          <Tooltip placement="bottomRight" title="Read the Instuction Carefully or you can loose everything">
            <TooltipHeading>
            <Popover/> 
            View Instructions
            </TooltipHeading>
          </Tooltip>
        </Instruction>
      </Content>
    </Wrapper>
  );
};

export default SyncModal;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  width: 423px;
  height: 212px;
  background-color: #05192e;
  box-shadow: 0px 1px 40px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 1rem;
`;

const Heading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.12em;
  color: #ffffff;
  margin-left: 6px;
  margin-bottom: 0.4rem;
`;

const Header = styled.div`
  /* height: 5.5vh; */
  border-bottom: 1px solid #394b59;
  display: flex;
  justify-content: space-between;
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

const AppButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 8vh; */
  border-bottom: 1px solid #394b59;
  margin-top: 1.2rem;
  padding-bottom: 1.2rem;
`;

const ButtonItem = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnTitle = styled.h3`
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  margin-left: 4px;
`;

const FootarContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;

  & .ant-input {
    background: #192d42;
    border: 1px solid #394b59;
    border-radius: 0px;
    width: 305px;
    height: 36px;
    color: #ffff;
  }

  & ::placeholder {
    color: #fff;
  }
`;
const CopyLinkButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 103px;
  height: 32px;
  background: #1271a6;
  border-radius: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;

  svg {
    font-size: 1.1rem;
  }
`;

const Instruction = styled.div`
margin-top: 0.8rem;
display: flex;
justify-content: flex-end;
align-items: center;
`
const TooltipHeading = styled.h3`
display: flex;
align-items: center;
margin: 0;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
color: #FFFFFF;
gap: 0.3rem;
`
