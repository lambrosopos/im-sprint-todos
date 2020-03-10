import React from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";

import "./MainDisplay.css";

import { editGroupHeader } from "../actions";

const Header = props => {
  const editGroupHandler = () => {
    const elGroupHeader = document.querySelector(".headerTitle");
    const elHeader = elGroupHeader.querySelector("span");
    elHeader.style.display = elHeader.style.display === "" ? "none" : "";

    const elInput = elGroupHeader.querySelector("input");
    elInput.value = elHeader.textContent;
    elInput.style.fontStyle = "Italic";
    elInput.style.display = elHeader.style.display === "" ? "none" : "";
  };

  const groupHeaderHandler = event => {
    if (event.key === "Enter") {
      props.dispatch(editGroupHeader(event.target.value));
      editGroupHandler();
    }
  };

  const isGroupList = () => {
    if (props.showGroupList) {
      return <h4>What To Do? </h4>;
    } else {
      return (
        <div style={{ position: "relative" }}>
          <label id="groupHeader">
            <span className="headerTitle">
              <span>{props.currentAlarmGroup.header}</span>
              <input
                style={{ display: "none" }}
                type="text"
                onKeyDown={event => groupHeaderHandler(event)}
              />
            </span>
          </label>
          <span className="editIcon">
            <img
              src={require("../resources/edit.png")}
              alt=""
              onClick={() => editGroupHandler()}
            />
          </span>
        </div>
      );
    }
  };
  return <div className="header">{isGroupList()}</div>;
};

const mapStateToProps = state => ({
  showGroupList: state.listReducer.showGroupList,
  currentAlarmGroup: state.listReducer.currentAlarmGroup
});

export default connect(mapStateToProps)(Header);
