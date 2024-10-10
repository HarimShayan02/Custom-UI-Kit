import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillApple,
} from "react-icons/ai";
import Input from "Elements/Input/Input";
import Button from "Elements/Button/Button";

const Wrapper = styled.div`
  height: 48vh;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundDark};
`;

const Content = styled.div`
  padding: 2rem;
`;

const LiContent = styled.div`
  height: 100%;
  width: 100%;
  margin: 2rem auto;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  justify-content: ${({ isColumn }) => (isColumn ? null : "space-around")};
  height: 35vh;
`;
const Image = styled.img`
  width: 70%;
`;
const Listitem = styled.li`
  list-style: none;
  margin-bottom: 0rem;
  color: ${({ theme }) => theme.textDark};
  padding-bottom: 0.5rem;
  font-family: inter-regular;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : null)};
  padding: 0rem 1rem;
`;
const Tag = styled.a`
  margin-right: 1.2rem;
  color: ${({ theme }) => theme.textLight};
  font-size: 1.9rem;
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.textWhite};
  padding-left: 1rem;
`;

const Buttonwrapper = styled.div`
  width: 27%;
  margin-left: 0.5rem;
`;
const InputField = styled.div`
  width: 70%;
`;

const Info = styled.p`
  color: ${({ theme }) => theme.textDark};
  text-align: right;
`;

const Footar = () => {
  return (
    <Wrapper>
      <Content>
        <Row>
          <Col span={7}>
            <ImageContainer>
              <Image src="/Assets/Group 10761.png" alt="" />
              <Ul>
                <Listitem>
                  <Tag href="#">
                    <AiFillFacebook />
                  </Tag>
                </Listitem>
                <Listitem>
                  <Tag href="#">
                    <AiFillInstagram />
                  </Tag>
                </Listitem>
                <Listitem>
                  <Tag href="#">
                    <AiFillApple />
                  </Tag>
                </Listitem>
                <Listitem>
                  <Tag href="#">
                    <AiFillLinkedin />
                  </Tag>
                </Listitem>
                <Listitem>
                  <Tag href="#">
                    <AiFillYoutube />
                  </Tag>
                </Listitem>
                <Listitem>
                  <Tag href="#">
                    <AiFillTwitterCircle />
                  </Tag>
                </Listitem>
              </Ul>
            </ImageContainer>
          </Col>
          <Col span={5}>
            <ImageContainer isColumn={true}>
              <LiContent>
                <Heading>About us</Heading>
                <Ul isColumn={true}>
                  <Listitem>Career</Listitem>
                  <Listitem>Our Story</Listitem>
                  <Listitem>Introduction</Listitem>
                  <Listitem>Future</Listitem>
                </Ul>
              </LiContent>
            </ImageContainer>
          </Col>
          <Col span={5}>
            <ImageContainer isColumn={true}>
              <LiContent>
                <Heading>Support</Heading>
                <Ul isColumn={true}>
                  <Listitem>Community</Listitem>
                  <Listitem>Discord</Listitem>
                  <Listitem>Telegram</Listitem>
                </Ul>
              </LiContent>
            </ImageContainer>
          </Col>
          <Col span={7}>
            <ImageContainer isColumn={true}>
              <LiContent>
                <Heading>Subscribe</Heading>
                <Ul isFlex={true}>
                  <InputField>
                    <Input type={"email"} placeholder={"Enter your email"} />
                  </InputField>
                  <Buttonwrapper>
                    <Button isBorder>Sign up</Button>
                  </Buttonwrapper>
                </Ul>
              </LiContent>
            </ImageContainer>
          </Col>
        </Row>
        <Info>Copyright © 2021 LynxCX. All rights reserved</Info>
      </Content>
    </Wrapper>
  );
};

export default Footar;
