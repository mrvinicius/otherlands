import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./Card-grid.css";
import DestinationCardsContainer from "../destination-card/Destination-card.container";

// const prop = propName => obj => obj[propName];
const pair = (prevFn, fn) => (...args) => fn(prevFn(...args));
const compose = (...fns) => fns.reduceRight(pair);

const CardGrid = compose(
  CustomScrollbarWrapper,
  DestinationCardsContainer
);

function CustomScrollbarWrapper(cardsContainer) {
  return (
    <SimpleBar
      data-simplebar-auto-hide={false}
      style={{ height: "calc(100% - 49px)" }}
    >
      {cardsContainer}
      <span className="end-space" />
    </SimpleBar>
  );
}

export default CardGrid;
