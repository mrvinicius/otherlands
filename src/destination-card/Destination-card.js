import React from "react";
import "./Destination-card.css";

const DestinationCard = ({ id, imgUrl, title, description }) => (
  <div key={id} className="Destination-card z-depth-3">
    <img src={imgUrl} alt="" className="card-img" />
    <div className="card-text-container">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  </div>
);

export default DestinationCard;
