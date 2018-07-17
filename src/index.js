import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import createStore from "./store";
import { appReducer } from "./reducer";

const store = createStore(appReducer);
const render = App.render(document.getElementById("root"));

render(store);
const subscription = store.subscribe(render);

// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
