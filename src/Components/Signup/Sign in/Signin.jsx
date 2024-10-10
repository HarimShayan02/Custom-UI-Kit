import Button from "Elements/Button/Button";
import Input from "Elements/Input/Input";
import TabGroupButton from "Elements/TabsButton/TabsButton";
import styled from "styled-components";
import { useFormik } from "formik";
import { SigninSchemas } from "Schemas";
import { useState } from "react";

const Wrapper = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundDark};
  border-radius: 12px;

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const Heading = styled.h3`
  text-align: center;
  /* border: 1px solid red; */
  color: ${({ theme }) => theme.primary};
  font-family: inter-Light;
  font-size: 1.3rem;
  padding: 1rem;
`;
const Tabbtn = styled.div`
  /* border: 1px solid purple; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
`;
const Tabcontent = styled.div`
  width: 100%;
  padding: 1rem;
`;

const Form = styled.form``;

const InputField = styled.div`
  /* border: 1px solid green; */
  padding: 1.2rem;
`;
const InputWrapper = styled.div`
  margin-bottom: 0.9rem;
`;

const Buttonwrapper = styled.div`
  margin-top: 1.5rem;
`;
const Info = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textDark};
  font-family: inter-medium;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.06em;
  padding-top: 0.5rem;
`;
const Tag = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.sourcedBlue};
  font-weight: 600;
  font-family: Inter-thin;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
`;

const Span = styled.p`
  color: ${({ theme }) => theme.danger};
  margin: 0;
`;

const initialValues = {
  email: "",
  password: "",
  phone: "",
};

const Signin = ({ data, onClick, subTab, isActive }) => {
  const signInData = [
    {
      title: "Email",
      status: "Email",
    },
    {
      title: "Phone",
      status: "Phone",
    },
  ];
  const [filters, setFilters] = useState({
    tab: "Email",
  });

  const styleHandler = (selected) => {
    if (filters?.tab === selected) {
      return true;
    } else {
      return false;
    }
  };

  const { errors, values, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SigninSchemas,
      onSubmit: (values, action) => {},
    });

  return (
    <Wrapper>
      <Heading>Sign in</Heading>
      <Tabbtn>
        <Tabcontent>
          <TabGroupButton
            // subTab
            data={signInData}
            isActive={({ status }) => styleHandler(status)}
            onClick={({ status }) => {
              setFilters({
                ...filters,
                tab: status,
              });
            }}
          />
        </Tabcontent>
      </Tabbtn>
      {filters?.tab === "Email" ? (
        <Form onSubmit={handleSubmit}>
          <InputField>
            <InputWrapper>
              <Input
                Error={errors.email && touched.email}
                label={"Email"}
                type="email"
                placeholder={"Type here..."}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <Span>{errors.email}</Span>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <Input
                Error={errors.password && touched.password}
                label={"Password"}
                type="password"
                placeholder={"Choose one"}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <Span>{errors.password}</Span>
              ) : null}
            </InputWrapper>
            <Buttonwrapper>
              <Button isBorder type={"submit"}>
                Sign in
              </Button>
            </Buttonwrapper>
            <Info>
              Looking to <Tag href="#">Sign up?</Tag>{" "}
            </Info>
          </InputField>
        </Form>
      ) : (
        <Form onSubmit={handleSubmit}>
          <InputField>
            <InputWrapper>
              <Input
                Error={errors.phone && touched.phone}
                label={"Phone"}
                type="tel"
                placeholder={"Type here..."}
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone ? (
                <Span>{errors.phone}</Span>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <Input
                Error={errors.password && touched.password}
                label={"Password"}
                type="password"
                placeholder={"Choose one"}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <Span>{errors.password}</Span>
              ) : null}
            </InputWrapper>

            <Buttonwrapper>
              <Button isBorder type={"submit"}>
                Sign in
              </Button>
            </Buttonwrapper>

            <Info>
              Looking to <Tag href="#">Sign up?</Tag>{" "}
            </Info>
          </InputField>
        </Form>
      )}
    </Wrapper>
  );
};

export default Signin;
