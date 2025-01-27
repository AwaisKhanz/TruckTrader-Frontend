import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "16px",
          padding: "16px",
          height: "48px",
          fontSize: "16px",
          backgroundColor: "#BD0000",
          color: "#FFFFFF",
          transition: "all 0.3s ease",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",

          "&:hover": {
            // backgroundColor: "#B71C1C",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          },
          "&:active": {
            // backgroundColor: "#9A0007",
            // boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)",
          },
          "&:disabled": {
            // backgroundColor: "#E0E0E0",
            // color: "#9E9E9E",
          },
          "@media (max-width: 600px)": {
            fontSize: "12px",
            height: "36px",
            padding: "12px",
            borderRadius: "12px",
          },
        },
        containedPrimary: {
          backgroundColor: "#BD0000",
          // "&:hover": {
          //   backgroundColor: "#BD0000",
          // },
        },
        containedSecondary: {
          backgroundColor: "white",
          color: "black",
        },

        outlined: {
          borderColor: "#BD0000",
          color: "#BD0000",
          // "&:hover": {
          //   borderColor: "#BD0000",
          //   backgroundColor: "rgba(211, 47, 47, 0.1)",
          // },
        },
        text: {
          color: "#BD0000",
          // "&:hover": {
          //   backgroundColor: "rgba(211, 47, 47, 0.1)",
          // },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#F6F6F6",
          borderRadius: "16px",
          "&:focus-within": {
            backgroundColor: "#ECECEC",
          },
        },

        notchedOutline: {
          border: "none",
        },
        "&.Mui-focused fieldset": {
          borderBottom: "2px solid #BD0000",
        },
        input: {
          "&::placeholder": {
            fontSize: "12px",
            color: "#6A6A6A",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused": {
              backgroundColor: "#ECECEC",
            },
            "& fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              borderBottom: "2px solid #BD0000",
            },
            input: {
              "&::placeholder": {
                fontSize: "12px",
                color: "#6A6A6A",
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
