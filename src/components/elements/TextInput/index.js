import React from "react";
import "./TextInput.scss";

const TextInput = ({ value, lable, type, inputHandler }) => {
  return (
    <>
      <div className="Input_wrapper position-relative">
        <label className="text-light position-absolute">{lable}</label>
        <input
          type={type}
          className="m-4 Input"
          value={value}
          onChange={inputHandler}
        />
      </div>
    </>
  );
};

export default TextInput;
