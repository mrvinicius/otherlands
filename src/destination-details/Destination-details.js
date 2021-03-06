import React from "react";
import "./Destination-details.css";

function DestinationDetails({ title, description, close }) {
  return (
    <div className="Destination-details content-container-dimensions white-text">
      <div className="top-bar">
        <button
          className="icon-flat-btn cursor-pointer"
          type="button"
          onClick={close}
        >
          <i className="material-icons">close</i>
        </button>
        <button className="icon-flat-btn push" type="button">
          <i className="material-icons cursor-pointer">location_on</i>
        </button>
        <button className="icon-flat-btn" type="button">
          <i className="material-icons cursor-pointer">search</i>
        </button>
      </div>
      <article className="Destination-details__content">
        <h1 className="title">{title}</h1>
        <p className="sub-title">{description}</p>
        <section className="Destination-details__stories">
          <h2 className="section-title">Discover stories</h2>
          <p />
        </section>
      </article>
    </div>
  );
}

export default DestinationDetails;
