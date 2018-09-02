import React from "react";
import DestinationCard from "./Destination-card";

const min800px = window.matchMedia("only screen and (min-width: 801px)");

const DestinationCardContainer = destination => (
  <DestinationCard
    key={destination.id}
    {...destination}
    onClick={getClickHandlerByQuery(min800px)}
  />
);

function getClickHandlerByQuery(mediaQueryList) {
  let isClosed = true,
    lastTopDistance;
  return function handleClick(event) {
    const card = event.currentTarget;

    if (isClosed) {
      if (mediaQueryList.matches) {
        card.style.width = `${card.clientWidth}px`;
        card.style.left = `${card.getBoundingClientRect().left}px`;
      }

      lastTopDistance = `${card.getBoundingClientRect().top}px`;
      card.style.top = lastTopDistance;
      card.classList.add("open");

      const timeout = setTimeout(() => {
        card.classList.add("open-active");
        clearTimeout(timeout);
      });
    } else {
      card.classList.remove("open-active");
      setCardTransitionEndHandler(card, mediaQueryList);
    }
    isClosed = !isClosed;
  };
}

function setCardTransitionEndHandler(card, mediaQueryList) {
  card.addEventListener("transitionend", function handleTransitionEnd(event) {
    if (event.propertyName === "transform") {
      const card = event.currentTarget;

      if (mediaQueryList.matches) {
        card.style.width = null;
        card.style.left = null;
      }

      card.classList.remove("open");
      card.style.top = null;
      card.removeEventListener("transitionend", handleTransitionEnd);
    }
  });
}

// TODO: state management integration, action trigger access
function updateHistory(id) {
  window.history.pushState({}, "", `/explore/destination/${id}`);
}

export default DestinationCardContainer;
