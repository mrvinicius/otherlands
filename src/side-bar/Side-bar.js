import React, { Component } from "react";
import "./Side-bar.css";

class SideBar extends Component {
  render() {
    return (
      <div className="Side-bar active">
        <header className="App-header">LOGO</header>
        <nav className="App-nav">
          <ul className="fw600">
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
  }
}

export default SideBar;
