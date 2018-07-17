const createStore = reducer => {
  let state = {
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

  let callbacks = [];

  const store = {
    getState() {
      return Object.assign({}, state);
    },
    dispatch(action) {
      state = reducer(state, action);
      callbacks.forEach(fn => fn(this));
      // emit custom event
    },
    subscribe(callback) {
      callbacks.push(callback);
      return {
        unsubscribe() {
          let index = callbacks.indexOf(callback);
          callbacks.splice(index, 1);
        }
      };
      // attach to some custom event
      // callback(this.getState())
    }
  };

  return store;
};

// const searchAction = { type: "SEARCH_DESTINATIONS", text: "" },
//   filterAction = { type: "FILTER_DESTINATIONS", filters: {} };
// const actions = [searchAction, filterAction];

export default createStore;
