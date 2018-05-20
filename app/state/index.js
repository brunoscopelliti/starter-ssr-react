import { createStore, combineReducers } from "redux";

import { incrementCounter as count } from "components/increment-button/reducers";

const reducers =
  () => combineReducers({
    count,
  });

const initializeState =
  (initialState = {}) =>
    typeof window != "undefined" && typeof window.__REDUX_DEVTOOLS_EXTENSION__ == "function"
      ? createStore(
        reducers(),
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
      : createStore(
        reducers(),
        initialState,
      );

export default initializeState;
