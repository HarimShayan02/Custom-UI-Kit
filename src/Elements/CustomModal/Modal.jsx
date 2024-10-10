import Button from "Elements/Button/Button";
import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ Heading, src, text }) => {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <>
      {isTrue && (
        <ModalContainer>
          <CustomModal>
            <CrossIconWrapper onClick={() => setIsTrue(false)}>
              <CrossImage src="/Assets/cross_icon.svg" alt="cross icon" />
            </CrossIconWrapper>
            <Wrapper>
              <Icon src={src} alt="icon" />
              <ErrHeading>{Heading}</ErrHeading>
              <Message>{text}</Message>
              <btnWrapper><Button onClick={() => setIsTrue(false)} isBorder>Click Me..</Button></btnWrapper>
            </Wrapper>
          </CustomModal>
        </ModalContainer>
      )}
    </>
  );
};
export default Modal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const CrossIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const CrossImage = styled.img`
  cursor: pointer;
`;
const CustomModal = styled.div`
  padding: 1rem;
  width: 25%;
  background: ${({ theme }) => theme.backgroundDark};

  border-radius: 8px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ErrHeading = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  line-height: 1.6rem;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Inter-Semi-Bold";
  color: ${({ theme }) => theme.grey};
`;
const btnWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Message = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.8rem;
  letter-spacing: 1px;
  font-family: "Inter-Medium";
  margin: 1rem 0;
  text-align: center;
  color: ${({ theme }) => theme.grey};
`;
const Icon = styled.img``;


