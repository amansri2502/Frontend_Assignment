import React from "react";
import '../App.scss';
import book from "../assets/images/shape 1.svg";
import HeadingSecondary from "./HeadingSecondary";
import MainButton from "../components/MainButton";



const goPremium = (props) => {
  return ( <div className="go-premium">
  <div className="go-premium__text">
    <HeadingSecondary>Lern Even More</HeadingSecondary>
    <p>
       Unlock Premium Features
    </p>
    <p>
      only for ${props.children} per month.
    </p>
    <MainButton class={"btn btn--black margin-top-small"}>Go Premium</MainButton>
  </div>
  <div className="go-premium__icon">
       <img src={book} alt="book"/>
  </div>
  
</div>);
};
export default goPremium;