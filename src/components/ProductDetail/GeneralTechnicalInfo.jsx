import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function GeneralTechnicalInfo({ generalInfo, technicalInfo }) {
  const { t } = useTranslation();

  console.log(technicalInfo);

  // Extract general information fields
  const generalFields = generalInfo?.subsections?.[0]?.fields || [];
  const generalData = generalFields.reduce((acc, field) => {
    acc[field.key] = field.display_value;
    return acc;
  }, {});

  // Extract technical information fields
  const technicalFields = technicalInfo?.subsections?.[0]?.fields || [];
  const technicalData = technicalFields.reduce((acc, field) => {
    acc[field.key] = field.display_value;
    return acc;
  }, {});

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
            <Typography sx={{ textAlign: "right" }}>
              {generalData["general.make.name"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.model")}</Typography>
            <Typography sx={{ textAlign: "right" }}>
              {generalData["general.type.name"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.type")}</Typography>
            <Typography sx={{ textAlign: "right" }}>
              {generalData["general.type.name"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.year")}</Typography>
            <Typography sx={{ textAlign: "right" }}>
              {generalData["general.year"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.odometer")}</Typography>
            <Typography sx={{ textAlign: "right" }}>
              {generalData["condition.odometer"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.generalInfo.category")}</Typography>
            <Typography sx={{ textAlign: "right" }}>
              {generalData["general.category"] || "N/A"}
            </Typography>
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
            <Typography sx={{ textAlign: "right" }}>
              {technicalData["powertrain.engine.power.combined"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.technicalInfo.fuelType")}</Typography>
            <Typography sx={{ textAlign: "right" }}>
              {technicalData["powertrain.engine.energy.type.code"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.technicalInfo.drivetrain")}
            </Typography>
            <Typography sx={{ textAlign: "right" }}>
              {technicalData["powertrain.axles.driven_wheels"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.technicalInfo.transmission")}
            </Typography>
            <Typography sx={{ textAlign: "right" }}>
              {technicalData["powertrain.transmission.formatted"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.technicalInfo.axleConfiguration")}
            </Typography>
            <Typography sx={{ textAlign: "right" }}>
              {technicalData["powertrain.axles.configuration_string"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.technicalInfo.dimensions")}
            </Typography>
            <Typography sx={{ textAlign: "right" }}>
              {technicalData["body.dimensions.combined"] || "N/A"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
