import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import ListingCard from "../../components/Common/ListingCard";
import { useTranslation } from "react-i18next";
import { transformListingData } from "../../utils/common";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

export default function LatestListingSection({ listings, loading }) {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", py: "60px" }}>
      {/* Title and Show All Button */}
      <Link to={"/filter"}>
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
      </Link>

      {/* Grid of Listings */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(325px, 1fr))",
          gap: "24px",
        }}
      >
        {loading
          ? Array.from(new Array(6)).map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  height: "400px",
                  bgcolor: "#f0f0f0",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "90%",
                    height: "180px",
                    bgcolor: "#e0e0e0",
                    borderRadius: "8px",
                  }}
                />
                <Box
                  sx={{
                    width: "80%",
                    height: "20px",
                    bgcolor: "#e0e0e0",
                    borderRadius: "4px",
                    mt: 2,
                  }}
                />
                <Box
                  sx={{
                    width: "60%",
                    height: "20px",
                    bgcolor: "#e0e0e0",
                    borderRadius: "4px",
                    mt: 1,
                  }}
                />
              </Box>
            ))
          : listings?.map((item, index) => (
              <Box key={index}>
                <ListingCard data={transformListingData(item)} />
              </Box>
            ))}
      </Box>
    </Box>
  );
}
