import { Box } from "@mui/material";
import React from "react";

export default function Logo({ color = "white" }) {
  const baseStyles = {
    fontSize: { xs: "20px", md: "30px" },
    fontWeight: "900",
    lineHeight: "1",
    fontFamily: "'Russo One', sans-serif",
  };

  return color === "white" ? (
    <Box
      sx={{
        ...baseStyles,
        color: "#BD0000",
      }}
    >
      TRUCK<span style={{ color: "white" }}>TRADER</span>
    </Box>
  ) : (
    <Box
      sx={{
        ...baseStyles,
        color: "black",
      }}
    >
      TRUCK<span style={{ color: "#BD0000" }}>TRADER</span>
    </Box>
  );
}
