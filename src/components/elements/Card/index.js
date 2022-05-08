import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ link, image, title, description }) => {
  return (
    <div className="Crad_wrapper m-3">
      <div className="image_wrapper">
        <img src={image} alt="News_photo" />
      </div>
      <div className="Card_body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="button_wrapper">
          <Link to={link}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
