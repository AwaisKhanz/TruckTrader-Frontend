import React from "react";
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

export default function ContactDrawer({ open, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          my: { xs: "20px", md: "36px" },
        }}
      >
        <Box>
          <Typography>First Name</Typography>
          <TextField
            placeholder="Enter Your First Name"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Box>
        <Box>
          <Typography>Last Name</Typography>
          <TextField
            placeholder="Enter Your Last Name"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Box>
        <Box>
          <Typography>Email</Typography>
          <TextField
            placeholder="Enter Your Email"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Box>
        <Box>
          <Typography>Phone Number</Typography>
          <TextField
            placeholder="Enter Your Phone Number"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Box>
        <Box>
          <Typography>Message</Typography>
          <TextField
            placeholder="Write Your Message"
            fullWidth
            multiline
            rows={8}
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          zIndex: 1,
          backgroundColor: "white",
        }}
      >
        <Button
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
        >
          Send Message
        </Button>
      </Box>
    </Drawer>
  );
}
