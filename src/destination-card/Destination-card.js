import React from "react";
import "./Destination-card.css";

const DestinationCard = ({ id, imgUrl, title, description }) => {
  let objectFitSupport =
    CSS.supports &&
    (CSS.supports("object-fit", "cover") ||
      CSS.supports("-o-object-fit", "cover"));

  const img = React.createElement("img", {
    src: imgUrl,
    className: "card-img",
    onLoad: objectFitSupport ? null : handleImgSize
  });

  return (
    <div key={id} className="Destination-card z-depth-3">
      <div className="card-image-container">{img}</div>
      <div className="card-text-container">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

const handleImgSize = ({ target }) => {
  let parentHeight = target.parentNode.clientHeight;
  if (target.height < parentHeight) {
    let additionalSize = parentHeight - target.height;
    target.style.height = target.height + additionalSize + "px";
    target.style.width = target.width + additionalSize + "px";
  }
};

export default DestinationCard;
