import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Common/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      {children}
    </Box>
  );
};

export default AuthLayout;
