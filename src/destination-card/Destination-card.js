import React from "react";
import "./Destination-card.css";

const DestinationCard = ({ id, imgUrl, title, description, onClick }) => {
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
    <div
      onClick={getClickHandler(onClick)}
      className={`Destination-card cPointer z-depth-3 ${""}`}
    >
      <div className="card-img-container">{img}</div>
      <div className="card-text-container">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

function getClickHandler(callback) {
  return event => {
    // event.currentTarget.classList.toggle("open");
    callback(event);
  };
}

const handleImgSize = ({ target }) => {
  let parentHeight = target.parentNode.clientHeight;
  if (target.height < parentHeight) {
    let additionalSize = parentHeight - target.height;
    target.style.height = target.height + additionalSize + "px";
    target.style.width = target.width + additionalSize + "px";
  }
};

export default DestinationCard;
