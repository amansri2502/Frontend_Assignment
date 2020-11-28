import React from "react";
import '../App.scss';
import search from "../assets/images/search.svg"

const searchBar = (props) => {
  return (<div className="search-container">
  <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search hotels"/>
            <button className="search__button">
                <img className="search__icon" src={search} alt=""/>
            </button>
  </form>
  </div>);
};
export default searchBar;