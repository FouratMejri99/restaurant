import Button from "@mui/material/Button";

export default function TimeButton({ time, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: "transparent", // transparent background
        color: "black", // text color
        borderRadius: "10%", // rounded corners
        textTransform: "none", // keep text as-is
        minWidth: 120,
        minHeight: 50,

        border: "1px solid red", // optional: white border for visibility
        "&:hover": {
          backgroundColor: "rgba(255, 0, 0, 0.1)", // subtle hover effect
        },
      }}
    >
      {time}
    </Button>
  );
}
