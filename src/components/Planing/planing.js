import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TimeButton from "./button/button";
import "./planing.css";
export default function Planning() {
  // Generate times (12 AM to 3 PM for example, 16 times for 4x4 grid)
  const times = [];
  for (let hour = 0; hour < 16; hour++) {
    const period = hour < 12 ? "AM" : "PM";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    times.push(`${displayHour} ${period}`);
  }

  // Split times into rows of 4
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
        {" "}
        please allow some time in anticipation of your booking in the
        restaurant.
      </h4>
      <h4 className="sub-title">Planing Your visit</h4>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center", // centers rows horizontally
          justifyContent: "center", // optional, centers vertically if needed
        }}
      >
        {rows.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center", // centers buttons in each row
            }}
          >
            {row.map((time) => (
              <TimeButton
                key={time}
                time={time}
                onClick={() => alert(`Selected time: ${time}`)}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Card>
  );
}
