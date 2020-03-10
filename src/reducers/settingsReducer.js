// import { SET_USERNAME, SET_DARK_MODE } from "../actions";
import { TOGGLE_SETTINGS, SET_USERNAME } from "../actions";

const initialState = {
  userName: { name: "Guest" },
  darkMode: false,
  showSettings: false
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return { ...state, showSettings: !state.showSettings };
    case SET_USERNAME:
      return { ...state, userName: { name: action.payload } };
    default:
      return state;
  }
};

export default settingsReducer;
