import React from "react";
import "./Side-bar.css";

const SideBar = ({ active }) => (
  <div className={`Side-bar ${active ? "active" : ""}`}>
    {/* <header className="App-header">LOGO {active}</header> */}
    <nav className="App-nav">
      <ul className="fw600 dim-text">
        <li>
          <a>Explore</a>
        </li>
        <li>
          <a>Flights</a>
        </li>
        <li>
          <a>Bookmarks</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideBar;
