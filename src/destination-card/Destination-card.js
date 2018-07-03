import React from "react";
import "./Destination-card.css";

const DestinationCard = ({ id, imgUrl, title, description }) => (
    <div key={id} className="Destination-card z-depth-3">
        <h5>{title}</h5>
        <p>{description}</p>
    </div>
);

export default DestinationCard;
