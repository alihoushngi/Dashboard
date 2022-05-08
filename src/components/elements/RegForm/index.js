import React from "react";
import TextInput from "../TextInput";
import { Form, Formik } from "formik";
import "./RegForm.scss";
import * as Yup from "yup";

const RegForm = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Name Required"),
    fname: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Family Required"),
    email: Yup.string()
      .email("invalid email address")
      .required("Email Required"),
    currentPassword: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Password Required"),
    nPassword: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("New Password Required"),
    rPassword: Yup.string()
      .oneOf([Yup.ref("nPassword"), null], "Password incorrect!")
      .required("Confirm Password is Required"),
  });
  console.log(validate);

  return (
    <Formik
      initialValues={{
        name: "",
        fname: "",
        email: "",
        currentPassword: "",
        nPassword: "",
        rPassword: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="form_wrapper d-flex flex-column align-items-center m-3 w-25 text-light">
          <Form onSubmit={formik.handleSubmit} className="d-flex flex-column">
            <TextInput
              htmlFor="name"
              lable="Name :"
              id="name"
              name="name"
              type="text"
              inputHandler={formik.handleChange}
              value={formik.values.name}
            />
            <TextInput
              htmlFor="fname"
              lable="Family :"
              id="fname"
              name="fname"
              type="text"
              inputHandler={formik.handleChange}
              value={formik.values.fname}
            />
            <TextInput
              htmlFor="email"
              lable="Email :"
              id="email"
              name="email"
              type="text"
              inputHandler={formik.handleChange}
              value={formik.values.email}
            />
            <TextInput
              htmlFor="password"
              lable="Password :"
              id="password"
              name="password"
              type="password"
              inputHandler={formik.handleChange}
              value={formik.values.password}
            />
            <TextInput
              htmlFor="nPassword"
              lable="New Password :"
              id="nPassword"
              name="nPassword"
              type="password"
              inputHandler={formik.handleChange}
              value={formik.values.nPassword}
            />
            <TextInput
              htmlFor="rPassword"
              lable="Repeat Password :"
              id="rPassword"
              name="rPassword"
              type="password"
              inputHandler={formik.handleChange}
              value={formik.values.rPassword}
            />
            <div className="buttonSection d-flex justify-content-center">
              <div className="button_container-2 ms-4 mt-3">
                <button type="submit" className="text-uppercase">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Reset
                </button>
              </div>
              <div className="button_wrapper ms-4 mt-3">
                <button type="submit" className="text-uppercase">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegForm;
