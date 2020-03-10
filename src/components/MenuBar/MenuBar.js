import React, { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import ToggleList from "./ToggleList/ToggleList";
import Settings from "../Settings/Settings";
import "./MenuBar.css";

class MenuBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menubar-container">
        <div className="row ">
          <div className="col-md-6">
            <ToggleList />
          </div>
          <div className="col-md-6">
            <Settings />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showGroupList: state.listReducer.showGroupList,
  currentAlarmGroup: state.listReducer.currentAlarmGroup,
  alarmGroups: state.listReducer.alarmGroups,
  showSettings: state.settingsReducer.showSettings
});

export default connect(mapStateToProps)(MenuBar);
