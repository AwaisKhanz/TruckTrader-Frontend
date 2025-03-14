import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useToast } from "../Common/toast-component";

export default function ContactDrawer({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (formData) => {
    setLoading(true); // Start loading
    emailjs
      .send(
        "service_9a389ij", // Your EmailJS Service ID
        "template_8hfu2a9", // Your EmailJS Template ID
        {
          to_email: "niels@trucktrader.nl",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message,
        },
        "4a-NTj6xYPJSiNOVi" // Your EmailJS Public Key
      )
      .then(() => {
        showToast("Message sent successfully!", "success");
        reset();
        onClose(); // Close drawer on success
      })
      .catch((error) => {
        showToast("Failed to send message!", "error");
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  return (
    <Drawer
      anchor={isMobile ? "bottom" : "right"}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: "530px" },
          borderRadius: isMobile ? "16px 16px 0 0" : "16px 0 0 16px",
          padding: { xs: "20px", md: "36px" },
          display: "flex",
          flexDirection: "column",
          height: "100%",
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: "white",
          paddingBottom: "16px",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <MailIcon sx={{ color: "#BD0000", fontSize: "24px", mt: "1px" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Contact
            </Typography>
          </Box>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSubmit(sendEmail)}
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          my: { xs: "20px", md: "36px" },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box>
            <Typography>First Name</Typography>
            <TextField
              {...register("firstName", { required: "First Name is required" })}
              placeholder="Enter Your First Name"
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Box>

          <Box>
            <Typography>Last Name</Typography>
            <TextField
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Enter Your Last Name"
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Box>

          <Box>
            <Typography>Email</Typography>
            <TextField
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter Your Email"
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Box>

          <Box>
            <Typography>Phone Number</Typography>
            <TextField
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              placeholder="Enter Your Phone Number"
              fullWidth
              variant="outlined"
              sx={{ mt: 2 }}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
          </Box>

          <Box>
            <Typography>Message</Typography>
            <TextField
              {...register("message", { required: "Message cannot be empty" })}
              placeholder="Write Your Message"
              fullWidth
              multiline
              rows={8}
              variant="outlined"
              sx={{ mt: 2 }}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          </Box>
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            endIcon={<ArrowForwardIcon sx={{ mt: "-1px" }} />}
            sx={{
              backgroundColor: "#BD0000",
              color: "#FFFFFF",
              textTransform: "none",
              padding: "12px",
              fontWeight: "bold",
              borderRadius: "12px",
            }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>

      {/* Footer */}
    </Drawer>
  );
}
