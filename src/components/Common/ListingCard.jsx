import React from "react";
import { Box, Typography, IconButton, Grid, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CalenderIcon from "../../assets/Home/FeatureListingSection/Calendar.png";
import GasIcon from "../../assets/Home/FeatureListingSection/Gas.png";
import SuspensionIcon from "../../assets/Home/FeatureListingSection/Suspension.png";
import TonIcon from "../../assets/Home/FeatureListingSection/Ton.png";
import TransmissionIcon from "../../assets/Home/FeatureListingSection/Transmission.png";
import WheelIcon from "../../assets/Home/FeatureListingSection/Wheel.png";
import { Link } from "react-router-dom";

export default function ListingCard({ data }) {
  return (
    <Link to={`/product-detail/${data.id}`}>
      <Box
        sx={{
          padding: "16px",
          borderRadius: "20px",
          backgroundColor: "#FFFFFF",
          cursor: "pointer",
          // width: "325px",
          transition: "transform 0.2s ease", // Optional animation for hover
          "&:hover": {
            transform: "scale(1.02)", // Slight zoom effect on hover
          },
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            mb: "20px",
          }}
        >
          <img
            src={data.image}
            alt={data.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#0000004D",
              borderRadius: "50%",
              padding: "12px",
            }}
          >
            <FavoriteBorderIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        {/* Title Section */}
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            mb: "12px",
            color: "#000",
            textOverflow: "ellipsis",
            fontStyle: "normal",
          }}
        >
          {data.title}
        </Typography>

        {/* Features Section */}
        <Grid container spacing={1}>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <img src={CalenderIcon} alt={"calendar"} />
            <Typography sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}>
              {data.year}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <img src={TransmissionIcon} alt={"calendar"} />
            <Typography sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}>
              {data.transmission}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <img src={GasIcon} alt={"calendar"} />
            <Typography sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}>
              {data.fuel}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <img src={TonIcon} alt={"calendar"} />
            <Typography sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}>
              {data.type}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <img src={WheelIcon} alt={"calendar"} />
            <Typography sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}>
              {data.weight}
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
            <img src={SuspensionIcon} alt={"calendar"} />
            <Typography sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}>
              {data.mileage}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: "20px" }} />

        {/* Location and Price Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              color: "black",
            }}
          >
            {data.location}
          </Typography>

          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "24px",
              color: "black",
            }}
          >
            {data.price}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
