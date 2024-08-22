import React from "react";
import RadarChartComponent from "../../components/radarchart";
import LineChartComponent from "../../components/linechart";

const Charts = () => {
  return (
    <div className="flex flex-col justify-between w-full lg:flex-row">
      <div className="w-full space-y-4 lg:w-1/2">
        <div className="flex gap-4 full">
          <div className="lg:w-[calc(50%-20px)] w-full">
            <div className="bg-[#fff] p-2 flex gap-2 rounded-md justify-center items-center">
              <img
                src="/icons/colleague.webp"
                alt=""
                className="object-cover w-16 h-16 rounded-full"
              />
              <div className="flex flex-col justify-center w-full">
                <span className="text-base">Listening Ability</span>

                <span className="font-bold text-[#6838A1] text-xl">86%</span>
                <span className="text-xs text-red-500">
                  Lorem ipsum dolor sit.
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-[calc(50%-20px)] w-full">
            <div className="bg-[#fff] p-2 flex gap-2 rounded-md justify-center items-center">
              <img
                src="/icons/colleague.webp"
                alt=""
                className="object-cover w-16 h-16 rounded-full"
              />
              <div className="flex flex-col justify-center w-full">
                <span className="text-base">Listening Ability</span>

                <span className="font-bold text-[#6838A1] text-xl">86%</span>
                <span className="text-xs text-red-500">
                  Lorem ipsum dolor sit.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] rounded-md w-full lg:w-[calc(100%-20px)] px-8 py-2 space-y-2">
          <div className="text-[#6838A1] text-xl font-bold ">
            Problem Oriented vs Solution Oriented Ratio
          </div>
          <div className="flex items-center justify-center">

          <LineChartComponent />
          </div>
          <span className="text-xs text-red-500"> Lorem ipsum dolor sit.</span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-[#fff] rounded-md p-4 px-8 py-2">
        <div className="text-[#6838A1] text-xl font-bold">
          Clarity of Expression
        </div>
        <RadarChartComponent />
        <span className="text-xs text-red-500"> Lorem ipsum dolor sit.</span>
      </div>
    </div>
  );
};

export default Charts;
