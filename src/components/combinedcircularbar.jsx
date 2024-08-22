import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LayeredCircularProgressbar = ({ values, colors, strokeWidth, gap }) => {
  const containerSize = 120;

  return (
    <div
      style={{
        position: "relative",
        width: `${containerSize}px`,
        height: `${containerSize}px`,
      }}
    >
      {values.map((value, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transform: `scale(${1 - index * (0.1 + gap / 100)})`,
            transformOrigin: "center center",
          }}
        >
          <CircularProgressbar
            value={value}
            styles={buildStyles({
              pathColor: colors[index] || "#FFBC2A",
              trailColor: "#eee",
              strokeWidth: strokeWidth || 6,
            })}
          />
        </div>
      ))}
    </div>
  );
};

export default LayeredCircularProgressbar;
