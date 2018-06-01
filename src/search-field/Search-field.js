import React, { Component } from "react";
import "./Search-field.css";

class SearchField extends Component {
  render() {
    return (
      <div className="Search-field-wrapper">
        <input
          className="Search-field"
          placeholder="Where do you want to go?"
          type="search"
        />
      </div>
    );
  }
}

export default SearchField;
