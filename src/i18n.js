import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Utility to manage localStorage language operations
const languageUtils = {
  getLanguage: () => localStorage.getItem("language") || "en",
  setLanguage: (language) => localStorage.setItem("language", language),
};

// i18n configuration options
const i18nOptions = {
  fallbackLng: "en",
  lng: languageUtils.getLanguage(), // Initialize with stored language or fallback
  backend: {
    loadPath: `${
      import.meta.env.REACT_APP_I18N_BACKEND_PATH || "/locales"
    }/{{lng}}/translation.json`,
  },
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
  detection: {
    order: ["localStorage", "navigator"], // Check localStorage first, then fallback to browser language
    caches: ["localStorage"], // Cache the detected language in localStorage
  },
};

// Initialize i18n
i18n
  .use(Backend) // Load translations from backend
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Initialize react-i18next
  .init(i18nOptions)
  .then(() => console.log("i18n initialized"))
  .catch((error) => console.error("Error initializing i18n:", error));

// Listen for language changes
i18n.on("languageChanged", (lng) => {
  languageUtils.setLanguage(lng);
});

export default i18n;
