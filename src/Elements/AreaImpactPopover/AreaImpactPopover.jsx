import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as Lock } from "./LockIcon.svg";
import { Checkbox } from "antd";


const AreaImpactPopup = () => {
  const plainOptions = [
    {
      label: "Health",
      value: "Health",
      disabled: true,
    },
    {
      label: "Leisure",
      value: "Leisure",
    },
    {
      label: "Family",
      value: "Family",
    },
    {
      label: "Finance",
      value: "Finance",
    },
    {
      label: "Partner",
      value: "Partner",
    },
    {
      label: "Habbit",
      value: "Habbit",
    },
    {
      label: "Action",
      value: "Action",
    },

    {
      label: "Growth",
      value: "Growth",
    },
    {
      label: "Environment",
      value: "Environment",
    },
    {
      label: "Career",
      value: "Career",
    },
    {
      label: "Contribution",
      value: "Contribution",
    },
  ];

  return (
    <Wrapper>
      <Content>
        <Header>
          <AreasHeading>
            <Heading>AREAS IMPACT</Heading>
          </AreasHeading>
        </Header>

        <MainWrapper>
          {plainOptions?.map((item) => (
            <Container disabled={item?.disabled}>
              <Checkbox
                className="select_all_checkbox"
                disabled={item?.disabled}
              >
                <SelectHeading>{item?.label}</SelectHeading>
              </Checkbox>
              {item?.disabled ? (
                <div style={{ marginRight: "0.5rem" }}>
                  <Lock />
                </div>
              ) : (
                ""
              )}
            </Container>
          ))}
        </MainWrapper>
      </Content>
    </Wrapper>
  );
};

export default AreaImpactPopup;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 215px;
  min-height: 433px;
  max-height: 100%;
  /* height: 100%; */
  background: #0f2338;
  border: 1px solid #24384d;
  box-shadow: 0px 2px 10px rgba(10, 15, 28, 0.4);
  padding: 0.15rem;
`;

const Header = styled.div`
  border-bottom: 1px solid #6d7f8e;
  padding: 0.35rem 0;
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  margin: 0;
  margin-left: 4px;
  text-transform: uppercase;
`;

const AreasHeading = styled.div`
  display: flex;
  align-items: center;
`;

const MainWrapper = styled.div`
  width: auto;
  background: #0f2338;
  box-shadow: 0px 2px 10px rgba(10, 15, 28, 0.4);
  padding: 0 0.05rem;
`;

const Container = styled.div`
  margin-top: 0.2rem;
  width: auto;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.6rem;
  background-color: ${({ disabled }) => (disabled ? "#04192E" : "transparent")};
`;

const SelectHeading = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  margin-left: 0.45rem;
`;
