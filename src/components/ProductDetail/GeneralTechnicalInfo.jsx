import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function GeneralTechnicalInfo() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: "24px",
        maxWidth: "90%",
        mx: "auto",
        mt: "20px",
      }}
    >
      {/* General Information Section */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          padding: { xs: "26px", md: "36px" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#BD0000",
            mb: "16px",
            fontSize: { xs: "20px", md: "24px" },
          }}
        >
          {t("productDetail.generalInfo.title")}
        </Typography>
        <Divider sx={{ mb: "28px" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.brand")}</Typography>
            <Typography>Volvo</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.model")}</Typography>
            <Typography>FM 300</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.type")}</Typography>
            <Typography>FM 300</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.year")}</Typography>
            <Typography>2006</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.odometer")}</Typography>
            <Typography>128,888,000km</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.category")}</Typography>
            <Typography>Truck</Typography>
          </Box>
        </Box>
      </Box>

      {/* Technical Information Section */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          padding: { xs: "26px", md: "36px" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#BD0000",
            mb: "16px",
            fontSize: { xs: "20px", md: "24px" },
          }}
        >
          {t("productDetail.technicalInfo.title")}
        </Typography>
        <Divider sx={{ mb: "28px" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.technicalInfo.assets")}</Typography>
            <Typography>340 pk (250 kW)</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.technicalInfo.fuelType")}</Typography>
            <Typography>Diesel</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.technicalInfo.drivetrain")}
            </Typography>
            <Typography>RWD</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.technicalInfo.transmission")}
            </Typography>
            <Typography>Manual</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.technicalInfo.axleConfiguration")}
            </Typography>
            <Typography>6x4</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.technicalInfo.dimensions")}
            </Typography>
            <Typography>750x250x300 cm</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
