import React from "react";
import LadderChart from "../../components/ladderchart";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Staticstics = () => {
  const text = "Level8";
  const value = 66;
  return (
    <>
      <div className=" min-w-full md:min-w-[calc(50%-4px)] lg:min-w-[calc(33%-4px)]">
        <div className="bg-[#fff] p-2 flex gap-2 rounded-md">
          <img
            src="/icons/colleague.webp"
            alt=""
            className="object-cover w-16 h-16 rounded-full"
          />
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-between">
              <span className="text-base">Awards</span>
              <img src="/icons/notification.png" alt="" className="w-6" />
            </div>
            <span className="font-bold text-[#6838A1] text-xl">
              Lorem, ipsum.
            </span>
          </div>
        </div>
      </div>
      <div className="min-w-full md:min-w-[calc(50%-4px)] lg:min-w-[calc(33%-4px)]">
        <div className="bg-[#fff] p-2 flex gap-2 rounded-md">
          <div className="flex items-center justify-center w-max min-h-16">
            <LadderChart />
          </div>
          <div className="flex flex-col justify-center w-full">
            <span className="text-base">Level</span>
            <span className="font-bold text-[#6838A1] text-xl">8</span>
          </div>
        </div>
      </div>
      <div className="min-w-full md:min-w-[calc(50%-4px)] lg:min-w-[calc(33%-4px)]">
        <div className="bg-[#fff] p-2 flex gap-2 rounded-md">
          <div className="flex items-center justify-center w-max min-h-16 ">
            <div className="w-16 h-16">
              <CircularProgressbar
                value={value}
                text={`${text}`}
                styles={buildStyles({
                  pathColor: "#FFBC2A",
                  trailColor: "#eee",
                  textColor: "#000",
                  textSize: "12px",
                })}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full">
            <span className="text-base">Integration</span>
            <span className="font-bold text-[#6838A1] text-xl">34%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staticstics;
