import { combineReducers } from "redux";

const jokeReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCHED_JOKE":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  joke: jokeReducer,
});

export default rootReducer;
