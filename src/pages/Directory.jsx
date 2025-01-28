import { Box } from "@mui/material";
import React from "react";
import DirectoryHeader from "../components/Directory/DirectoryHeader";
import CompanyList from "../components/Directory/CompanyList";

export default function Directory() {
  return (
    <Box>
      <DirectoryHeader />
      <CompanyList />
    </Box>
  );
}
