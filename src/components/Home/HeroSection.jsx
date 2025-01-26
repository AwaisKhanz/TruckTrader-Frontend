import React from "react";
import { Box, Typography, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import backgroundImage from "../../assets/Home/HeroSection/Hero.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: "90%",
        mx: "auto",
        height: "548px",
        width: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: { xs: "0 25px", md: "0 10%" },
          gap: "24px",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "30px", md: "64px" },
            lineHeight: "1",
            maxWidth: "541px",
            color: "#FFFFFF",
          }}
        >
          {t("heroSection.heading")}
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            maxWidth: "541px",
            fontSize: { xs: "20px", md: "20px" },
            lineHeight: "1.2",
            color: "#CDCDCD !important",
            fontWeight: "400 !important",
            fontStyle: "normal",
          }}
        >
          {t("heroSection.subtitle.part1")}
          <span style={{ fontWeight: "600", color: "white" }}>
            {t("heroSection.subtitle.highlight1")}
          </span>{" "}
          {t("heroSection.subtitle.part2")}
          <span style={{ fontWeight: "600", color: "white" }}>
            {t("heroSection.subtitle.highlight2")}
          </span>
          {t("heroSection.subtitle.part3")}
        </Typography>

        {/* Search Box */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "541px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "10px",
            mt: "16px",
          }}
        >
          <InputBase
            placeholder="Search in Trucktrader...."
            sx={{
              flex: 1,
              fontSize: "16px",
              px: { xs: "12px", md: "20px" },
              color: "#6A6A6A",
              "::placeholder": {
                color: "#808080 !important",
              },
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              navigate("/filter");
            }}
          >
            <SearchIcon
              sx={{ marginRight: "4px", fontSize: { xs: "16px", md: "24px" } }}
            />
            {t("heroSection.searchButton")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
