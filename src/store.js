const createStore = reducer => {
  let state = {
    sidebarActive: false,
    destinations: [
      {
        id: 8,
        imgUrl: "/img/capitolio-mg.jpg",
        title: "Capitólio",
        description:
          "Capitólio é um município brasileiro do estado de Minas Gerais. De acordo com estimativas do Instituto Brasileiro de Geografia e Estatística, sua população era de 8 574 habitantes em 2014.",
        attractions: []
      },
      {
        id: 3,
        imgUrl: "/img/atacama.jpg",
        title: "Atacama",
        description:
          "Deserto de Atacama está localizado na região norte do Chile até a fronteira com o Peru. Com cerca de 1000 km de extensão, é considerado o deserto mais alto do mundo.",
        attractions: ["Deserto Florido"]
      },
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
        id: 4,
        imgUrl: "/img/costa-rica.jpg",
        title: "Costa Rica",
        description:
          "A Costa Rica, oficialmente República da Costa Rica, é um país da América Central, com 4,8 milhões de habitantes, limitado a norte pela Nicarágua, a leste pelo mar do Caribe, a sudeste pelo Panamá e a oeste pelo oceano Pacífico.",
        attractions: []
      },
      {
        id: 5,
        imgUrl: "/img/new-zealand.jpg",
        title: "Nova Zelândia",
        description:
          "Nova Zelândia é um país insular, oficialmente pertencente à Oceania, no sudoeste do Oceano Pacífico, formado por duas massas de terra principais e por numerosas ilhas menores, sendo as mais notáveis as ilhas Stewart e Chatham.",
        attractions: ["ilhas Stewart", "Chatham"]
      },
      {
        id: 6,
        imgUrl: "/img/salar-de-uyuni.jpg",
        title: "Salar de Uyuni",
        description:
          "Salar de Uyuni é o maior e mais alto deserto de sal do mundo, com 10.582 quilômetros quadrados e a 3.656 metros acima do nível médio do mar.",
        attractions: []
      },
      {
        id: 7,
        imgUrl: "/img/dominica.jpg",
        title: "Dominica",
        description:
          "A Dominica ou Domínica, oficialmente Comunidade da Dominica, é um Estado soberano insular constituído pela ilha homónima e situado no mar das Caraíbas / Caribe, mais precisamente na região das Pequenas Antilhas.",
        attractions: []
      }
    ]
  };

  let callbacks = [];

  const store = {
    getState() {
      return { ...state };
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
