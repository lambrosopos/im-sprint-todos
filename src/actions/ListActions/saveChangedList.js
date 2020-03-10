// Create a save changed list action????

export const SAVE_CHANGED_LIST = "SAVE_CHANGED_LIST";

export const saveChangedList = alarmListID => ({
  type: SAVE_CHANGED_LIST,
  alarmListID
});
