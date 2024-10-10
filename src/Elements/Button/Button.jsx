import React from "react";
import styled from "styled-components";

const Button = ({ children, isRound, isBorder, onClick, disabled, type}) => {
    return (
        <ButtonWrapper
            isRound={isRound}
            isBorder={isBorder}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </ButtonWrapper>
    );
};

export default Button;

const ButtonWrapper = styled.button`
  width: ${({ isRound, isBorder }) =>
        (isRound && "100%") || (isBorder && "100%")};
  height: ${({ isRound }) => isRound && "100%"};
  color: ${({theme}) =>  theme.textDark};
  background-color: ${({ disabled }) => (disabled ? "#494E60" : "#2C9BF6")};
  border-radius: ${({ isRound, isBorder }) =>
        (isRound && "50%") || (isBorder && "8px")};
  border: none;
  outline: none;
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
  padding: ${({ isBorder }) => isBorder && "0.8rem"};
  opacity: ${({ disabled }) => disabled && "0.5"};
  font-size: 0.8rem;
  font-weight: 600;
`;