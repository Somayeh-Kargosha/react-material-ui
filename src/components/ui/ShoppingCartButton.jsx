import { useCartContext } from "../../contexts/CartContext";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { Box, Typography } from "@mui/material";

function ShoppinCartButton({ item }) {
  const { decreaseItemQuantity, deleteItem, increaseItemQuantity } =
    useCartContext();

  const { inventory, id, quantity } = item;

  const isDisabled = quantity >= 10 || inventory <= 1;

  function handleDeleteFromCart() {
    const answer = window.confirm("آیا محصول از سبد خرید حذف شود؟");

    if (answer) {
      deleteItem(id);
    }
  }

  return (
    <>
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
            sx={{
              border: "none",
              background: "none",
              color: "#ff5454",
            }}
          >
            <AddOutlinedIcon
              sx={{ fontSize: 18 }}
              onClick={() => increaseItemQuantity(id)}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography color="#ff5454" fontSize={18}>
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
              sx={{
                border: "none",
                background: "none",
                color: "#ff5454",
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

export default ShoppinCartButton;
