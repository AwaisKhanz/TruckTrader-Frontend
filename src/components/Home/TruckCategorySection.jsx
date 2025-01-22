import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import PlaceHolderImage from "../../assets/Home/HeroSection/Hero.png";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "category.semiTrucks",
    posts: "category.posts",
    image: PlaceHolderImage, // Replace with actual image path
    link: "/categories/semi-trucks",
  },
  {
    id: 2,
    title: "category.boxTrucks",
    posts: "category.posts",
    image: PlaceHolderImage, // Replace with actual image path
    link: "/categories/box-trucks",
  },
  {
    id: 3,
    title: "category.trailers",
    posts: "category.posts",
    image: PlaceHolderImage, // Replace with actual image path
    link: "/categories/trailers",
  },
  {
    id: 4,
    title: "category.vanAndCar",
    posts: "category.posts",
    image: PlaceHolderImage, // Replace with actual image path
    link: "/categories/van-and-car",
  },
  {
    id: 5,
    title: "category.parts",
    posts: "category.posts",
    image: PlaceHolderImage, // Replace with actual image path
    link: "/categories/parts",
  },
];

export default function TruckCategorySection() {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", py: "60px" }}>
      {/* Title */}
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "24px", md: "32px" },
          textAlign: "center",
          color: "#212121",
          mb: { xs: "20px", md: "40px" },
        }}
      >
        {t("category.title")}{" "}
        <span style={{ color: "#BD0000" }}>{t("category.highlight")}</span>
      </Typography>

      {/* Custom Grid */}
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid
            item
            key={category.id}
            xs={12}
            sm={index === categories.length - 1 ? 12 : 6} // Last item spans full width
            md={index < 3 ? 4 : 6} // First 3 items take 1/3 width, next 2 take 1/2
          >
            <Link
              to={category.link}
              style={{ textDecoration: "none", display: "block" }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: { xs: "200px", md: "400px" },
                }}
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={t(category.title)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Overlay Text */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    color: "#FFFFFF",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", fontSize: "20px" }}
                  >
                    {t(category.title)}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#EDEDED" }}>
                    {t(category.posts)}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
