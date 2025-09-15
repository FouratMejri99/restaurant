import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom"; // import useNavigate
import TimeButton from "./button/button";
import "./planing.css";

export default function Planning({ selectedTime }) {
  const navigate = useNavigate(); // initialize navigate

  const totalButtons = 16; // 4x4 grid
  const interval = 15; // minutes between each button
  const defaultStart = 9 * 60; // 9:00 AM in minutes
  const endMinutes = 20 * 60 + 30; // 20:30 max

  const timeToMinutes = (timeStr) => {
    if (!timeStr) return defaultStart;
    const [time, modifier] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    let h = hours % 12;
    if (modifier === "PM") h += 12;
    return h * 60 + minutes;
  };

  const minutesToTime = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    const period = h >= 12 ? "PM" : "AM";
    const displayHour = h % 12 === 0 ? 12 : h % 12;
    const displayMinutes = m.toString().padStart(2, "0");
    return `${displayHour}:${displayMinutes} ${period}`;
  };

  let startMinutes = timeToMinutes(selectedTime);

  if (startMinutes + interval * (totalButtons - 1) > endMinutes) {
    startMinutes = endMinutes - interval * (totalButtons - 1);
  }

  const times = [];
  for (let i = 0; i < totalButtons; i++) {
    times.push(minutesToTime(startMinutes + i * interval));
  }

  const rows = [];
  for (let i = 0; i < times.length; i += 4) {
    rows.push(times.slice(i, i + 4));
  }

  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 2,
        minWidth: 400,
        backgroundColor: "white",
      }}
    >
      <h4 className="title">
        Our Cocktail Bar operates a no-reservations policy; should you wish to
        enjoy drinks beforehand,
      </h4>
      <h4 className="second-title">
        please allow some time in anticipation of your booking in the
        restaurant.
      </h4>
      <h4 className="sub-title">Planning Your Visit</h4>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {rows.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {row.map((time) => (
              <TimeButton
                key={time}
                time={time}
                onClick={() => navigate("/booktable", { state: { time } })}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Card>
  );
}
