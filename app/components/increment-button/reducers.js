import actions from "./action-types";

const incrementCounter =
  (state = 0, action) => {
    if (action.type === actions.INCREMENT_COUNTER) {
      return ++state;
    }

    return state;
  };

export { incrementCounter };
