import React, { useImperativeHandle } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AlertS(props, ref) {
  const [open, setOpen] = React.useState(false);

  useImperativeHandle(ref, () => {
    return {
      openAlert: () => setOpen(true),
    };
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if (props.data.size !== null && props.data.color !== null) {
    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%", fontSize: "1em", padding: "1em 2em" }}
          >
            Ürün Sepete Eklenmiştir...
          </Alert>
        </Snackbar>
      </Stack>
    );
  } else {
    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            sx={{ width: "100%", fontSize: "1em", padding: "1em 2em" }}
            onClose={handleClose}
            severity="error"
          >
            Lütfen Beden ve Renk Seçin...
          </Alert>
        </Snackbar>
      </Stack>
    );
  }
}

export default React.forwardRef(AlertS);
