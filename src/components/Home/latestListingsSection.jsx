import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import ListingCard from "../../components/Common/ListingCard";
import { useTranslation } from "react-i18next";
import truckImage from "../../assets/Home/FeatureListingSection/truck.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const latestListings = Array(6).fill({
  id: 1,
  title: "Volvo Mini Truck 2019",
  year: "2019",
  transmission: "Manual",
  fuel: "Diesel",
  weight: "50 Tons",
  mileage: "250,000KM",
  type: "Box Truck",
  location: "De,Berlin",
  price: "$96,340",
  image: truckImage,
});

export default function LatestListingSection() {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", pb: "60px" }}>
      {/* Title and Show All Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "40px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#212121",
            fontSize: { xs: "24px", md: "32px" },
          }}
        >
          {t("latestListings.title")}
        </Typography>
        <Button variant="contained" color="secondary">
          {t("latestListings.showAll")} <ChevronRightIcon />
        </Button>
      </Box>

      {/* Grid of Listings */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(325px, 1fr))",
          gap: "24px",
        }}
      >
        {latestListings.map((item, index) => (
          <Box key={index}>
            <ListingCard data={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
