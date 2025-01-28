import React from "react";
import LoginIndex from "../components/Login/LoginIndex";
import { Box } from "@mui/material";

export default function Login() {
  return (
    <Box sx={{ flex: 1, height: "100%", minHeight: "100%" }}>
      <LoginIndex />
    </Box>
  );
}
