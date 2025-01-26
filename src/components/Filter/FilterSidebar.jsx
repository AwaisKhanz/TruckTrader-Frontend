import React from "react";
import {
  Box,
  Typography,
  Button,
  Slider,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { useTranslation } from "react-i18next";

export default function FilterSidebar({
  filters,
  onFilterChange,
  onResetFilters,
  onApplyFilters,
}) {
  const { t } = useTranslation();

  const marksPrice = [
    { value: 5000, label: t("filters.priceLabels.min") },
    { value: 100000, label: t("filters.priceLabels.max") },
  ];

  const marksModel = [
    { value: 2019, label: t("filters.modelLabels.min") },
    { value: 2025, label: t("filters.modelLabels.max") },
  ];

  const isFilterSelected = (filterField, value) =>
    filters[filterField] === value ||
    (Array.isArray(filters[filterField]) &&
      filters[filterField].includes(value));

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "24px 16px",
        maxWidth: { xs: "100%", sm: "315px" },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <TuneIcon sx={{ color: "#BD0000" }} />
        <Typography variant="h6" fontWeight="600">
          {t("filters.title")}
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: "#E6E6E6", marginBottom: "16px" }} />

      {/* Transmission */}
      <Box sx={{ marginBottom: "24px" }}>
        <Typography
          sx={{
            mb: "16px",
            fontSize: { xs: "12px", md: "18px" },
            fontWeight: "500",
          }}
        >
          {t("filters.transmission")}
        </Typography>
        <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap", mt: "8px" }}>
          {["Any", "Automatic", "Manual", "Semi Automatic", "Other"].map(
            (label) => (
              <Button
                key={label}
                variant="contained"
                onClick={() => onFilterChange("transmission", label)}
                sx={{
                  padding: "4px 12px",
                  height: "26px",
                  fontSize: "12px",
                  backgroundColor: isFilterSelected("transmission", label)
                    ? "#BD0000"
                    : "#F6F6F6",
                  color: isFilterSelected("transmission", label)
                    ? "#fff"
                    : "#000",
                }}
              >
                {t(`filters.transmissionOptions.${label.toLowerCase()}`)}
              </Button>
            )
          )}
        </Box>
      </Box>

      {/* Fuel */}
      <Box sx={{ marginBottom: "24px" }}>
        <Typography
          sx={{
            mb: "16px",
            fontSize: { xs: "12px", md: "18px" },
            fontWeight: "500",
          }}
        >
          {t("filters.fuel")}
        </Typography>
        <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap", mt: "8px" }}>
          {["Any", "Petrol", "Diesel", "Hybrid", "Other"].map((label) => (
            <Button
              key={label}
              variant="contained"
              onClick={() => onFilterChange("fuel", label)}
              sx={{
                padding: "4px 12px",
                height: "26px",
                fontSize: "12px",
                backgroundColor: isFilterSelected("fuel", label)
                  ? "#BD0000"
                  : "#F6F6F6",
                color: isFilterSelected("fuel", label) ? "#fff" : "#000",
              }}
            >
              {t(`filters.fuelOptions.${label.toLowerCase()}`)}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Body Type */}
      <Box sx={{ marginBottom: "24px" }}>
        <Typography
          sx={{
            mb: "16px",
            fontSize: { xs: "12px", md: "18px" },
            fontWeight: "500",
          }}
        >
          {t("filters.bodyType")}
        </Typography>
        <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap", mt: "8px" }}>
          {["Any", "Box Truck", "Tanker", "Other"].map((label) => (
            <Button
              key={label}
              variant="contained"
              onClick={() => onFilterChange("bodyType", label)}
              sx={{
                padding: "4px 12px",
                height: "26px",
                fontSize: "12px",
                backgroundColor: isFilterSelected("bodyType", label)
                  ? "#BD0000"
                  : "#F6F6F6",
                color: isFilterSelected("bodyType", label) ? "#fff" : "#000",
              }}
            >
              {t(`filters.bodyTypeOptions.${label.toLowerCase()}`)}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Condition */}
      <Box sx={{ marginBottom: "24px" }}>
        <Typography
          sx={{
            mb: "16px",
            fontSize: { xs: "12px", md: "18px" },
            fontWeight: "500",
          }}
        >
          {t("filters.condition")}
        </Typography>
        <Box sx={{ display: "flex", gap: "12px", flexWrap: "wrap", mt: "8px" }}>
          {["Any", "Used", "New"].map((label) => (
            <Button
              key={label}
              variant="contained"
              onClick={() => onFilterChange("condition", label)}
              sx={{
                padding: "4px 12px",
                height: "26px",
                fontSize: "12px",
                backgroundColor: isFilterSelected("condition", label)
                  ? "#BD0000"
                  : "#F6F6F6",
                color: isFilterSelected("condition", label) ? "#fff" : "#000",
              }}
            >
              {t(`filters.conditionOptions.${label.toLowerCase()}`)}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Price Range */}
      <Box sx={{ marginBottom: "24px" }}>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "18px" },
            fontWeight: "500",
            mb: "16px",
          }}
        >
          {t("filters.priceRange")}
        </Typography>
        <Box sx={{ mx: 2 }}>
          <Slider
            value={filters.priceRange}
            onChange={(_, newValue) => onFilterChange("priceRange", newValue)}
            step={1000}
            min={5000}
            max={100000}
            marks={marksPrice}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `$${value.toLocaleString()}`}
            sx={{ color: "#BD0000" }}
            getAriaLabel={() => "Temperature range"}
          />
        </Box>
      </Box>

      {/* Model */}
      <Box sx={{ marginBottom: "24px" }}>
        <Typography
          sx={{
            fontSize: { xs: "12px", md: "18px" },
            fontWeight: "500",
            mb: "16px",
          }}
        >
          {t("filters.model")}
        </Typography>
        <Box sx={{ mx: 2 }}>
          <Slider
            value={filters.model}
            onChange={(_, newValue) => onFilterChange("model", newValue)}
            step={1}
            min={2019}
            max={2025}
            marks={marksModel}
            valueLabelDisplay="auto"
            sx={{ color: "#BD0000" }}
          />
        </Box>
      </Box>

      {/* Select Features */}
      <Box sx={{ marginBottom: "40px" }}>
        <Typography
          sx={{
            mb: "16px",
            fontSize: { xs: "12px", md: "18px" },
            fontWeight: "500",
          }}
        >
          {t("filters.selectFeatures")}
        </Typography>
        <Box>
          {[
            "Air Conditioning",
            "Climate Control",
            "Cruise Control",
            "Intrader",
            "PTO",
            "Retarder",
            "Tow Bar",
            "Warranty",
          ].map((feature) => (
            <FormControlLabel
              key={feature}
              control={
                <Checkbox
                  size="small"
                  checked={filters.features.includes(feature)}
                  onChange={(e) => {
                    const newFeatures = e.target.checked
                      ? [...filters.features, feature]
                      : filters.features.filter((f) => f !== feature);
                    onFilterChange("features", newFeatures);
                  }}
                  sx={{
                    color: "#C5C5C5",
                    "&.Mui-checked": { color: "#BD0000" },
                    "& .MuiSvgIcon-root": {
                      borderRadius: "40px", // Apply borderRadius to the checkbox icon
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {t(`filters.features.${feature}`)}
                </Typography>
              }
            />
          ))}
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={onResetFilters}
          sx={{ bgcolor: "#F6F6F6" }}
          fullWidth
        >
          {t("filters.reset")}
        </Button>
        <Button variant="contained" onClick={onApplyFilters} fullWidth>
          {t("filters.apply")}
        </Button>
      </Box>
    </Box>
  );
}
