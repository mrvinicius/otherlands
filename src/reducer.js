function destination(state = [], action) {
  switch (action.type) {
    case "SEARCH_DESTINATIONS":
      return state.map(
        destination => destination.title.search(action.text) > -1
      );
      break;
    case "FILTER_DESTINATIONS":
      break;

    default:
      return state;
  }
}

function sidebar(state = false, action) {
  if (action.type === "TOGGLE_SIDEBAR") {
    return action.sidebarActive ? true : false;
  }
}

function appReducer(state = {}, action) {
  return {
    sidebarActive: sidebar(state.sidebarActive, action),
    destinations: destination(state.destinations, action)
  };
}

export { appReducer };
