export const TOGGLE_IS_CHECKED = "TOGGLE_IS_CHECKED";

export const toggleIsChecked = (alarmItemID, value) => ({
  type: TOGGLE_IS_CHECKED,
  alarmItemID,
  value
});
