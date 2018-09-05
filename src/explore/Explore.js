import React from "react";
// import { Route } from "react-router-dom";
import SearchField from "../search-field/Search-field";
import CardGrid from "../card-grid/Card-grid";
import "./Explore.css";

// import DestinationDetails from "../destination-details/Destination-details";

const Explore = ({ destinations }) => (
  <div>
    <SearchField onInput={handleSearchChange} />
    <section className="Destination-results">
      <header className="generic-header white-text">
        <h1 className="section-title">Destinations</h1>
        <i className="material-icons">filter_list</i>
      </header>
      <CardGrid destinations={destinations} />
    </section>
    {/* <Route path="/explore/destination/:id" component={DestinationDetails} /> */}
  </div>
);

function handleSearchChange(e) {
  console.log(e);
}

export default Explore;
