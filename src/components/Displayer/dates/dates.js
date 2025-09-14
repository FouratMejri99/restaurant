import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Dates() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div style={{ background: "white", padding: "16px", borderRadius: "8px" }}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline // inline = shows calendar directly (no input field)
      />
    </div>
  );
}
