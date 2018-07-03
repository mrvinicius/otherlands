import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
const render = App.render(document.getElementById("root"));

let appState = {
  sidebarActive: false,
  destinations: [
    {
      id: 1,
      imgUrl: '',
      title: 'Pantanal',
      description: 'Complexo do Pantanal, ou simplesmente Pantanal, é um bioma constituído principalmente por uma savana estépica, alagada em sua maior parte, com 250 mil quilômetros quadrados de extensão, altitude média de 100 metros.'
    }
  ]
};

const toggleSidebar = () => {
  appState.sidebarActive = !appState.sidebarActive;
  render({ appState, toggleSidebar });
};

render({ appState, toggleSidebar });

// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
