import React from "react";
import { Helmet } from "react-helmet-async";
import RegForm from "../../elements/RegForm";
import "./Account.scss";

function Account() {
  return (
    <>
      <Helmet>
        <title>Account</title>
        <meta name="description" content="This is an account page" />
      </Helmet>

      <div className="d-flex justify-content-center account_wrapper">
        <RegForm />
      </div>
    </>
  );
}

export default Account;
