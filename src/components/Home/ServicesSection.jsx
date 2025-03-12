import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";
import BrandIcon from "../../assets/Home/Services/brand.png"; // Replace with actual icon path
import SupportIcon from "../../assets/Home/Services/support.png"; // Replace with actual icon path
import DealershipIcon from "../../assets/Home/Services/dealership.png"; // Replace with actual icon path
import AffordableIcon from "../../assets/Home/Services/affordable.png"; // Replace with actual icon path
import backgroundImage from "../../assets/Home/Services/Background.jpeg";

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: "services.allBrands",
      description: "services.allBrandsDescription",
      icon: BrandIcon,
    },
    {
      id: 2,
      title: "services.freeSupport",
      description: "services.freeSupportDescription",
      icon: SupportIcon,
    },
    {
      id: 3,
      title: "services.dealership",
      description: "services.dealershipDescription",
      icon: DealershipIcon,
    },
    {
      id: 4,
      title: "services.affordable",
      description: "services.affordableDescription",
      icon: AffordableIcon,
    },
  ];

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", pb: { xs: "0px", md: "160px" } }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "auto", md: "560px !important" },
          backgroundImage: { xs: "", md: `url(${backgroundImage})` },
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: { xs: "0", md: "60px 20px" },
          borderRadius: "20px",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: "0",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            zIndex: "10",
            borderRadius: "20px",
            display: { xs: "none", md: "block" },
          }}
        ></Box>
        {/* Title */}

        <Box
          sx={{
            bgcolor: { xs: "black", md: "transparent" },
            padding: { xs: "25px", md: "0px" },
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "24px", md: "58px" },
              lineHeight: "1.3",
              mb: "16px",
              maxWidth: "800px",
              mx: "auto",
              zIndex: "9999999 !important",
              position: "relative",
            }}
          >
            {t("services.main")}{" "}
            <span style={{ color: "#BD0000" }}>{t("services.highlight")}</span>{" "}
            {t("services.mainEnd")}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#FFFFFFB3",
              mb: "40px",
              maxWidth: "800px",
              mx: "auto",
              zIndex: "30 !important",
              position: "relative",
            }}
          >
            {t("services.subtitle")}
          </Typography>
        </Box>

        {/* Services Grid */}
        <Box
          sx={{
            position: { xs: "", md: "absolute" },
            bottom: { xs: "", md: "-50%" },
            transform: { xs: "", md: "translateY(-50%)" },
            px: { xs: "", md: "30px" },
            mt: { xs: "80px !important", md: "" },
            zIndex: "30 !important",
          }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems={"stretch"}
          >
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={3} key={service.id}>
                <Card
                  sx={{
                    textAlign: "center",
                    padding: { xs: "0px", md: "20px" },
                    borderRadius: "16px",
                    backgroundColor: "#FFFFFF",
                    height: "100%",
                  }}
                >
                  <CardContent>
                    {/* Icon */}
                    <Box
                      sx={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#F5F5F5",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: "16px",
                      }}
                    >
                      <img
                        loading="lazy"
                        src={service.icon}
                        alt={service.title}
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Box>
                    {/* Title */}
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", fontSize: "16px", mb: "8px" }}
                    >
                      {t(service.title)}
                    </Typography>
                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "14px", color: "#6A6A6A" }}
                    >
                      {t(service.description)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
