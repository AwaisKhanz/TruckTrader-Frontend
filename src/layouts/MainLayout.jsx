import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
