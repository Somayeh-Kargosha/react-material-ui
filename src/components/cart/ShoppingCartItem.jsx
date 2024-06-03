import { FormatPrice } from "../../utils/helpers";
import ShoppingCartButton from "./ShoppingCartButton";

import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import { Box, Grid, Typography } from "@mui/material";

function ShoppingCartItem({ item }) {
  const {
    productName,
    imageName,
    price,
    discount,
    fileImageName,
    inventory,
    quantity,
  } = item;

  const totalPrice = price * quantity;
  const totalDiscount =
    totalPrice - (totalPrice - (totalPrice * discount) / 100);
  const totalPriceWithDiscount = totalPrice - (totalPrice * discount) / 100;

  return (
    <Grid
      container
      marginTop={2}
      sx={{
        borderBottom: 0.5,
        borderColor: "#e0e0e0",
        "&:last-child": {
          borderBottom: "none",
        },
      }}
    >
      <Grid item sm={4} xs={12}>
        <Box
          component="img"
          src={`src/assets/img/${fileImageName}/${imageName}`}
          width="140px"
        />
      </Grid>
      <Grid item sm={8} xs={12}>
        <Box marginLeft={1}>
          <Typography variant="h6">{productName}</Typography>
          <Box display="flex" alignItems="center" marginY={3} marginLeft={0.5}>
            <Box
              component="span"
              sx={{
                bgcolor: "red",
                p: 1.3,
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            <Typography fontSize={15} paddingX={1}>
              قرمز
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginY={3}>
            <GppGoodOutlinedIcon sx={{ color: "#a7a7a7" }} />
            <Typography fontSize={15} paddingX={1}>
              گارانتی 24 ماهه پارس خزر
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item sm={4} xs={6}>
        <ShoppingCartButton item={item} />
      </Grid>
      <Grid item sm={8} xs={6}>
        <Box marginY={3} marginX={1}>
          <Typography variant="subtitle1" marginY={1}>
            {`${FormatPrice(totalDiscount)} تخفیف`}
          </Typography>
          <Typography variant="body2" fontSize={18}>
            {FormatPrice(totalPriceWithDiscount)}
          </Typography>
          <Typography variant="subtitle1" marginY={1}>
            {inventory <= 1 ? (
              <Typography variant="subtitle1" p={3}>
                تنها یک عدد در انبار باقی مانده
              </Typography>
            ) : (
              <Typography variant="body1" p={3} fontSize={11}>
                موجود در انبار دیجی کالا
              </Typography>
            )}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ShoppingCartItem;
