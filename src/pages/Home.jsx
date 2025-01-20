import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("");
  return <Box>{t("Homepage.test")}</Box>;
}
