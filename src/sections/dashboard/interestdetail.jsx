import React from "react";
import CombinedCircularProgressbar from "../../components/combinedcircularbar";

const InterestDetail = () => {
  const values = [70, 50, 30, 20];
  const colors = ["#FFBC2A", "#4A90E2", "#7ED321", "#000"];
  return (
    <div className="flex flex-col flex-wrap items-center justify-between w-full p-4 px-8 py-8 space-y-4 bg-white rounded-md lg:flex-row lg:space-y-0">
      <div className="w-[20%]">
        <CombinedCircularProgressbar
          values={values}
          colors={colors}
          strokeWidth={6}
          gap={10}
        />
      </div>
      <div className="flex justify-between w-[80%] flex-wrap gap-4">
        <div className="flex flex-col">
          <span>Lorem, ipsum.</span>
          <span className="text-[#6838A1] text-3xl font-bold">80%</span>
        </div>
        <div className="flex flex-col">
          <span>Lorem, ipsum.</span>
          <span className="text-3xl font-bold text-red-500">80%</span>
        </div>
        <div className="flex flex-col">
          <span>Lorem, ipsum.</span>
          <span className="text-3xl font-bold text-red-500">80%</span>
        </div>
        <div className="flex flex-col">
          <span>Lorem, ipsum.</span>
          <span className="text-[#6838A1] text-3xl font-bold">80%</span>
        </div>
      </div>
    </div>
  );
};

export default InterestDetail;
