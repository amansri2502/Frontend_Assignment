import React from "react";
import '../App.scss';

const mainbutton = (props) => {
  return (<div className={props.class}>
      {props.children}
  </div>);
};
export default mainbutton;
