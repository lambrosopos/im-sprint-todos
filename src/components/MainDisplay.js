import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./MainDisplay.css";
import Header from "./Header";
import GroupList from "./GroupList/GroupList";
import AlarmList from "./AlarmList/AlarmList";
import MenuBar from "../containers/MenuBar";
import SettingsList from "../containers/SettingsList";

export default class MainDisplay extends Component {
  constructor(props) {
    super(props);
  }

  showCurrentDisplay() {
    if (this.props.showSettings) {
      return <SettingsList />;
    }

    if (this.props.showGroupList) {
      return <GroupList />;
    } else {
      return <AlarmList />;
    }
  }

  render() {
    return (
      <div className="main-display">
        <Header />

        <div className="container">{this.showCurrentDisplay()}</div>
        <MenuBar />
      </div>
    );
  }
}

// {
//   props.showGroupList ? <GroupList /> : <AlarmList />;
// }
