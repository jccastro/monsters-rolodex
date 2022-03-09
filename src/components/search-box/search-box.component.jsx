import React from "react";
import "./search-box.styles.css";

const SearchBox = function (props) {
  const { placeholder, onChange, className } = props;
  return (
    <input
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    ></input>
  );
};

export default SearchBox;
