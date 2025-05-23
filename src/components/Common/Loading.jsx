import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = ({ message = "Loading...", size = 32 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "1rem",
      }}
    >
      <CircularProgress
        size={size}
        sx={{ marginBottom: "1rem", color: "black" }}
      />
      <Typography
        variant="body1"
        color="black"
        sx={{ fontWeight: 600, fontSize: "22px" }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Loading;
