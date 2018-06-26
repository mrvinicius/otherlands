import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import SearchField from "./search-field/Search-field";
import SideBar from "./side-bar/Side-bar";

class DestinationCard extends Component {
  render() {
    return <div className="Destination-card" />;
  }
}

const App = ({ appState, toggleSidebar }) => {
  return (
    <div id="app" className="App">
      <SideBar active={appState.sidebarActive} />
      <main className="Content-container otl-green suspendend-view ">
        <div className="generic-container white-text">
          <div className="top-bar">
            <button onClick={toggleSidebar} type="button">
              <i className="material-icons">menu</i>
            </button>
          </div>
        </div>
        <SearchField />
        <section className="">
          {/* <div className="cards-grid">
              <DestinationCard />
              <DestinationCard />
              <DestinationCard />
            </div> */}
        </section>
      </main>
      {/* <footer className="App-footer">Vinicius</footer> */}
    </div>
  );
};

App.render = node => {
  return props => {
    ReactDOM.render(<App {...props} />, node);
  };
};

export default App;
