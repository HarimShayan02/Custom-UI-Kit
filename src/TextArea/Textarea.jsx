import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const MessageBox = styled.textarea`
  background-color: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.textLight};
  border-radius: 20px;
  padding: 1rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  outline: none;
  width: 100%;
  height: 30vh;

  &::placeholder {
    color: ${({ theme, Error }) => (Error ? theme.danger : theme.textDark)};
    font-size: 1rem;
    font-family: inter-Light;
    text-transform: capitalize;
  }
`;

const Info = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.lightGrey};
  position: absolute;
  right: -29px;
`;
const Content = styled.div`
  width: 100%;
  position: relative;
`;
const Textarea = ({ placeholder }) => {
  const [textareacount, settextAreacount] = useState(0);

  const recalculate = (e) => {
    console.log(e.target.value);
    settextAreacount(e.target.value.length);
  };

  return (
    <Wrapper>
      <MessageBox
        name=""
        placeholder={placeholder}
        onChange={recalculate}
      ></MessageBox>
      <Content>
        <Info>{`${textareacount}/500`}</Info>
      </Content>
    </Wrapper>
  );
};

export default Textarea;
