import React, { useContext } from "react";
import { Field, Form, Formik } from "formik";
import "./RegForm.scss";
import * as Yup from "yup";
import { userContext } from "../../../context/UserContextProvider";
import { Toastify } from "../Toastify";

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
      if (values.password !== "") {
        setUser((prev) => ({
          ...prev,
          password: values.currentPassword,
        }));
      }
      if (values.email !== "") {
        setUser((prev) => ({
          ...prev,
          email: values.email,
        }));
      }
      if (values.nPassword === values.rPassword) {
        setUser((prev) => ({
          ...prev,
          password: values.rPassword,
        }));
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
        <div className="form_wrapper d-flex flex-column align-items-center m-3 w-25 text-light Input_wrapper position-relative">
          <Form
            onSubmit={(e) => handleSubmit(e, values)}
            className="d-flex flex-column"
          >
            <div>
              <label
                htmlFor="name"
                className="text-light position-absolute fw-bold text-uppercase"
              >
                Name
              </label>
              <Field
                // htmlFor="name"
                // lable="Name :"
                id="name"
                name="name"
                type="text"
                className="ms-4 mt-1 mb-1 Input "
                // inputHandler={handleChange}
                // value={values.name}
              />
            </div>
            {errors.name && touched.name && <span>{errors.name}</span>}
            <div>
              <label
                htmlFor="fname"
                className="text-light position-absolute fw-bold text-uppercase"
              >
                Family
              </label>
              <Field
                // htmlFor="fname"
                // lable="Family :"
                id="fname"
                name="fname"
                type="text"
                className="ms-4 mt-1 mb-1 Input "

                // inputHandler={handleChange}
                // value={values.fname}
              />
            </div>
            {errors.fname && touched.fname && <span>{errors.fname}</span>}

            <div>
              <label
                htmlFor="email"
                className="text-light position-absolute fw-bold text-uppercase"
              >
                Email
              </label>
              <Field
                // htmlFor="email"
                // lable="Email :"
                id="email"
                name="email"
                type="text"
                className="ms-4 mt-1 mb-1 Input "

                // inputHandler={handleChange}
                // value={values.email}
              />
            </div>
            {errors.email && touched.email && <span>{errors.email}</span>}

            <div>
              <label
                htmlFor="password"
                className="text-light position-absolute fw-bold text-uppercase"
              >
                Password
              </label>
              <Field
                // htmlFor="password"
                // lable="Password :"
                id="currentPassword"
                name="currentPassword"
                type="password"
                className="ms-4 mt-1 mb-1 Input "

                // inputHandler={handleChange}
                // value={values.password}
              />
            </div>
            {errors.currentPassword && touched.currentPassword && (
              <span>{errors.currentPassword}</span>
            )}

            <div>
              <label
                htmlFor="nPassword"
                className="text-light position-absolute fw-bold text-uppercase"
              >
                New Password
              </label>
              <Field
                // htmlFor="nPassword"
                // lable="New Password :"
                id="nPassword"
                name="nPassword"
                type="password"
                className="ms-4 mt-1 mb-1 Input "

                // inputHandler={handleChange}
                // value={values.nPassword}
              />
            </div>
            {errors.nPassword && touched.nPassword && (
              <span>{errors.nPassword}</span>
            )}

            <div>
              <label
                htmlFor="rPassword"
                className="text-light position-absolute fw-bold text-uppercase"
              >
                Repeat Password
              </label>
              <Field
                // htmlFor="rPassword"
                // lable="Repeat Password :"
                id="rPassword"
                name="rPassword"
                type="password"
                className="ms-4 mt-1 mb-1 Input "

                // inputHandler={handleChange}
                // value={values.rPassword}
              />
            </div>
            {errors.rPassword && touched.rPassword && (
              <span>{errors.rPassword}</span>
            )}

            <div className="buttonSection d-flex justify-content-center">
              <div className="button_container-2 ms-4 mt-3">
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
      )}
    </Formik>
  );
};

export default RegForm;
