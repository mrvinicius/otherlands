import React, { Component } from "react";
import "./App.css";
import SearchField from "./search-field/Search-field";

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
        <div className="Side-bar active">
          <header className="App-header">LOGO</header>
          <nav className="App-nav">
            <ul>
              <li>Explore</li>
              <li>Flights</li>
              <li>Bookmarks</li>
              <li>Settings</li>
            </ul>
          </nav>
        </div>
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
