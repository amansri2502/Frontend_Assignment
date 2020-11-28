import React from "react";
import "../App.scss";
import left from "../assets/images/left.svg";
import right from "../assets/images/right.svg";

const navigationContainer = (props) => {
  return (
    <div className="navigation-container">
      <div className="navigation-button">
        <img src={left} alt="" />
      </div>
      <div className="navigation-button ">
        <img src={right} alt="" />
      </div>
    </div>
  );
};
export default navigationContainer;
