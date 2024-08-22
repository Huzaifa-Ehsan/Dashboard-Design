import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const SimpleDropdown = ({ onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Collaboaration");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option);
  };

  const options = [
    "Language Proficiency",
    "Cultural Harmony",
    "Issue Resolution",
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none min-w-[200px] justify-between"
      >
        <span
          className={`${
            selectedOption
              ? "text-[#6739A6] font-semibold text-[18px]"
              : "text-black"
          }`}
        >
          {selectedOption}
        </span>
        <ChevronDownIcon className="w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-48 py-1 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <span
              key={option}
              className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimpleDropdown;
