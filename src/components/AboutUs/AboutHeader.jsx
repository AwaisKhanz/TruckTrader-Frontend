import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import backgroundImage from "../../assets/AboutUs/Header/Background.png"; // Replace with your actual image path

export default function AboutHeader() {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto" }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "461px", md: "461px" },
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#FFFFFF",
          padding: "0 16px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            maxWidth: "1062px",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "32px", md: "64px" },
              marginBottom: "20px",
            }}
          >
            {t("aboutHeader.title")}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              lineHeight: "24px",
              color: "#FFFFFF",
            }}
          >
            {t("aboutHeader.description")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
