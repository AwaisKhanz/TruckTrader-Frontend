import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export default function ProductDetailHeader({ id, product }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/filter?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "90%",
        mx: "auto",
        backgroundColor: "white",
        padding: { xs: "16px", md: "20px" },
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "", md: "center" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: "16px",
        }}
      >
        {/* Breadcrumbs Section - Home, Vehicle Type, Brand, Model */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {/* Home Icon */}
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <HomeIcon fontSize="small" />
            </Link>
            {/* Brand Name */}
            {product?.make && (
              <Link
                to={`/filter?search=${product.make}`}
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                {product.make}
              </Link>
            )}

            {/* Model Name */}
            {product?.model && (
              <Link
                to={`/filter?search=${product.model}`}
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                {product.model}
              </Link>
            )}

            {/* Vehicle Type */}
            {product?.vehicleType && (
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  maxWidth: "150px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title={product.vehicleType}
              >
                {product.vehicleType.length > 15
                  ? `${product.vehicleType.slice(0, 12)} ...`
                  : product.vehicleType}
              </Typography>
            )}
          </Breadcrumbs>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            bgcolor: "#F6F6F6",
            borderRadius: "12px",
            padding: "8px 16px",
          }}
        >
          <TextField
            placeholder={t("productDetailHeader.searchPlaceholder")}
            variant="standard"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            InputProps={{
              disableUnderline: true,
              style: { fontSize: "14px" },
            }}
            sx={{
              flex: 1,
              width: { xs: "auto", md: "300px" },
              "& input": {
                padding: 0,
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              minWidth: "40px !important",
            }}
            onClick={handleSearch}
            startIcon={
              <SearchIcon
                sx={{ marginRight: { xs: "-12px", md: "0px" }, mt: "-1px" }}
              />
            }
          >
            <span className=" hidden md:block">
              {t("productDetailHeader.searchButton")}
            </span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
