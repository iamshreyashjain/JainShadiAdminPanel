import React from "react";

const DateFilter = ({ dateRange, setDateRange }) => {
  return (
    <div className="flex gap-2 items-center bg-stone-100 p-2 rounded-md">
      <label className="bg-white border border-gray-200 p-1 rounded-md flex gap-1">
      Start Date: 
      <input
        type="date"
        value={dateRange.startDate}
        onChange={(e) => setDateRange(prev => ({ ...prev, startDate: e.target.value }))}
      />
      </label>
      <label className="bg-white border border-gray-200 p-1 rounded-md flex gap-1">End Date: 
      <input
        type="date"
        value={dateRange.endDate}
        onChange={(e) => setDateRange(prev => ({ ...prev, endDate: e.target.value }))}
      />
      </label>
    </div>
  );
};

export default DateFilter;
