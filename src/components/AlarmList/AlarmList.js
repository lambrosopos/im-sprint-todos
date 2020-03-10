import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import shortid from "shortid";
import Alarm from "./Alarm";
import "./AlarmList.css";
import { quickAdd } from "../../actions";

const AlarmList = props => {
  let alarmList = props.currentAlarmGroup.alarmList;

  const quickAddEventHandler = (event = null) => {
    if (event.key === "Enter") {
      const elInput = document.querySelector(".quickadd-input input");
      let payload = elInput.value;
      elInput.value = "";
      props.dispatch(quickAdd(payload));
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="container alarms-container">
        {alarmList.length === 0 ? (
          <h5 className="empty-info">List is Empty</h5>
        ) : (
          alarmList.map(alarm => (
            <Alarm key={shortid.generate()} alarm={alarm} />
          ))
        )}
        <label>
          <span className="quickadd-input">
            <input
              type="text"
              placeholder="Add Item"
              onKeyDown={event => quickAddEventHandler(event)}
            />
          </span>
          <span className="addIcon">
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

export default connect(mapStateToProps)(AlarmList);
