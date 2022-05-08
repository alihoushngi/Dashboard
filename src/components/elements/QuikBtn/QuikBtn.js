import React from "react";
import { Link } from "react-router-dom";
import "./QuikBtn.scss";

const QuikBtn = ({ route, path, type, text, className }) => {
  return (
    <div className="button_wrapper">
      <Link to={route} href={path} className={className}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button className="text-uppercase" type={type}>
          {text}
        </button>
      </Link>
    </div>
  );
};

export default QuikBtn;
