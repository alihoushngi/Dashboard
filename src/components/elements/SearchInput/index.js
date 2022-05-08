import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./input.scss";

const SearchInput = ({ value, onChange }) => {
  return (
    <>
      <div className="search_wrapper">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
        <i className="search_icon">
          <FontAwesomeIcon icon={faSearch} className="" />
        </i>
      </div>
    </>
  );
};

export default SearchInput;
