import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Index styling
import "./index.css";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import AllReducers from "./reducers";

// App container
import App from "./containers/App";

const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
