import React from "react";
import styles from "./App.module.css";
import HomePage from "./sections/homePage";
import AboutMe from "./sections/about-skills";

export default function App() {
  return (
    <div className={styles.App}>
      <HomePage />
      <AboutMe />
    </div>
  );
}
