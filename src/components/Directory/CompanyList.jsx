import React from "react";
import { Box, Grid } from "@mui/material";
import CompanyCard from "../../components/Common/CompanyCard";
import PlaceHolderLogo from "../../assets/Directory/Company/PlaceHolder.png";

// Sample Data
const companies = Array(20).fill({
  id: 1,
  name: "Mestebeld Trucks",
  location: "De,Berlin",
  logo: PlaceHolderLogo,
});

export default function CompanyList() {
  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", mt: 4 }}>
      <Grid container spacing={"20px"}>
        {companies.map((company, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CompanyCard company={company} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
