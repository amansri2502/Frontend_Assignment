import React from "react";
import "./App.scss";
import StatusTile from "../src/components/StatusTile";
import SplineChart from "../src/components/Chart";
import Greetings from "../src/components/Greetings";
import HeadingSecondary from "./components/HeadingSecondary";
import GoPremium from "../src/components/GoPremium";

import NavigationContainer from "../src/components/NavigationContainer";
import CourseProgress from "../src/components/CourseProgress";
import HeadingTertiary from "../src/components/HeadingTertiary";
import DisplayCard from "../src/components/DisplayCard";
import instagram from "../src/assets/images/insta.svg";
import camera from "../src/assets/images/camera.svg";
import photoshop from "../src/assets/images/photoshop.svg";
import pencil from "../src/assets/images/pencil.svg";
import SearchNav from "../src/components/SearchNav" 
import figma from "../src/assets/images/figma.svg";

// import ChangingProgressProvider from "./ChangingProgressProvider";

import NavBar from "../src/components/NavBar";

function App(props) {
  return (
    <div className="layout">
    {/* <div className="gola">fwfsfsf</div> */}
      <NavBar />
      <div className="firstPage">
        <Greetings>Josh!</Greetings>
        <div className="course-progress-inliner">
          <CourseProgress />
          <NavigationContainer />
        </div>
        <HeadingSecondary>Courses</HeadingSecondary>
        <div className="course-nav">
          <HeadingTertiary class="">All Courses</HeadingTertiary>
          <HeadingTertiary class="heading-tertiary__notActive">
            The Newest
          </HeadingTertiary>
          <HeadingTertiary class="heading-tertiary__notActive">
            Top Rated
          </HeadingTertiary>
          <HeadingTertiary class="heading-tertiary__notActive">
            Most popular
          </HeadingTertiary>
        </div>
        <div className="courses">
          <DisplayCard
            name="Master Instagram"
            teacher="Sophie Gill"
            duration="7h 40min"
            rating="4.6"
            logo={instagram}
          />
          <DisplayCard
            name="Learn Figma"
            teacher="Christopher Morgan"
            duration="6h 30min"
            rating="4.9"
            logo={figma}
          />
          <DisplayCard
            name="Analog photography"
            teacher="Gordon Norman"
            duration="3h 15min"
            rating="4.7"
            logo={camera}
          />
          <DisplayCard
            name="Basics of drawing"
            teacher="Jean Tate"
            duration="11h 30min"
            rating="4.8"
            logo={pencil}
          />
          <DisplayCard
            name="Photoshop - Essence"
            teacher="David Green"
            duration="5h 35min"
            rating="4.7"
            logo={photoshop}
          />
        </div>

      </div>
      <div className="secondPage">
        <SearchNav/>
        <div className="status_tile">
        <StatusTile number="11" status="completed" />
        <StatusTile number="4" status="in progress" />
        </div>
        <div className="stat_heading">
        <HeadingSecondary >Your Statistics</HeadingSecondary>
        </div>
        <div className="stat_nav">
        <HeadingTertiary class="">Learning Hours</HeadingTertiary>
        <HeadingTertiary class="heading-tertiary__notActive">My Courses</HeadingTertiary>
        </div>
        <div>
          <div className="chart">
          <SplineChart/>
          </div>
          
        </div>
        <GoPremium>9.99</GoPremium>
        
      </div>

      {/* <MainButton class={"btn btn--white"}>Continue</MainButton>
       */}
      {/*  */}
      {/* <Greetings>Josh!</Greetings>
      <HeadingSecondary>Courses</HeadingSecondary>
      <GoPremium>9.99</GoPremium> */}
    </div>
  );
}

export default App;
