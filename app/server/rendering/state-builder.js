import { matchPath } from "react-router-dom";

const routes = [{
  attributes: {
    path: "/app",
  },
  loaders: {
    count: (req, params) => {
      return 0;
    },
  },
}, {
  attributes: {
    path: "/app/foo",
  },
  loaders: {
    count: (req, params) => {
      return 0;
    },
  },
}];

const findCurrentRoute =
  (path) => {
    let match;
    const route = routes.find((route) => {
      match = matchPath(path, route.attributes.path);
      return match && match.isExact;
    });

    if (typeof route == "undefined") {
      throw new Error(404);
    }

    return Object.assign({}, route, match);
  };

const buildInitialState =
  async (url, request) => {
    const initialState = {};

    const route = findCurrentRoute(url);

    const { loaders, params } = route;
    const loaderKeys = Object.keys(route.loaders);

    return (await Promise.all(loaderKeys.map((key) => loaders[key](request, params))))
      .reduce((state, value, i) => {
        const key = loaderKeys[i];
        if (key === "*") {
          if (value == null) {
            return state;
          }
          for (const innerKey in value) {
            if (value.hasOwnProperty(innerKey)) {
              state[innerKey] = value[innerKey];
            }
          }
        } else {
          state[key] = value;
        }
        return state;
      }, initialState);
  };

export default buildInitialState;
