import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";

export default function Times() {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  // Generate times (e.g. 9 AM to 9 PM)
  const times = [];
  for (let hour = 9; hour <= 21; hour++) {
    const period = hour < 12 ? "AM" : "PM";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    times.push(`${displayHour}:00 ${period}`);
  }

  return (
    <Box sx={{ minWidth: 200, backgroundColor: "white", borderRadius: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="times-label">Select Time</InputLabel>
        <Select
          labelId="times-label"
          id="times-select"
          value={time}
          onChange={handleChange}
          MenuProps={{
            disablePortal: true, // 👈 Fix for modal rendering
          }}
        >
          {times.map((t, index) => (
            <MenuItem key={index} value={t}>
              {t}
            </MenuItem>
          ))}

          {/* Custom Button inside dropdown */}
          <MenuItem
            disableRipple
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 1.5,
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <Button
              variant="contained"
              color="error"
              fullWidth
              sx={{ borderRadius: 2 }}
              onClick={() => alert(`Selected time: ${time || "None"}`)}
            >
              Display Times
            </Button>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
