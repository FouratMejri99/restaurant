import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function MapCard() {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column", // vertical layout
      }}
    >
      {/* Map iframe */}

      {/* Text content */}
      <Box
        sx={{
          width: "100%",
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // centers children horizontally
          backgroundColor: "#fff",
          textAlign: "center", // centers text
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Arigato Dinning
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
          Elegant, understated and seasonal. We have a clear vision; to provide
          exceptional dishes, using the best ingredients the season offers, warm
          and attentive service, carefully chosen wines and cocktails for your
          enjoyment. Welcome to Arigato Dinning.
        </Typography>
      </Box>

      <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24174.74302751873!2d-0.7427747110756981!3d51.46921941655373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c7b63e5d2f63%3A0x3c01a9c75b7baf0b!2sWoodspeen%20Restaurant!5e0!3m2!1sen!2suk!4v1694139117601!5m2!1sen!2suk"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />

      <Box
        sx={{
          justifyContent: "center",
          color: "black",
        }}
      >
        <Typography>Link the map of Arigato Dinning</Typography>
      </Box>
    </Card>
  );
}
