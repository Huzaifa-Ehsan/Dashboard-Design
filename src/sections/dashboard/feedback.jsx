import React, { useState } from "react";
import CustomDatePicker from "../../components/datepicker";
import SimpleDropdown from "../../components/dropdown";
import FeedbackData from "./feedbackData";

const Feedback = () => {
  const [selectedOption, setSelectedOption] = useState("Collaboaration");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const style = {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    fontSize: "14px",
  };
  return (
    <div className="bg-[#eee] px-4 py-8 space-y-2 rounded-md">
      <div className="flex justify-between">
        <span className="text-xl font-bold text-[#6838A1]">Feedback</span>
        <img src="/icons/notification.png" alt="" className="w-7" />
      </div>
      <div className="flex flex-col justify-between space-y-4 lg:flex-row lg:space-y-0">
        <span>
          {/* <SimpleDropdown /> */}
          <SimpleDropdown onOptionSelect={handleOptionSelect} />
        </span>
        <span>
          <CustomDatePicker
            styleDatePicker={style}
            iconStyle="w-6 h-6 text-[#6739A6]"
          />
        </span>
      </div>
      <FeedbackData selectedOption={selectedOption} />
    </div>
  );
};

export default Feedback;
