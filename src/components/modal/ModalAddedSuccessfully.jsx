import { Link as RouterLink } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Alert, Button, Link, Typography } from "@mui/material";

function ModalAddedSuccessfully({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Alert
          onClose={() => setOpen(false)}
          sx={{
            position: "absolute",
            fontSize: 15,
            textAlign: "center",
            backgroundColor: "#ffffff",
            color: "primary.dark",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textWrap: "nowrap",
          }}
        >
          این کالا به سبد خرید اضافه شد!
          <Link component={RouterLink} to="/shoppingcart">
            <Button
              variant="contained"
              color="secondary"
              sx={{
                display: "block",
                my: 4,
                py: 1,
                px: 4,
                width: 200,
                textWrap: "nowrap",
              }}
            >
              <Typography fontSize={14} color="#fff">
                مشاهده سبد خرید
              </Typography>
            </Button>
          </Link>
        </Alert>
      </Fade>
    </Modal>
  );
}

export default ModalAddedSuccessfully;
