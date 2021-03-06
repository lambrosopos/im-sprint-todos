import { connect } from "react-redux";
import MainDisplay from "../components/MainDisplay";

const mapStateToProps = state => ({
  showGroupList: state.listReducer.showGroupList,
  currentAlarmGroup: state.listReducer.currentAlarmGroup,
  alarmGroups: state.listReducer.alarmGroups,
  showSettings: state.settingsReducer.showSettings,
  userName: state.settingsReducer.userName
});

export default connect(mapStateToProps)(MainDisplay);
