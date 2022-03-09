import React from "react";
import "./search-box.styles.css";

const SearchBox = function ({ placeholder, onChangeHandler, className }) {
  return (
    <input
      placeholder={placeholder}
      className={className}
      onChange={onChangeHandler}
    ></input>
  );
};

export default SearchBox;
