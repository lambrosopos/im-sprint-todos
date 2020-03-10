import React, { Component } from "react";
import ReactDOM from "react-dom";
import { toggleSettings } from "../../actions";
import { connect } from "react-redux";

const Settings = props => {
  const toggleSettingsHandler = () => {
    props.dispatch(toggleSettings(!props.showSettings));
  };

  return (
    <button
      type="button"
      className="btn btn-info"
      onClick={toggleSettingsHandler}
    >
      Settings
    </button>
  );
};

const mapStateToProps = state => ({
  showGroupList: state.listReducer.showGroupList,
  currentAlarmGroup: state.listReducer.currentAlarmGroup,
  alarmGroups: state.listReducer.alarmGroups,
  showSettings: state.settingsReducer.showSettings
});

export default connect(mapStateToProps)(Settings);
