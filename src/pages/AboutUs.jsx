import { Box } from "@mui/material";
import React from "react";
import AboutHeader from "../components/AboutUs/AboutHeader";
import AddedValueSection from "../components/AboutUs/AddedValueSection";
import ReadyMadeFeedsSection from "../components/AboutUs/ReadyMadeFeedsSection";
import HowDoWeGetStarted from "../components/AboutUs/HowDoWeGetStarted";
import XmlFeedSection from "../components/AboutUs/XmlFeedSection";

export default function AboutUs() {
  return (
    <Box>
      <AboutHeader />
      <AddedValueSection />
      <ReadyMadeFeedsSection />
      <HowDoWeGetStarted />
      <XmlFeedSection />
    </Box>
  );
}
