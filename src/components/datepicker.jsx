import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, startOfWeek, endOfWeek, getWeek, isThisWeek } from "date-fns";
import { ChevronDownIcon, CalendarIcon } from "@heroicons/react/solid";

const CustomDatePicker = ({styleDatePicker, iconStyle}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const isLastWeek = (date) => {
    const currentWeek = getWeek(new Date());
    const selectedWeek = getWeek(date);
    return selectedWeek === currentWeek - 1;
  };

  const getWeekRange = (date) => {
    const start = startOfWeek(date, { weekStartsOn: 1 });
    const end = endOfWeek(date, { weekStartsOn: 1 });

    const formattedStart = format(start, "EEE, MMM d");
    const formattedEnd = format(end, "EEE, MMM d");
    let weekLabel = "";

    if (isThisWeek(date, { weekStartsOn: 1 })) {
      weekLabel = " (This Week)";
    } else if (isLastWeek(date)) {
      weekLabel = " (Last Week)";
    }

    return `${formattedStart} - ${formattedEnd}${weekLabel}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        className="custom-input bg-[#fff]"
        onClick={() => setIsOpen(!isOpen)}
        style={styleDatePicker}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <CalendarIcon className={iconStyle} />
          <span style={{ marginLeft: "8px" }}>
            {selectedDate ? getWeekRange(selectedDate) : "Select a Week"}
          </span>
        </div>
        <ChevronDownIcon className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          className="datepicker-dropdown"
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: "999",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            calendarClassName="custom-calendar"
            dateFormat="MMMM d, yyyy"
            placeholderText="Click to select a week"
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
