import React from "react";
import "./Destination-details.css";

const DestinationDetails = ({ title, description }) => (
  <div className="Destination-details content-container-dimensions">
    <h1>{title}</h1>
    <p>{description}</p>
    <section>
      <h2>Discover stories</h2>
    </section>
  </div>
);

export default DestinationDetails;
