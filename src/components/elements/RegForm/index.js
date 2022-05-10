import React, { useContext } from "react";
import { Field, Form, Formik } from "formik";
import "./RegForm.scss";
import * as Yup from "yup";
import { userContext } from "../../../context/UserContextProvider";
import { Toastify } from "../Toastify";
import Select from "react-select";

const RegForm = () => {
  // gerfetan pass az context
  const { user, setUser } = useContext(userContext);
  const pass = user.password;
  // neveshtan func handleSubmit va pas dadan parametr az formik b in func va grftnsh dar in func
  const handleSubmit = (e, values) => {
    e.preventDefault();
    // uodate context if pass in line 7 ==== currentPassword else tostify incorrect password
    if (pass === values.currentPassword) {
      if (values.name !== "") {
        setUser((prev) => ({
          ...prev,
          name: values.name,
        }));
      }
      if (values.fname !== "") {
        setUser((prev) => ({
          ...prev,
          fname: values.fname,
        }));
      }

      if (values.email !== "") {
        setUser((prev) => ({
          ...prev,
          email: values.email,
        }));
      }
      if (values.nPassword !== "" && values.rPassword !== "") {
        if (values.nPassword === values.rPassword) {
          setUser((prev) => ({
            ...prev,
            password: values.rPassword,
          }));
        }
      }
    } else {
      Toastify("error", "Incurrect Password");
    }
  };
  //   setUser({
  //     ...user,
  //     name: values.name,
  //     fname: values.fname,
  //     email: values.email,
  //     password: values.rPassword,
  //   });
  // } else {
  //   console.log("error");
  // }
  const validate = Yup.object({
    name: Yup.string().max(15, "Must be 15 characters or less"),
    fname: Yup.string().max(20, "Must be 20 characters or less"),
    email: Yup.string().email("invalid email address"),
    currentPassword: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .required("Password Required"),
    nPassword: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    rPassword: Yup.string().oneOf(
      [Yup.ref("nPassword"), null],
      "Password incorrect!"
    ),
  });

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
      {({ errors, handleChange, values, touched, resetForm }) => (
        <>
          <div className="form_wrapper d-flex flex-column align-items-center m-3 text-light  position-relative info ">
            <img src={user.avatar} alt="avatar" className="info_image mb-3" />
            <p>
              Your Name: <span>{user.name}</span>
            </p>
            <p>
              Your Family: <span>{user.fname}</span>
            </p>
            <p>
              Your email: <span>{user.email}</span>
            </p>
          </div>
          <div className="form_wrapper d-flex flex-column align-items-center m-3  text-light Input_wrapper position-relative">
            <h5 className="text-decoration-underline">
              if your Data is incorrect , You can change in this Form 👇😎
            </h5>
            <Form
              onSubmit={(e) => handleSubmit(e, values)}
              className="d-flex flex-column w-75 align-items-center"
            >
              <div className="form-countainer">
                <label htmlFor="name" className="text-light text-uppercase">
                  Name
                </label>
                <Field
                  // htmlFor="name"
                  // lable="Name :"
                  id="name"
                  name="name"
                  type="text"
                  className=" mt-1 mb-1 Input "
                  autoComplete="off"

                  // inputHandler={handleChange}
                  // value={values.name}
                />
                {errors.name && touched.name && (
                  <span className="erorrr">{errors.name}</span>
                )}
              </div>
              <div className="form-countainer">
                <label htmlFor="fname" className="text-light text-uppercase">
                  Family
                </label>
                <Field
                  // htmlFor="fname"
                  // lable="Family :"
                  id="fname"
                  name="fname"
                  type="text"
                  className=" mt-1 mb-1 Input "
                  autoComplete="off"

                  // inputHandler={handleChange}
                  // value={values.fname}
                />
                {errors.fname && touched.fname && (
                  <span className="erorrr">{errors.fname}</span>
                )}
              </div>

              <div className="form-countainer">
                <label htmlFor="email" className="text-light  text-uppercase">
                  Email
                </label>
                <Field
                  // htmlFor="email"
                  // lable="Email :"
                  id="email"
                  name="email"
                  type="text"
                  className=" mt-1 mb-1 Input "
                  autoComplete="off"

                  // inputHandler={handleChange}
                  // value={values.email}
                />
                {errors.email && touched.email && (
                  <span className="erorrr">{errors.email}</span>
                )}
              </div>

              <div className="form-countainer">
                <label
                  htmlFor="password"
                  className="text-light  text-uppercase"
                >
                  Password
                </label>
                <Field
                  // htmlFor="password"
                  // lable="Password :"
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  className=" mt-1 mb-1 Input "
                  autoComplete="off"

                  // inputHandler={handleChange}
                  // value={values.password}
                />
                {errors.currentPassword && touched.currentPassword && (
                  <span className="erorrr">{errors.currentPassword}</span>
                )}
              </div>

              <div className="form-countainer">
                <label
                  htmlFor="nPassword"
                  className="text-light  text-uppercase"
                >
                  New Password
                </label>
                <Field
                  // htmlFor="nPassword"
                  // lable="New Password :"
                  id="nPassword"
                  name="nPassword"
                  type="password"
                  className=" mt-1 mb-1 Input "
                  autoComplete="off"

                  // inputHandler={handleChange}
                  // value={values.nPassword}
                />
                {errors.nPassword && touched.nPassword && (
                  <span className="erorrr">{errors.nPassword}</span>
                )}
              </div>

              <div className="form-countainer">
                <label
                  htmlFor="rPassword"
                  className="text-light  text-uppercase"
                >
                  Repeat Password
                </label>
                <Field
                  // htmlFor="rPassword"
                  // lable="Repeat Password :"
                  id="rPassword"
                  name="rPassword"
                  type="password"
                  className=" mt-1 mb-1 Input "
                  autoComplete="off"

                  // inputHandler={handleChange}
                  // value={values.rPassword}
                />
                {errors.rPassword && touched.rPassword && (
                  <span className="erorrr">{errors.rPassword}</span>
                )}
              </div>

              <div className="buttonSection d-flex justify-content-center">
                <div className="button_container-2  mt-3">
                  <button
                    type="reset"
                    className="text-uppercase"
                    onClick={() => resetForm()}
                  >
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
        </>
      )}
    </Formik>
  );
};

export default RegForm;
