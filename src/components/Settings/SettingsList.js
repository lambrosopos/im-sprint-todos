import React from "react";
import ReactDOM from "react-dom";
import { setUserName } from "../../actions";

const SettingsList = props => {
  const editGroupHandler = () => {
    const elGroupHeader = document.querySelector(".groupheader");
    const elHeader = elGroupHeader.querySelector("span");
    elHeader.style.display = elHeader.style.display === "" ? "none" : "";

    const elInput = elGroupHeader.querySelector("input");
    elInput.value = elHeader.querySelector(".userNameHolder").textContent;
    elInput.style.fontStyle = "Italic";
    elInput.style.display = elHeader.style.display === "" ? "none" : "";
  };

  const groupHeaderHandler = event => {
    if (event.key === "Enter") {
      props.dispatch(setUserName(event.target.value));
      editGroupHandler();
    }
  };
  return (
    <div className="groups-container">
      <div className="container">
        <label id="groupHeader">
          <span className="groupheader">
            <span>
              <span className="settingsLabel"> Username :</span>
              <span className="userNameHolder">{props.userName.name}</span>
            </span>
            <input
              style={{ display: "none" }}
              type="text"
              onKeyDown={event => groupHeaderHandler(event)}
            />
          </span>
          <span className="editIcon">
            <img
              onClick={editGroupHandler}
              src={require("../../resources/edit.png")}
              alt=""
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default SettingsList;
