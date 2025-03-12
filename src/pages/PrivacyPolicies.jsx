import { Box, Typography, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <Box>
      <Navbar />
      <Box sx={{ maxWidth: "90%", mx: "auto", my: 4, px: 2 }}>
        {/* Main Title */}
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 4,
            fontSize: { xs: "22px", md: "28px" },
          }}
          gutterBottom
        >
          {t("privacy_policy.title")}
        </Typography>

        {/* Part 1 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part1.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part1.1.1.text1")}
          <Link
            href={`https://${t("privacy_policy.part1.1.1.link1")}`}
            target="_blank"
          >
            {t("privacy_policy.part1.1.1.link1")}
          </Link>
          {t("privacy_policy.part1.1.1.text2")}
          <Link
            href={`https://${t("privacy_policy.part1.1.1.link2")}`}
            target="_blank"
          >
            {t("privacy_policy.part1.1.1.link2")}
          </Link>
          {t("privacy_policy.part1.1.1.text3")}
          <Link
            href={`https://${t("privacy_policy.part1.1.1.link3")}`}
            target="_blank"
          >
            {t("privacy_policy.part1.1.1.link3")}
          </Link>
          {t("privacy_policy.part1.1.1.text4")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part1.1.2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part1.1.3")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part1.1.4")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part1.1.5")}
        </Typography>

        {/* Part 2 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part2.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part2.2.1")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part2.2.2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part2.2.3")}
        </Typography>

        {/* Part 3 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part3.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part3.3.1")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part3.3.2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part3.3.3")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part3.3.4")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part3.3.5")}
        </Typography>

        {/* Part 4 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part4.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part4.4.1")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part4.4.2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part4.4.3")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part4.4.4")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part4.4.5")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part4.4.6.text1")}
          <Link href={`mailto:${t("privacy_policy.part4.4.6.link1")}`}>
            {t("privacy_policy.part4.4.6.link1")}
          </Link>
          {t("privacy_policy.part4.4.6.text2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part4.4.7")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part4.4.8.text1")}
          <Link href={`mailto:${t("privacy_policy.part4.4.8.link1")}`}>
            {t("privacy_policy.part4.4.8.link1")}
          </Link>
          {t("privacy_policy.part4.4.8.text2")}
        </Typography>

        {/* Part 5 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part5.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part5.5.1")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part5.5.2")}
        </Typography>

        {/* Part 6 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part6.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part6.6.1")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part6.6.2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part6.6.3")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part6.6.4")}
        </Typography>

        {/* Part 7 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part7.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part7.7.1")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part7.7.2.text1")}
        </Typography>
        <ul>
          <li>
            {t("privacy_policy.part7.7.2.list.a.text")}
            <ul>
              <li>{t("privacy_policy.part7.7.2.list.a.sublist.1")}</li>
              <li>{t("privacy_policy.part7.7.2.list.a.sublist.2")}</li>
              <li>{t("privacy_policy.part7.7.2.list.a.sublist.3")}</li>
              <li>{t("privacy_policy.part7.7.2.list.a.sublist.4")}</li>
            </ul>
          </li>
          <li>{t("privacy_policy.part7.7.2.list.b")}</li>
          <li>{t("privacy_policy.part7.7.2.list.c")}</li>
          <li>{t("privacy_policy.part7.7.2.list.d")}</li>
        </ul>

        {/* Part 8 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part8.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part8.8.1.text1")}
        </Typography>
        <ul>
          <li>{t("privacy_policy.part8.8.1.list.1")}</li>
          <li>{t("privacy_policy.part8.8.1.list.2")}</li>
          <li>{t("privacy_policy.part8.8.1.list.3")}</li>
        </ul>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part8.8.2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part8.8.3.text1")}
        </Typography>
        <ul>
          <li>{t("privacy_policy.part8.8.3.list.1")}</li>
          <li>{t("privacy_policy.part8.8.3.list.2")}</li>
          <li>{t("privacy_policy.part8.8.3.list.3")}</li>
          <li>{t("privacy_policy.part8.8.3.list.4")}</li>
          <li>{t("privacy_policy.part8.8.3.list.5")}</li>
        </ul>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part8.8.3.text2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part8.8.4")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part8.8.5.text1")}
        </Typography>
        <ul>
          <li>{t("privacy_policy.part8.8.5.list.1")}</li>
        </ul>

        {/* Part 9 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part9.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part9.9.1")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part9.9.2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part9.9.3")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part9.9.4")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part9.9.5")}
        </Typography>

        {/* Part 10 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part10.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part10.10.1")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part10.10.2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part10.10.3")}
        </Typography>

        {/* Part 11 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part11.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part11.11.1.text1")}
        </Typography>
        <ul>
          <li>{t("privacy_policy.part11.11.1.list.1")}</li>
          <li>{t("privacy_policy.part11.11.1.list.2")}</li>
          <li>{t("privacy_policy.part11.11.1.list.3")}</li>
          <li>{t("privacy_policy.part11.11.1.list.4")}</li>
          <li>{t("privacy_policy.part11.11.1.list.5")}</li>
        </ul>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part11.11.2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part11.11.3")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part11.11.4")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part11.11.5")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part11.11.6")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part11.11.7")}
        </Typography>

        {/* Part 12 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part12.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part12.12.1")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part12.12.2")}
        </Typography>

        {/* Part 13 */}
        <Typography variant="h5" gutterBottom>
          {t("privacy_policy.part13.title")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part13.13.1")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part13.13.2")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part13.13.3")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part13.13.4")}
        </Typography>
        <Typography variant="body1" paragraph>
          {t("privacy_policy.part13.13.5")}
        </Typography>

        {/* Footer */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="caption" display="block">
            {t("privacy_policy.part13.footer.text1")}
          </Typography>
          <Typography variant="caption" display="block">
            {t("privacy_policy.part13.footer.text2")}
          </Typography>
          <Typography variant="caption" display="block">
            {t("privacy_policy.part13.footer.text3")}
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
