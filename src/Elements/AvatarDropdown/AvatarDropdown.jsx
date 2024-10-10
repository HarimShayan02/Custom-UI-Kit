import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowDropDown } from "react-icons/md";

const AvatarDropdown = ({ iscountry, listItems, defaultPlaceholder }) => {
  // const listItems = [
  //   { id: 1, avatar: "/Assets/half moon.png" },
  //   { id: 2, avatar: "/Assets/sun.png" },
  //   { id: 3, avatar: "/Assets/Vector.png" },
  // ];

  const [isSeleted, setisSeleted] = useState(
    defaultPlaceholder ? defaultPlaceholder : "/Assets/half moon.png"
  );

  const [isShown, setIsShown] = useState(false);

  const handleClick = (item) => {
    const copy = [...listItems];
    const copyItems = copy?.find((data) => data.id === item.id);
    setisSeleted(copyItems.avatar);
    setIsShown(!isShown);
  };

  return (
    <>
      <Wrapper iscountry={iscountry}>
        <ButtonWrapper>
          <Imgcontent iscountry={iscountry}>
            {isSeleted && (
              <Logo src={isSeleted && isSeleted} alt="" iscountry={iscountry} />
            )}
          </Imgcontent>
          <DropdownBtn onClick={() => setIsShown(!isShown)}>
            <MdArrowDropDown
              style={{ fontSize: "1.6rem", paddingTop: "3px" }}
            />
          </DropdownBtn>
        </ButtonWrapper>
      </Wrapper>
      <Content>
        {isShown ? (
          <ListWrapper iscountry={iscountry}>
            {listItems?.map((item) => (
              <Button onClick={() => handleClick(item)}>
                <Image iscountry={iscountry} src={item.avatar} alt="image" />
              </Button>
            ))}
          </ListWrapper>
        ) : null}
      </Content>
    </>
  );
};

export default AvatarDropdown;

const Imgcontent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid green ; */
  width: ${({ iscountry }) => iscountry && "40%"};
`;

const Logo = styled.img`
  width: ${({ iscountry }) => iscountry && "75%"};
`;
const Wrapper = styled.div`
  background-color: ${({ theme, iscountry }) =>
    iscountry ? "transparent" : theme.backgroundLight};
  border-radius: 50px;
  padding: 0.15rem;
`;

const DropdownBtn = styled.button`
  /* border: 1px solid purple ; */
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  & svg {
    fill: ${({ theme }) => theme.textDark};
  }
`;
const ButtonWrapper = styled.div`
  /* border: 1px solid red ; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme, iscountry }) =>
    iscountry ? "transparent" : theme.backgroundLight};
  width: 60%;
  margin-top: ${({ iscountry }) => (iscountry ? "0.1rem" : "0.2rem")};
  border-radius: 25px;
  padding: ${({ iscountry }) => (iscountry ? "0.1rem" : "0.6rem")}; ;
`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  border-radius: ${({ iscountry }) => iscountry && "2rem"};
`;
const Image = styled.img`
  margin-bottom: 7px;
  /* border: 1px solid red ; */
  width: ${({ iscountry }) => iscountry && "60%"};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red ; */
`;
