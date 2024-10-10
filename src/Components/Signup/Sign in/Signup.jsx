import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import Input from "Elements/Input/Input";
import SearchInput from "Elements/SearchInput/SearchInput";
import Button from "Elements/Button/Button";
import { useFormik } from "formik";
import { SignupSchemas } from "Schemas";

const MainContainer = styled.div`
  width: 60%;
  background-color: ${({ theme }) => theme.backgroundDark};
  box-shadow: -1px 1px 5px 0px ${({ theme }) => theme.dark};
  border-radius: 10px;

  @media (max-width:520px){
    width: 100% ;

  }
`;
const Content = styled.div`

  padding: 1rem 2.5rem;

  @media (max-width:520px){
    padding: 1rem 0.7rem ;

  }
`;
const Heading = styled.h3`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  font-family: Inter-Light;
  font-size: 1.5rem;
  margin: 0;
  margin-top: 2rem;
`;
const InputWrapper = styled.div`
  display: ${({ isflex }) => (isflex ? "flex" : "null")};
  padding: 0.7rem;

  @media (max-width:520px){
    padding: 0.2rem ;

  }
`;
const Label = styled.label`
  font-family: "Inter-light";
  font-weight: 600;
  font-size: 0.7rem;
  line-height: 28px;
  color: ${({ theme }) => theme.textDark};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const BtnContent = styled.div`
  width: 40%;

 @media (max-width:520px){
    width: 90%;

  }
`;
const Info = styled.p`

 @media (max-width:520px){
    font-size: 13px ;

  }
 
  font-size: 14px;
  color: ${({ theme }) => theme.textLight};
`;
const Tag = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
`;

const Form = styled.form`
 
`;

const Span = styled.p`
  color: ${({ theme }) => theme.danger};
  margin: 0;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.textLight};
  margin-left: 0.3rem;

   @media (max-width:520px){
   font-size: 10px ;

  }
`;

const Checkbox = styled.input``;

const initialValues = {
  email: "",
  password: "",
  repeat_password: "",
  firstname:"",
  lastname:"",
  phone:"",
};

const Signup = () => {
  const { errors, values, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchemas,
      onSubmit: (values,action) => {
        action.resetForm()

      },
    });
  return (
    <MainContainer>
      <Heading>Sign up</Heading>
      <Content>
        <Form>
          <Row gutter={[10, 2]}>
            <Col lg={12} md={12} xs={24} >
              <InputWrapper>
                <Input
                  Error={errors.firstname && touched.firstname}
                  label={"First name"}
                  type="text"
                  name={"firstname"}
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={"Type here..."}
                />
                 {errors.firstname && touched.firstname ? (
                  <Span>{errors.firstname}</Span>
                ) : null}
              </InputWrapper>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <InputWrapper>
                <Input
                  Error={errors.lastname && touched.lastname}
                  label={"Last name"}
                  type="text"
                  name={"lastname"}
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={"Type here..."}
                />
                 {errors.lastname && touched.lastname ? (
                  <Span>{errors.lastname}</Span>
                ) : null}
              </InputWrapper>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <InputWrapper>
                <Input
                  Error={errors.phone && touched.phone}
                  label={"Enter Phone Number"}
                  type="tel"
                  name={"phone"}
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={"Enter your Number"}
                />
                 {errors.phone && touched.phone ? (
                  <Span>{errors.phone}</Span>
                ) : null}
              </InputWrapper>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <InputWrapper>
                <Label>Country</Label>
                <SearchInput placeholder={"Choose one"}
              
                />
              </InputWrapper>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <InputWrapper>
                <Input
                  Error={errors.phone && touched.phone}
                  label={"Phone Number"}
                  type="tel"
                  name={"phone"}
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={"Phone number"}
                />
                 {errors.phone && touched.phone ? (
                  <Span>{errors.phone}</Span>
                ) : null}
              </InputWrapper>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <InputWrapper>
                <Input
                  Error={errors.email && touched.email}
                  type={"email"}
                  label={"Email"}
                  name="email"
                  placeholder={"emailexample@gmail.com"}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <Span>{errors.email}</Span>
                ) : null}
              </InputWrapper>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <InputWrapper>
                <Input
                  Error={errors.password && touched.password}
                  label={"Password"}
                  type="password"
                  placeholder={"Password must be 8 character"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <Span>{errors.password}</Span>
                ) : null}
              </InputWrapper>
            </Col>
            <Col lg={12} md={12} xs={24}>
              <InputWrapper>
                <Input
                  Error={errors.repeat_password && touched.repeat_password}
                  label={"Repeat Password"}
                  type="password"
                  placeholder={"Password must be 8 character"}
                  name="repeat_password"
                  value={values.repeat_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.repeat_password && touched.repeat_password ? (
                  <Span>{errors.repeat_password}</Span>
                ) : null}
              </InputWrapper>
            </Col>
          </Row>

          <InputWrapper isflex={true}>
            <Checkbox type="checkbox" name="acceptedTos" />
            <Paragraph>
              I agree to the Terms of Service and Privacy Policy
            </Paragraph>
          </InputWrapper>
        </Form>
      </Content>
      <ButtonWrapper>
        <BtnContent>
          <Button isBorder onClick={handleSubmit}>
            Sign up
          </Button>
        </BtnContent>
        <Info>
          Already a member? <Tag href="#"> Sign in</Tag>
        </Info>
      </ButtonWrapper>
    </MainContainer>
  );
};

export default Signup;
