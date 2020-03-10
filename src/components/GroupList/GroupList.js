import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

// Key generator
import shortid from "shortid";

import Group from "./Group";
import "./GroupList.css";
import { quickAddGroup } from "../../actions";

const GroupList = props => {
  const getAlarmGroupList = () => {
    return Array.from(Object.values(props.alarmGroups));
  };

  const quickAddEventHandler = (event = null) => {
    if (event.key === "Enter") {
      const elInput = document.querySelector("#quickadd-input input");
      let payload = elInput.value;
      elInput.value = "";
      props.dispatch(quickAddGroup(payload));
      console.log(payload);
    }
  };

  return (
    <div className="groups-container">
      <div>
        {getAlarmGroupList().length === 0 ? (
          <h5 className="empty-info">List is Empty</h5>
        ) : (
          getAlarmGroupList().map(group => (
            <Group group={group} key={shortid.generate()} />
          ))
        )}
        <label>
          <span id="quickadd-input">
            <input
              type="text"
              placeholder="Add New Group"
              onKeyDown={event => quickAddEventHandler(event)}
            />
          </span>
          <span className="plusIcon">
            <img
              src={require("../../resources/plus.png")}
              alt=""
              onClick={() => quickAddEventHandler({ key: "Enter" })}
            />
          </span>
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentAlarmGroup: state.listReducer.currentAlarmGroup,
  alarmGroups: state.listReducer.alarmGroups
});

export default connect(mapStateToProps)(GroupList);
