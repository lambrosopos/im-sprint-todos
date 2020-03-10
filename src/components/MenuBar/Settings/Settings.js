import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }
  render = () => (
    <button type="button" className="btn btn-info">
      Settings
    </button>
  );
}
