import { useCartContext } from "../../contexts/CartContext";
import { FormatPrice } from "../../utils/helpers";
import EmptyCart from "../ui/EmptyCart";

import ShoppingCartItem from "../ui/ShoppingCartItem";
import { Grid, Box, Button, Typography, Paper } from "@mui/material";

function ShoppingCart() {
  const { totalCartQuantity, cart } = useCartContext();
  const totalItemPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalCartPriceDiscount = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity -
      (item.price * item.quantity * item.discount) / 100,
    0
  );
  const totalCartPrice = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity -
      (item.price * item.quantity -
        (item.price * item.quantity * item.discount) / 100),
    0
  );

  if (!cart.length) return <EmptyCart />;
  return (
    <Box sx={{ px: { lg: 10, md: 6, sm: 6, xs: 1 }, py: 20 }}>
      <Grid container spacing={{ sm: 2 }}>
        <Grid item lg={8.5} md={7.5} xs={12}>
          <Paper
            variant="outlined"
            sx={{ borderRadius: 2, border: 1, borderColor: "#ededed" }}
          >
            <Typography fontSize={16} padding={3} color="#111">
              سبد خرید شما
            </Typography>
            <Typography fontSize={13} paddingX={3}>
              {`${totalCartQuantity} کالا`}
            </Typography>
            {cart.map((item) => (
              <ShoppingCartItem item={item} key={item.id} />
            ))}
          </Paper>
        </Grid>

        <Grid item lg={3.5} md={4.5} xs={12}>
          <Paper
            variant="outlined"
            sx={{ borderRadius: 2, border: 1, borderColor: "#e0e0e0" }}
          >
            <Box padding={3}>
              <Box display="flex" justifyContent="space-between">
                <Typography fontSize={15} color="#393939">
                  {`قیمت کالاها (${totalCartQuantity})`}
                </Typography>
                <Typography fontSize={15} color="#393939">
                  {FormatPrice(totalItemPrice)}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" marginY={2}>
                <Typography fontSize={15} color="#696969">
                  جمع سبد خرید
                </Typography>
                <Typography fontSize={15} color="#696969">
                  {FormatPrice(totalCartPriceDiscount)}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography fontSize={15} color="#ff2727">
                  سود شما از خرید
                </Typography>
                <Typography fontSize={15} color="#ff2727">
                  {FormatPrice(totalCartPrice)}
                </Typography>
              </Box>
              <Button
                variant="contained"
                disableElevation="false"
                sx={{
                  width: 1 / 1,
                  bgcolor: "#e75757",
                  color: "white",
                  mt: 10,
                  py: 1.5,
                  "&:hover": {
                    background: "#e75757",
                  },
                }}
              >
                تایید و تکمیل سفارش
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShoppingCart;
