import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WebIcon from "@mui/icons-material/Web";

export default function XmlFeedSection() {
  const { t } = useTranslation();

  const feeds = [
    {
      id: 1,
      icon: <FlashOnIcon sx={{ color: "#BD0000", fontSize: "40px" }} />,
      title: t("xmlFeedSection.customFeeds.title"),
      description: t("xmlFeedSection.customFeeds.description"),
    },
    {
      id: 2,
      icon: <WebIcon sx={{ color: "#BD0000", fontSize: "40px" }} />,
      title: t("xmlFeedSection.webFeeds.title"),
      description: t("xmlFeedSection.webFeeds.description"),
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#000",
        color: "#FFFFFF",
        py: "40px",
        borderRadius: "16px",
        textAlign: "center",
        mx: "auto",
        mt: { xs: "40px", md: "160px" },
        mb: { xs: "40px", md: "120px" },
        maxWidth: "90%",
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "20px", md: "40px" },
          mb: { xs: "20px", md: "70px" },
        }}
      >
        {t("xmlFeedSection.title")}
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          position: { xs: "", md: "absolute" },
          bottom: { xs: "", md: "-50%" },
          px: { xs: "20px", md: "30px" },
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: "20px" }}
          justifyContent="center"
          width={"100%"}
          height={"100%"}
        >
          {feeds.map((feed) => (
            <Grid item xs={12} sm={6} md={5} key={feed.id} alignItems={"start"}>
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#000",
                  p: "20px",
                  height: "100%",
                  borderRadius: "16px",
                  textAlign: "left",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box sx={{ mb: "16px" }}>{feed.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "14px", md: "20px" },
                    mb: "8px",
                  }}
                >
                  {feed.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", md: "14px" },
                    maxWidth: "400px",
                    color: "#7A7A7A",
                    textAlign: "left",
                  }}
                >
                  {feed.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
