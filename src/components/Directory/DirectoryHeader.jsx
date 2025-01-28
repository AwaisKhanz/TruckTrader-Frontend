import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import backgroundImage from "../../assets/Directory/Header/Background.png";

export default function DirectoryHeader() {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: { xs: "100%", md: "90%" }, mx: "auto" }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "520px", md: "461px" },
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
          borderRadius: { xs: "none", md: "20px" },
          overflow: "hidden",
        }}
      >
        <Box>
          {/* Title */}
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "24px", md: "64px" },
              marginBottom: "20px",
              maxWidth: "1100px",
              mx: "auto",
            }}
          >
            {t("directoryHeader.title")}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "14px", md: "20px" },
              lineHeight: "24px",
              color: "#CDCDCD",
              maxWidth: "810px",
              mx: "auto",
            }}
          >
            {t("directoryHeader.description")}
          </Typography>
          <Button
            sx={{
              background: "transparent",
              border: "1px solid #fff",
              color: "#fff",
              marginTop: { xs: "20px", md: "36px" },
            }}
          >
            Showcase My Company Here!
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
