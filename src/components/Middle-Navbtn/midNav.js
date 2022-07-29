import React, { useState } from "react";
import "./midNav.css";

export default function MiddleNav({ buttonText }) {
  const [isHovering, setIsHovering] = useState(false);

  function handleChangeIn() {
    setIsHovering(true);
  }

  function handleChangeOut() {
    setIsHovering(false);
  }
  return (
    <div>
      <button
        className={`button ${isHovering ? "btnHover" : ""}`}
        onMouseEnter={handleChangeIn}
        onMouseLeave={handleChangeOut}
      >
        <p>{buttonText}</p>
      </button>
    </div>
  );
}
