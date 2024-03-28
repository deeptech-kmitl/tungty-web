import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { WhiteTextField } from "./WhiteTextField";
import { Dayjs } from "dayjs";

const CustomDatePicker = ({ value, onChange }) => {
  const [formattedDate, setFormattedDate] = useState(
    value ? formatDate(value) : "" // Set formatted date on initial render and value change
  );

  const handleDateChange = (newValue) => {
    // Convert formatted date string back to a Date object before passing it to onChange
    const parsedDate = Dayjs(newValue).toDate();
    onChange(parsedDate); // Pass the converted Date object
    setFormattedDate(formatDate(newValue)); // Update formatted date state
  };

  const formatDate = (date) => {
    const day = date.format("DD");
    const month = date.format("MM");
    const year = date.format("YYYY");
    return `${day}-${month}-${year}`;
  };

  return (
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={value ? Dayjs(value).toDate() : null} // Handle initial value and convert if necessary
        onChange={handleDateChange}
        renderInput={(params) => (
          <WhiteTextField {...params} variant="standard" style={{ width: "100%" }} />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;