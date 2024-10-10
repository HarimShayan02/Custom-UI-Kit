import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import PhoneInputWithCountry from "react-phone-number-input";

const Input = ({
  type,
  label,
  placeholder,
  onChange,
  value,
  disabled,
  Error,
  name,
  isLeft,
  isRight,
  ...rest
}) => {
  const [isShow, setIsShow] = useState(type);
  const [isCheck, setIsCheck] = useState(false);
  console.log(type);
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}

      {type === "tel" && (
        <>
          <PhoneNumberInput
            placeholder={placeholder}
            isRight={isRight}
            disabled={disabled}
            type={type}
            name={name}
            value={value}
            Error={Error}
            onChange={() => onChange}
          />
        </>
      )}
      {type === "password" && (
        <InputWrapper Error={Error}>
          <CustomInput
            type={isShow}
            placeholder={placeholder}
            Error={Error}
            onChange={onChange}
            value={value}
            disabled={disabled}
            name={name}
            {...rest}
          />
          <EyeWrap>
            {isShow === "password" ? (
              <>
                <AiOutlineEyeInvisible
                  onClick={() => setIsShow("text")}
                  size={22}
                />
              </>
            ) : (
              <>
                <AiOutlineEye size={22} onClick={() => setIsShow("password")} />
              </>
            )}
          </EyeWrap>
        </InputWrapper>
      )}

      {(type === "text" || type === "email" || type === "number") && (
        <InputWrapper Error={Error}>
          <CustomInput
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            Error={Error}
            disabled={disabled}
            {...rest}
          />
        </InputWrapper>
      )}
      {/* {Error && <ErrorMessage>{Error}</ErrorMessage>} */}
    </Wrapper>
  );
};
export default Input;

const Wrapper = styled.div`
  width: 100%;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right:${({type}) => type === "tel" && "password" ? "0.5rem" : '0'} ;
  color: ${({ theme }) => theme.textDark};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.textDark};
  border-radius: 4px;
  border: 1px solid
    ${({ Error, theme }) => (Error ? theme.danger : theme.textDark)};
`;
const Label = styled.label`
  font-family: "Inter-light";
  font-weight: 600;
  font-size: 0.7rem;
  line-height: 28px;
  color: ${({ theme }) => theme.textDark};
`;
const CustomInput = styled.input`
  width: 100%;
  border: none;
  font-size: 1rem;
  padding: 0.59rem;
  /* height: 2.42rem ; */
  background: transparent;
  color: ${({ theme, Error }) => (Error ? theme.danger : theme.textDark)};
  text-overflow: ellipsis;
    white-space: nowrap ;
    overflow: hidden ;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme, Error }) => (Error ? theme.danger : theme.textDark)};
    font-size: 0.85rem ;
    padding-left: 0.25rem ;
    font-family: inter-Light ;
    
  }
`;
const CustomInputLabel = styled.label``;
const EyeWrap = styled.div`
  padding-right: 0.35rem;
  transform: translateY(3px);
`
const ErrorMessage = styled.p`
  font-size: 1rem;
  margin-top: 0rem;
  color: ${({ theme }) => theme.danger};
  font-family: "Inter-Light";
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
`;
const PhoneNumberInput = styled(PhoneInputWithCountry)`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${({ isRight }) => isRight && "row-reverse"};
  align-items: center;
  color: ${({ theme }) => theme.textDark};
  width: 100%;
  ${({ Error, theme }) => (Error ? theme.danger : theme.textDark)};
  border: 1px solid ${({ theme, Error }) => (Error ? theme.danger : theme.textDark)};
  border-radius: 4px;
  height: 2.387rem;

 
  .PhoneInputInput {
    width: 100%;
    border: none;
    font-size: 0.85rem;
    background: transparent;
    color: ${({ theme, Error }) => (Error ? theme.danger : theme.textDark)};
    outline: none;
    text-overflow: ellipsis;
    white-space: nowrap ;
    overflow: hidden ;
    
  }
 
  .PhoneInputCountry {
    .PhoneInputCountryIcon {
      padding: 0.7rem 0.3rem 0.5rem 0.6rem;
      .PhoneInputCountryIconImg {
        width: 1.5rem !important;
        height: 1.5rem !important;
        color: ${({ theme, Error }) => (Error ? theme.danger : theme.textDark)};
      }
    }
  }
  .PhoneInputCountrySelect {
    display: none;
    &.PhoneInputCountryIcon {
      font-size: 1rem;
    }
  }
`;
