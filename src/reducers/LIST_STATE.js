import shortid from "shortid";

const tempID_1 = shortid.generate();
const tempID_2 = shortid.generate();
const tempID_LIST_1 = shortid.generate();
const initialState = {
  showGroupList: true,
  isEmpty: false,
  currentAlarmGroup: {
    id: tempID_2,
    header: "Alarm Group 2",
    alarmList: [
      {
        id: tempID_LIST_1,
        name: "Go home",
        payload: ["Play Games"],
        isChecked: false
      }
    ]
  },
  alarmGroups: {
    [tempID_1]: {
      id: tempID_1,
      header: "Alarm Group 1",
      alarmList: [
        {
          id: shortid.generate(),
          name: "Go to market",
          payload: ["Buy beer"],
          isChecked: false
        },
        {
          id: shortid.generate(),
          name: "Go to emart",
          payload: ["Buy beer"],
          isChecked: true
        },
        {
          id: shortid.generate(),
          name: "Go to homeland",
          payload: ["Buy beer"],
          isChecked: false
        },
        {
          id: shortid.generate(),
          name: "Go to cia",
          payload: ["Buy beer"],
          isChecked: true
        }
      ]
    },
    [tempID_2]: {
      id: tempID_2,
      header: "Alarm Group 2",
      alarmList: [
        {
          id: tempID_LIST_1,
          name: "Go home",
          payload: ["Play Games"],
          isChecked: false
        }
      ]
    }
  }
};

export default initialState;
