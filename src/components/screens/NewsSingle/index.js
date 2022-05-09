import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../../elements/Loader";
import { shorten } from "../../../helpers";
import "./NewsSingle.scss";

const NewsSingle = () => {
  const [newsSingle, setNewsSingle] = useState([]);
  const location = useLocation().pathname;
  const pageID = location.split("/")[2];
  // document.title = tshorten(newsSingle.title);

  useEffect(() => {
    axios
      .get(`https://api.freerealapi.com/blogs/${pageID}`)
      .then((res) => setNewsSingle(res.data.blog));
  }, []);

  return (
    <div className="text-light page_wrapper">
      {newsSingle.length === 0 ? (
        <h2>
          <Loader />
        </h2>
      ) : (
        <div className="d-flex single_wrapper">
          <div className="w-50 text-center image_wrapper">
            <img src={newsSingle.image} alt="blog" className="image w-75 m-4" />
          </div>
          <div className="w-50 p-4 m-4 description_wrapper">
            <h3 className="fs-3">{shorten(newsSingle.title)}</h3>
            <p>{newsSingle.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSingle;
