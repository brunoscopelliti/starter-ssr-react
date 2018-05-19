import { createStore, combineReducers } from "redux";

const reducers =
  () => combineReducers({
    foo: null,
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
