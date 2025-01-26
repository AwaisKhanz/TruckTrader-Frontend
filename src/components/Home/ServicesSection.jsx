import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";
import BrandIcon from "../../assets/Home/Services/brand.png"; // Replace with actual icon path
import SupportIcon from "../../assets/Home/Services/support.png"; // Replace with actual icon path
import DealershipIcon from "../../assets/Home/Services/dealership.png"; // Replace with actual icon path
import AffordableIcon from "../../assets/Home/Services/affordable.png"; // Replace with actual icon path
import backgroundImage from "../../assets/Home/Services/Background.png";

const services = [
  {
    id: 1,
    title: "All Brands",
    description:
      "Explore the complete list of global car manufacturers - from iconic giants to emerging innovators.",
    icon: BrandIcon,
  },
  {
    id: 2,
    title: "Free Support",
    description:
      "Enjoy 24/7 reliable assistance - our free support team is always here to help with any questions or issues you may have!",
    icon: SupportIcon,
  },
  {
    id: 3,
    title: "Dealership",
    description:
      "Find trusted dealerships near you - connecting you to the best deals and services for your dream car.",
    icon: DealershipIcon,
  },
  {
    id: 4,
    title: "Affordable",
    description:
      "Quality and value combined - discover affordable options without compromising on excellence.",
    icon: AffordableIcon,
  },
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", pb: { xs: "40px", md: "200px" } }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "auto", md: "560px !important" },
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: { xs: "15px", md: "60px 20px" },
          borderRadius: "20px",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            backgroundColor: "#000",
            display: "inline-block",
            padding: "5px 20px",
            borderRadius: "16px",
            color: "#FFFFFF",
            fontSize: "16px",
            mb: "16px",
          }}
        >
          {t("services.title")}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "58px" },
            lineHeight: "1.3",
            mb: "16px",
            maxWidth: "800px",
            mx: "auto",
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
          }}
        >
          {t("services.subtitle")}
        </Typography>

        {/* Services Grid */}
        <Box
          sx={{
            position: { xs: "", md: "absolute" },
            bottom: { xs: "", md: "-50%" },
            transform: { xs: "", md: "translateY(-50%)" },
            px: { xs: "", md: "30px" },
            mt: { xs: "80px !important", md: "" },
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
