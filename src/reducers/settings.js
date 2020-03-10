import { SET_USERNAME, SET_DARK_MODE } from "../actions";

const initialState = {
  currentUser: { name: "Guest" },
  darkMode: false
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.value
      };
    case SET_USERNAME:
      return {
        ...state,
        currentUser: { name: action.name }
      };
    default:
      return state;
  }
};

export default settingReducer;
