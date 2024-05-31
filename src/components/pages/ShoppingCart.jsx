import { useNavigation } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import { FormatPrice } from "../../utils/helpers";
import EmptyCart from "../ui/EmptyCart";

import ShoppingCartItem from "../ui/ShoppingCartItem";
import { Grid, Box, Button, Typography, Paper } from "@mui/material";

function ShoppingCart() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const {
    totalCartQuantity,
    totalDiscountPrice,
    totalInitialPrice,
    totalCartPriceWithDiscount,
    cart,
  } = useCartContext();

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
              {`${totalCartQuantity()} کالا`}
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
                  {`قیمت کالاها (${totalCartQuantity()})`}
                </Typography>
                <Typography fontSize={15} color="#393939">
                  {FormatPrice(totalInitialPrice())}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" marginY={2}>
                <Typography fontSize={15} color="#696969">
                  جمع سبد خرید
                </Typography>
                <Typography fontSize={15} color="#696969">
                  {FormatPrice(totalCartPriceWithDiscount())}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography fontSize={15} color="#ff2727">
                  سود شما از خرید
                </Typography>
                <Typography fontSize={15} color="#ff2727">
                  {FormatPrice(totalDiscountPrice())}
                </Typography>
              </Box>
              <Button
                variant="contained"
                disabled={isLoading}
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
