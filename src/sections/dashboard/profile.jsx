import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CakeIcon, MusicNoteIcon } from "@heroicons/react/solid";

const ProfileDetails = () => {
  const text = "Level8";
  const value = 66;

  return (
    <div className="flex flex-wrap justify-between w-full gap-4 p-4 py-8 bg-white rounded-md ">
      <div className="flex items-center justify-center w-full md:w-[calc(50%-10px)] lg:w-[calc(33%-10px)]">
        <div className="w-40 h-40">
          <CircularProgressbar
            value={value}
            text={`${text}`}
            strokeWidth={6}
            styles={buildStyles({
              pathColor: "#FFBC2A",
              trailColor: "#eee",
              textColor: "#000",
              textSize: "12px",
            })}
          />
          ;
        </div>
      </div>
      <div className="lg:w-[calc(33%-10px)] md:w-[calc(50%-10px)] w-full flex items-center justify-center lg:justify-start">
        <div className="space-y-1">
          <span className="text-2xl font-bold text-[#6838A1]">
            Hassan Ahmed
          </span>
          <div className="text-sm">
            <span>Senior Manager</span> |<span> Development Department</span>
          </div>
          <div className="flex justify-between min-w-[50%] max-w-[80%] ">
            <span>Indian</span>
            <span className="flex gap-2">
              Interests: <MusicNoteIcon className="w-4" />
              <CakeIcon className="w-4" />
            </span>
          </div>
          <div className="space-x-1">
            <span>Employement Period:</span>
            <span className="font-bold">6 months</span>
          </div>
          <div className="space-x-1">
            <span>Time Zone:</span>
            <span className="font-bold">12:45 IST</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:w-[calc(33%-10px)] md:w-[calc(50%-10px)] w-full">
        <img
          src="/icons/profile.jpg"
          alt=""
          className="flex object-contain object-top w-full h-40"
        />
      </div>
    </div>
  );
};

export default ProfileDetails;
