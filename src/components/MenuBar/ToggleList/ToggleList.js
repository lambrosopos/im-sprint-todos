import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { toggleList } from "../../../actions";

const ToggleList = props => {
  const toggle = () => {
    props.dispatch(toggleList(!props.showGroupList));
  };

  return (
    <button type="button" className="btn btn-info" onClick={toggle}>
      Toggle List
    </button>
  );
};

const mapStateToProps = state => ({
  showGroupList: state.listReducer.showGroupList
});

export default connect(mapStateToProps)(ToggleList);
