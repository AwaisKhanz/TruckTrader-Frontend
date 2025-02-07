import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/Home/HeroSection";
import HighlightSection from "../components/Home/HighlightSection";
import FeaturedListingSection from "../components/Home/FeaturedListingSection";
import TruckCategorySection from "../components/Home/TruckCategorySection";
import LatestListingSection from "../components/Home/latestListingsSection";
import FeaturedTrucksSection from "../components/Home/FeaturedTrucksSection";
import ServicesSection from "../components/Home/ServicesSection";
import { transformListingData } from "../utils/common";
import api from "../services/api";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [featureListings, setFeatureListings] = useState([]);
  const [latestListings, setLatestListings] = useState([]);
  const { t, i18n } = useTranslation("");

  // Fetch listings from the API
  // Fetch listings from the API
  const fetchListings = async () => {
    setLoading(true);
    try {
      const featureListingParams = {
        _fieldset: "searchresults",
        _locale: i18n.language === "en" ? "en_GB" : "nl_NL",
        _order: "score",
        "general.category": "truck",
        _offset: 1,
        _limit: 8,
      };
      const latestListingParams = {
        _fieldset: "searchresults",
        _locale: i18n.language === "en" ? "en_GB" : "nl_NL",
        _order: "last_changed",
        "general.category": "truck",
        _offset: 1,
        _limit: 15,
      };

      const featureListingResponse = await api.get("/search", {
        params: featureListingParams,
      });
      const latestListingResponse = await api.get("/search", {
        params: latestListingParams,
      });

      setFeatureListings(featureListingResponse.data.results);
      setLatestListings(latestListingResponse.data.results);
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch listings on component mount
  useEffect(() => {
    fetchListings();
  }, [t]);

  return (
    <Box>
      <HeroSection />
      <HighlightSection />
      <FeaturedListingSection listings={featureListings} loading={loading} />
      <TruckCategorySection />
      <LatestListingSection listings={latestListings} loading={loading} />
      <FeaturedTrucksSection />
      <ServicesSection />
    </Box>
  );
}
