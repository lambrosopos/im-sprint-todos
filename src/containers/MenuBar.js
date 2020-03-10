import { connect } from "react-redux";
import MenuBar from "../components/MenuBar/MenuBar";

const mapStateToProps = state => ({
  showGroupList: state.listReducer.showGroupList,
  currentAlarmGroup: state.listReducer.currentAlarmGroup,
  alarmGroups: state.listReducer.alarmGroups
});

export default connect(mapStateToProps)(MenuBar);
