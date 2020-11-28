import React from "react";
import "../App.scss";
import avatar  from "../assets/images/Illustrationman.svg";

const greetings = (props) => {
  return (
    <div className="greetings">
    <div className="greetings__hello">
  <h1>Hello {props.children}</h1>
      <p className="greetings__message">
        it's good to see you again.
      </p>
    </div>
    <div className="greetings__image">
    <img src={avatar} alt="avatar"/>
    </div>
  </div>
  );
};
export default greetings;