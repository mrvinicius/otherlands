function destination(state = [], action) {
  switch (action.type) {
    case "SEARCH_DESTINATIONS":
      return state.map(
        destination => destination.title.search(action.text) > -1
      );
    case "FILTER_DESTINATIONS":
      break;

    default:
      return state;
  }
}

function sidebar(state = false, action) {
  if (action.type === "TOGGLE_SIDEBAR") {
    return action.sidebarActive !== undefined ? action.sidebarActive : !state;
  }
}

function appReducer(state = {}, action) {
  return {
    sidebarActive: sidebar(state.sidebarActive, action),
    destinations: destination(state.destinations, action)
  };
}

export { appReducer };
