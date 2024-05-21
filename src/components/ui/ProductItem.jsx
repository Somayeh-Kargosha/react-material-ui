import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import { FormatPrice } from "../../utils/helpers";

function ProductItem({ product }) {
  const { productName, image, price, discount } = product;
  return (
    <Grid item>
      <Paper
        variant="outlined"
        square
        sx={{
          "&:hover": {
            boxShadow: 10,
          },

          width: 360,
          height: 510,
        }}
      >
        <Link component={RouterLink} to="/productdetails">
          <Box component="img" src={image} width="350px" p={5} />
          <Box>
            <Typography variant="body2" color="#415966" px={2}>
              {productName}
            </Typography>
            <Typography variant="subtitle1" p={3}>
              تنها یک عدد در انبار باقی مانده
            </Typography>
            <Typography
              variant="subtitle2"
              color="#415966"
              px={3}
              align="right"
            >
              {FormatPrice(price - discount)}
            </Typography>
            <Typography
              variant="body1"
              component="s"
              px={3}
              display="block"
              align="right"
              py={2}
            >
              {FormatPrice(price)}
            </Typography>
          </Box>
        </Link>
      </Paper>
    </Grid>
  );
}

export default ProductItem;
