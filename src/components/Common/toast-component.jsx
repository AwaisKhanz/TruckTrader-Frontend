"use client";

import React, { useState, forwardRef, useEffect } from "react";
import { Snackbar, Box, Typography, IconButton, Paper } from "@mui/material";
import {
  CheckCircle as SuccessIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

// Toast context to manage toasts globally
export const ToastContext = React.createContext({
  showToast: (message, type) => {},
});

// Custom styled toast component
const ToastContent = forwardRef(function ToastContent(props, ref) {
  const { message, type, onClose } = props;

  // Define icon and color based on type
  let icon = <InfoIcon />;
  let bgColor = "#0288D1"; // Default to info blue
  const textColor = "#FFFFFF";

  switch (type) {
    case "success":
      icon = <SuccessIcon />;
      bgColor = "#2E7D32"; // Green for success
      break;
    case "error":
      icon = <ErrorIcon />;
      bgColor = "#BD0000"; // Theme color for error
      break;
    case "warning":
      icon = <WarningIcon />;
      bgColor = "#F9A825"; // Amber for warning
      break;
    case "info":
      icon = <InfoIcon />;
      bgColor = "#0288D1"; // Blue for info
      break;
    default:
      break;
  }

  return (
    <Paper
      ref={ref}
      elevation={6}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "12px 16px",
        borderRadius: "8px",
        backgroundColor: bgColor,
        color: textColor,
        minWidth: "300px",
        maxWidth: "400px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box sx={{ mr: 1.5, display: "flex", alignItems: "center" }}>{icon}</Box>
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {message}
      </Typography>
      <IconButton
        size="small"
        color="inherit"
        onClick={onClose}
        sx={{ ml: 1, p: 0.5 }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
});

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [activeToast, setActiveToast] = useState(null);
  const [open, setOpen] = useState(false);

  // Process toast queue
  useEffect(() => {
    if (toasts.length > 0 && !activeToast) {
      setActiveToast(toasts[0]);
      setOpen(true);
      setToasts((prev) => prev.slice(1));
    }
  }, [toasts, activeToast]);

  const showToast = (message, type = "info") => {
    const newToast = {
      id: Date.now(),
      message,
      type,
    };

    setToasts((prev) => [...prev, newToast]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setActiveToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {activeToast && (
        <Snackbar
          key={activeToast.id}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          TransitionProps={{ onExited: handleExited }}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{ mt: 2 }}
        >
          <ToastContent
            message={activeToast.message}
            type={activeToast.type}
            onClose={handleClose}
          />
        </Snackbar>
      )}
    </ToastContext.Provider>
  );
};

// Custom hook to use the toast
export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
