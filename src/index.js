// import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
const render = App.render(document.getElementById("root"));

let appState = {
  sidebarActive: false,
  destinations: [
    {
      id: 1,
      imgUrl: "/img/pantanal-brasileiro.jpg",
      title: "Pantanal",
      description:
        "Complexo do Pantanal, ou simplesmente Pantanal, é um bioma constituído principalmente por uma savana estépica, alagada em sua maior parte, com 250 mil quilômetros quadrados de extensão, altitude média de 100 metros."
    },
    {
      id: 2,
      imgUrl: "/img/bonito-ms.jpg",
      title: "Bonito",
      description:
        "Bonito é um município brasileiro da região Centro-Oeste, situado no estado de Mato Grosso do Sul."
    },
    {
      id: 3,
      imgUrl: "/img/atacama.jpg",
      title: "Atacama",
      description:
        "Deserto de Atacama está localizado na região norte do Chile até a fronteira com o Peru. Com cerca de 1000 km de extensão, é considerado o deserto mais alto do mundo.",
      attractions: ["Deserto Florido"]
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
