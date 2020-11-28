import React from "react";
import "../App.scss";

const statusTile = (props) => {
  return (
    <div className="status-tile">
      <div className="status-tile__number">{props.number}</div>
      <div className="status-tile__status">
        <p>Courses</p>
        <p>{props.status}</p>
      </div>
    </div>
  );
};
export default statusTile;
