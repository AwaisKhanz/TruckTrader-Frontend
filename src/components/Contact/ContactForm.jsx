import React from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Phone, AccessTime } from "@mui/icons-material";
import BackgroundImage from "../../assets/Contact/ContactForm/Background.png";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{ required: t("contactForm.errors.firstName") }}
                  render={({ field }) => (
                    <Box>
                      <Typography>
                        {t("contactForm.labels.firstName")}
                      </Typography>
                      <TextField
                        {...field}
                        placeholder={t("contactForm.placeholders.firstName")}
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
                  rules={{ required: t("contactForm.errors.lastName") }}
                  render={({ field }) => (
                    <Box>
                      <Typography>
                        {t("contactForm.labels.lastName")}
                      </Typography>
                      <TextField
                        {...field}
                        placeholder={t("contactForm.placeholders.lastName")}
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
                    required: t("contactForm.errors.email.required"),
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message: t("contactForm.errors.email.invalid"),
                    },
                  }}
                  render={({ field }) => (
                    <Box>
                      <Typography>{t("contactForm.labels.email")}</Typography>
                      <TextField
                        {...field}
                        placeholder={t("contactForm.placeholders.email")}
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
                    required: t("contactForm.errors.phone.required"),
                    pattern: {
                      value: /^[0-9]+$/,
                      message: t("contactForm.errors.phone.invalid"),
                    },
                  }}
                  render={({ field }) => (
                    <Box>
                      <Typography>{t("contactForm.labels.phone")}</Typography>
                      <TextField
                        {...field}
                        placeholder={t("contactForm.placeholders.phone")}
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
                  rules={{ required: t("contactForm.errors.message") }}
                  render={({ field }) => (
                    <Box>
                      <Typography>{t("contactForm.labels.message")}</Typography>
                      <TextField
                        {...field}
                        placeholder={t("contactForm.placeholders.message")}
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
              >
                {t("contactForm.submitButton")}
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
                    {t("contactForm.officeHours")}
                  </Typography>
                </Box>
                {/* <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#808080",
                  }}
                >
                  <Phone sx={{ color: "#BD0000" }} />
                  <Typography sx={{ fontSize: "16px", color: "#6A6A6A" }}>
                    {t("contactForm.phone")}
                  </Typography>
                </Box> */}
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
              height: { xs: "383px", md: "100%" },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
