import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/Home/HeroSection";
import HighlightSection from "../components/Home/HighlightSection";
import FeaturedListingSection from "../components/Home/FeaturedListingSection";
import TruckCategorySection from "../components/Home/TruckCategorySection";
import LatestListingSection from "../components/Home/latestListingsSection";
import FeaturedTrucksSection from "../components/Home/FeaturedTrucksSection";
import ServicesSection from "../components/Home/ServicesSection";

export default function Home() {
  const { t } = useTranslation("");
  return (
    <Box>
      <HeroSection />
      <HighlightSection />
      <FeaturedListingSection />
      <TruckCategorySection />
      <LatestListingSection />
      <FeaturedTrucksSection />
      <ServicesSection />
    </Box>
  );
}
