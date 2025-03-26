import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import "./index.css";
import theme from "./theme/theme";
import { BrowserRouter as Router } from "react-router-dom";
// import AuthProvider from "./context/AuthContext";
import "./i18n";
import { ToastProvider } from "./components/Common/toast-component";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ToastProvider>
    </ThemeProvider>
  </Router>
);
