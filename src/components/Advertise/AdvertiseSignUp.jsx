import React from "react";
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

export default function AdvertiseSignUp() {
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
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
            { name: "Insert", label: "Insert" },
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
                        <MenuItem value="country1">Country 1</MenuItem>
                        <MenuItem value="country2">Country 2</MenuItem>
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
            {t("advertiseSignUp.buttons.submit")}
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
