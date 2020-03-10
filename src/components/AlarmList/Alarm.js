import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "./AlarmList.css";
import { toggleIsChecked, removeListItem } from "../../actions";

const Alarm = props => {
  const handleLineThrough = event => {
    let elLabel = event.target.style;
    elLabel.textDecoration =
      elLabel.textDecoration === "" ? "line-through" : "";
  };

  const handleRemoveListItem = () => {
    props.dispatch(removeListItem(props.alarm.id));
  };

  return (
    <div style={{ fontFamily: "system-ui" }}>
      <label>
        <span
          className="alarm-label"
          onClick={event => handleLineThrough(event)}
        >
          {props.alarm.name}
        </span>
        <span className="deleteIcon">
          <img
            onClick={() => handleRemoveListItem()}
            src={require("../../resources/error.png")}
            alt=""
          />
        </span>
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  currentAlarmGroup: state.listReducer.currentAlarmGroup,
  alarmGroups: state.listReducer.alarmGroups
});

export default connect(mapStateToProps)(Alarm);
