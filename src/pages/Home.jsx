import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/Home/HeroSection";
import HighlightSection from "../components/Home/HighlightSection";
import FeaturedListingSection from "../components/Home/FeaturedListingSection";
import LatestListingSection from "../components/Home/latestListingsSection";
import ServicesSection from "../components/Home/ServicesSection";
import api from "../services/api";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [featureListings, setFeatureListings] = useState([]);
  const [latestListings, setLatestListings] = useState([]);
  const { t, i18n } = useTranslation("");

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
      <LatestListingSection listings={latestListings} loading={loading} />
      <ServicesSection />
    </Box>
  );
}
