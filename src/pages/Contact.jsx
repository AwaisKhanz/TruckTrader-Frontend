import { Box } from "@mui/material";
import React from "react";
import ContactHeader from "../components/Contact/ContactHeader";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <Box>
      <ContactHeader />
      <ContactForm />
    </Box>
  );
}
