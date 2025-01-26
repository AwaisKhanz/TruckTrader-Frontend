import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import PlateForm1 from "../../assets/AboutUs/ReadyMadeSection/Plateform_1.png";
import PlateForm2 from "../../assets/AboutUs/ReadyMadeSection/Plateform_2.png";
import PlateForm3 from "../../assets/AboutUs/ReadyMadeSection/Plateform_3.png";

const platforms = [
  "hexon",
  "wheelerDelta",
  "twinVision",
  "123machine",
  "autoscout24",
  "vweAutomotive",
  "customerConnect",
  "autoscout",
  "trucks",
];

const images = [
  {
    id: 1,
    src: PlateForm1,
    alt: "Platform 1",
  },
  {
    id: 3,
    src: PlateForm3,
    alt: "Platform 3",
  },
  {
    id: 2,
    src: PlateForm2,
    alt: "Platform 2",
  },
];

export default function ReadyMadeFeedsSection() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        mt: { xs: "60px", md: "80px" },
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) -44.89%, #000 100%), #585858",
        py: "40px",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "90%", md: "70%" },
          mx: "auto",
          color: "#fff",
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "20px", md: "52px" },
            textAlign: "center",
            mb: "26px",
            maxWidth: "964px",
            mx: "auto",
            mt: { xs: "20px", md: "40px" },
          }}
        >
          {t("readyMadeFeedsSection.title")}
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#D0D0D0",
            fontSize: { xs: "13px !important", md: "20px" },
            maxWidth: "620px",
            mx: "auto",
            mb: "40px",
          }}
        >
          {t("readyMadeFeedsSection.subtitle")}
        </Typography>

        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            mb: "40px",
          }}
        >
          {images.map((image, index) => (
            <Box
              sx={{
                flex: index === 0 ? 1 : 0.5,
              }}
              key={index}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Platforms */}
        <Grid
          container
          spacing={"10px"}
          sx={{
            justifyContent: "center",
          }}
        >
          {platforms.map((platform, index) => (
            <Grid item xs={4} key={index}>
              <Button
                sx={{
                  color: "#FFFFFF",
                  width: "100%",
                  padding: "28px",
                  fontSize: { xs: "10px !important", md: "16px !important" },
                }}
                style={{
                  border: "1px solid #FFF",
                  background: "rgba(255, 255, 255, 0.19)",
                  backdropFilter: "blur(26.41509437561035px)",
                }}
              >
                {t(`readyMadeFeedsSection.platforms.${platform}`)}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
