import React, { useState } from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Modal, Select, TimePicker } from "antd";
import "./Overide.scss";
import { ReactComponent as Scroll } from "./Icon.svg";
import { ReactComponent as Dustbin } from "./dustbin.svg";
import { ReactComponent as Back } from "./Vector.svg";
import { ReactComponent as DownArrow } from "./downarrow.svg";

const GoalPlanningModal = ({ isModalOpen, setIsModalOpen}) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const onChange = () => {
    console.log();
  };

  const handleSelect = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        footer={false}
        closable={false}
        className="quadrant_modal"
      >
        <ModalContainer>
          <Header>
            <HeaderContent>
              <NumberContent>
                <NumberHeading>9</NumberHeading>
              </NumberContent>
              <ActiveStatus>
                <Image src="/Assets/activeStatus.svg" alt="" />
              </ActiveStatus>
              <PersonalInfo>
                <PersonalHeading>Personal Hygiene Routine</PersonalHeading>
                <PersonalDescription>Build</PersonalDescription>
              </PersonalInfo>
            </HeaderContent>

            <CloseButton>
              <CloseOutlined onClick={() => handleClose()} />
            </CloseButton>
          </Header>
          <ItemContainer>
            <InputWrapper>
              <TimePicker
                className="modal_time_picker"
                use12Hours
                format="h:mm a"
                onChange={onChange}
                suffixIcon={<Scroll />}
              />
              <TimePicker
                className="modal_time_picker"
                use12Hours
                format="h:mm a"
                onChange={onChange}
                suffixIcon={<Scroll />}
              />
            </InputWrapper>

            <DeleteButton>
              <Dustbin />
            </DeleteButton>
          </ItemContainer>
          <TextAreaContainer>
            <NoteHeading>Add Note</NoteHeading>
            <Textarea placeholder="Add your note here"></Textarea>
          </TextAreaContainer>
          <QuadrantContainer>
            <Content>
              <QuadrantHeading>Quadrant</QuadrantHeading>
              <Select
                className="select_quadrant"
                defaultValue="Q1"
                suffixIcon={<DownArrow />}
                onChange={handleSelect}
                options={[
                  {
                    value: "Q1",
                    label: "Q1",
                  },
                  {
                    value: "Q2",
                    label: "Q2",
                  },
                  {
                    value: "Q3",
                    label: "Q3",
                  },
                  {
                    value: "Q4",
                    label: "Q4",
                  },
                ]}
              />
            </Content>

            <BackButtonContainer>
              <BackButton>
                Go to app <Back />
              </BackButton>
            </BackButtonContainer>
          </QuadrantContainer>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default GoalPlanningModal;

const Wrapper = styled.div`
  /* width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center; */
`;
const ModalContainer = styled.div`
  /* border: 1px solid red; */
  /* width: 495px;
  height: 310px; */
  background: #05192e;
  padding: 1rem 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #50545c;
`;

const HeaderContent = styled.div`
  /* border: 1px solid green; */
  display: flex;
  margin-bottom: 0.4rem;
`;
const NumberContent = styled.div`
  background: #2f4358;
  border-radius: 100px;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 5px 7px;
  margin-top: 0.4rem;
  /* margin-left: 0.5rem; */
  margin-right: 0.6rem;
`;
const NumberHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 9px;
  color: #ffff;
  margin: 0;
`;

const ActiveStatus = styled.div`
  margin-right: 0.6rem;
  margin-top: 2px;
`;
const Image = styled.img``;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`;
const PersonalHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #e3e5e9;
  margin: 0;
  margin-top: 0.4rem;
`;

const PersonalDescription = styled.p`
  font-family: "Inter";
  font-style: italic;
  font-weight: ${({ iscolor }) => (iscolor ? 700 : 400)};
  font-size: 8px;
  line-height: 16px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: ${({ iscolor }) => (iscolor ? "#4F9BE8" : "#35AA22")};
  margin: 0;
`;

const CloseButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 700;

  .anticon svg {
    color: #8e97a3;
    font-size: 1.1rem;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 1.2rem; */
  /* border: 1px solid green; */
  margin-top: 1.5rem;
`;
const InputWrapper = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  width: 85%;
  gap: 0.7rem;
  /* border: 1px solid green; */
`;

const DeleteButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const TextAreaContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;
const NoteHeading = styled.h3`
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;
const Textarea = styled.textarea`
  width: auto;
  height: 74px;
  background: #192d42;
  border: 1px solid #394b59;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);

  ::placeholder {
    color: #4a5e73;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    padding-left: 0.6rem;
  }
`;

const QuadrantContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  margin-top: 1.8rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;
const QuadrantHeading = styled.h3`
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  outline: none;
  border: none;
  width: 104px;
  height: 36px;
  background: #1271a6;
  border-radius: 2px;
  color: #fff;
`;
