import React from "react";
import "../App.scss";
import spain from "../assets/images/spain.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../components/AnimationProgressProvider";
import MainButton from "../components/MainButton";

const courseProgress = (props) => {
  return (
    <div className="course-progress-tile">
      <div className="course-progress-tile__logo">
        <img src={spain} alt="logo" />
      </div>
      <div>
        <p className="course-progress-tile__heading">Spanish B2</p>
        <p className="text-size-small">by Alejndro velazquez</p>
      </div>
      <div style={{ width: "4rem", height: "4rem" }}>
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={85}
          duration={1.4}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                styles={buildStyles({
                  pathTransition: "none",
                  pathColor: `rgba(12, 11, 11,0.8)`,
                  pathTransitionDuration: 0.5,
                  textSize: "25px",
                  textColor: "#0C0B0B",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#0C0B0B",
                })}
              />
            );
          }}
        </AnimatedProgressProvider>
        ;
      </div>
      <MainButton class="btn btn--black">Continue</MainButton>
    </div>
  );
};
export default courseProgress;
