import React from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../../assets/Home/FeaturedTrucks/Background.png";
import { Link } from "react-router-dom";

export default function FeaturedTrucksSection() {
  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", pb: "60px" }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "280px", md: "550px" },
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "left", md: "center" },
          backgroundRepeat: "no-repeat",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "20px", md: "40px" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#FFFFFF",
            paddingLeft: "20px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              maxWidth: "460px",
              fontWeight: "500",
              fontSize: { xs: "24px", md: "64px" },
              lineHeight: "1.2",
              mb: "16px",
            }}
          >
            This Month's <span style={{ color: "#BD0000" }}>Featured </span>
            Trucks
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "19px" },
              fontWeight: 400,
              color: "#BFBFBF",
              mb: "20px",
              maxWidth: "280px",
            }}
          >
            Highlighting the Car Everyone's Talking About This Month
          </Typography>
          <Link to={"/filter"}>
            <Button variant="contained" color="secondary">
              View All Trucks
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
