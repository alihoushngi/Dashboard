import React from "react";
import "./TextInput.scss";

const TextInput = ({ value, lable, type, inputHandler, htmlFor, id, name }) => {
  return (
    <>
      <div className="Input_wrapper position-relative">
        <label
          htmlFor={htmlFor}
          className="text-light position-absolute fw-bold text-uppercase"
        >
          {lable}
        </label>
        <input
          type={type}
          className="ms-4 mt-1 mb-1 Input "
          value={value}
          onChange={inputHandler}
          id={id}
          name={name}
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default TextInput;
