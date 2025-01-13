import { useState } from "react";
import { DateRangePicker } from "mynaui";

const MyDateRangePicker = () => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateChange = (range) => {
    setDateRange({
      startDate: range.startDate,
      endDate: range.endDate,
    });
    console.log("Selected Date Range:", range);
  };

  return (
    <div className="date-range-picker">
      <h2>Select Date Range</h2>
      <DateRangePicker
        value={dateRange}
        onChange={handleDateChange}
        format="MM/dd/yyyy"
        placeholder="Select date range"
        minDate={new Date("2023-01-01")}
        maxDate={new Date("2025-12-31")}
        disablePast
      />
      {dateRange.startDate && dateRange.endDate && (
        <div className="selected-dates">
          <p>Start Date: {dateRange.startDate.toLocaleDateString()}</p>
          <p>End Date: {dateRange.endDate.toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default MyDateRangePicker;
