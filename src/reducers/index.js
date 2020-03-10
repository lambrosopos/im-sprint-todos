import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import listReducer from "./listReducer";

export default combineReducers({
  listReducer,
  settingsReducer
});
