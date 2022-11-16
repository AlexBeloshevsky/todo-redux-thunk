import { combineReducers } from "redux";
import { GET_ITEMS_SUCCESS, GET_ITEMS_ERROR } from "./types";

const itemReducer = (state = null, action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;
