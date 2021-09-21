import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import combineReducers from "./reducers";

import "./index.css";
import App from "./App";

const middleWares = [thunk, logger];
const store = createStore(combineReducers, applyMiddleware(...middleWares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
