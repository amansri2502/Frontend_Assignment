import React from "react";
import "../App.scss";

const headingTertiary = (props) => {
  return (
    <div className="heading-tertiary">
      <p className={props.class}>{props.children}</p>
    </div>
  );
};
export default headingTertiary;

//heading-tertiary__notActive
