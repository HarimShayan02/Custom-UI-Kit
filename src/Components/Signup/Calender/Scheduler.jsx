import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Scheduler.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { MdOutlineSync } from "react-icons/md";
import { RiFilter3Line } from "react-icons/ri";
import { Modal, Select } from "antd";
// import "../../QuadrantSelect/Overide.scss";
import GoalPlanningModal from "../../GoalPlanningModal/GoalPlanningModal";
import { Option } from "antd/es/mentions";

const QuadrantSelect = () => {
  const [selectOption, setSelectOption] = useState("Q1");
  const [optionItem, setOptionItem] = useState([
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
    {
      value: "None",
      label: "None",
    },
  ]);

  const handleOptionChange = (value) => {
    setSelectOption(value);
  };

  const styleHandler = (optionValue) => {
    switch (optionValue) {
      case "Q1":
        return { borderBottom: "2px solid #9B39E8" };
      case "Q2":
        return { borderBottom: "2px solid #E38F27" };
      case "Q3":
        return { borderBottom: "2px solid #DE3131" };
      case "Q4":
        return { borderBottom: "2px solid #3BB748" };
      default:
        return {};
    }
  };

  return (
    <Select
      popupClassName="quadrant_select"
      showArrow={false}
      className="select_quadrant"
      value={selectOption}
      onChange={handleOptionChange}
    >
      {optionItem.map((option) => (
        <Option
          key={option.value}
          value={option.value}
          style={styleHandler(option.value)}
        >
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

const Schedular = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const localizer = momentLocalizer(moment);

  const today = new Date();

  const myEventsList = [
    {
      title: "Meeting with John",
      start: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        6,
        0
      ),
      end: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        7,
        0
      ),
    },
    {
      title: "Lunch with Sarah",
      start: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        9,
        0
      ),
      end: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        10,
        0
      ),
    },
  ];

  // const CustomEvent = ({ event }) => {
  //   const { start, title } = event;
  //   const startHour = start.getHours();

  //   if (title === "Meeting with John") {
  //     return (
  //       <>
  //         <EventContainer>
  //           {/* <div className="custom-event-title">{event.title}</div> */}
  //         </EventContainer>
  //         <EventContent className="custom-event-content">
  //           <UserDescription onClick={() => showModal()}>
  //             <NumberContent>
  //               <NumberHeading>9</NumberHeading>
  //             </NumberContent>
  //             <ActiveStatus>
  //               <Image src="/Assets/activeStatus.svg" alt="" />
  //             </ActiveStatus>
  //             <PersonalInfo>
  //               <PersonalHeading>Personal Hygiene Routine</PersonalHeading>
  //               <PersonalDescription>Build</PersonalDescription>
  //             </PersonalInfo>
  //           </UserDescription>

  //           <Userhabbit>
  //             <QuadrantSelect />
  //             <UserHeading>Habit</UserHeading>
  //           </Userhabbit>
  //         </EventContent>
  //         <GoalPlanningModal
  //           isModalOpen={isModalOpen}
  //           setIsModalOpen={setIsModalOpen}
  //         />
  //       </>
  //     );
  //   }
  //   if (startHour === 9) {
  //     return (
  //       <>
  //         <EventContainer className="custom-event" isborder={true}>
  //           {/* <div className="custom-event-title">{event.title}</div> */}
  //         </EventContainer>
  //         <EventContent className="custom-event-content">
  //           <UserDescription>
  //             <NumberContent>
  //               <NumberHeading>10</NumberHeading>
  //             </NumberContent>
  //             <ActiveStatus>
  //               <Image src="/Assets/activeStatus.svg" alt="" />
  //             </ActiveStatus>
  //             <PersonalInfo>
  //               <PersonalHeading>Sleep 8 hours</PersonalHeading>
  //               <PersonalDescription iscolor={true}>
  //                 11/05/2023
  //               </PersonalDescription>
  //             </PersonalInfo>
  //           </UserDescription>

  //           <Userhabbit isborder={true}>
  //             <Label>Q2</Label>
  //             <UserHeading>Action item</UserHeading>
  //           </Userhabbit>
  //         </EventContent>
  //       </>
  //     );
  //   }

  //   return null;
  // };

  const CustomEvent = ({ event }) => {
    const [{ isDragging }, drag] = useDrag({
      item: { type: "event", id: event.id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    return (
      <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        {/* Render your custom event component */}
        {/* ... */}
        <div>
          <h3>hello harim</h3>
        </div>
      </div>
    );
  };

  const handleDrop = (event) => {
    const newEvent = {
      title: event.title,
      start: event.start,
      end: event.end,
    };
    setEvents([...events, newEvent]);
  };

  const CustomHeader = ({ date }) => {
    const dateNumber = moment(date).format("DD");
    const day = moment(date).format("ddd");

    return (
      <>
        <HeaderContent className="rbc-header-content">
          <HeaderDate className="rbc-header-date">{dateNumber}</HeaderDate>
          <HeaderDay className="rbc-header-day">{day}</HeaderDay>
        </HeaderContent>
      </>
    );
  };

  const Toolbar = ({ label, onView, view, onNavigate, localizer }) => {
    console.log(label);
    const formattedDate = moment(label, "MMM DD").format("MMMM YYYY");

    return (
      <MainToolbarContainer className="my-toolbar">
        <ContainerOne>
          <SyncButtonContainer>
            <SyncButton>
              <MdOutlineSync />
              <SyncHeading>Sync</SyncHeading>
            </SyncButton>
          </SyncButtonContainer>

          <Header>
            <ButtonContent>
              <Button1 onClick={() => onNavigate("PREV")}>
                <LeftOutlined />
              </Button1>
              <Button1
                style={{ marginLeft: "0.7rem" }}
                onClick={() => onNavigate("NEXT")}
              >
                <RightOutlined />
              </Button1>
              <Span>{formattedDate}</Span> {/* Display formatted date */}
            </ButtonContent>
          </Header>
        </ContainerOne>

        <ContainerTwo>
          <FilterButton>
            <RiFilter3Line />
          </FilterButton>
          <FilterHeading>(5)</FilterHeading>
          <TimeHeading>Time of day</TimeHeading>
          <Select
            suffixIcon={<img src="/Assets/Scroll.svg"></img>}
            className="select_time"
            defaultValue="Afternoon"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "Morning",
                label: "Morning",
              },
              {
                value: "Afternoon",
                label: "Afternoon",
              },
              {
                value: "Night",
                label: "Night",
              },
            ]}
          />
        </ContainerTwo>
      </MainToolbarContainer>
    );
  };

  const formats = {
    timeGutterFormat: (date, culture, localizer) => {
      // Get the hour value from the date
      return localizer.format(date, "HA");

      // Replace the label content based on the hour value
      // if (hour === '6') {
      //   return '6AM';
      // } else if (hour === '12') {
      //   return '12PM';
      // } else {
      //   return localizer.format(date, 'HA');
      // }
    },
  };

  ////////////////////////// Slot Selected Modal////////////////////////////////////

  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [savedOption, setSavedOption] = useState(null);

  const optionValues = ["Q1", "Q2", "Q3", "Q4", "None"];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setShowOptions(false);
  };

  const isSelected = (option) => option === selectedOption;

  useEffect(() => {
    setSavedOption(selectedOption);
  }, [selectedOption]);

  ////////////////////////////////////////////////////////////////////////////

  ////////////////////////////// Selectable Slots ////////////////////////////////////////////

  // const selectedStyle = {
  //   backgroundColor: "#9b39e8",
  //   // border: "yellow",
  // };

  const [selectedRange, setSelectedRange] = useState(null);

  const handleSelectSlot = ({ start, end }) => {
    let newSelectedRange = selectedRange ? selectedRange : [];
    setSelectedRange([...newSelectedRange, { start, end }]);
  };

  useEffect(() => {
    // console.log("chalaaaa");
    if (selectedRange && selectedRange.length > 0) {
      const checkSelectionEnd = setInterval(() => {
        const currentTime = new Date();
        const hasReachedEnd = selectedRange.some(
          (range) => currentTime >= range.end
        );
        if (hasReachedEnd) {
          console.log("drag end");
          setShowOptions(!showOptions);
          clearInterval(checkSelectionEnd);
        }
      }, 1000); // Check every second (adjust as needed)
      return () => {
        clearInterval(checkSelectionEnd);
      };
    }
  }, [selectedRange]);

  const NewselectedStyle = (selectedOption) => {
    if (selectedOption === "Q1") {
      return { backgroundColor: "#9B39E8" };
    } else if (selectedOption === "Q2") {
      return { backgroundColor: "#E38F27" };
    } else if (selectedOption === "Q3") {
      return { backgroundColor: "#DE3131" };
    } else if (selectedOption === "Q4") {
      return { backgroundColor: "#3BB748" };
    } else {
      return {};
    }
  };

  //////////////////////////////////////////////////////////////////////////////

  return (
    <Container>
      <DragDropContext backend={HTML5Backend}>
        <Calendar
          selectable
          onSelectSlot={handleSelectSlot}
          slotPropGetter={(date) => {
            if (selectedRange) {
              const isRange = selectedRange.some(
                (range) => date >= range.start && date <= range.end
              );
              if (isRange) {
                const optionStyle = NewselectedStyle(selectedOption);
                if (optionStyle) {
                  return { style: optionStyle };
                }
              }
            }

            return {};
          }}
          formats={formats}
          view="week"
          localizer={localizer}
          onDrop={handleDrop}
          events={events.concat(myEventsList)}
          startAccessor="start"
          endAccessor="end"
          style={{}}
          className="my-calendar-class"
          components={{
            toolbar: Toolbar,
            event: CustomEvent,

            week: {
              header: CustomHeader,
              // timeContentWrapper: CustomTimeContentWrapper,
            },
          }}
          min={new Date(0, 0, 0, 6, 0, 0)}
          max={new Date(0, 0, 0, 13, 0, 0)}
        />
      </DragDropContext>

      <Modal
        footer={false}
        open={showOptions}
        closable={false}
        className="only_dropdown"
      >
        <SelectDropdown>
          {optionValues.map((option) => (
            <List
              key={option}
              className={`custom-select-option ${
                isSelected(option) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </List>
          ))}
        </SelectDropdown>
      </Modal>
    </Container>
  );
};

export default Schedular;
const Container = styled.div`
  background-color: #fff;
`;

const MainToolbarContainer = styled.div`
  background-color: #fff;
  border-top: 1px solid #c1cad1;
  border-bottom: 1px solid #c1cad1;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerOne = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
`;

const ContainerTwo = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
`;
const FilterButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  svg {
    color: #6d7f8e;
    font-size: 1.5rem;
  }
`;
const FilterHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 8px;
  color: #418db8;
  margin: 0;
  margin-right: 1rem;
`;
const TimeHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #1271a6;
  margin-right: 1rem;
`;
const Header = styled.div`
  /* border: 1px solid red; */
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
const Span = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #6d7f8e;
  margin-left: 1rem;
`;
const Button1 = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 9px;

  svg {
    color: #6d7f8e;
  }
`;

const HeaderContent = styled.div`
  min-height: 50px;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;
const HeaderDay = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #586573;
  text-transform: uppercase;
`;
const HeaderDate = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #586573;
`;

const SyncButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SyncButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.6rem;
    color: #6d7f8e;
  }
`;

const SyncHeading = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #1271a6;
  margin-left: 0.3rem;
`;

const EventContainer = styled.div`
  border: 1px solid ${({ isborder }) => (isborder ? "#E38F27" : "#4F9BE8")};
`;
const EventContent = styled.div`
  min-height: 145px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserDescription = styled.div`
  min-height: 110px;
  height: 100%;
  display: flex;
  height: auto;
  align-items: flex-start;
`;
const NumberContent = styled.div`
  background-color: #c1cedb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 4px 6.5px;
  margin-top: 0.4rem;
  margin-left: 0.5rem;
  margin-right: 0.6rem;
`;
const NumberHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 9px;
  color: #58728c;
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
  justify-content: center;
`;
const PersonalHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  font-feature-settings: "tnum" on, "lnum" on;
  width: 100px;
  color: #1b2a3d;
  margin: 0;
  margin-top: 0.3rem;
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

const Userhabbit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isborder }) => (isborder ? "#E38F27" : "#9b39e8")};
  height: 40px;
`;

const Label = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  margin-left: 0.5rem;
`;
const UserHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 16px;
  text-align: right;
  text-transform: uppercase;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #ffffff;
  margin: 0;
  margin-right: 0.5rem;
`;

const SelectDropdown = styled.ul`
  margin: 0;
  /* border: 1px solid green; */
  width: 42px;
  height: auto;
  padding: 8px;
  background: #04192e;
`;

const List = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 9px;
  border-radius: 2px;
  margin-bottom: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;

  :nth-child(1) {
    border-bottom: 2px solid #9b39e8;
  }

  :nth-child(2) {
    border-bottom: 2px solid #e38f27;
  }
  :nth-child(3) {
    border-bottom: 2px solid #de3131;
  }
  :nth-child(4) {
    border-bottom: 2px solid #3bb748;
  }
`;
