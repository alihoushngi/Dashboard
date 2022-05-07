import React from "react";
import { Link } from "react-router-dom";
import "./QuikBtn.scss";

const QuikBtn = ({ route, path, type }) => {
  return (
    <div className="button_wrapper">
      <Link to={route} href={path} className="m-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button className="text-uppercase" type={type}>
          quick transition
        </button>
      </Link>
    </div>
  );
};

export default QuikBtn;
