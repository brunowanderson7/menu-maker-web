import Alert, { AlertProps } from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

type AlertMMUIProps = {
  message: string;
  severity: AlertProps["severity"];
};

export default function AlertMMUI({ message, severity }: AlertMMUIProps) {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {message}
      </Alert>
    </Collapse>
  );
}
