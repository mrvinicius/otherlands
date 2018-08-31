import React from "react";
import DestinationCard from "./Destination-card";

const min800px = window.matchMedia("only screen and (min-width: 801px)");

const DestinationCardContainer = destination => (
  <DestinationCard
    key={destination.id}
    {...destination}
    onClick={getClickHandler(destination.id)(min800px)}
  />
);

// TODO: state management integration, action trigger access
function updateHistory(id) {
  window.history.pushState({}, "", `/explore/destination/${id}`);
}

function finalizeClosing(card) {
  card.classList.remove("open");
  card.style.top = null;
}

function getCardCloser(mediaQueryList) {
  return function closeCard(event) {
    if (event.propertyName === "transform") {
      const card = event.currentTarget;

      if (mediaQueryList.matches) {
        prepareToBeStatic(card);
      }

      finalizeClosing(card);

      card.removeEventListener("transitionend", closeCard);
    }
  };
}

function prepareToBeFixed(card) {
  card.style.width = `${card.clientWidth}px`;
  card.style.left = `${card.getBoundingClientRect().left}px`;
}

function prepareToBeStatic(card) {
  card.style.width = null;
  card.style.left = null;
}

function getClickHandler(id) {
  let isOpen = false,
    lastTopDistance;

  return function applyMediaQuery(mediaQueryList) {
    return function onClick(event) {
      const card = event.currentTarget;

      if (!isOpen) {
        if (mediaQueryList.matches) {
          prepareToBeFixed(card);
        }

        card.classList.add("open");
        lastTopDistance = `${card.getBoundingClientRect().top}px`;
        card.style.top = lastTopDistance;

        const timeout = setTimeout(() => {
          card.classList.add("open-active");
          clearTimeout(timeout);
        });
      } else {
        card.classList.remove("open-active");
        card.addEventListener("transitionend", getCardCloser(mediaQueryList));
      }
      isOpen = !isOpen;
    };

    // updateHistory(id);
  };
}

export default DestinationCardContainer;
