import { connect } from "react-redux";
import SettingsList from "../components/Settings/SettingsList";

const mapStateToProps = state => ({
  showGroupList: state.listReducer.showGroupList,
  currentAlarmGroup: state.listReducer.currentAlarmGroup,
  alarmGroups: state.listReducer.alarmGroups,
  showSettings: state.settingsReducer.showSettings,
  userName: state.settingsReducer.userName
});

export default connect(mapStateToProps)(SettingsList);
