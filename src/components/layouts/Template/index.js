import React from "react";
import Header from "../../elements/Header";
import Navbar from "../../elements/Navbar";
import logo from "../../../assets/image/logo.png";
import "./template.scss";

function Template({ children }) {
  return (
    <div className="site_setting">
      <header className="position-sticky top-0 w-100 Header_wrapper">
        <Navbar image={logo} />
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Template;
