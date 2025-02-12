import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import InfoIcon from "@mui/icons-material/Info"; // Example icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import VerifiedIcon from "@mui/icons-material/Verified";

import TargetedAudienceIcon from "@mui/icons-material/People"; // New Icon
import CompetitivePricingIcon from "@mui/icons-material/MonetizationOn"; // New Icon
import CustomizedSolutionsIcon from "@mui/icons-material/Settings"; // New Icon
import ContinuousImprovementIcon from "@mui/icons-material/Autorenew"; // New Icon

const features = [
  {
    id: 1,
    title: "addedValue.userFriendly.title",
    description: "addedValue.userFriendly.description",
    icon: <TargetedAudienceIcon sx={{ fontSize: "40px", color: "#2E75BA" }} />,
  },
  {
    id: 2,
    title: "addedValue.greatReach.title",
    description: "addedValue.greatReach.description",
    icon: (
      <CompetitivePricingIcon sx={{ fontSize: "40px", color: "#8E24AA" }} />
    ),
  },
  {
    id: 3,
    title: "addedValue.cheapPlacement.title",
    description: "addedValue.cheapPlacement.description",
    icon: (
      <CustomizedSolutionsIcon sx={{ fontSize: "40px", color: "#F9A825" }} />
    ),
  },
  {
    id: 4,
    title: "addedValue.highQuality.title",
    description: "addedValue.highQuality.description",
    icon: (
      <ContinuousImprovementIcon sx={{ fontSize: "40px", color: "#E91E63" }} />
    ),
  },
];
export default function AddedValueSection() {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", mt: { xs: "60px", md: "80px" } }}>
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          fontSize: { xs: "24px", md: "40px" },
          textAlign: "center",
          color: "black",
          mb: { xs: "30px", md: "60px" },
        }}
      >
        {t("addedValue.title")}{" "}
      </Typography>

      {/* Features Grid */}
      <Grid container spacing="20px">
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.id}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "24px",
                textAlign: "left",
                height: "100%",
              }}
            >
              {/* Icon */}
              <Box sx={{ mb: "16px" }}>{feature.icon}</Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#333",
                  mb: "8px",
                }}
              >
                {t(feature.title)}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  color: "#6A6A6A",
                  lineHeight: "1.5",
                }}
              >
                {t(feature.description)}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
