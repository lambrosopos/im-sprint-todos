import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import MainDisplay from "./MainDisplay";
import Nav from "./Nav";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <MainDisplay />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showGroupList: state.listReducer.showGroupList,
  currentAlarmGroup: state.listReducer.currentAlarmGroup,
  alarmGroups: state.listReducer.alarmGroups
});

export default connect(mapStateToProps)(App);
