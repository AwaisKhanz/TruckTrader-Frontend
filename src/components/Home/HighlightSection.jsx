import React from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../../assets/Home/HighlightSection/Highlight.png";
import EastIcon from "@mui/icons-material/East";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HighlightSection() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        maxWidth: "90%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "24px",
        justifyContent: "space-between",
        margin: "60px auto",
        alignItems: "stretch",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: { md: 1 },
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          padding: { xs: "20px 40px", md: "40px 50px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "346px",
          alignSelf: "stretch",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            fontSize: { xs: "24px", md: "28px" },
            color: "white",
          }}
        >
          {t("highlightSection.left.title")}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "1.5",
            color: "white",
            fontWeight: "400",
            marginBottom: "16px",
          }}
        >
          {t("highlightSection.left.description")}{" "}
          <Link to={"/advertise"}>
            <span
              style={{
                color: "#BD0000",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              {t("highlightSection.left.readMore")}
            </span>
          </Link>
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          padding: { xs: "20px 40px", md: "40px 50px" },
          gap: "20px",
          alignSelf: "stretch",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "28px" },
            color: "#023247",
          }}
        >
          {t("highlightSection.right.title")}
        </Typography>
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#6A6A6A",
              marginBottom: "24px",
            }}
          >
            {t("highlightSection.right.description")}
          </Typography>
          <Link to={"/filter"}>
            <Button
              variant="contained"
              sx={{ width: "auto" }}
              endIcon={<ArrowForwardIcon sx={{ mt: "-1px" }} />}
            >
              {t("highlightSection.right.button")}{" "}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
