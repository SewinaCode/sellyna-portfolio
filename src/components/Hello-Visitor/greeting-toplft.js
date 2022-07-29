import React from "react";
import "./greeting.css";

export default function TopLeftGreet({
  backgroundColor,
  color,
  font,
  text,
  textAlign,
  letterSpacing,
}) {
  return (
    <div
      className="greet-text"
      style={{
        backgroundColor: "none",
        color: "white",
        font: "bold 55px 'Nunito', sans-serif",
        textAlign: "center",
        letterSpacing: "0.075em",
      }}
    >
      {text}
    </div>
  );
}
