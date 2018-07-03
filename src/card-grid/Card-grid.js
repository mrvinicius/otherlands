import React from "react";
import "./Card-grid.css";
import DestinationCard from "../destination-card/Destination-card";

const prop = (propName) => (obj) => obj[propName];
const compose = (a, b, c) => (data) => a(b(c(data)))
const Container = children => (<div className="Card-grid">{children}</div>);
const CardGrid = compose(
    Container,
    (destinations) => destinations.map(DestinationCard),
    prop('destinations')
);

export default CardGrid;