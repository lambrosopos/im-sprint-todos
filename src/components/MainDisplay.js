import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./MainDisplay.css";
import Header from "./Header";
import GroupList from "./GroupList/GroupList";
import AlarmList from "./AlarmList/AlarmList";
import MenuBar from "../containers/MenuBar";

export default class MainDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-display">
        <Header />

        <div className="container">
          {this.props.showGroupList ? <GroupList /> : <AlarmList />}
        </div>
        <MenuBar />
      </div>
    );
  }
}

// {
//   props.showGroupList ? <GroupList /> : <AlarmList />;
// }
