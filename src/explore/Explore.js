import React from "react";
import SearchField from "../search-field/Search-field";
import CardGrid from "../card-grid/Card-grid";

const Explore = ({ destinations }) => (
  <section>
    <SearchField onInput={handleSearchChange} />
    <CardGrid destinations={destinations} />
  </section>
);

function handleSearchChange(e) {
  console.log(e);
}

export default Explore;
