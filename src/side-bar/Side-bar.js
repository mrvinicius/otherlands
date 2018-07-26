import React from "react";
// import "./Side-bar.css";

const SideBar = ({ active }) => (
  <div className={`Side-bar ${active ? "active" : ""}`}>
    {/* <header className="App-header">LOGO {active}</header> */}
    <Router>
      <nav className="App-nav">
        <ul className="fw600 dim-text">
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <a to="/flights">Flights</a>
          </li>
          <li>
            <a>Bookmarks</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
        <Route exact path="/explore" component={Explore} />
        <Route path="/flights" component={Flights} />
      </nav>
    </Router>
  </div>
);

export default SideBar;
