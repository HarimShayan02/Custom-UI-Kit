import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import styled from "styled-components";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);

  const handleSelectSlot = ({ slots }) => {
    if (isSelecting) {
      setSelectedRange({ start: slots[0], end: slots[slots.length - 1] });
    }
  };

  const handleMouseDown = () => {
    setIsSelecting(true);
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
  };

  const selectedStyle = {
    backgroundColor: "rgba(173, 216, 230, 0.5)",
    border: "1px solid rgba(173, 216, 230, 0.8)",
  };

  const Toolbar = ({ label, onView, view, onNavigate, localizer }) => (
    <MainToolbarContainer className="my-toolbar">
      <Header>
        <ButtonContent>
          <Button1 onClick={() => onNavigate("PREV")}></Button1>
          <Button1 onClick={() => onNavigate("NEXT")}></Button1>
          <Span>{label}</Span>
        </ButtonContent>

        <Buttoncontent2>
          <Button2 active={view === "week"} onClick={() => onView("week")}>
            Week
          </Button2>
          <Button2 active={view === "month"} onClick={() => onView("month")}>
            Month
          </Button2>
        </Buttoncontent2>
      </Header>
    </MainToolbarContainer>
  );

  return (
    <div>
      <Calendar
        selectable
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelectSlot}
        onSelecting={handleMouseDown}
        onMouseUp={handleMouseUp}
        slotPropGetter={(date) =>
          selectedRange &&
          date >= selectedRange.start &&
          date <= selectedRange.end
            ? { style: selectedStyle }
            : {}
        }
        components={{
          toolbar: Toolbar,
        }}
      />
      {selectedRange && (
        <div>
          Selected Range: {selectedRange.start.toLocaleString()} -{" "}
          {selectedRange.end.toLocaleString()}
        </div>
      )}

      
    </div>
  );
};

export default MyCalendar;

const MainToolbarContainer = styled.div`
  background-color: #fff;
  height: 60px;
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
  margin: 0;
  font-family: "Myriad-SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 21px;
  letter-spacing: -0.32px;
  color: ${({ theme }) => theme.textDark};
`;
const Button1 = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 9px;
`;

const Buttoncontent2 = styled.div`
  padding: 2px;
  width: 343px;
  height: 32px;
  display: flex;
  background: ${({ theme }) => theme.border2};
  border-radius: 8px;
`;

const Button2 = styled.button`
  width: 100%;
  background-color: ${({ active, theme }) =>
    active ? theme.primary : theme.border2};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.08px;
  color: ${({ theme }) => theme.textDark};
`;
