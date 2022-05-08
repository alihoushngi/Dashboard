import React from "react";
import "./Coin.scss";

const Coin = ({ name, image, price }) => {
  return (
    <div className="Coin_wrapper d-flex">
      <div className="Logo_wrapper align-self-center">
        <img src={image} alt={name} />
      </div>
      <div className="CoinBody align-self-center">
        <span>{name}</span>
        <span>{price.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Coin;
