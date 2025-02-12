import React from "react";
import { Box, Typography, IconButton, Grid, Divider } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CalenderIcon from "../../assets/Home/FeatureListingSection/Calendar.png";
import GasIcon from "../../assets/Home/FeatureListingSection/Gas.png";
import TransmissionIcon from "../../assets/Home/FeatureListingSection/Transmission.png";
import WheelIcon from "../../assets/Home/FeatureListingSection/Wheel.png";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ListingCard({ data }) {
  return (
    <Box as={Link} className=" !h-full" to={`/product-detail/${data.id}`}>
      <Box
        sx={{
          padding: "16px",
          borderRadius: "20px",
          backgroundColor: "#FFFFFF",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // width: "325px",
          transition: "transform 0.2s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <Box>
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
              loading="lazy"
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
              fontStyle: "normal",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}
          >
            {data.title}
          </Typography>

          {/* Features Section */}
          <Grid container spacing={1}>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={CalenderIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                {data.year}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={TransmissionIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                {data.transmission}
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={GasIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                {data.fuel}
              </Typography>
            </Grid>

            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={WheelIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                {data.mileage}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box>
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
                fontSize: "14px",
                color: "#292D32",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <LocationOnIcon
                sx={{ color: "#9E9E9E", mb: "1px", fontSize: "20px" }}
              />
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
      </Box>
    </Box>
  );
}
