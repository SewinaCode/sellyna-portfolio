import React from "react";
import styles from "./App.module.css";
import TopNavigation from "./components/Top-Nav/nav";
import TopLeftGreet from "./components/Hello-Visitor/greeting-toplft";
import OrangeUnderline from "./components/Hello-Visitor/underline";

export default function App() {
  return (
    <>
      <div className={styles.firstpage}>
        <div className={styles.home}>
          <div className={styles["top-contain"]}>
            <TopLeftGreet text="HELLO VISITOR!" />
            <OrangeUnderline />
          </div>
          <TopNavigation />
        </div>
      </div>
      <div className={styles.title}>
        <h3>
          Kah Yan <span> Sellyna </span> Lee
        </h3>
        <p>
          Aspiring <span className={styles.greenText}>Front End Developer</span>
        </p>
      </div>
    </>
  );
}
