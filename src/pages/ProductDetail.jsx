import React from "react";
import { Box } from "@mui/material";
import ProductDetailHeader from "../components/ProductDetail/ProductDetailHeader";
import DescriptionAdvertiser from "../components/ProductDetail/DescriptionAdvertiser";
import GeneralTechnicalInfo from "../components/ProductDetail/GeneralTechnicalInfo";
import EmissionHistoryCondition from "../components/ProductDetail/EmissionHistoryCondition";
import ProductDetailSwipperCard from "../components/ProductDetail/ProductDetailSwipperCard";

export default function ProductDetail() {
  return (
    <Box>
      <ProductDetailHeader />
      <ProductDetailSwipperCard />
      <DescriptionAdvertiser />
      <GeneralTechnicalInfo />
      <EmissionHistoryCondition />
    </Box>
  );
}
