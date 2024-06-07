import { useCartContext } from "../../contexts/CartContext";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Box, Typography } from "@mui/material";
import ModalConfirmCartItemDelete from "../modal/ModalConfirmCartItemDelete";
import { useState } from "react";

function ShoppingCartButton({ item }) {
  const { decreaseItemQuantity, increaseItemQuantity } = useCartContext();
  const [openModal, setOpenModal] = useState(false);

  const { inventory, id, quantity } = item;

  const isDisabled = quantity >= 10 || inventory <= 1;

  function handleDeleteFromCart() {
    setOpenModal(true);
    // const answer = window.confirm("آیا محصول از سبد خرید حذف شود؟");
    // if (answer) {
    //   deleteItem(id);
    // }
  }

  return (
    <>
      (
      {openModal && (
        <ModalConfirmCartItemDelete
          open={openModal}
          setOpen={setOpenModal}
          id={id}
        />
      )}
      )
      <Box marginX={3} marginY={3}>
        <Box
          component="span"
          display="flex"
          sx={{
            border: 1,
            borderColor: "#e4e4e4",
            width: 100,
            borderRadius: 2,
            justifyContent: "space-around",
            alignItems: "center",
            py: 0.3,
            height: 48,
          }}
        >
          <Box
            component="button"
            disabled={isDisabled}
            color="secondary.main"
            sx={{
              border: "none",
              background: "none",
            }}
          >
            <AddOutlinedIcon
              sx={{ fontSize: 18 }}
              onClick={() => increaseItemQuantity(id)}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography color="secondary" fontSize={18}>
              {quantity}
            </Typography>
            {isDisabled && (
              <Typography fontSize={12} color="#cccccc">
                حداکثر
              </Typography>
            )}
          </Box>
          {quantity <= 1 ? (
            <Box
              component="button"
              onClick={handleDeleteFromCart}
              color="secondary.main"
              sx={{
                border: "none",
                background: "none",
              }}
            >
              <DeleteOutlinedIcon sx={{ fontSize: 22 }} />
            </Box>
          ) : (
            <Box
              component="button"
              onClick={() => decreaseItemQuantity(id)}
              sx={{
                border: "none",
                background: "none",
                color: "#ff5454",
              }}
            >
              <RemoveOutlinedIcon sx={{ fontSize: 22 }} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default ShoppingCartButton;
