import * as Yup from "yup";



export const SigninSchemas = Yup.object({
  email: Yup.string().email().required("Incorrect email format."),
  password: Yup.string()
    .min(6, "Password must be atleast 6 digit")
    .required("Password must required"),
  phone :Yup.string().min(11,'Phone number must have 11 digits').required('Phone number required')
});

export const SignupSchemas = Yup.object({
  firstname:Yup.string().required('Required'),
  lastname:Yup.string().required('Required'),
  phone :Yup.string().min(11).required('Phone number required'),
  email: Yup.string().email().required("Incorrect email format."),
  password: Yup.string()
    .min(7, "Password must be atleast 6 digit")
    .required("Password must required"),
  repeat_password: Yup.string().required('Password must required')
    .oneOf([Yup.ref("password"), null], "Password do not match"),
});
