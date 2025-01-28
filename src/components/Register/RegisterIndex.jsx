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
  IconButton,
  MenuItem,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Logo from "../Common/logo";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function RegisterIndex() {
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
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
            {t("register.setupTitle")}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={400}
            sx={{ my: { xs: "20px", md: "36px" } }}
          >
            {t("register.setupDescription")}
          </Typography>

          <Box sx={{ my: { xs: "20px", md: "36px" } }}>
            <Typography fontSize="12px" mb={2}>
              {t("register.feature1")}
            </Typography>
            <Typography fontSize="12px" mb={2}>
              {t("register.feature2")}
            </Typography>
            <Typography fontSize="12px" mb={2}>
              {t("register.feature3")}
            </Typography>
          </Box>

          <Typography fontSize="14px" mt={3} fontWeight={400}>
            {t("register.setupFooter")}
          </Typography>
        </Grid>

        {/* Right Section (Register Form) */}
        <Grid item xs={12} md={7} sx={{ padding: { xs: "20px", md: "36px" } }}>
          <Typography
            fontWeight="600"
            sx={{
              textAlign: "center",
              mb: 3,
              fontSize: { xs: "18px", md: "20px" },
            }}
          >
            {t("register.welcomeTitle")}
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 4 }}>
              <Typography>{t("register.labels.email")}</Typography>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: t("register.errors.email"),
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: t("register.errors.invalidEmail"),
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder={t("register.placeholders.email")}
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{ mt: 1 }}
                  />
                )}
              />
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography>{t("register.labels.password")}</Typography>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: t("register.errors.password"),
                  minLength: {
                    value: 6,
                    message: t("register.errors.shortPassword"),
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    placeholder={t("register.placeholders.password")}
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    sx={{ mt: 1 }}
                  />
                )}
              />
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography>{t("register.labels.confirmPassword")}</Typography>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  required: t("register.errors.confirmPassword"),
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    placeholder={t("register.placeholders.confirmPassword")}
                    fullWidth
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    sx={{ mt: 1 }}
                  />
                )}
              />
            </Box>

            {/* Already Have an Account? Login */}
            <Box sx={{ mt: 3, textAlign: "right" }}>
              <Typography>
                {t("login.alreadyHaveAccount")}{" "}
                <Link
                  to="/login"
                  style={{ color: "#BD0000", fontWeight: "600" }}
                >
                  {t("login.loginHere")}
                </Link>
              </Typography>
            </Box>

            {/* Sign Up Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: { xs: "16px", md: "36px" } }}
            >
              {t("register.signupButton")}
            </Button>

            <Divider sx={{ my: 3 }}>{t("register.or")}</Divider>

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
                {t("register.continueWithGoogle")}
              </Button>
              <Button
                endIcon={<FacebookIcon />}
                variant="contained"
                color="secondary"
              >
                {t("register.continueWithFacebook")}
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
