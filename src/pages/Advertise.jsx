import { Box } from "@mui/material";
import React from "react";
import AdvertiseHeader from "../components/Advertise/AdvertiseHeader";
import AdvertiseSignUp from "../components/Advertise/AdvertiseSignUp";

export default function Advertise() {
  return (
    <Box>
      <AdvertiseHeader />
      <AdvertiseSignUp />
    </Box>
  );
}
