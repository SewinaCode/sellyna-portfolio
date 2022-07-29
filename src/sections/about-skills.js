import React from "react";
import "./aboutpage.css";
import TopNavigation from "../components/Top-Nav/nav";

export default function AboutMe() {
  return (
    <div id="About">
      <TopNavigation />
      <div className="about-text">
        <h3>
          A bit about me<span>...</span>
        </h3>
        <p>
          I am currently in the process of making a career change towards tech,
          with a goal of becoming a Front End Developer. I enjoy building
          web/app features, watching my creations come to life and being
          creative.
        </p>
        <p>
          Recently, I have completed the Full Stack Accelerator Programme in
          Mission Ready HQ and will be continuing onto the Advanced Software
          Developer programme.
        </p>
      </div>
      <div className="about-text">
        <h3>
          Skills<span>:</span>
        </h3>
      </div>
    </div>
  );
}
