import React from "react";
import CustomDatePicker from "../../components/datepicker";

const ProfileHeader = () => {
  const style = {
    padding: "4px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    fontSize: "12px",
  };
  return (
    <div className="flex flex-col justify-between space-y-4 lg:flex-row lg:space-y-0">
      <div className="flex flex-col items-center space-y-2 lg:items-start">
        <span className="text-[#6838A1] font-bold text-2xl">Hi, Hassan!</span>
        <span className="">
          <CustomDatePicker
            styleDatePicker={style}
            iconStyle="w-4 h-4 text-[#6739A6]"
          />
        </span>
      </div>
      <div className="flex flex-col items-center space-x-2 lg:items-end">
        <div className="flex">
          <div className="flex flex-col">
            <span className="flex items-end justify-end font-semibold">
              Hassan Ahmed
            </span>
            <span className="text-sm">hassanahmad@gmail.com</span>
          </div>
          <div>
            <img
              src="/icons/profile.jpg"
              alt=""
              className="flex object-contain object-top w-12 h-12"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 p-2">
          <img src="/icons/notification.png" alt="" className="w-4" />
          <img src="/icons/notification.png" alt="" className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
