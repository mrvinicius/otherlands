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

function App(store) {
  const state = store.getState();

  return (
    <Router>
      <div id="app" className="App">
        <section className={`Side-bar ${state.sidebarActive ? "active" : ""}`}>
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
        </section>
        <main className="Content-container content-container-dimensions otl-green">
          <div className="top-bar white-text">
            <button
              className="icon-flat-btn cursor-pointer"
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
              render={_ => <Explore destinations={state.destinations} />}
            />
            <Route path="/flights" component={Flights} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
function toggleSidebar(store) {
  return () => store.dispatch({ type: "TOGGLE_SIDEBAR" });
}

App.render = function(node) {
  return props => {
    ReactDOM.render(<App {...props} />, node);
  };
};

export default App;
