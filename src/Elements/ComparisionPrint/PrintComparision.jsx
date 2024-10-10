import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Car1 } from "./car1.svg";
import { ReactComponent as Car2 } from "./car2.svg";
import { ReactComponent as OptionComparision } from "./weight.svg";
import { Col, Row } from "antd";

const Comparision = () => {
  const array = Array.from(
    { length: 35 },
    (_, index) => `Element ${index + 1}`
  );

  const splitArrayIntoPages = (array) => {
    if (array.length <= 10) {
      // Base case: Array length is less than or equal to 10, return the array as a single page
      return [array];
    } else {
      // Recursive case: Split the array into two parts and recursively split the remaining part
      const firstPage = array.slice(0, 10);
      const remainingPages = splitArrayIntoPages(array.slice(10));
      return [firstPage, ...remainingPages];
    }
  };

  const pages = splitArrayIntoPages(array);

  console.log(pages, "harim");

  return (
    <Wrapper>
      {pages.map((page, pageIndex) => (
        
        <MainContent key={pageIndex}>
          <PrintHeader>
            <Titlecontainer>
              <Logo />
            </Titlecontainer>
            <CarchoiceContainer>
              <CarchoiceHeading>Which Fund Manager to Choose?</CarchoiceHeading>
              <CarChoiceDate>
                <DealineHeading>Deadline:</DealineHeading>
                <DeadlineDate>10/17/2023</DeadlineDate>
              </CarChoiceDate>
            </CarchoiceContainer>
          </PrintHeader>

          <PrintSection>
            <ComparisionHeading>
              <OptionComparision />
              Option Comparision
            </ComparisionHeading>
            {pageIndex === 0 && (
              <Row gutter={[8, 0]}>
                <Col>
                  <AvatarContent>
                    <Car1 />
                  </AvatarContent>
                </Col>
                <Col span={8}>
                  <CarContent>
                    <AvatarContentHeading>
                      <AvatarHeading>Mitsubishi Pajero Sport</AvatarHeading>
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
                        dummy text ever hello to you
                      </Info>
                    </DescriptionContainer>
                  </CarContent>
                </Col>
                <Col>
                  <AvatarContent>
                    <Car2 />
                  </AvatarContent>
                </Col>
                <Col span={8}>
                  <CarContent>
                    <AvatarContentHeading>
                      <AvatarHeading>Toyota 4Runner GR</AvatarHeading>
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
                        dummy text ever hello to you
                      </Info>
                    </DescriptionContainer>
                  </CarContent>
                </Col>
              </Row>
            )}
          </PrintSection>

          <CriteriaSection isheight={pageIndex > 0}>
            <CriteriaHeading>
              Criteria {pageIndex * 10 + 1}-{pageIndex * 10 + 10}
            </CriteriaHeading>
            <CriteriaContent>
              {page.map((item, index) => (
                <Row gutter={[5, 0]}>
                  <Col span={12}>
                    <Criteriadiv
                      style={{
                        backgroundColor: index % 2 === 0 ? "#f1f1f1" : "#ffff",
                      }}
                    >
                      <CriteriaName>
                        <Number>{pageIndex * 10 + index + 1}</Number>
                        Criteria name
                      </CriteriaName>
                      <CriteriaDescriptioncontent>
                        <MarketPrice>
                          Market price $45.360Market price $45.360Market price
                          $45.360
                        </MarketPrice>
                        <CriteriaCount>
                          <CriteriaNumber>10</CriteriaNumber>
                        </CriteriaCount>
                      </CriteriaDescriptioncontent>
                    </Criteriadiv>
                  </Col>
                  <Col span={12}>
                    <Criteriadiv
                      style={{
                        backgroundColor: index % 2 === 0 ? "#f1f1f1" : "#ffff",
                      }}
                    >
                      <CriteriaName>
                        <Number>{pageIndex * 10 + index + 1}</Number>
                        Criteria name
                      </CriteriaName>
                      <CriteriaDescriptioncontent>
                        <MarketPrice>
                          Market price $45.360Market price $45.360Market price
                          $45.360
                        </MarketPrice>
                        <CriteriaCount>
                          <CriteriaNumber>10</CriteriaNumber>
                        </CriteriaCount>
                      </CriteriaDescriptioncontent>
                    </Criteriadiv>
                  </Col>
                </Row>
              ))}
            </CriteriaContent>
            <Pagebreak >
              <Pages>
                Page {pageIndex + 1} of {pages.length}
              </Pages>
            </Pagebreak>
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

export default Comparision;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /*  */
  /* padding: 0 1.2rem; */
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
  margin-top: 0.1rem;
`;
const ComparisionHeading = styled.h3`
  margin: 0;
  color: #1271a6;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  align-items: center;
  padding: 3px 0px 7px 0px;
`;

const AvatarContent = styled.div``;

const CarContent = styled.div`
  display: flex;
  flex-direction: column;

  /* border: 1px solid red; */
`;

const AvatarContentHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AvatarHeading = styled.h3`
  margin: 0;
  color: #000;
  font-family: Inter;
  font-size: 18.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;



const Adjustedscore = styled.h3`
  margin: 0;
  margin-top: 0.2rem;
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
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  margin-top: 0.1rem;
`;

const Info = styled.p`
  margin: 0;
  color: #525252;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  max-width: 17rem;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const CriteriaSection = styled.div`
  width: 100%;
  height:  ${({ isheight }) => isheight ? "1070px" : '930px'};
  position: relative;
  margin-top: 8px;
`;

const CriteriaHeading = styled.h3`
  margin: 0;
  margin-top: 0.15rem;
  color: #000;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const CriteriaContent = styled.div`
border: 1px solid red;

  /* width: 100%;
  height: 100%; */
`;

const Pagebreak = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 7px 0;
  position:  absolute;
  bottom:  0;
`;
const Pages = styled.h3`
  margin: 0;
  color: #525252;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const Criteriadiv = styled.div`
  height: 76px;
  padding: 0rem 0.7rem;
  /* border: 1px solid yellow; */
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
`;

const CriteriaDescriptioncontent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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
  border-top: 2px solid #d9d9d9;
`;
const FootarHeading = styled.h3`
  color: #1271a6;
  font-size: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  margin: 9px;
`;

