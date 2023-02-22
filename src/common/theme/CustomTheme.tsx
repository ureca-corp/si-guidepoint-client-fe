import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useMemo, useState } from "react";

export const lightTheme = createTheme({
  shape: { borderRadius: 8 },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "0px",
          "& .MuiInputBase-root": {
            padding: "0px",
            width: "100%",
            height: "100%",
          },
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },

          input: {
            // placeholder
            "::placeholder": {},
          },

          textarea: {},
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          height: "36px",

          // default
          "&.MuiOutlinedInput-root": {
            border: "1px solid #CCCCCC",
            borderRadius: "8px",

            "& input": {
              padding: "8px 10px",
              height: "unset",
            },

            "& fieldset": {
              border: "none",
            },

            "& textarea": {
              fontSize: "14px",
            },
          },

          // focused
          "&.Mui-error": {
            border: "1px solid transparent",
          },
          // focused
          "&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
            border: "1px solid transparent",
          },
          // error
          "&.Mui-error fieldset.MuiOutlinedInput-notchedOutline": {
            border: "1px solid #D84849",
          },
        },

        input: {
          fontSize: "14px",
          lineHeight: "20px",

          // placeholder
          "::placeholder": {
            color: "#A4A4A4",
            opacity: 1,
            fontSize: "14px",
          },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: "#A4A4A4",
        },
      },
    },
  },
});

export enum ThemeTypes {
  Light,
  Dark,
}

export const findTheme = (theme: ThemeTypes) => {
  switch (theme) {
    default:
      return lightTheme;
  }
};

export const useThemeHook = () => {
  const [theme, setTheme] = useState(findTheme(ThemeTypes.Light));
  const palette = theme.palette;

  const colorMode = useMemo(
    () => (theme: ThemeTypes) => setTheme(findTheme(theme)),
    []
  );

  return {
    theme,
    palette,
    colorMode,
  };
};
