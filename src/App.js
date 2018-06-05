import React, { Component } from "react";
import "./App.css";
import SearchField from "./search-field/Search-field";
import SideBar from "./side-bar/Side-bar";

class DestinationCard extends Component {
  render() {
    return <div className="Destination-card" />;
  }
}

class App extends Component {
  render() {
    let name = "Vinicius";

    return (
      <div className="App">
        <SideBar />
        <main className="Content-container otl-green suspendend-view ">
          <div className="generic-container white-text">
            <div className="top-bar">
              <button type="button">
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
  }
}

export default App;
