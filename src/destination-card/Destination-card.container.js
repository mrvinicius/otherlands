import React from "react";
import DestinationCard from "./Destination-card";

const DestinationCardContainer = destination => (
  <DestinationCard
    key={destination.id}
    {...destination}
    onClick={getClickHandler(destination.id)}
  />
);

// TODO: state management integration, action trigger access
const updateHistory = id => {
  window.history.pushState({}, "", `/explore/destination/${id}`);
};

const getClickHandler = id => {
  return e => {
    updateHistory(id);
    // console.log(e);
  };
};

export default DestinationCardContainer;
