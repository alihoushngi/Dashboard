import React from "react";
import "./Wallet.scss";

const Wallet = ({ image, title, usd, balance }) => {
  return (
    <div className="">
      <div className="Wallet_wrapper d-flex">
        <div className="logo_wrapper">
          <img src={image} alt="crypto" />
        </div>
        <div className="d-flex flex-column card-wrapper">
          <h3>{title}</h3>
          <p>Balance: {balance}</p>
          <p className="mt-0">USD: {usd}</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
