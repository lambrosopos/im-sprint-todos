import React, { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import "./GroupList.css";
import {
  setAlarmList,
  toggleList,
  removeGroup,
  editGroupHeader
} from "../../actions";

const Group = props => {
  const listChangeHandler = () => {
    props.dispatch(setAlarmList(Object.assign({}, props.group)));
    props.dispatch(toggleList(!props.showGroupList));
  };
  const removeGroupHandler = () => {
    console.log(props.group.id);
    props.dispatch(removeGroup(props.group.id));
  };

  return (
    <div className="container alarmgroup-header">
      <label id="groupHeader">
        <span className="groupheader">
          <span onClick={listChangeHandler}> {props.group.header}</span>
        </span>
        <span className="removeIcon">
          <img
            onClick={removeGroupHandler}
            src={require("../../resources/trash-2.png")}
            alt=""
          />
        </span>
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  currentAlarmGroup: state.listReducer.currentAlarmGroup,
  showGroupList: state.listReducer.showGroupList
});

export default connect(mapStateToProps)(Group);
