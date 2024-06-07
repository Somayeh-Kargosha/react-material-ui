import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Alert, Box, Button } from "@mui/material";
import { useCartContext } from "../../contexts/CartContext";

function ModalConfirmCartItemDelete({ open, setOpen, id }) {
  const { deleteItem } = useCartContext();
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
          severity="warning"
          onClose={() => setOpen(false)}
          sx={{
            position: "absolute",
            fontSize: 18,
            textAlign: "center",
            backgroundColor: "#ffffff",
            color: "primary.dark",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textWrap: "nowrap",
            p: 4,
            pb: 5,
          }}
        >
          آیا این محصول از سبد خرید حذف شود؟
          <Box sx={{ display: "block", mt: 4 }}>
            <Button
              onClick={handleClose}
              variant="contained"
              color="secondary"
              sx={{
                py: 1,
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => deleteItem(id)}
              variant="contained"
              color="secondary"
              sx={{
                py: 1,
                ml: 4,
                px: 4,
              }}
            >
              OK
            </Button>
          </Box>
        </Alert>
      </Fade>
    </Modal>
  );
}

export default ModalConfirmCartItemDelete;
