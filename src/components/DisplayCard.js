import React from "react";
import '../App.scss';

import fire from "../assets/images/fire.svg"
import clock from "../assets/images/clock.svg"
import MainButton from "../components/MainButton";



const displayCard = (props) => {
  
  return (<div className="display-card">
  <div className="display-card__logo">
  <img src={props.logo} alt="logo"/></div>
  <div>
<p className="display-card__heading">{props.name}</p>
<p className="text-size-small">by {props.teacher}</p>
  </div>
  <div className="display-card__spread ">
    <img className="margin-right-small" src={clock} alt="clock"/>
<p className="text-size-small text-bold">{props.duration}</p>
  </div>
  <div className="display-card__spread padding-right-medium">
    <img src={fire} alt="fire-icon" />
<p className="text-size-small text-bold">{props.rating}</p>
  </div>
  <MainButton class="btn btn--white">View course</MainButton>
</div>);
};
export default displayCard;