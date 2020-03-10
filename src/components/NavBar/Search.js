import React from "react";

export const Search = props => {
  const handleKeyDownEvent = e => {
    if (e.key === "Enter") {
      props.searchVodHandler(e.target.value);
    }
  };
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onKeyDown={e => handleKeyDownEvent(e)}
      />
      <button
        className="btn hidden-sm-down"
        onClick={e => props.searchVodHandler(e.target.previousSibling.value)}
      >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};
