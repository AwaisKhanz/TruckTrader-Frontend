import React from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function DescriptionAdvertiser({ description, advertiser }) {
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
      {/* Description Section */}
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
          {description || "No description available."}
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
            <Typography>
              {advertiser?.subsections?.[0]?.fields?.find(
                (f) => f.key === "advertiser.name"
              )?.display_value || "Not Available"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.website")}</Typography>
            <Typography>
              {advertiser?.subsections?.[0]?.fields?.find(
                (f) => f.key === "advertiser.website"
              )?.display_value || "Not Available"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.email")}</Typography>
            <Typography>
              {advertiser?.subsections?.[0]?.fields?.find(
                (f) => f.key === "advertiser.email"
              )?.display_value || "Not Available"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.address")}</Typography>
            <Typography>
              {advertiser?.subsections?.[0]?.fields?.find(
                (f) => f.key === "advertiser.address"
              )?.display_value || "Not Available"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.postCode")}</Typography>
            <Typography>
              {advertiser?.subsections?.[0]?.fields?.find(
                (f) => f.key === "advertiser.postal_code"
              )?.display_value || "Not Available"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{t("productDetail.advertiser.place")}</Typography>
            <Typography>
              {advertiser?.subsections?.[0]?.fields?.find(
                (f) => f.key === "advertiser.city"
              )?.display_value || "Not Available"}
            </Typography>
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
                src={advertiser?.imageUrl || "/default-avatar.png"} // Use advertiser-provided image if available, else default
                alt={advertiser?.name || "Sales Employee"}
                sx={{ width: 32, height: 32 }}
              />
              <Typography>
                {advertiser?.subsections?.[0]?.fields?.find(
                  (f) => f.key === "advertiser.telephone"
                )?.display_value || "No Contact Info"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
