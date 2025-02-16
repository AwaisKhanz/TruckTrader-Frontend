import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTranslation } from "react-i18next";

const steps = [
  {
    id: 1,
    title: "howDoWeGetStarted.step1.title",
    description: "howDoWeGetStarted.step1.description",
  },
  {
    id: 2,
    title: "howDoWeGetStarted.step2.title",
    description: "howDoWeGetStarted.step2.description",
  },
  {
    id: 3,
    title: "howDoWeGetStarted.step3.title",
    description: "howDoWeGetStarted.step3.description",
  },
  {
    id: 4,
    title: "howDoWeGetStarted.step4.title",
    description: "howDoWeGetStarted.step4.description",
  },
];

export default function HowDoWeGetStarted() {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", mt: { xs: "60px", md: "120px" } }}>
      {/* Section Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: { xs: "24px", md: "60px" },
          gap: "12px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "600",
            fontSize: { xs: "24px", md: "40px" },
            color: "#000",
          }}
        >
          {t("howDoWeGetStarted.title")}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: "400",
            color: "#6A6A6A",
            maxWidth: { xs: "100%", md: "500px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {t("howDoWeGetStarted.subtitle")}
        </Typography>
      </Box>

      {/* Steps Grid */}
      <Grid container spacing={3}>
        {steps.map((step) => (
          <Grid item xs={12} sm={6} key={step.id}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: { xs: "20px", md: "32px" },
                borderRadius: "16px",
                height: "100%",
                gap: { xs: "14px", md: "26px" },
              }}
            >
              <Box>
                <CheckCircleOutlineIcon
                  sx={{ color: "#BD0000", fontSize: "32px" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "12px", md: "20px" },
                  mb: { xs: "12px", md: "16px" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "14px", md: "22px" },
                    color: "#000",
                  }}
                >
                  {t(step.title)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "12px", md: "16px" },
                    color: "#6A6A6A",
                    lineHeight: "1.5",
                  }}
                >
                  {t(step.description)}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
