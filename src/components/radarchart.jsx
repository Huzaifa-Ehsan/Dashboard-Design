import React from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const data = [
  { subject: "Confidence", value: 120 },
  { subject: "Verbal Clarity", value: 110 },
  { subject: "Endurance", value: 130 },
  { subject: "Agility", value: 85 },
  { subject: "Skill", value: 150 },
];

const maxValue = Math.max(...data.map((d) => d.value));

const CustomTick = (props) => {
  const { x, y, payload } = props;
  const subject = payload.value;
  const value = data.find((d) => d.subject === subject)?.value || 0;
  const percentage = ((value / maxValue) * 100).toFixed(0);

  const textStyle = { fill: "#000", fontSize: 14, fontFamily: "Arial" };
  const percentageStyle = {
    fill: "#000",
    fontSize: 14,
    fontFamily: "Arial",
    fontWeight: "bold",
  };

  return (
    <text x={x} y={y} dy={10} textAnchor="middle">
      <tspan x={x} dy={0} style={textStyle}>
        {subject}
      </tspan>
      <tspan x={x} dy={20} style={percentageStyle}>
        {` ${percentage}%`}
      </tspan>
    </text>
  );
};

const RadarChartComponent = () => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={<CustomTick />} />
          <Radar
            name="Outer Layer"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Inner Layer"
            dataKey="value"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent;
