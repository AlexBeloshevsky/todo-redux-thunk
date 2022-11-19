import itemReducer from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;
