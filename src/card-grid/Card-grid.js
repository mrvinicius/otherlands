import React from "react";
import "./Card-grid.css";
import DestinationCardContainer from "../destination-card/Destination-card.container";

const pair = (prevFn, fn) => (...args) => fn(prevFn(...args));
const compose = (...fns) => fns.reduceRight(pair);
const prop = propName => obj => obj[propName];

const Container = children => (
  <div className="Card-grid">
    {children}
    <span className="end-space" />
  </div>
);
const CardGrid = compose(
  Container,
  destinations => destinations.map(DestinationCardContainer),
  prop("destinations")
);

export default CardGrid;
