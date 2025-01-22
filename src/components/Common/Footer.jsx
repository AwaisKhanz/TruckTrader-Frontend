import React from "react";
import { Box, Typography, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: "90%", mx: "auto", pb: "60px" }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#000",
          color: "#fff",
          p: "40px",
          borderRadius: "20px",
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
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                color: "#fff",
                mb: "16px",
              }}
            >
              TRUCK<span style={{ color: "#D32F2F" }}>TRADER</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#D0D0D0",
                lineHeight: "1.5",
                mb: "24px",
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
                  mb: "16px",
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
                  href="/"
                  sx={{ color: "#D0D0D0", textDecoration: "none" }}
                >
                  {t("footer.menu.home")}
                </Link>
                <Link
                  href="/about"
                  sx={{ color: "#D0D0D0", textDecoration: "none" }}
                >
                  {t("footer.menu.about")}
                </Link>
                <Link
                  href="/content"
                  sx={{ color: "#D0D0D0", textDecoration: "none" }}
                >
                  {t("footer.menu.content")}
                </Link>
                <Link
                  href="/advertise"
                  sx={{ color: "#D0D0D0", textDecoration: "none" }}
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
                  mb: "16px",
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
                  href="/book"
                  sx={{ color: "#D0D0D0", textDecoration: "none" }}
                >
                  {t("footer.quickLinks.book")}
                </Link>
                <Link
                  href="/privacy-policy"
                  sx={{ color: "#D0D0D0", textDecoration: "none" }}
                >
                  {t("footer.quickLinks.privacyPolicy")}
                </Link>
                <Link
                  href="/contact-us"
                  sx={{ color: "#D0D0D0", textDecoration: "none" }}
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
              color: "#D0D0D0",
            }}
          >
            © 2024 Trucktrader Benelux B.V. |{" "}
            <Link
              href="/terms"
              sx={{ color: "#D32F2F", textDecoration: "none" }}
            >
              {t("footer.terms")}
            </Link>{" "}
            |{" "}
            <Link
              href="/cookies"
              sx={{ color: "#D32F2F", textDecoration: "none" }}
            >
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
            <Link href="https://www.linkedin.com" target="_blank">
              <LinkedInIcon sx={{ color: "#fff", fontSize: "32px" }} />
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <FacebookIcon sx={{ color: "#fff", fontSize: "32px" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
