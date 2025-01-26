import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function DescriptionAdvertiser() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: "20px",
        maxWidth: "90%",
        mx: "auto",
        mt: "20px",
      }}
    >
      {/* Descriptions Section */}
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
          {t("productDetail.description.title")}
        </Typography>
        <Divider sx={{ mb: "28px" }} />
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#6A6A6A",
          }}
        >
          Compact and efficient, the 2019 Volvo Mini Truck offers a 3,500 kg
          payload, fuel-efficient diesel engine, and advanced safety features.
          Its ergonomic cab ensures comfort, making it ideal for urban
          deliveries.Compact and efficient, the 2019 Volvo Mini Truck offers a
          3,500 kg payload, fuel-efficient diesel engine, and advanced safety
          features. Its ergonomic cab ensures comfort, making it ideal for urban
          deliveries.Compact and efficient, the 2019 Volvo Mini Truck offers a
          3,500 kg payload, fuel-efficient diesel engine, and advanced safety
          features. Its ergonomic cab ensures comfort, making it ideal for urban
          deliveries.Compact and efficient, the 2019 Volvo Mini Truck offers a
          3,500 kg payload, fuel-efficient diesel engine, and advanced safety
          features. Its ergonomic cab ensures comfort, making it ideal for urban
          deliveries.Compact and efficient, the 2019 Volvo Mini Truck offers a
          3,500 kg payload, fuel-efficient diesel engine, and advanced safety
          features. Its ergonomic cab ensures comfort, making it ideal for urban
          deliveries.Compact and efficient, the 2019 Volvo Mini Truck offers a
          3,500 kg payload, fuel-efficient diesel engine, and
        </Typography>
      </Box>

      {/* Advertiser Section */}
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
          {t("productDetail.advertiser.title")}
        </Typography>
        <Divider sx={{ mb: "28px" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.advertiser")}</Typography>
            <Typography>Mestebeld Trucks B.V.</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.website")}</Typography>
            <Typography>www.Example.nl</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.email")}</Typography>
            <Typography>info@Example.nl</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.address")}</Typography>
            <Typography>Musterstraße 123</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.postCode")}</Typography>
            <Typography>8152BE</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.place")}</Typography>
            <Typography>Lemelerveld</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>
              {t("productDetail.advertiser.salesEmployee")}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Avatar
                src="/path-to-avatar.jpg"
                alt="Daniel"
                sx={{ width: 32, height: 32 }}
              />
              <Typography>Daniel (+313846800668)</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
