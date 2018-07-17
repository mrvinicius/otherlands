import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import SearchField from "./search-field/Search-field";
import SideBar from "./side-bar/Side-bar";
import CardGrid from "./card-grid/Card-grid";

const App = store => (
  <div id="app" className="App">
    <SideBar active={store.getState().sidebarActive} />
    <main className="Content-container otl-green">
      <div className="generic-container white-text">
        <div className="top-bar">
          <button onClick={toggleSidebar(store)} type="button">
            <i className="material-icons">menu</i>
          </button>
        </div>
      </div>
      <SearchField onInput={handleSearchChange} />
      <CardGrid destinations={store.getState().destinations} />
    </main>
  </div>
);

function toggleSidebar(store) {
  return () => store.dispatch({ type: "TOGGLE_SIDEBAR", sidebarActive: true });
}

function handleSearchChange(e) {
  console.log(e);
}

App.render = node => {
  return props => {
    ReactDOM.render(<App {...props} />, node);
  };
};

export default App;
