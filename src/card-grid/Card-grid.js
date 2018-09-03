import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./Card-grid.css";
import DestinationCardContainer from "../destination-card/Destination-card.container";

const pair = (prevFn, fn) => (...args) => fn(prevFn(...args));
const compose = (...fns) => fns.reduceRight(pair);
const prop = propName => obj => obj[propName];

const Container = children => (
  // <div className="Card-grid">
  //   {children}
  //   {/* <span className="end-space" /> */}
  // </div>
  <SimpleBar
    data-simplebar-auto-hide={false}
    style={{ height: "calc(100% - 49px)" }}
  >
    {children.map(child => (
      <div className="grid-card-wrapper">{child}</div>
    ))}
    <span className="end-space" />
  </SimpleBar>
);
const CardGrid = compose(
  Container,
  destinations => destinations.map(DestinationCardContainer),
  prop("destinations")
);

export default CardGrid;
