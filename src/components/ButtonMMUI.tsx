"use client";

import { ReactNode } from "react";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          width: "328px",
          backgroundColor: "#f87146",
          padding: "10px 0",
          textTransform: "initial",
          ":hover": {
            backgroundColor: "#e26740",
          },
        },
      },
    },
  },
});

const theme_white = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
          color: "#f87146",
          backgroundColor: "#fff",
          padding: "10px 28px",
          textTransform: "initial",
          ":hover": {
            backgroundColor: "#f0f0f0",
          },
        },
      },
    },
  },
});

type ButtonMMUIProps = {
  label: string;
  white?: boolean;

  icon?: ReactNode;
} & LoadingButtonProps;

export default function ButtonMMUI({
  label,
  white,
  icon,
  ...rest
}: ButtonMMUIProps) {
  return (
    <ThemeProvider theme={white ? theme_white : theme}>
      <LoadingButton {...rest} variant="contained" startIcon={icon}>
        {label}
      </LoadingButton>
    </ThemeProvider>
  );
}
