import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Logo from "../Common/logo";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LoginIndex() {
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        maxWidth: "850px",
        mx: "auto",
        height: "100%",
        minHeight: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: "", md: "40px" },
      }}
    >
      <Grid container>
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            background: "linear-gradient(135deg, #660000, #991111)",
            padding: { xs: "20px", md: "36px" },
            color: "#fff",
            borderRadius: { xs: "0px", md: "20px" },
          }}
        >
          <Logo />

          <Typography
            sx={{ fontSize: { xs: "20px", md: "22px" } }}
            fontWeight="600"
            mt={8}
          >
            {t("login.setupTitle")}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={400}
            sx={{ my: { xs: "20px", md: "36px" } }}
          >
            {t("login.setupDescription")}
          </Typography>

          <Box sx={{ my: { xs: "20px", md: "36px" } }}>
            <Typography fontSize="12px" mb={2}>
              {t("login.feature1")}
            </Typography>
            <Typography fontSize="12px" mb={2}>
              {t("login.feature2")}
            </Typography>
            <Typography fontSize="12px" mb={2}>
              {t("login.feature3")}
            </Typography>
          </Box>

          <Typography fontSize="14px" mt={3} fontWeight={400}>
            {t("login.setupFooter")}
          </Typography>
        </Grid>

        {/* Right Section (Login Form) */}
        <Grid item xs={12} md={7} sx={{ padding: { xs: "20px", md: "36px" } }}>
          <Typography
            fontWeight="600"
            sx={{
              textAlign: "center",
              mb: 3,
              fontSize: { xs: "18px", md: "20px" },
            }}
          >
            {t("login.welcomeTitle")}
          </Typography>

          <Typography
            sx={{
              mb: 3,
              textAlign: "center",
              color: "#6A6A6A",
              fontSize: { xs: "14px", md: "14px" },
              fontWeight: 400,
            }}
          >
            {t("login.loginPrompt")}
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 4 }}>
              <Typography>{t("login.labels.email")}</Typography>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: t("login.errors.email"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: t("login.errors.invalidEmail"),
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder={t("login.placeholders.email")}
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{ mt: 1 }}
                  />
                )}
              />
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography>{t("login.labels.password")}</Typography>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: t("login.errors.password"),
                  minLength: {
                    value: 6,
                    message: t("login.errors.shortPassword"),
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    placeholder={t("login.placeholders.password")}
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    sx={{ mt: 1 }}
                  />
                )}
              />
            </Box>

            {/* Remember Me & Forgot Password */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label={t("login.labels.rememberMe")}
                sx={{ fontSize: "14px" }}
              />
              <Typography
                fontSize="14px"
                sx={{ cursor: "pointer", color: "#BD0000" }}
              >
                {t("login.labels.forgotPassword")}
              </Typography>
            </Box>

            {/* Sign In Button */}
            <Button type="submit" variant="contained" fullWidth>
              {t("login.signInButton")}
            </Button>

            {/* Create New Account */}
            <Link to={"/register"}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mt: 2 }}
              >
                {t("login.createAccount")}
              </Button>
            </Link>

            {/* Divider */}
            <Divider sx={{ my: 3 }}>{t("login.or")}</Divider>

            {/* Social Login Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <Button
                endIcon={<GoogleIcon />}
                variant="contained"
                color="secondary"
              >
                {t("login.continueWithGoogle")}
              </Button>

              <Button
                endIcon={<FacebookIcon />}
                variant="contained"
                color="secondary"
              >
                {t("login.continueWithFacebook")}
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
