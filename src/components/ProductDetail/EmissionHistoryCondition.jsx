import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function EmissionHistoryCondition({
  emissionHistory,
  environmentConsumption,
}) {
  const { t } = useTranslation();

  console.log(environmentConsumption);

  // Extract maintenance history from subsections
  const maintenanceHistory =
    emissionHistory?.subsections?.[0]?.fields?.reduce((acc, field) => {
      acc[field.key] = field.display_value;
      return acc;
    }, {}) || {};

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
      {/* Emissions Standards Section */}
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
          {t("productDetail.emissions.title")}
        </Typography>
        <Divider sx={{ mb: "28px" }} />

        {/* Extract environment consumption data */}
        {environmentConsumption?.subsections?.[0]?.fields?.length > 0 && (
          <>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography>
                {t("productDetail.emissions.emissionClass")}
              </Typography>
              <Typography>
                {environmentConsumption.subsections[0].fields.find(
                  (field) => field.key === "powertrain.emissions.class"
                )?.display_value || "N/A"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                {t("productDetail.emissions.fuelConsumption")}
              </Typography>
              <Typography>
                {environmentConsumption.subsections[0].fields.find(
                  (field) =>
                    field.key ===
                    "powertrain.engine.energy.fuel.consumption.estimated.combined"
                )?.display_value || "N/A"}
              </Typography>
            </Box>
          </>
        )}
      </Box>

      {/* History and Condition Section */}
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
          {t("productDetail.history.title")}
        </Typography>
        <Divider sx={{ mb: "28px" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.history.dateOfFirstRegistration")}
            </Typography>
            <Typography>
              {maintenanceHistory["history.first_registration.date"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.history.dateOfFirstAdmission")}
            </Typography>
            <Typography>
              {maintenanceHistory[
                "history.current_registration.first_admission"
              ] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.history.maintenanceBooklet")}
            </Typography>
            <Typography>
              {maintenanceHistory["history.maintenance_booklet"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.history.apkValidUntil")}</Typography>
            <Typography>
              {maintenanceHistory["region_specific.nl.apk_date"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.history.generalCondition")}
            </Typography>
            <Typography>
              {maintenanceHistory["condition.damage.state"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.history.numberOfKeys")}</Typography>
            <Typography>
              {maintenanceHistory["condition.key_count"] || "N/A"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              {t("productDetail.history.numberOfHandTransmitters")}
            </Typography>
            <Typography>
              {maintenanceHistory["condition.hand_transmitter_count"] || "N/A"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
