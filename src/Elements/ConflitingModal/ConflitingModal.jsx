import React from "react";
import styled from "styled-components";

const ConflitingModal = () => {
  return (
    <Wrapper>
      <Content>
        <Heading>There is a confliting event.</Heading>
        <Info>Are you sure?</Info>
        <ButtonContainer>
          <NoBtn>No</NoBtn>
          <YesBtn>Yes</YesBtn>
        </ButtonContainer>
      </Content>
    </Wrapper>
  );
};

export default ConflitingModal;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  background-color: #05192e;
  border: 2px solid #ff9900;
  width: 455px;
  height: 165px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  margin-top: 1.9rem;
`;

const Info = styled.p`
  margin: 0;
  margin-top: 3px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

const ButtonContainer = styled.div`
  gap: 10px;
  display: flex;
  margin-top: 1.3rem;
`;

const NoBtn = styled.button`
  outline: none;
  border: none;
  padding: 6px 12px;
  width: 41px;
  height: 32px;
  background: #ecf3f7;
  border-radius: 2px;
  color: #1271a6;
  text-align: center;
`;

const YesBtn = styled.button`
  outline: none;
  border: none;
  width: 45px;
  height: 32px;
  background: #1271a6;
  border-radius: 2px;
  color: #ffff;
  text-align: center;
`;
