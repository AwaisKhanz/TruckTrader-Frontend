import React from "react";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTranslation } from "react-i18next";
import logoWhite from "../../assets/logo_white.png";
import { Link } from "react-router-dom";
import Logo from "./logo";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", md: "90%" },
        mx: "auto",
        py: { xs: "30px", md: "60px" },
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
                <Link to="/" className=" text-[#FFFFFF80] hover:text-white">
                  {t("footer.menu.home")}
                </Link>
                <Link
                  to="/about-us"
                  className=" text-[#FFFFFF80] hover:text-white"
                >
                  {t("footer.menu.about")}
                </Link>
                <Link
                  to="/content"
                  className=" text-[#FFFFFF80] hover:text-white"
                >
                  {t("footer.menu.content")}
                </Link>
                <Link
                  to="/advertise"
                  className=" text-[#FFFFFF80] hover:text-white"
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
                <Link to="/book" className=" text-[#FFFFFF80] hover:text-white">
                  {t("footer.quickLinks.book")}
                </Link>
                <Link
                  to="/privacy-policy"
                  className=" text-[#FFFFFF80] hover:text-white"
                >
                  {t("footer.quickLinks.privacyPolicy")}
                </Link>
                <Link
                  to="/contact-us"
                  className=" text-[#FFFFFF80] hover:text-white"
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
            © 2024 Trucktrader Benelux B.V. |{" "}
            <Link to="/terms" className=" text-[#FFFFFF80] hover:text-white">
              {t("footer.terms")}
            </Link>{" "}
            |{" "}
            <Link to="/cookies" className=" text-[#FFFFFF80] hover:text-white">
              {t("footer.cookies")}
            </Link>
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
            <Link to="https://www.facebook.com" target="_blank">
              <FacebookIcon sx={{ color: "#fff", fontSize: "32px" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
