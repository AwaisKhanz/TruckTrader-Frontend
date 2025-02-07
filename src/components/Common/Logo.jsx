import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ color = "white" }) {
  const isWhite = color === "white";

  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Box
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          fontWeight: "900",
          lineHeight: "1",
          fontFamily: "'Russo One', sans-serif",
          color: isWhite ? "#BD0000" : "black",
        }}
      >
        TRUCK
        <Box component="span" sx={{ color: isWhite ? "white" : "#BD0000" }}>
          TRADER
        </Box>
      </Box>
    </Link>
  );
}
