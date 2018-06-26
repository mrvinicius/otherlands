import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
const render = App.render(document.getElementById("root"));

let appState = {
  sidebarActive: false
};

const toggleSidebar = () => {
  appState.sidebarActive = !appState.sidebarActive;
  render({ appState, toggleSidebar });
};

render({ appState, toggleSidebar });

// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
