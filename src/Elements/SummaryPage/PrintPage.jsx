import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./Component 92.svg";
import { ReactComponent as Car } from "./Option avatar.svg";
import { ReactComponent as WinnerRank } from "./Cup.svg";
import { Col, Row } from "antd";

const Summary = () => {
  const data = [
    { title: "harim", description: "hello world" , score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
    { title: "harim", description: "hello world", score: "1.0" },
  ];

  

  const splitArrayIntoPages = (array) => {
    if (array.length <= 20) {
      // Base case: Array length is less than or equal to 10, return the array as a single page
      return [array];
    } else {
      // Recursive case: Split the array into two parts and recursively split the remaining part
      const firstPage = array.slice(0, 20);
      const remainingPages = splitArrayIntoPages(array.slice(20));
      return [firstPage, ...remainingPages];
    }
  };

  const calculateItemNumber = (pageIndex, index) => {
    const totalProcessedItems = pageIndex * 20 + index + 1;
    return totalProcessedItems;
  };

  const CriteriaArray = splitArrayIntoPages(data);

  console.log(CriteriaArray, "harim");

  return (
    <Wrapper>
      {CriteriaArray?.map((Criteria, pageIndex) => (
        <MainContent key={pageIndex}>
          <PrintHeader>
            <Titlecontainer>
              <Logo />
              <TitleContent>
                <DecisionHeading>Decision Matrix</DecisionHeading>
                <DecisionInfo>by Arootah</DecisionInfo>
              </TitleContent>
            </Titlecontainer>
            <CarchoiceContainer>
              <CarchoiceHeading>Car choice</CarchoiceHeading>
              <CarChoiceDate>
                <DealineHeading>Deadline:</DealineHeading>
                <DeadlineDate>10/17/2023</DeadlineDate>
              </CarChoiceDate>
            </CarchoiceContainer>
          </PrintHeader>
          <PrintSection>
            {pageIndex === 0 && (
              <Row gutter={[24, 0]}>
                <Col>
                  <AvatarContent>
                    <Car />
                  </AvatarContent>
                </Col>
                <Col span={18}>
                  <CarContent>
                    <AvatarContentHeading>
                      <AvatarHeading>Audi R8 RS ABT</AvatarHeading>
                      <AvatarRank>
                        <WinnerRank />
                        Winner
                      </AvatarRank>
                    </AvatarContentHeading>
                    <Adjustedscore>
                      Adjusted score: <Span> 72%</Span>
                    </Adjustedscore>
                    <Averagescore>
                      Average score: <Span> 789</Span>
                    </Averagescore>
                    <DescriptionContainer>
                      <DescriptionHeading>Description</DescriptionHeading>
                      <Info>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it
                      </Info>
                    </DescriptionContainer>
                  </CarContent>
                </Col>
              </Row>
            )}
          </PrintSection>
          <CriteriaSection isheight={pageIndex > 0}>
            <CriteriaHeading>Criteria</CriteriaHeading>
            <CriteriaContent>
              {Criteria.map((item, index) => (
                <Criteriadiv
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f1f1f1" : "#ffff",
                  }}
                >
                  <CriteriaName>
                    <Number>{calculateItemNumber(pageIndex, index)}</Number>
                    {item?.title}
                  </CriteriaName>
                  <CriteriaDescriptioncontent>
                    <MarketPrice>{item?.description}</MarketPrice>
                    <CriteriaCount>
                      <CriteriaNumber>{item?.score}</CriteriaNumber>
                    </CriteriaCount>
                  </CriteriaDescriptioncontent>
                </Criteriadiv>
              ))}
            </CriteriaContent>
          </CriteriaSection>
          <Footar>
            <FootarHeading>
              © Arootah Follow us @arootahcoach Visit arootah.com
            </FootarHeading>
          </Footar>
          <div style={{ pageBreakAfter: "always" }}></div>
        </MainContent>
      ))}
    </Wrapper>
  );
};

export default Summary;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainContent = styled.div`
  background-color: #fff;
  width: 877px;
  /* height: 1135px; */
  /* border: 1px solid red; */
  padding: 0 1.2rem;
`;

const PrintHeader = styled.div`
  padding: 0.5rem 0rem;
  border-bottom: 2px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Titlecontainer = styled.div`
  display: flex;
  align-items: center;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

const DecisionHeading = styled.h3`
  margin: 0;
  color: #4d91a6;
  font-size: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const DecisionInfo = styled.p`
  margin: 0;
  color: #83c5ca;
  font-size: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.2px;
`;

const CarchoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CarchoiceHeading = styled.h3`
  margin: 0;
  color: #1271a6;
  font-size: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const CarChoiceDate = styled.div`
  display: flex;
`;

const DealineHeading = styled.h3`
  margin: 0;
  color: #525252;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 4px;
`;

const DeadlineDate = styled.p`
  margin: 0;
  color: #3090f1;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PrintSection = styled.div`
  /* border: 1px solid green; */
  margin-top: 0.6rem;
`;

const AvatarContent = styled.div`
  /* border: 1px solid green; */
  width: 163px;
  height: 163px;
`;

const CarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  /* border: 1px solid red; */
`;

const AvatarContentHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AvatarHeading = styled.h3`
  margin: 0;
  color: #000;
  font-size: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const AvatarRank = styled.h3`
  color: #1271a6;
  font-size: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Adjustedscore = styled.h3`
  margin: 0;
  margin-top: 0.5rem;
  color: #525252;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Averagescore = styled.h3`
  margin: 0;
  margin-top: 0.2rem;
  color: #525252;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Span = styled.span`
  color: #3090f1;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline-block;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionHeading = styled.h3`
  color: #000;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  margin-top: 0.1rem;
`;

const Info = styled.p`
  margin: 0;
  color: #525252;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  max-width: 30rem;
`;

const CriteriaSection = styled.div`
 height:  ${({ isheight }) => isheight ? "1220px" : '1050px'};
`;

const CriteriaHeading = styled.h3`
  margin: 0;
  margin-top: 0.4rem;
  margin-bottom: 0.3rem;
  color: #000;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const CriteriaContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  column-gap: 0.6rem;
  max-height: 800px;
  height: 100%;
  width: 100%;

`;

const Criteriadiv = styled.div`
  height: 76px;
  /* padding: 0rem 0.7rem; */
  width: 50%;
 
`;

const Number = styled.span`
  color: #000;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  margin-right: 0.7rem;
  display: inline-block;
`;

const CriteriaName = styled.h3`
  margin: 0;
  margin-bottom: 0.35rem;
  margin-top: 0.25rem;
  color: #4b545b;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: 13.5px;
  display: flex;
  align-items: center;
  padding: 0 0.7rem;
`;

const CriteriaDescriptioncontent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.7rem;
`;

const MarketPrice = styled.h3`
  margin: 0;
  color: #4b545b;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
`;

const CriteriaCount = styled.div`
  width: 26px;
  height: 26px;
  background-color: #e3e3e3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CriteriaNumber = styled.span`
  color: #000;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: -0.98px;
  display: inline-block;
`;
const Footar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FootarHeading = styled.h3`
  color: #1271a6;
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
`;
