import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ image }) => {
  const links = [
    {
      title: "DASHBOARD",
      link: "/",
    },
    {
      title: "SEND MONEY",
      link: "/sendmoney",
    },
    {
      title: "NEWS",
      link: "/news",
    },
    {
      title: "ACCOUNT",
      link: "/account",
    },
  ];
  return (
    <div className="w-100 ms-0 me-0 navSet">
      <div className="d-flex w-100 justify-content-evenly bg-dark text-light">
        <div className="logo_wrapper">
          <img src={image} alt="Logo" className="logo" />
        </div>
        <div>
          <ul className="text-decoration-none list-unstyled d-flex m-0">
            {links.map((link) => {
              return (
                <li className="list-item list-unstyled ">
                  <NavLink
                    to={link.link}
                    activeclassname="active"
                    className="link"
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
            {/* <li className="list-item">
              <i className="">
                <Link to="/" className="link">
                  DASHBOARD
                </Link>
              </i>
            </li>
            <li className="list-item">
              <i className="">
                <Link to="/sendmoney" className="link">
                  SEND MONEY
                </Link>
              </i>
            </li>
            <li className="list-item">
              <i className="">
                <Link to="/news" className="link">
                  NEWS
                </Link>
              </i>
            </li>
            <li className="list-item">
              <i className="">
                <Link to="/account" className="link">
                  ACCOUNT
                </Link>
              </i>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
