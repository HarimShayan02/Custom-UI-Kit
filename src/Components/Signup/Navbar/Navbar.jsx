import AvatarDropdown from "Elements/AvatarDropdown/AvatarDropdown";
import Button from "Elements/Button/Button";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundDark};
  padding: 1rem 0rem;
  display: flex;
  height: 7vh;
`;
const ImgContainer = styled.div`
  /* border: 1px solid green ; */
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  width: 60%;
`;

const Menu = styled.ul`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Listitem = styled.li`
  list-style: none;
`;

const Tag = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textDark};
  font-family: inter-regular;
`;
const ButtonContainer = styled.div`
  /* border: 1px solid green ; */
  width: 32%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 0.5rem;
`;
const BtnContent = styled.div`
  /* border: 1px solid green ; */
  width: 25%;
`;
const DropdownContainer = styled.div`
  /* border: 1px solid green ; */
  width: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.3rem;
  position: relative;
`;
const AvatarContent = styled.div`
  width: 80%;
  position: absolute;
  top: 8px;
  z-index: 999;
`;

const Navbar = () => {
  const CountryItem = [
    { id: 1, avatar: "/Assets/pakistan.png" },
    { id: 2, avatar: "/Assets/saudi-arabia.png" },
    { id: 3, avatar: "/Assets/united-kingdom.png" },
    { id: 4, avatar: "/Assets/canada.png" },
    { id: 5, avatar: "/Assets/united-states.png" },
  ];

  const ThemeItem = [
    { id: 1, avatar: "/Assets/half moon.png" },
    { id: 2, avatar: "/Assets/sun.png" },
    { id: 3, avatar: "/Assets/Vector.png" },
  ];
  return (
    <Wrapper>
      <ImgContainer>
        <Logo src="/Assets/Group 10761.png" alt="" />
      </ImgContainer>

      <Menu>
        <Listitem>
          <Tag href="#">Home</Tag>
        </Listitem>
        <Listitem>
          <Tag href="#">Our Story</Tag>
        </Listitem>
        <Listitem>
          <Tag href="#">Contact us</Tag>
        </Listitem>
        <Listitem>
          <Tag href="#"> Career</Tag>
        </Listitem>
      </Menu>

      <ButtonContainer>
        <BtnContent>
          <Button isBorder>Sign up</Button>
        </BtnContent>
      </ButtonContainer>

      <DropdownContainer>
        <AvatarContent>
          <AvatarDropdown
            iscountry
            listItems={CountryItem}
            defaultPlaceholder={"/Assets/pakistan.png"}
          />
        </AvatarContent>
      </DropdownContainer>

      <DropdownContainer>
        <AvatarContent>
          <AvatarDropdown listItems={ThemeItem} />
        </AvatarContent>
      </DropdownContainer>
    </Wrapper>
  );
};

export default Navbar;
