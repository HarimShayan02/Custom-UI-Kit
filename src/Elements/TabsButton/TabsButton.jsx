import React from "react";
import styled from "styled-components";

const TabGroupButton = ({ data, onClick, subTab, isActive }) => {
  return (
    <Wrapper>
      <GroupButton subTab={subTab}>
        {data?.map((item,i) => (
          <Button
            subTab={subTab}
            key={i}
            isActive={isActive(item)}
            onClick={() => {
              onClick(item);
            }}
          >
            {item.title}
          </Button>
        ))}
      </GroupButton>
    </Wrapper>
  );
};
export default TabGroupButton;

const Wrapper = styled.div`
  overflow-x: auto;
  box-shadow: 2px 3px 6px -1px ${({ theme }) => theme.shadowDark};
  -webkit-box-shadow: 2px 3px 6px -1px ${({ theme }) => theme.shadowDark};
  -moz-box-shadow: 2px 3px 6px -1px ${({ theme }) => theme.shadowDark};
  border-radius: ${({ subTab }) => (subTab ? "12px" : "8px")};
`;

const GroupButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center ;
  padding: ${({ subTab }) => (subTab ? "0.3rem" : "0.1rem")};
  margin-bottom: ${({ subTab }) => (subTab ? "0.15rem" : "0")};
  background-color: ${({ theme }) => theme.backgroundLight};
`;
const Button = styled.button`
  width: 100%;
  text-transform: capitalize;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.primary : theme.backgroundLight};
  color: ${({ theme, isActive }) =>
    isActive ? theme.textWhite : theme.textDark};
  border: ${({ subTab }) => (subTab ? "none" : `none`)};
  height: ${({ subTab }) => subTab && "100%"};
  font-size: ${({ subTab }) => (subTab ? "1rem" : "0.8rem")};
  white-space: ${({ subTab }) => subTab && "nowrap"};
  font-family: "Inter-light";
  border-radius: ${({ subTab }) => (subTab ? "10px" : "8px")};
  padding: ${({ subTab }) => (subTab ? "0.6rem" : "0.55rem")};
  margin: 0.3rem;
  box-shadow: ${({ isActive }) =>
    isActive ? " 0px 2px 0px #2C9BF6;" : "null"};
  cursor: pointer;
  transition: background-color 0.8s all;
`;
