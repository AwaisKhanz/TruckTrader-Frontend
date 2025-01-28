import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
