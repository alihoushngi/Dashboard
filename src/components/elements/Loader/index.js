import React from "react";
import spinner from "../../../assets/image/spinner.gif";

const Loader = () => {
  return (
    <div>
      <img src={spinner} alt="loading" />
      <h1>loading ...</h1>
    </div>
  );
};

export default Loader;
