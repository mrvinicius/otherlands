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
  let isOpen = false,
    lastTopDistance,
    listener;

  return event => {
    const card = event.currentTarget,
      finalizeClosing = e => {
        if (e.propertyName === "height") {
          e.currentTarget.classList.remove("open");
          e.currentTarget.style.top = null;
          e.currentTarget.removeEventListener("transitionend", finalizeClosing);
        }
      };

    if (isOpen) {
      card.classList.remove("open-active");
      card.addEventListener("transitionend", finalizeClosing);
    } else {
      card.classList.add("open");
      lastTopDistance = `${card.getBoundingClientRect().top}px`;
      card.style.top = lastTopDistance;

      const timeout = setTimeout(() => {
        card.classList.add("open-active");
        clearTimeout(timeout);
      });
    }

    isOpen = !isOpen;

    updateHistory(id);
  };
};

export default DestinationCardContainer;
