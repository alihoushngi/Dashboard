import React, { useState, useContext } from "react";
import { userContext } from "../../../context/UserContextProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./header.scss";
import SearchInput from "../SearchInput";
import QuikBtn from "../QuikBtn/QuikBtn";

const Header = () => {
  const { user, setUser } = useContext(userContext);
  const [input, setInput] = useState("");

  const handleInputChnage = (e) => {
    setInput(e.target.value);
  };
  const onChangeHandler = (e) => {
    if (e.target.checked) {
      setUser((prev) => {
        return { ...prev, status: "online" };
      });
    } else {
      setUser((prev) => {
        return { ...prev, status: "offline" };
      });
    }
  };
  return (
    <>
      <div className="bg-black d-flex justify-content-center ">
        <div className="container d-flex justify-content-around align-items-center flex-wrap row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="image_warpper d-flex">
              <img src={user.avatar} className="avatar" alt="avatar" />
              <div className=" flex-column ms-4 mt-4 ">
                <h3 className="">
                  {user.name}
                  {user.fname}
                </h3>
                <div className="switch">
                  <div className="switch__1">
                    <input
                      id="switch-1"
                      type="checkbox"
                      onChange={(e) => onChangeHandler(e)}
                    />
                    <label htmlFor="switch-1"></label>
                  </div>
                  <span
                    className="text-uppercase"
                    style={
                      user.status === "online"
                        ? { color: "#03e9f4" }
                        : { color: "#ff7702" }
                    }
                  >
                    {user.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 button_container">
            <QuikBtn route="/sendmoney" path="#" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="d-flex flex-row justify-content-center align-items-center right_side_header">
              <div className="icon_wrapper d-flex">
                <i>
                  <FontAwesomeIcon icon={faBell} className="text-light me-3" />
                </i>
                <i>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-light me-3"
                  />
                </i>
              </div>
              <div className="search_wrapper">
                <SearchInput value={input} onChange={handleInputChnage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
