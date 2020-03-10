import initialState from "./LIST_STATE";
import shortid from "shortid";
import {
  SET_ALARM_LIST,
  TOGGLE_LIST,
  TOGGLE_IS_CHECKED,
  REMOVE_LIST_ITEM,
  REMOVE_GROUP,
  QUICK_ADD,
  EDIT_GROUP_HEADER,
  QUICK_ADD_GROUP
} from "../actions";

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_GROUP_HEADER: {
      return {
        ...state,
        currentAlarmGroup: {
          ...state.currentAlarmGroup,
          header: action.payload
        }
      };
    }
    case QUICK_ADD_GROUP: {
      let copiedCurrent = { ...state.alarmGroups };
      let newAlarmGroup = {
        id: shortid.generate(),
        header: action.payload,
        alarmList: []
      };
      copiedCurrent[newAlarmGroup.id] = newAlarmGroup;

      return { ...state, alarmGroups: copiedCurrent };
    }
    case QUICK_ADD: {
      let itemToAdd = {
        id: shortid.generate(),
        name: action.payload,
        isChecked: false
      };
      let newAlarmList = state.currentAlarmGroup.alarmList.slice();
      newAlarmList.push(itemToAdd);

      let copiedCurrent = {
        ...state.currentAlarmGroup,
        alarmList: newAlarmList
      };
      return {
        ...state,
        currentAlarmGroup: copiedCurrent
      };
    }
    case TOGGLE_LIST: {
      if (Object.entries(state.alarmGroups).length === 0) {
        return { ...state, currentAlarmGroup: null, isEmpty: true };
      }

      if (!action.toggler) {
        return {
          ...state,
          showGroupList: action.toggler
        };
      }

      let copiedCurrent = { ...state.currentAlarmGroup };
      return {
        ...state,
        showGroupList: action.toggler,
        alarmGroups: {
          ...state.alarmGroups,
          [state.currentAlarmGroup.id]: copiedCurrent
        }
      };
    }
    case TOGGLE_IS_CHECKED: {
      let newAlarmList = state.currentAlarmGroup.alarmList
        .slice()
        .map(alarm => {
          if (alarm.id === action.alarmItemID) {
            alarm.isChecked = action.value;
            return alarm;
          } else {
            return alarm;
          }
        });
      return {
        ...state,
        currentAlarmGroup: {
          ...state.currentAlarmGroup,
          alarmList: newAlarmList
        }
      };
    }
    case REMOVE_LIST_ITEM: {
      let newAlarmList = state.currentAlarmGroup.alarmList
        .slice()
        .filter(alarm => {
          return alarm.id !== action.alarmItemID;
        });
      return {
        ...state,
        currentAlarmGroup: {
          ...state.currentAlarmGroup,
          alarmList: newAlarmList
        }
      };
    }
    case REMOVE_GROUP: {
      let newGroupList = { ...state.alarmGroups };
      delete newGroupList[action.groupID];
      let newGroupEntry = Object.values(newGroupList)[0];
      return {
        ...state,
        currentAlarmGroup: newGroupEntry,
        alarmGroups: {
          ...newGroupList
        }
      };
    }
    case SET_ALARM_LIST: {
      return {
        ...state,
        currentAlarmGroup: action.newCurrentList
      };
    }
    default:
      return state;
  }
};

export default listReducer;
