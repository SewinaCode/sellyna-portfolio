import React from "react";

export default function TopLeftGreet({
  backgroundColor,
  color,
  font,
  text,
  textAlign,
  // marginLeft,
}) {
  return (
    <div
      style={{
        backgroundColor: "none",
        color: "white",
        font: "bold 55px 'Nunito', sans-serif",
        textAlign: "center",
        // marginLeft: "50px",
      }}
    >
      {text}
    </div>
  );
}
