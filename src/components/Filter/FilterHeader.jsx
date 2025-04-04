import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

export default function FilterHeader({
  activeFilters = [],
  onRemoveFilter,
  onSearchChange,
  onSearchSubmit,
  searchKeyword,
  onResetFilters,
  totalResults,
}) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "", md: "center" },
        justifyContent: "space-between",
        gap: "16px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: activeFilters.length > 0 ? "8px" : "0px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            color: "#757575",
          }}
        >
          {totalResults}
          <span className=" text-[#808080] xs:text-[14px] md:16px ml-1">
            {t("filterHeader.resultsFound")}
          </span>
        </Typography>
        {/* Active Filters */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {activeFilters.map((filter, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(189, 0, 0, 0.10)",
                padding: "4px 12px",
                borderRadius: "16px",
                gap: "6px",
                color: "#BD0000",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              {filter}
              <span
                className=" cursor-pointer"
                onClick={() => onRemoveFilter(filter)}
              >
                ✕
              </span>
            </Box>
          ))}
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
          placeholder={t("filterHeader.searchPlaceholder")}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            style: { fontSize: "14px", color: "black" },
          }}
          sx={{
            flex: 1,
            width: { xs: "auto", md: "300px" },
            "& input": {
              padding: 0,
            },
          }}
          value={searchKeyword}
          onChange={onSearchChange}
        />

        <Button
          variant="contained"
          sx={{
            minWidth: "40px !important",
          }}
          startIcon={
            <SearchIcon
              sx={{
                marginRight: { xs: "-12px", md: "0px" },
                mt: "0px",
                fontSize: { xs: "16px", md: "24px" },
              }}
            />
          }
          // onClick={onSearchSubmit}
        >
          <span className=" hidden md:block">
            {t("filterHeader.searchButton")}
          </span>
        </Button>
      </Box>
    </Box>
  );
}
