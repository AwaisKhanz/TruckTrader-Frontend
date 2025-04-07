import React from "react";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "./logo";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Function to scroll to top
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", md: "90%" },
        mx: "auto",
        pt: { xs: "30px", md: "60px" },
        pb: { xs: "0px", md: "60px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#000",
          color: "#fff",
          p: "40px",
          borderRadius: { xs: "none", md: "20px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: "24px", md: "0px" },
          }}
        >
          {/* Left Section: Logo and Description */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "left", md: "left" },
            }}
          >
            <Logo color="white" />
            <Typography
              sx={{
                fontSize: "14px",
                color: "#FFFFFF80",
                lineHeight: "1.5",
                mb: "24px",
                mt: 1,
              }}
            >
              {t("footer.description")}
            </Typography>
          </Box>

          {/* Middle Section: Menu Links */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "flex-end",
              textAlign: { xs: "left", md: "left" },
              gap: "24px",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: { xs: "10px", md: "16px" },
                  color: "#fff",
                }}
              >
                {t("footer.menuTitle")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  gap: "8px",
                }}
              >
                <Link
                  to="/"
                  onClick={handleScrollToTop}
                  className="text-[#FFFFFF80] hover:text-white"
                >
                  {t("footer.menu.home")}
                </Link>
                <Link
                  to="/about-us"
                  onClick={handleScrollToTop}
                  className="text-[#FFFFFF80] hover:text-white"
                >
                  {t("footer.menu.about")}
                </Link>
                <Link
                  to="/advertise"
                  onClick={handleScrollToTop}
                  className="text-[#FFFFFF80] hover:text-white"
                >
                  {t("footer.menu.advertise")}
                </Link>
              </Box>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: { xs: "10px", md: "16px" },
                  color: "#fff",
                }}
              >
                {t("footer.quickLinksTitle")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  gap: "8px",
                }}
              >
                <Link
                  to="/terms-and-conditions"
                  onClick={handleScrollToTop}
                  className="text-[#FFFFFF80] hover:text-white"
                >
                  {t("footer.quickLinks.privacyPolicy")}
                </Link>
                <Link
                  to="/contact"
                  onClick={handleScrollToTop}
                  className="text-[#FFFFFF80] hover:text-white"
                >
                  {t("footer.quickLinks.contactUs")}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} mt={"30px"}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "white",
            }}
          >
            © {currentYear} Trucktrader Benelux B.V.
          </Typography>
          {/* Right Section: Social Media Links */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-start" },
              gap: "16px",
            }}
          >
            <Link to="https://www.linkedin.com" target="_blank">
              <LinkedInIcon sx={{ color: "#fff", fontSize: "32px" }} />
            </Link>
            <Link to="https://www.facebook.com/TruckTrader.nl" target="_blank">
              <FacebookIcon sx={{ color: "#fff", fontSize: "32px" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
