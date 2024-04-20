import React from "react";
import "./App.css";

const MonthAndSearch = ({
  selectedMonth,
  onSearchChange,
  value,
  onMonthChange,
  onClear,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="flex justify-between m-5">
      {/* Search Box */}
      <div className="bg-[#f8df8c] font-semibold rounded-full">
        <input
          className="bg-[#f8df8c] w-48  px-6 py-3 focus:outline-none placeholder-black ::placeholder rounded-full"
          type="text"
          value={value}
          onChange={onSearchChange}
          placeholder="Search transaction"
        />
       
      </div>

      {/* Month Changer */}
      <div className="container max-w-max bg-[#ebb840] rounded-xl px-2">
        <select
          className="bg-[#ebb840] font-semibold rounded-xl p-3 focus:outline-none"
          value={selectedMonth}
          onChange={onMonthChange}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthAndSearch;
