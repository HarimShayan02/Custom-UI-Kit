import { Modal } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const ModalSelect = () => {
  const [selectedOption, setSelectedOption] = useState("Q1");
  const [showOptions, setShowOptions] = useState(true);

  const optionValues = ["Q1", "Q2", "Q3", "Q4", "None"];

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setShowOptions(false);
  };

  const isSelected = (option) => option === selectedOption;
  return (
    
  <Modal footer={false} open={showOptions} closable={false} className="only_dropdown">
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
       
 
  );
};

export default ModalSelect;


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
