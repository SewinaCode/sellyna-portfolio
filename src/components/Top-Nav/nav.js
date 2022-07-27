import styles from "../Top-Nav/nav.module.css";
import React from "react";

export default function TopNavigation() {
  return (
    <>
      <div className={styles["top - Rht"]}>
        <nav>
          <a href="#">About me</a>
          <a href="#">Projects</a>
          <a href="#">Contact me</a>
        </nav>
      </div>
    </>
  );
}
