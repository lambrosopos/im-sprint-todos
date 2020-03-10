import { connect } from "react-redux";
import MainDisplay from "../components/MainDisplay";

const mapStateToProps = state => ({
  showGroupList: state.listReducer.showGroupList,
  currentAlarmGroup: state.listReducer.currentAlarmGroup,
  alarmGroups: state.listReducer.alarmGroups
});

export default connect(mapStateToProps)(MainDisplay);
