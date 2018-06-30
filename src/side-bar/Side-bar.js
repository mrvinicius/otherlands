import React, { Component } from "react";
import "./Side-bar.css";

const SideBar = ({ active }) => (
  <div className={`Side-bar ${active ? "active" : ""}`}>
    {/* <header className="App-header">LOGO {active}</header> */}
    <nav className="App-nav">
      <ul className="fw600 dim-text">
        <li>
          <a href="javascript:void(0)">Explore</a>
        </li>
        <li>
          <a href="javascript:void(0)">Flights</a>
        </li>
        <li>
          <a href="javascript:void(0)">Bookmarks</a>
        </li>
        <li>
          <a href="javascript:void(0)">Settings</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideBar;
