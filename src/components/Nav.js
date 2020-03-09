import React from "react";
import { Search } from "./Search.js";

export const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
    <a className="navbar-brand" href="http://localhost:8080/">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="https://youtube.com">
            Youtube <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <div id="search-bar" classNameName="col-md-7 col-md-offset-3">
        <Search searchVodHandler={props.searchVodHandler} />
      </div>
    </div>
  </nav>
);
