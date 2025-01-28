import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterSidebar from "../components/Filter/FilterSidebar";
import FilterHeader from "../components/Filter/FilterHeader";
import truckImage from "../assets/Home/FeatureListingSection/truck.png";
import ListingCard from "../components/Common/ListingCard";
import Drawer from "@mui/material/Drawer";
import TuneIcon from "@mui/icons-material/Tune";
import { useTranslation } from "react-i18next";

const latestListings = Array(9).fill({
  id: 1,
  title: "Volvo Mini Truck 2019",
  year: "2019",
  transmission: "Manual",
  fuel: "Diesel",
  weight: "50 Tons",
  mileage: "250,000KM",
  type: "Box Truck",
  location: "De,Berlin",
  price: "$96,340",
  image: truckImage,
});

export default function Filter() {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    transmission: "Any",
    fuel: "Any",
    bodyType: "Any",
    condition: "Any",
    priceRange: [5000, 100000],
    model: [2019, 2025],
    features: [],
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Extract active filters
  const activeFilters = [
    filters.transmission !== "Any" &&
      t(`filters.transmissionOptions.${filters.transmission.toLowerCase()}`),
    filters.fuel !== "Any" &&
      t(`filters.fuelOptions.${filters.fuel.toLowerCase()}`),
    filters.bodyType !== "Any" &&
      t(`filters.bodyTypeOptions.${filters.bodyType.toLowerCase()}`),
    filters.condition !== "Any" &&
      t(`filters.conditionOptions.${filters.condition.toLowerCase()}`),
    ...filters.features.map((feature) => t(`filters.features.${feature}`)),
  ].filter(Boolean);

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  // Handle reset filters
  const handleResetFilters = () => {
    setFilters({
      transmission: "Any",
      fuel: "Any",
      bodyType: "Any",
      condition: "Any",
      priceRange: [5000, 100000],
      model: [2019, 2025],
      features: [],
    });
    setDrawerOpen(false);
  };

  // Handle removing individual active filter
  const handleRemoveFilter = (filter) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev };

      if (prev.transmission === filter) updatedFilters.transmission = "Any";
      else if (prev.fuel === filter) updatedFilters.fuel = "Any";
      else if (prev.bodyType === filter) updatedFilters.bodyType = "Any";
      else if (prev.condition === filter) updatedFilters.condition = "Any";
      else if (prev.features.includes(filter)) {
        updatedFilters.features = prev.features.filter(
          (feature) => feature !== filter
        );
      }

      return updatedFilters;
    });
  };

  // Handle applying filters
  const handleApplyFilters = () => {
    setDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        maxWidth: "90%",
        mx: "auto",
        mb: { xs: "24px", md: "56px" },
        width: "100%",
      }}
    >
      {/* Main Content */}
      <Box sx={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        {/* Sidebar for Desktop */}
        {!isMobile && (
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            onApplyFilters={handleApplyFilters}
          />
        )}

        {/* Drawer for Mobile */}
        <Drawer
          anchor="bottom"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              padding: "16px",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              height: "90vh",
              overflow: "auto",
            },
          }}
        >
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            onApplyFilters={handleApplyFilters}
          />
        </Drawer>

        {/* Results Section */}
        <Box sx={{ flex: 1 }}>
          {/* Filter Header */}
          <FilterHeader
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
          />

          {/* Mobile "Show Filters" Button */}
          {isMobile && (
            <Box sx={{ my: "12px", display: "flex", justifyContent: "end" }}>
              <Button
                startIcon={<TuneIcon />}
                variant="contained"
                onClick={() => setDrawerOpen(true)}
              >
                Filters
              </Button>
            </Box>
          )}
          {/* Grid of Listings */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(315px, 1fr))",
              gap: "20px",
              mt: "20px",
            }}
          >
            {latestListings.map((item, index) => (
              <Box key={index}>
                <ListingCard data={item} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
