import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";


const SearchInput = ({ disabled, placeholder, name }) => {
  const [isShown, setisShown] = useState(false);
  const [inpVal, setInpVal] = useState("");

  const allLists = [
    { id: 1, name: "Maaz" },
    { id: 2, name: "Harim" },
    { id: 3, name: "Shaarif" },
    { id: 4, name: "Affan" },
    { id: 5, name: "Fawad" },
  ];

  const [listItems, setListItems] = useState([]);

  useEffect(() => setListItems(allLists), []);

  const handleChange = (e) => {
    if (e.target.value.length >= 1) {
      setisShown(true);
    }
    setInpVal(e.target.value);
  };

  const handleSearch = (value) => {
    const copyItems = [...listItems];
    let finalReports = copyItems?.filter((item) =>
      item?.name?.toLowerCase().includes(value?.toLowerCase())
    );
    if (value?.length === 0) {
      setListItems(allLists);
    } else {
      setListItems(finalReports);
    }
  };

  const handleClick = (id) => {
    let copyListItems = [...listItems];
    const newItems = copyListItems?.find((item) => item?.id === id);
    setInpVal(newItems.name);
    setisShown(!isShown);
  };
  return (
    <>
      <InputWrapper>
        <CustomInput
          type="text"
          value={inpVal}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => {
            handleChange(e);
            handleSearch(e?.target?.value, listItems);
          }}
        />
        <DropdownBtn disabled={disabled}
          onClick={() => setisShown(!isShown)}>
          <RiArrowDropDownLine
            style={{ fontSize: "1.9rem" }}

          />
        </DropdownBtn>
      </InputWrapper>
      {isShown ? (
        <Listwrapper>
          <Ul>
            {listItems?.map((item) => (
              <Li onClick={() => handleClick(item?.id)}>{item.name}</Li>
            ))}
          </Ul>
        </Listwrapper>
      ) : null}
    </>
  );
};

export default SearchInput;
const InputWrapper = styled.div`
  color: ${({ theme }) => theme.textDark};
  width: 100%;
  border: 1px solid
    ${({ Error, theme }) => (Error ? theme.danger : theme.textDark)};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CustomInput = styled.input`
  width: 90%;
  border: none;
  appearance: none;
  font-size: 1.2rem;
  background: transparent;
  color: ${({ theme, Error }) => (Error ? theme.danger : theme.textDark)};
  padding: 0.52rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme, Error }) => (Error ? theme.danger : theme.textDark)};
    font-size: 0.85rem ;
    padding-left: 0.25rem ;
    font-family: inter-Light ;
  }
`;
const DropdownBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 10%;
  transform: translate(-8px, 2px);
  & svg{
   
      fill: ${({ theme }) => theme.textDark};
   
  }
`;
const Listwrapper = styled.div`
  transform: translateY(2px);
  width: 100%;
  min-height:5vh ;
  max-height: 20vh;
  border-radius: 6px;
  box-shadow: -1px 1px 5px 0px rgba(133, 131, 131, 0.85);
  background-color: ${({ theme }) => theme.backgroundDark};
  overflow-y: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 6px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundDark};
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.backgroundLight};
  }
`;
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  color: ${({ theme }) => theme.textLight};
  padding: 0.4rem 0.5rem;
  font-family: Inter-Medium ;
  color: ${({ theme }) => theme.textDark};
  &:hover {
    color:  ${({ theme }) => theme.primary} ;

  }
`;