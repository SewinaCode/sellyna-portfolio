import React, { useState } from "react";
import styles from "./midNav.module.css";

export default function MiddleNav({ buttonText }) {
  return (
    <div>
      <button className={styles.button}>
        <p>{buttonText}</p>
      </button>
    </div>
  );
}
