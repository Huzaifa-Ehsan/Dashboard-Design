import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", uv: 10, pv: 40 },
  { name: "Feb", uv: 30, pv: 90 },
  { name: "Mar", uv: 40, pv: 10 },
  { name: "Apr", uv: 80, pv: 10 },
  { name: "May", uv: 40, pv: 40 },
  { name: "Jun", uv: 45, pv: 70 },
  { name: "Jul", uv: 40, pv: 30 },
];

const LineChartComponent = () => {
  return (
    <div className="w-full h-[300px]"> 
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} tickCount={6} tickMargin={10} />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#FF0000"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#000000"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
