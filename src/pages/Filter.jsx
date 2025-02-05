import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import FilterSidebar from "../components/Filter/FilterSidebar";
import FilterHeader from "../components/Filter/FilterHeader";
import ListingCard from "../components/Common/ListingCard";
import Drawer from "@mui/material/Drawer";
import TuneIcon from "@mui/icons-material/Tune";
import { useTranslation } from "react-i18next";
import Pagination from "@mui/material/Pagination";
import api from "../services/api";

const transformListingData = (listing) => {
  return {
    id: listing.id,
    title: listing.description?.title || "No Title",
    year: listing.general?.year || "N/A",
    transmission:
      listing.powertrain?.transmission?.type?.display_value || "N/A",
    fuel:
      listing.powertrain?.engine?.energy?.type?.code?.display_value || "N/A",
    mileage: listing.condition?.odometer?.formatted || "N/A",
    price:
      listing.sales_conditions?.pricing?.asking?.in_eur?.formatted || "N/A",
    image: listing.images?.[0]?.src || "https://via.placeholder.com/300",
    location: listing.advertiser?.city || "N/A",
    make: listing.general?.make?.name || "N/A",
    model: listing.general?.model?.name || "N/A",
    type: listing.general?.type?.name || "N/A",
  };
};

export default function Filter() {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    transmission: "Any",
    fuel: "Any",
    bodyType: "Any",
    condition: "Any",
    priceRange: [5000, 100000],
    model: [1980, 2025],
    features: [],
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Fetch listings from the API
  const fetchListings = async (keyword = "", page = 1) => {
    setLoading(true);
    try {
      const params = {
        _fieldset: "searchresults",
        _locale: "nl_NL",
        keyword: keyword || searchKeyword,
        "general.category": "truck",
        _order: "score",
        _offset: (page - 1) * itemsPerPage,
        _limit: itemsPerPage,
      };

      // Apply filters dynamically
      if (filters.fuel !== "Any") {
        params["powertrain.engine.energy.type.category"] =
          filters.fuel.toLowerCase();
      }

      if (filters.priceRange.length === 2) {
        params[
          "condition.odometer.value_in_km"
        ] = `${filters.priceRange[0]}-${filters.priceRange[1]}`;
      }

      if (filters.model.length === 2) {
        params["general.year"] = `${filters.model[0]}-${filters.model[1]}`;
      }

      if (filters.features.includes("Air Conditioning")) {
        params["features.air_conditioning"] = true;
      }

      if (filters.features.includes("Climate Control")) {
        params["features.climate_control"] = true;
      }

      if (filters.bodyType !== "Any") {
        params["body.colour.primary"] = filters.bodyType.toLowerCase();
      }

      const response = await api.get("/search", { params });
      setListings(response.data.results);
      setTotalResults(response.data.num_results); // Update total number of results
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch listings on component mount
  useEffect(() => {
    fetchListings(searchKeyword, currentPage);
  }, [currentPage, filters]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = () => {
    setCurrentPage(1); // Reset to the first page when performing a new search
    fetchListings(searchKeyword, 1);
  };

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    fetchListings(searchKeyword, page);
  };

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

    // Fetch updated listings after filter change
    setTimeout(() => fetchListings(), 0);
  };

  // Handle applying filters
  const handleApplyFilters = () => {
    setDrawerOpen(false);
    setCurrentPage(1); // Reset to the first page when applying new filters
    fetchListings(searchKeyword, 1);
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
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
            searchKeyword={searchKeyword}
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
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", my: "20px" }}>
              <CircularProgress size={40} sx={{ color: "#BD0000" }} />
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(315px, 1fr))",
                  gap: "20px",
                  mt: "20px",
                }}
              >
                {listings.length > 0 ? (
                  listings.map((item, index) => (
                    <Box key={index}>
                      <ListingCard data={transformListingData(item)} />
                    </Box>
                  ))
                ) : (
                  <Typography sx={{ textAlign: "center", mt: 2 }}>
                    No listings found.
                  </Typography>
                )}
              </Box>
              {/* Pagination Controls */}
              {listings.length > 0 && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    sx={{
                      "& .MuiPaginationItem-root": {
                        color: "black", // Default color for unselected pages
                        "&.Mui-selected": {
                          backgroundColor: "#BD0000", // Background color for the selected page
                          color: "white", // Text color for the selected page
                          "&:hover": {
                            backgroundColor: "darkred", // Hover color for the selected page
                          },
                        },
                        "&.MuiPaginationItem-previousNext": {
                          color: "#BD0000", // Color for the previous/next arrows
                        },
                      },
                      "& .MuiPaginationItem-icon": {
                        color: "#BD0000", // Color for the arrow icons
                      },
                    }}
                  />
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
