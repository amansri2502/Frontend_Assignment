import React from "react";
import '../App.scss';

const HeadingSecondary = (props) => {
  return (<div className="heading-secondary">
      <h2>{props.children}</h2>
  </div>);
};
export default HeadingSecondary;
