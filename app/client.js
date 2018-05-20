import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as StateProvider } from "react-redux";

import App from "./app";

import initializeState from "./state/";

const reduxStore = initializeState(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

render(
  <StateProvider store={ reduxStore }>
    <BrowserRouter basename="/app">
      <App />
    </BrowserRouter>
  </StateProvider>,
  document.getElementById("root")
);
