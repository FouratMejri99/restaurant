import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import "./guest.css";
export default function Guests() {
  const [Guests, setGuests] = React.useState("");

  const handleChange = (event) => {
    setGuests(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className="input-text">
          Guests
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Guests}
          label="Guests"
          onChange={handleChange}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
          <MenuItem value={40}>4</MenuItem>
          <MenuItem value={50}>5</MenuItem>
          <MenuItem value={60}>6</MenuItem>
          <MenuItem value={70}>7</MenuItem>
          <MenuItem value={80}>8</MenuItem>
          <MenuItem value={90}>9</MenuItem>
          <MenuItem value={100}>10</MenuItem>
          <MenuItem value={110}>11</MenuItem>
          <MenuItem value={120}>12</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
