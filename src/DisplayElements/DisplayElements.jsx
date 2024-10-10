import Button from "Elements/Button/Button";
import Modal from "Elements/CustomModal/Modal";
import Input from "Elements/Input/Input";
import SearchInput from "Elements/SearchInput/SearchInput";
import React, { useState } from "react";
import styled from "styled-components";
import ThemeSwitch from "../Elements/ThemeSwitch/ThemeSwitch";
import { FaUserAlt } from "react-icons/fa";
import TabGroupButton from "Elements/TabsButton/TabsButton";
import OtpModal from "Elements/OtpInput/OtpInput";
import AvatarDropdown from "Elements/AvatarDropdown/AvatarDropdown";
import Signup from "Components/Signup/Sign in/Signup";
import Phoneotp from "Components/Signup/Sign in/Phoneotp";
import Signin from "Components/Signup/Sign in/Signin";
import Textarea from "TextArea/Textarea";
import Navbar from "Components/Signup/Navbar/Navbar";
import Footar from "Components/Signup/Footar/Footar";
import Schedular from "../Components/Signup/Calender/Scheduler";
import GoalPlanningModal from "../Components/GoalPlanningModal/GoalPlanningModal";
import QuadrantSelect from "../Components/QuadrantSelect/QuadrantSelect";
import MyCalendar from "Components/Testing";
import ModalSelect from "Components/ModalSelect";
import ConflitingModal from "Elements/ConflitingModal/ConflitingModal";
import TimelineModal from "Elements/TimelineModal/TimelineModal";

import SyncModal from "Elements/SyncModal/SyncModal";
import RadioPopover from "Elements/RadioSelectPopover/RadioPopover";
import FilterPopup from "Elements/FilterPopup/FilterPopup";
import CustomizedCheckboxGroup from "Elements/AreaImpactPopover/AreaImpactPopover";
import Hellocheckbox from "Elements/AreaImpactPopover/AreaImpactPopover";
import CustomizeModal from "Elements/CustomizeTableModal/CustomizeModal";
import AreaImpactPopup from "Elements/AreaImpactPopover/AreaImpactPopover";
import Summary from "Elements/SummaryPage/PrintPage";
import DragnDropcal from "Elements/DragnDropCalender/DragnDropcal";
import DragnDropcalender from "Elements/DragnDropCalender/DragnDropcal";
import Comparision from "Elements/ComparisionPrint/PrintComparision";

// import DragDropFile from "Elements/Drag&DropFiles/DragDropFile";

const DisplayElements = () => {
  // const signInData = [
  //   {
  //     title: "Email",
  //     status: "Email",
  //   },
  //   {
  //     title: "Phone",
  //     status: "Phone",
  //   },

  // ]

  // const tabData = [
  //   {
  //     title: "All",
  //     status: "ALL",
  //   },
  //   {
  //     title: "Email",
  //     status: "ACTIVE",
  //   },
  //   {
  //     title: "Phone Number",
  //     status: "INACTIVE",
  //   },
  // ];

  const ModalData = [
    {
      logo: "/Assets/message logo.png",
      title: "Email confirmation",
      Description: " A code was sent to mikegray.23@gmail.com",
      tag: "Send again",
    },
  ];

  const PhoneData = [
    {
      logo: "/Assets/Phone Logo.png",
      title: "Phone confirmation",
      Description: " A confirmation code was sent to +xxxxxxx12.",
      tag: "Send again",
    },
  ];

  //  const listItems = [
  //   { id: 1, avatar: "/Assets/half moon.png" },
  //   { id: 2, avatar: "/Assets/sun.png" },
  //   { id: 3, avatar: "/Assets/Vector.png" },
  // ];

  return (
    <Wrapper>
      <ThemeSwitch />
      {/* <Heading>Welome to the UI - KIT</Heading> */}
      {/* {
Render your elements here 
} */}

      <BtnWrap>
        {/* <Calender/> */}
        {/* <Schedular/> */}
        {/* <ConflitingModal/> */}
        {/* <TimelineModal/> */}
        {/* <SyncModal /> */}
        {/* <RadioPopover/> */}
        {/* <FilterPopup/> */}
        {/* <Hellocheckbox/> */}
        {/* <CustomizeModal/> */}
        {/* <AreaImpactPopup/> */}
        {/* <Summary/> */}
        {/* <DragnDropcalender/> */}
        <Comparision/>
       

        {/* <ModalSelect/> */}
        {/* <MyCalendar/> */}
        {/* <GoalPlanningModal/> */}
        {/* <QuadrantSelect/> */}

        {/* <TabGroupButton
            subTab
            data={tabData}
            isActive={({ status }) => styleHandler(status)}
            onClick={({ status }) => {
              setFilters({
                ...filters,
                lotFilter: status,
              });
            }}
          /> */}
        {/* <Input
                    label={"Enter Phone Number"}
                    type="password"
                    placeholder={"Enter your Name"}
                    isRight
                /> */}
        {/* <SearchInput /> */}
        {/* <Button isBorder >
                    Submit  <FaUserAlt />
                </Button > */}

        {/* <Input
                    label={"Enter Phone Number"}
                    type="email"
                    placeholder={"Enter your Name"}
                    isRight
                /> */}

        {/* <AvatarDropdown listItems={listItems}/> */}
        {/* <Signup /> */}

        {/* <OtpModal ModelItems={ModalData}/> */}

        {/* <Phoneotp ModelItems={PhoneData} />  */}

        {/* <Signin /> */}

        {/* <Textarea placeholder={'Please write your message'}/> */}

        {/* <Navbar  /> */}

        {/* <Footar /> */}
      </BtnWrap>
      {/* <Modal
                Heading={"Error"}
                // onClick={}
                src={"/Assets/error_icon.svg"}
                text={"Please try again later or contact support"}
            /> */}
      {/* <DargWrapper>
        <DragDropFile />
      </DargWrapper> */}
    </Wrapper>
  );
};

export default DisplayElements;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundLight};
  /* height: 100vh ;
  padding: 1rem; */
`;
const Heading = styled.h2`
  color: ${({ theme }) => theme.textDark};
  margin: 0;
`;
const BtnWrap = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
const DargWrapper = styled.div`
  width: 25rem;
`;
