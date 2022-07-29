import React from "react";
import "./homepage.css";
import TopNavigation from "../components/Top-Nav/nav";
import TopLeftGreet from "../components/Hello-Visitor/greeting-toplft";
import OrangeUnderline from "../components/Hello-Visitor/underline";
import MiddleNav from "../components/Middle-Navbtn/midNav";

export default function HomePage() {
  return (
    <div id="top-home">
      <div className="firstpage">
        <div className="home">
          <div className="top-contain">
            <TopLeftGreet text="HELLO VISITOR!" />
            <OrangeUnderline />
          </div>
          <TopNavigation />
        </div>
      </div>
      <div className="title">
        <h3>
          Kah Yan <span>Sellyna</span> Lee
        </h3>
        <p>
          Aspiring <span className="greenText">Front End Developer</span>
        </p>
      </div>
      <div className="homeNav">
        <MiddleNav buttonText="About me" />
        <MiddleNav buttonText="Projects" />
        <MiddleNav buttonText="Contact me" />
      </div>
    </div>
  );
}
