import React from "react";
import '../App.scss';
import SearchBar from '../components/SearchBar';
import bell from "../assets/images/bell.svg";
import dp from "../assets/images/dp.svg";

const searchNav = (props) => {
  return (<div className="Searching-section">
  <SearchBar/>
  <img className="margin-left-medium" src={bell} alt=""/>
  <img src={dp} alt=""/>
</div>);
};
export default searchNav;