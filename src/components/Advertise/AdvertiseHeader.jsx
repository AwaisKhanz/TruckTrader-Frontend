import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";

export default function AdvertiseHeader() {
  const { t } = useTranslation();

  const cardData = [
    {
      icon: <BusinessIcon sx={{ fontSize: { xs: "16px", md: "28px" } }} />,
      title: t("advertise.carCompanies.title"),
      description: t("advertise.carCompanies.description"),
    },
    {
      icon: <PersonIcon sx={{ fontSize: { xs: "16px", md: "28px" } }} />,
      title: t("advertise.individuals.title"),
      description: t("advertise.individuals.description"),
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "90%",
        mx: "auto",
        textAlign: "center",
        my: { xs: "26px", md: "56px" },
      }}
    >
      {/* Title and Description */}
      <Typography
        variant="h4"
        fontWeight="600"
        sx={{
          fontSize: { xs: "24px", md: "42px" },
          fontWeight: 500,
          color: "#000",
          mb: 2,
        }}
      >
        {t("advertise.header.title")}{" "}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "14px", md: "16px" },
          color: "#9F9F9F",
          maxWidth: "730px",
          mx: "auto",
          mb: "60px",
        }}
      >
        {t("advertise.header.description")}{" "}
      </Typography>

      {/* Cards */}
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {cardData.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                borderRadius: "20px",
                backgroundColor: "#fff",
                border: "1px solid #DFE1E7",
                height: "100%",
                boxShadow: "none",
                padding: { xs: "12px", md: "24px" },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "12px", md: "16px" },
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: "#BD0000",
                    width: { xs: 28, md: 36 },
                    height: { xs: 28, md: 36 },
                    borderRadius: "8px",
                  }}
                >
                  {item.icon}
                </Avatar>
                <Typography
                  variant="h6"
                  fontWeight="600"
                  textAlign={"left"}
                  sx={{
                    fontSize: { xs: "16px", md: "24px" },
                    color: "#000",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  //   variant="body2"
                  textAlign={"left"}
                  sx={{
                    fontSize: { xs: "12px", md: "16px" },
                    color: "#6A6A6A",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
