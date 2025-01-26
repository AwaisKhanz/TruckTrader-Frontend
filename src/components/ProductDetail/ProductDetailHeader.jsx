import React from "react";
import {
  Box,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

export default function ProductDetailHeader() {
  const { t } = useTranslation();

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
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            gap: { xs: "10px", md: "16px" },
          }}
        >
          {/* Back Button */}
          <IconButton
            sx={{
              backgroundColor: "#F6F6F6",
              padding: { xs: "6px 8px", md: "8px 10px" },
              borderRadius: "20px",
              display: { xs: "none", md: "block" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Likes */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#F6F6F6",
              color: "black",
              padding: { xs: "6px 8px", md: "8px 10px" },
              borderRadius: "20px",
            }}
          >
            <FavoriteBorderIcon sx={{ color: "#BD0000" }} />
            <Typography sx={{ fontWeight: "bold" }}>
              {t("productDetailHeader.likes", { count: 231 })}
            </Typography>
          </Box>

          {/* Views */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "black",
              backgroundColor: "#F6F6F6",
              padding: { xs: "6px 8px", md: "8px 10px" },
              borderRadius: "20px",
            }}
          >
            <VisibilityIcon sx={{ color: "#CCCCCC" }} />
            <Typography sx={{ fontWeight: "bold" }}>
              {t("productDetailHeader.views", { count: 0 })}
            </Typography>
          </Box>
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
            InputProps={{
              disableUnderline: true,
              style: { fontSize: "14px", color: "#B0B0B0" },
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
