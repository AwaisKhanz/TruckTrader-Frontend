import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CompanyCard({ company }) {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "16px",
        maxWidth: { xs: "100%", md: "315px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Company Logo */}
        <Box
          component="img"
          src={company.logo}
          alt={company.name}
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <Box>
          {/* Company Name */}
          <Typography fontWeight="500" sx={{ fontSize: "16px" }}>
            {company.name}
          </Typography>

          {/* Location */}
          <Typography fontSize="14px" color="#6A6A6A" sx={{ mt: 1 }}>
            {company.location}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "#E6E6E6", my: "20px" }} />

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          mt: "20px",
          width: "100%",
        }}
      >
        <Button
          startIcon={<LanguageIcon />}
          color="secondary"
          variant="contained"
          sx={{
            color: "#6A6A6A",
            fontSize: "12px",
            borderRadius: "8px",
            flex: 1,
          }}
        >
          Visit Website
        </Button>
        <Button
          endIcon={
            <ArrowForwardIcon
              sx={{
                fontSize: "14px !important",
                m: "0x !important",
                p: "0x !important",
              }}
            />
          }
          color="secondary"
          variant="contained"
          sx={{
            color: "#6A6A6A",
            fontSize: "12px",
            borderRadius: "8px",
            px: 1,
            flex: 1,
          }}
        >
          Check Inventory
        </Button>
      </Box>
    </Box>
  );
}
