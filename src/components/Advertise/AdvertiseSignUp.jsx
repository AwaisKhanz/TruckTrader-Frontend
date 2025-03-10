import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
  Divider,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import axios from "axios";

export default function AdvertiseSignUp() {
  const { t } = useTranslation();
  const [countries, setCountries] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryList = response.data.map((country) => ({
          code: country.cca2,
          name: country.name.common,
        }));
        setCountries(countryList.sort((a, b) => a.name.localeCompare(b.name)));
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setIsLoading(true);

    // Email to TruckTrader Support (existing template)
    const supportEmailPromise = emailjs.send(
      "service_001nte8", // Your EmailJS Service ID
      "template_rusmobg", // Your existing Template ID for TruckTrader Support
      {
        to_name: "TruckTrader Support",
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        to_email: "niels@trucktrader.nl",
        subscription: data.subscription,
        company: data.company,
        cocNumber: data.cocNumber,
        taxId: data.taxId,
        firstName: data.firstName,
        lastName: data.lastName,
        street: data.street,
        streetNumber: data.streetNumber,
        country: data.country,
        city: data.city,
        phoneNumber: data.phoneNumber,
        email: data.email,
        zipCode: data.zipCode,
        bank: data.bank,
      },
      "RVteankGgD0A41mdj" // Your EmailJS User ID
    );

    // Confirmation email to the user (new template)
    const userEmailPromise = emailjs.send(
      "service_001nte8", // Your EmailJS Service ID
      "template_002ia7h", // New Template ID for user confirmation (create this in EmailJS)
      {
        firstName: data.firstName,
        email: data.email, // Send to the user's email
      },
      "RVteankGgD0A41mdj" // Your EmailJS User ID
    );

    // Handle both email promises
    Promise.all([supportEmailPromise, userEmailPromise])
      .then((responses) => {
        alert("Emails sent successfully!");
        console.log("Support Email response:", responses[0]);
        console.log("User Email response:", responses[1]);
        reset(); // Reset form after success
      })
      .catch((error) => {
        alert("Error sending emails!");
        console.error("Email error:", error);
      })
      .finally(() => {
        setIsLoading(false);
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
        my: { xs: "26px", md: "56px" },
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "600", fontSize: { xs: "20", md: "24px" } }}
      >
        {t("advertiseSignUp.title")}
      </Typography>
      <Divider sx={{ background: "#E6E6E6", my: { xs: "20px", md: "36px" } }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {/* Subscription */}
          <Grid item xs={12} md={6}>
            <Controller
              name="subscription"
              control={control}
              defaultValue=""
              rules={{ required: t("advertiseSignUp.errors.subscription") }}
              render={({ field }) => (
                <Box>
                  <Typography>
                    {t("advertiseSignUp.labels.subscription")}
                  </Typography>
                  <TextField
                    {...field}
                    select
                    placeholder={t("advertiseSignUp.placeholders.subscription")}
                    fullWidth
                    error={!!errors.subscription}
                    helperText={errors.subscription?.message}
                    sx={{ mt: 2 }}
                  >
                    <MenuItem value="basic">
                      {t("advertiseSignUp.options.basic")}
                    </MenuItem>
                    <MenuItem value="premium">
                      {t("advertiseSignUp.options.premium")}
                    </MenuItem>
                  </TextField>
                </Box>
              )}
            />
          </Grid>

          {/* Company */}
          <Grid item xs={12} md={6}>
            <Controller
              name="company"
              control={control}
              defaultValue=""
              rules={{ required: t("advertiseSignUp.errors.company") }}
              render={({ field }) => (
                <Box>
                  <Typography>{t("advertiseSignUp.labels.company")}</Typography>
                  <TextField
                    {...field}
                    placeholder={t("advertiseSignUp.placeholders.company")}
                    fullWidth
                    error={!!errors.company}
                    helperText={errors.company?.message}
                    sx={{ mt: 2 }}
                  />
                </Box>
              )}
            />
          </Grid>

          {/* Rest of Fields */}
          {[
            { name: "cocNumber", label: "cocNumber" },
            { name: "taxId", label: "TaxId" },
            { name: "firstName", label: "firstName" },
            { name: "lastName", label: "lastName" },
            { name: "street", label: "street" },
            { name: "streetNumber", label: "streetNumber" },
            { name: "country", label: "country", isSelect: true },
            { name: "city", label: "city" },
            { name: "phoneNumber", label: "phoneNumber" },
            { name: "email", label: "email" },
            { name: "zipCode", label: "zipCode" },
            { name: "bank", label: "bank" },
          ].map((field) => (
            <Grid item xs={12} md={6} key={field.name}>
              <Controller
                name={field.name}
                control={control}
                defaultValue=""
                rules={{
                  required: t(`advertiseSignUp.errors.${field.label}`),
                }}
                render={({ field: inputField }) => (
                  <Box>
                    <Typography>
                      {t(`advertiseSignUp.labels.${field.label}`)}
                    </Typography>
                    {field.isSelect ? (
                      <TextField
                        {...inputField}
                        select
                        fullWidth
                        placeholder={t(
                          `advertiseSignUp.placeholders.${field.label}`
                        )}
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message}
                        sx={{ mt: 2 }}
                      >
                        {countries.map((country) => (
                          <MenuItem key={country.code} value={country.name}>
                            {country.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    ) : (
                      <TextField
                        {...inputField}
                        placeholder={t(
                          `advertiseSignUp.placeholders.${field.label}`
                        )}
                        fullWidth
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message}
                        sx={{ mt: 2 }}
                      />
                    )}
                  </Box>
                )}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "end" }}>
          <Button type="submit" variant="contained">
            {isloading ? "Loading..." : t("advertiseSignUp.buttons.submit")}
          </Button>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => reset()}
          >
            {t("advertiseSignUp.buttons.reset")}
          </Button>
        </Box>
      </form>
    </Box>
  );
}
