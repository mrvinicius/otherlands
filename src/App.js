import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Explore from "./explore/Explore";
import Flights from "./flights/Flights";

const App = store => (
  <Router>
    <div id="app" className="App image-as-background">
      {/* <SideBar active={store.getState().sidebarActive} /> */}
      <div
        className={`Side-bar ${store.getState().sidebarActive ? "active" : ""}`}
      >
        {/* <header className="App-header">LOGO {active}</header> */}

        <nav className="App-nav fw600 dim-text">
          <ul>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/flights">Flights</Link>
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
      <main className="Content-container otl-green">
        <div className="top-bar white-text">
          <button
            className="icon-flat-btn"
            onClick={toggleSidebar(store)}
            type="button"
          >
            <i className="material-icons">menu</i>
          </button>
        </div>
        <Switch>
          <Redirect exact from="/" to="/explore" />
          <Route
            path="/explore"
            render={_ => (
              <Explore destinations={store.getState().destinations} />
            )}
          />
          <Route path="/flights" component={Flights} />
        </Switch>
      </main>
    </div>
  </Router>
);

function toggleSidebar(store) {
  return () => store.dispatch({ type: "TOGGLE_SIDEBAR" });
}

App.render = node => {
  return props => {
    ReactDOM.render(<App {...props} />, node);
  };
};

export default App;
