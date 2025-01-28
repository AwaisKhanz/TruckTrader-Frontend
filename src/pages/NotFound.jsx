import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // height: "54vh",
        flex: 1,
        maxWidth: "90%",
        mx: "auto",
        gap: "10px",
        my: 4,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "48px", md: "72px" },
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        404
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "36px" },
          color: "#828282",
          fontWeight: 700,
        }}
      >
        Oops! Page not found.
      </Typography>
      <Button
        component={Link}
        to="/"
        color="secondary"
        variant="contained"
        sx={{ px: 3 }}
      >
        Go to the home page
      </Button>
    </Box>
  );
}
