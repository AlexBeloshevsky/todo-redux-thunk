import itemReducer from "./itemReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;
