import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200,
        color: "red",
        fontFamily: "Roboto sans-serif",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
