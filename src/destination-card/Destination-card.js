import React from "react";
import "./Destination-card.css";
import DestinationDetails from "../destination-details/Destination-details";

function DestinationCard({ imgUrl, title, description, innerRef, close }) {
  let hasCSSObjectFitSup =
    CSS.supports &&
    (CSS.supports("object-fit", "cover") ||
      CSS.supports("-o-object-fit", "cover"));

  const img = React.createElement("img", {
    src: imgUrl,
    className: "card-img",
    onLoad: hasCSSObjectFitSup ? null : handleImgSize
  });

  return (
    <div ref={innerRef} className={"Destination-card z-depth-3"}>
      <div className="card-img-container">{img}</div>
      <div className="card-text-background" />
      <div className="card-text-container">
        <h5 className="title text-truncate">{title}</h5>
        <p className="sub-title black-secondary-text">
          {description.substr(0, 110).trim() +
            `${description.length > 110 ? "..." : ""}`}
        </p>
      </div>
      <DestinationDetails {...{ imgUrl, title, description }} close={close} />
    </div>
  );
}

function handleImgSize({ target }) {
  let parentHeight = target.parentNode.clientHeight;
  if (target.height < parentHeight) {
    let additionalSize = parentHeight - target.height;
    target.style.height = target.height + additionalSize + "px";
    target.style.width = target.width + additionalSize + "px";
  }
}

export default DestinationCard;
