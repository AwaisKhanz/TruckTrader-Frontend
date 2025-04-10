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
import { transformListingData } from "../utils/common";
import { useLocation, useNavigate } from "react-router-dom";

export default function Filter() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    fuel: "Any",
    bodyType: "Any",
    condition: "Any",
    priceRange: [3000, 100000],
    model: [1900, 2025],
    features: [],
    color: "Any",
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
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
        _locale: i18n.language === "en" ? "en_GB" : "nl_NL",
        keyword: keyword,
        _offset: (page - 1) * itemsPerPage,
        _limit: itemsPerPage,
        _order: "general.year",
      };

      if (filters.fuel !== "Any") {
        params["powertrain.engine.energy.type.category"] =
          filters.fuel.toLowerCase();
      }

      if (isFilterApplied && filters.priceRange.length === 2) {
        params[
          "condition.odometer.value_in_km"
        ] = `${filters.priceRange[0]}-${filters.priceRange[1]}`;
      }

      if (isFilterApplied && filters.model.length === 2) {
        params["general.year"] = `${filters.model[0]}-${filters.model[1]}`;
      }

      if (filters.features.length > 0) {
        filters.features.forEach((feature) => {
          const featureKey = feature.toLowerCase().replace(/ /g, "_");
          params[`features.${featureKey}`] = true;
        });
      }

      if (filters.bodyType !== "Any") {
        params["general.bodystyle.category"] = filters.bodyType;
      }

      if (filters.color !== "Any") {
        params["body.colour.primary"] = filters.color;
      }

      const response = await api.get("/searchresults", {
        params,
      });
      setListings(response.data.results);
      setTotalResults(response.data.num_results);
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch listings on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search") || "";
    setSearchKeyword(searchParam);
    fetchListings(searchParam, currentPage);
  }, [location.search, currentPage, filters, t]);

  // Handle search input change
  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearchKeyword(newSearch);
    setCurrentPage(1);

    const params = new URLSearchParams(location.search);
    if (newSearch) {
      params.set("search", newSearch);
    } else {
      params.delete("search");
    }
    navigate(`?${params.toString()}`, { replace: true });
  };

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    fetchListings(searchKeyword, page);
  };

  // Extract active filters
  const activeFilters = [
    filters.fuel !== "Any" &&
      t(`filters.fuelOptions.${filters.fuel.toLowerCase()}`),
    filters.bodyType !== "Any" &&
      t(`filters.bodyTypeOptions.${filters.bodyType}`),
    filters.condition !== "Any" &&
      t(`filters.conditionOptions.${filters.condition.toLowerCase()}`),
    ...new Set(
      filters.features.map((feature) => t(`filters.features.${feature}`))
    ),
    filters.color !== "Any" && filters.color,
  ].filter(Boolean);

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  // Handle reset filters
  const handleResetFilters = () => {
    setLoading(true);
    setIsFilterApplied(false);
    const params = new URLSearchParams(location.search);
    params.delete("search");
    navigate(`?${params.toString()}`, { replace: true });
    setFilters({
      fuel: "Any",
      bodyType: "Any",
      condition: "Any",
      priceRange: [5000, 100000],
      model: [1900, 2025],
      features: [],
    });
    setDrawerOpen(false);
  };

  // Handle removing individual active filter
  const handleRemoveFilter = (filter) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev };

      const reverseTranslations = {
        ...Object.fromEntries(
          ["cng", "Petrol", "Diesel", "Hybrid", "electric", "lpg", "Other"].map(
            (fuel) => [t(`filters.fuelOptions.${fuel}`), fuel]
          )
        ),
        ...Object.fromEntries(
          [
            "closedbox",
            "cartransporter",
            "recoveryvehicle",
            "panelvan",
            "deliveryvan",
            "concretemixer",
            "lowloader",
            "tipper",
            "frigo",
            "crane",
            "agriculturalmachine",
            "minibus",
            "openbody",
            "horsetransport",
            "pickup",
            "flatbed",
            "standardtractor",
            "tanker",
            "sweeper",
            "garbagetruck",
            "Other",
          ].map((bodyType) => [
            t(`filters.bodyTypeOptions.${bodyType}`),
            bodyType,
          ])
        ),
        ...Object.fromEntries(
          ["new", "used"].map((condition) => [
            t(`filters.conditionOptions.${condition}`),
            condition,
          ])
        ),
        ...Object.fromEntries(
          [
            "Air Conditioning",
            "Climate Control",
            "Cruise Control",
            "PTO",
            "Retarder",
            "Tow Bar",
            "Warranty",
          ].map((feature) => [t(`filters.features.${feature}`), feature])
        ),
      };

      const originalValue = reverseTranslations[filter] || filter;

      if (prev.fuel === originalValue) updatedFilters.fuel = "Any";
      else if (prev.bodyType === originalValue) updatedFilters.bodyType = "Any";
      else if (prev.condition === originalValue)
        updatedFilters.condition = "Any";
      else if (prev.color === originalValue) updatedFilters.color = "Any";
      else if (prev.features.includes(originalValue)) {
        updatedFilters.features = prev.features.filter(
          (feature) => feature !== originalValue
        );
      }

      return updatedFilters;
    });
  };

  // Handle applying filters
  const handleApplyFilters = () => {
    setDrawerOpen(false);
    setCurrentPage(1);
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
            activeFilters={activeFilters}
            searchKeyword={searchKeyword}
            setIsFilterApplied={setIsFilterApplied}
            isFilterApplied={isFilterApplied}
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
            activeFilters={activeFilters}
            searchKeyword={searchKeyword}
            setIsFilterApplied={setIsFilterApplied}
            isFilterApplied={isFilterApplied}
          />
        </Drawer>

        {/* Results Section */}
        <Box sx={{ flex: 1 }}>
          {/* Filter Header */}
          <FilterHeader
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
            onSearchChange={handleSearchChange}
            searchKeyword={searchKeyword}
            totalResults={totalResults}
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

          {/* Listings Section */}
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", my: "20px" }}>
              <CircularProgress size={40} sx={{ color: "#BD0000" }} />
            </Box>
          ) : (
            <>
              {/* Full-width banner image before listings */}
              <Box sx={{ mb: "20px" }}>
                <img
                  src="/assets/filterbanner.png" // Replace with your banner image path
                  alt="Banner"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Grid of Listings */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns:
                    listings.length === 1
                      ? "repeat(auto-fit, minmax(315px, 400px))"
                      : "repeat(auto-fit, minmax(315px, 1fr))",
                  justifyContent: listings.length === 1 ? "left" : "unset",
                  gap: "20px",
                  mt: "20px",
                }}
              >
                {listings.length > 0 ? (
                  <>
                    {/* First two listings */}
                    {listings.slice(0, 2).map((item, index) => (
                      <Box key={index}>
                        <ListingCard data={transformListingData(item)} />
                      </Box>
                    ))}

                    {/* Third item as promoted item (advertisement) */}
                    <Box>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "12px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src="/assets/listingad1.png"
                          alt="Promoted Advertisement"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Full-width advertisement after first 3 items */}
                    {listings.length > 2 && (
                      <Box
                        sx={{
                          gridColumn: "1 / -1", // Span full width
                          mt: "20px",
                          mb: "20px",
                        }}
                      >
                        <Box
                          sx={{
                            background: "#FFF",
                            borderRadius: "12px",
                            p: 2,
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            gap: 2,
                          }}
                        >
                          <Box sx={{ width: "50%" }}>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: "bold" }}
                            >
                              Advertising Title
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam.
                            </Typography>
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ height: "42px", fontSize: "12px" }}
                            >
                              Take Advantage Now
                            </Button>
                          </Box>
                          <Box sx={{ width: "50%", height: "100%" }}>
                            <img
                              src="/assets/filterbanner.png" // Replace with your full-width ad image path
                              alt="Full Width Ad"
                              style={{
                                height: "100%",
                                borderRadius: "8px",
                                objectFit: "cover",
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    )}

                    {/* Remaining listings */}
                    {listings.slice(2).map((item, index) => (
                      <Box key={index + 2}>
                        <ListingCard data={transformListingData(item)} />
                      </Box>
                    ))}
                  </>
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
                        color: "black",
                        "&.Mui-selected": {
                          backgroundColor: "#BD0000",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "darkred",
                          },
                        },
                        "&.MuiPaginationItem-previousNext": {
                          color: "#BD0000",
                        },
                      },
                      "& .MuiPaginationItem-icon": {
                        color: "#BD0000",
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
