import React from "react";
import "./greeting.css";

export default function OrangeUnderline({
  backgroundColor,
  width,
  height,
  borderRadius,
  marginTop,
}) {
  return (
    <div
      className="underlineMove"
      style={{
        backgroundColor: "#E76F51",
        width: "478px",
        height: "7px",
        borderRadius: "25px",
        marginTop: "10px",
      }}
    ></div>
  );
}
