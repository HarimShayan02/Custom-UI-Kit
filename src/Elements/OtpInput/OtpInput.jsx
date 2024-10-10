import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import OtpInput from "react-otp-input";
import Button from "Elements/Button/Button";

const OtpModal = ({ ModelItems }) => {
  // const ModelItems = [
  //   {
  //     logo: "/Assets/message logo.png",
  //     title: "Email confirmation",
  //     Description: " A code was sent to mikegray.23@gmail.com",
  //     tag: "Send again",
  //   },
  // ];

  const [isOpen, setisOpen] = useState(true)

  const [inputValue, setInputValue] = useState("");

  const [buttondisabled, setButtondisabled] = useState(true);

  useEffect(() => {
    if (!inputValue) return;

    if (inputValue.length >= 6) return setButtondisabled(false);

    return setButtondisabled(true);
  }, [inputValue]);

  const handleChange = (value) => {
    setInputValue(value);
  };

  return ( 
    <>
    {isOpen && (
    <OtpWrapper>
      <Icon>
        <Btn onClick={() => setisOpen(!isOpen)}>
          <RxCross2 style={{ fontSize: "18px" }} />
        </Btn>
      </Icon>
      {ModelItems?.map((item) => (
        <>
          <Logo>
            <Image src={item.logo} alt="" />
          </Logo>

          <Heading>{item.title}</Heading>
          <Info>{item.Description}</Info>

          <OtpContent>
            <OtpContainer>
              <CustomOptInput
                value={inputValue}
                onChange={(inputValue) => handleChange(inputValue)}
                numInputs={6}
                isInputNum={true}
                errorStyle={{ border: "1px solid #ff333a", color: "#ff333a" }}
                hasErrored={false}
              />
            </OtpContainer>
          </OtpContent>

          <Link href="#">{item.tag}</Link>

          <ButtonWrapper>
            <Button isBorder disabled={buttondisabled}>
              Done
            </Button>
          </ButtonWrapper>
        </>
          ))}
    </OtpWrapper>
    )}
    </>
  );
};

export default OtpModal;

const OtpWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundDark};
  border-radius: 12px;
  width: 100%;

  @media (max-width: 520px) {
    width: 100%;
  }
`;
const Icon = styled.div`
  /* border: 1px solid green ; */
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem;
`;
const Logo = styled.div`
  /* border: 1px solid red ; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 6.5rem;
`;
const Heading = styled.h3`
  color: ${({ theme }) => theme.grey};
  text-align: center;
  font-family: inter-light;
  letter-spacing: 0.1em;
  font-weight: 600;
  font-size: 21px;
`;
const Info = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textDark};
  font-family: inter-medium;
  font-size: 13px;
  font-weight: 400;
  padding-top: 0.5rem;
`;

const OtpContainer = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  padding: 0.5rem ;
  display: flex;
  justify-content: space-evenly;
`;
const OtpContent = styled.div`
  display: flex;
  padding: 1rem 0rem;
  margin-top: 1.5rem;
  justify-content: center;
  align-items: center ;
  /* border: 1px solid green ; */
  width: 100%;

  input {
    /* width: 100%; */
    margin: 0rem 0.35rem;
    /* gap: 0.5rem; */
    padding: 0.65rem;
    background-color: ${({ theme }) => theme.backgroundDark};
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.grey};
    outline: none;
    font-size: 1.1rem;
    border-radius: 5px;

    &:focus {
      border: 1px solid ${({ theme }) => theme.primary};
    }
  }
`;

const CustomOptInput = styled(OtpInput)``;

const Link = styled.a`
  color: ${({ theme }) => theme.sourcedBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  font-family: Inter-thin;
  font-size: 0.78rem;
  letter-spacing: 0.07em;
  margin-top: 1.1rem;
`;

const ButtonWrapper = styled.div`
  padding: 1rem;
  margin-top: 0.2rem;
`;

const Btn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
