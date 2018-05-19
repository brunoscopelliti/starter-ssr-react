import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider as StateProvider } from "react-redux";
import { renderToString } from "react-dom/server";

import App from "app";
import initializeState from "state/";

import buildInitialState from "./state-builder";
import withLayout from "./layout";

const renderAppHTML =
  async (url, request, config) => {
    const initialState = await buildInitialState(url, request);
    const store = initializeState(initialState);

    const preloadedState = store.getState();

    const pageMeta = {
      title: config.title,
    };

    const context = {};
    const html = renderToString(
      <StateProvider store={ store }>
        <StaticRouter basename="/app" location={ url } context={ context }>
          <App />
        </StaticRouter>
      </StateProvider>
    );

    return withLayout(html, pageMeta, preloadedState);
  };

export default renderAppHTML;
