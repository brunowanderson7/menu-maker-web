"use client";

import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // Some CSS
        },
      },
    },
  },
});

export type InputMMUIProps = {
  label: string;
  id: string;

  error?: boolean;
};

export default function InputMMUI({ label, id, error }: InputMMUIProps) {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        sx={{
          width: 328,
        }}
        id={id}
        name={id}
        label={label}
        variant="outlined"
        error={error}
        required
      />
    </ThemeProvider>
  );
}
