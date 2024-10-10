import { Select } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { Option } from "antd/es/mentions";

const QuadrantSelect = () => {
    const [selectedOption, setSelectedOption] = useState("Q1");
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

    ]);

    const handleChange = (value) => {
      setSelectedOption(value);
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
    <Wrapper>
      <Select
        showArrow={false}
        className="quadrant_dropdown"
        value={selectedOption}
        onChange={handleChange}

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
    </Wrapper>
  );
};

export default QuadrantSelect;

const Wrapper = styled.div`
  border: 1px solid green;
  width: 400px;
  height: 350px;
`;



// const QuadrantSelect = () => {
//   const [selectedOption, setSelectedOption] = useState("Q1");
//   const [showOptions, setShowOptions] = useState(false);

//   const optionValues = ["Q1", "Q2", "Q3", "Q4", 'None'];

//   const handleOptionClick = (value) => {
//     setSelectedOption(value);
//     setShowOptions(false);
//   };

//   const isSelected = (option) => option === selectedOption;



//   return (
//     <div className="custom-select-container">
//       <Input
//         type="text"
//         value={selectedOption}
//         placeholder="Select an option"
//         onClick={() => setShowOptions(!showOptions)}
//       />
//       {showOptions && (
//         <SelectDropdown>
//           {optionValues.map((option) => (
//             <List
//               key={option}
//               className={`custom-select-option ${
//                 isSelected(option) ? "selected" : ""
//               }`}
//               onClick={() => handleOptionClick(option)}
//             >
//               {option}
//             </List>
//           ))}
//         </SelectDropdown>
//       )}
//     </div>
//   );
// };

// export default QuadrantSelect;

// const Input = styled.input`
//   height: 40px;
//   border: none;
//   outline: none;
// `;

// const SelectDropdown = styled.ul`
//   margin: 0;
//   /* border: 1px solid green; */
//   width: 42px;
//   height: auto;
//   padding: 8px;
//   background: #04192e;
// `;

// const List = styled.li`
//   list-style: none;
//   display: flex;
//   justify-content: center;
//   padding: 9px;
//   border-radius: 2px;
//   margin-bottom: 8px;
//   font-family: "Inter";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 12px;
//   line-height: 20px;
//   color: #ffffff;

//   :nth-child(1) {
//     border-bottom: 2px solid #9b39e8;
//   }

//   :nth-child(2) {
//     border-bottom: 2px solid #e38f27;
//   }
//   :nth-child(3) {
//     border-bottom: 2px solid #de3131;
//   }
//   :nth-child(4) {
//     border-bottom: 2px solid #3bb748;
//   }
// `;
