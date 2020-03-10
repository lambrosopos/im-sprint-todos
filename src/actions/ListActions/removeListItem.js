export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM";

export const removeListItem = alarmItemID => ({
  type: REMOVE_LIST_ITEM,
  alarmItemID
});
