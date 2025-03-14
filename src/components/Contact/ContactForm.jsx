import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Phone, AccessTime } from "@mui/icons-material";
import BackgroundImage from "../../assets/Contact/ContactForm/Background.png";
import { useTranslation } from "react-i18next";
import { useToast } from "../Common/toast-component";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const sendEmail = (data) => {
    setLoading(true); // Start loading
    emailjs
      .send(
        "service_9a389ij", // Your EmailJS Service ID
        "template_8hfu2a9", // Your EmailJS Template ID
        {
          to_email: "niels@trucktrader.nl",
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phone,
          message: data.message,
        },
        "4a-NTj6xYPJSiNOVi" // Your EmailJS Public Key
      )
      .then(() => {
        showToast("Message sent successfully!", "success");
        reset(); // Reset form on success
      })
      .catch((error) => {
        showToast("Failed to send message!", "error");
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: { xs: "20px", md: "36px" },
        maxWidth: "90%",
        mx: "auto",
        mt: "36px",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        {/* Form Fields */}
        <Grid item xs={12} md={8}>
          <form onSubmit={handleSubmit(sendEmail)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "First Name is required" }}
                  render={({ field }) => (
                    <Box>
                      <Typography>First Name</Typography>
                      <TextField
                        {...field}
                        placeholder="Enter Your First Name"
                        fullWidth
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                        sx={{ mt: 2 }}
                      />
                    </Box>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Last Name is required" }}
                  render={({ field }) => (
                    <Box>
                      <Typography>Last Name</Typography>
                      <TextField
                        {...field}
                        placeholder="Enter Your Last Name"
                        fullWidth
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                        sx={{ mt: 2 }}
                      />
                    </Box>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <Box>
                      <Typography>Email</Typography>
                      <TextField
                        {...field}
                        placeholder="Enter Your Email"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        sx={{ mt: 2 }}
                      />
                    </Box>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Phone Number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Invalid phone number",
                    },
                  }}
                  render={({ field }) => (
                    <Box>
                      <Typography>Phone Number</Typography>
                      <TextField
                        {...field}
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                        sx={{ mt: 2 }}
                      />
                    </Box>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Message cannot be empty" }}
                  render={({ field }) => (
                    <Box>
                      <Typography>Message</Typography>
                      <TextField
                        {...field}
                        placeholder="Write Your Message"
                        multiline
                        rows={5}
                        fullWidth
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        sx={{ mt: 2 }}
                      />
                    </Box>
                  )}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                mt: "32px",
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ width: { xs: "100%", md: "auto" } }}
                disabled={loading} // Disable button when loading
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  gap: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#808080",
                  }}
                >
                  <AccessTime sx={{ color: "#BD0000" }} />
                  <Typography sx={{ fontSize: "16px", color: "#6A6A6A" }}>
                    Office Hours: 9AM - 5PM
                  </Typography>
                </Box>
              </Box>
            </Box>
          </form>
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={BackgroundImage}
            alt="Contact Us"
            sx={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover",
              display: { xs: "none", md: "block" },
              height: { xs: "383px", md: "100%" },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
