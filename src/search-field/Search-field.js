import React from "react";
import "./Search-field.css";

const SearchField = () => (
  <div className="Search-field-wrapper">
    <input
      className="Search-field z-depth-4"
      placeholder="Where do you want to go?"
      type="search"
    />
  </div>
);

export default SearchField;
