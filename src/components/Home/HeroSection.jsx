import React, { useState } from "react";
import { Box, Typography, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import backgroundImage from "../../assets/Home/HeroSection/Hero.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [searchText, setSearchText] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/filter?search=${encodeURIComponent(searchText.trim())}`);
    }
  };

  return (
    <>
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
          display: { xs: "none", md: "block" },
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
              fontSize: { xs: "24px", md: "42px" },
              lineHeight: "1",
              color: "#FFFFFF",
            }}
          >
            {t("heroSection.heading")}
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              maxWidth: "541px",
              fontSize: { xs: "16px", md: "20px" },
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
              placeholder={t("filterHeader.searchPlaceholder")}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
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
            <Button variant="contained" onClick={handleSearch}>
              <SearchIcon
                sx={{
                  marginRight: "4px",
                  fontSize: { xs: "16px", md: "24px" },
                }}
              />
              {t("heroSection.searchButton")}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          maxWidth: "90%",
          mx: "auto",
          width: "100%",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          padding: "10px",
          mt: "16px",
        }}
      >
        <InputBase
          placeholder={t("filterHeader.searchPlaceholder")}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
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
          sx={{
            minWidth: "40px !important",
          }}
          variant="contained"
          onClick={handleSearch}
        >
          <SearchIcon
            sx={{ marginRight: "4px", fontSize: { xs: "16px", md: "24px" } }}
          />
        </Button>
      </Box>
    </>
  );
}
