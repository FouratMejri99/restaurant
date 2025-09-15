import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import * as React from "react";

export default function Dates() {
  const [selectedDate, setSelectedDate] = React.useState(dayjs());

  return (
    <Box
      sx={{
        minWidth: 220,

        borderRadius: 2,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select date"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
    </Box>
  );
}
