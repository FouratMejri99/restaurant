import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./guest.css";

export default function Guests({ guests, setGuests }) {
  const handleChange = (event) => {
    setGuests(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="guests-select-label" className="input-text">
          Guests
        </InputLabel>
        <Select
          labelId="guests-select-label"
          id="guests-select"
          value={guests}
          onChange={handleChange}
          MenuProps={{
            disablePortal: true, // <-- important fix
          }}
        >
          {[...Array(12)].map((_, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              {i + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
