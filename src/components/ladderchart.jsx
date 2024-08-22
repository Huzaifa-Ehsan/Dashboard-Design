import React from "react";

const VerticalVolumeChart = () => {
  const levels = [30, 60, 90];

  const svgWidth = 50;
  const svgHeight = 50;
  const barWidth = 10;
  const maxBarHeight = svgHeight - 10;
  const padding = 5;

  const maxValue = Math.max(...levels);

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      {levels.map((value, index) => {
        const x = index * (barWidth + padding) + padding;
        const y = svgHeight - padding;
        const barHeight = (value / maxValue) * maxBarHeight;

        return (
          <rect
            key={index}
            x={x}
            y={y - barHeight}
            width={barWidth}
            height={barHeight}
            fill="#643EA0"
            stroke="#0056A0"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
};

export default VerticalVolumeChart;
