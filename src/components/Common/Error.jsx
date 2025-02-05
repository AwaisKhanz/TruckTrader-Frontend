import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const Error = ({ message = "Error", size = 32 }) => {
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
      <ErrorIcon
        sx={{
          marginBottom: "1rem",
          color: "black",
          fontSize: { xs: "24px", md: "32px" },
        }}
      />
      <Typography
        variant="body1"
        color="black"
        sx={{ fontWeight: 600, fontSize: "28px" }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Error;
