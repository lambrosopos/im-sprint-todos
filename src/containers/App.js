import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainDisplay from "./MainDisplay";
import Nav from "./Nav";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div className="container">
      <Nav />
      <MainDisplay />
    </div>;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(App);
