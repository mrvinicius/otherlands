import React from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router";
import DestinationCard from "./Destination-card";

function DestinationCardsContainer({ destinations, history }) {
  function closeDetailsAndGoToExplore(event) {
    closeDetails(event.currentTarget.closest(".Destination-card")).then(_ =>
      history.push("/explore")
    );
  }
  return destinations.map(dest =>
    CardToggler(dest, openDetails, closeDetailsAndGoToExplore)
  );
}

function CardToggler(dest, open, close) {
  const path = `/explore/destination/${dest.id}`;
  const to = {
    pathname: path,
    state: {
      dest
    }
  };

  return (
    <Route
      exact
      key={dest.id}
      path={path}
      children={props => {
        if (props.location.pathname === path) {
          return (
            <div className="grid-card-wrapper">
              <DestinationCard
                {...dest}
                innerRef={props.match ? open : null}
                close={close}
              />
            </div>
          );
        } else {
          return (
            <Link
              className="grid-card-wrapper"
              to={to}
              style={{ color: "inherit" }}
            >
              <DestinationCard {...dest} />
            </Link>
          );
        }
      }}
    />
  );
}

function openDetails(card) {
  if (!card) return;

  const min800px = window.matchMedia("only screen and (min-width: 801px)");
  const cardTextContainer = card.querySelector(".card-text-container");

  if (min800px.matches) {
    card.style.width = `${card.clientWidth}px`;
    card.style.left = `${card.getBoundingClientRect().left}px`;
  }

  card.style.top = `${card.getBoundingClientRect().top}px`;
  card.classList.add("open");
  cardTextContainer.classList.add("card-text-container--hidden");

  const timeout = setTimeout(() => {
    card.classList.add("open-active");
    clearTimeout(timeout);
  });
}

function closeDetails(card) {
  const min800px = window.matchMedia("only screen and (min-width: 801px)");
  const cardTextContainer = card.querySelector(".card-text-container");

  card.classList.remove("open-active");
  cardTextContainer.classList.remove("card-text-container--hidden");

  return new Promise(resolve =>
    setCardTransitionEndHandler(card, min800px, resolve)
  );
}

function setCardTransitionEndHandler(card, mediaQueryList, callback) {
  card.addEventListener("transitionend", function handleTransitionEnd(event) {
    if (event.propertyName === "transform") {
      const card = event.currentTarget;

      if (mediaQueryList.matches) {
        card.style.width = null;
        card.style.left = null;
      }

      card.classList.remove("open");
      card.style.top = null;

      callback();

      card.removeEventListener("transitionend", handleTransitionEnd);
    }
  });
}

export default withRouter(DestinationCardsContainer);
