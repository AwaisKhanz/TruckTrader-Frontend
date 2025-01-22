import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "20px",
          padding: "16px",
          fontSize: "16px",
          backgroundColor: "#BD0000",
          color: "#FFFFFF",
          transition: "all 0.3s ease",

          "&:hover": {
            // backgroundColor: "#B71C1C",
          },
          "&:active": {
            // backgroundColor: "#9A0007",
            // boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)",
          },
          "&:disabled": {
            // backgroundColor: "#E0E0E0",
            // color: "#9E9E9E",
          },
        },
        containedPrimary: {
          backgroundColor: "#BD0000",
          "&:hover": {
            backgroundColor: "#BD0000",
          },
        },
        containedSecondary: {
          backgroundColor: "white",
          color: "black",
        },

        outlined: {
          borderColor: "#BD0000",
          color: "#BD0000",
          "&:hover": {
            borderColor: "#BD0000",
            backgroundColor: "rgba(211, 47, 47, 0.1)",
          },
        },
        text: {
          color: "#BD0000",
          "&:hover": {
            backgroundColor: "rgba(211, 47, 47, 0.1)",
          },
        },
      },
    },
  },
});

export default theme;
